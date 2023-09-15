package todobackend.todo.controller;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import todobackend.todo.model.User;
import todobackend.todo.service.UserService;
import todobackend.todo.util.PasswordHashAndSalt;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(
        origins = {"http://localhost:5173","http://localhost:8080"},
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE},
        allowedHeaders = {"Content-Type", "Authorization"}
)
public class UserController {

    @Autowired
    private UserService userService;

    @ResponseBody
    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody User user) {
        try {
            User validateUser = userService.getUser(user.getUsername());
            if(validateUser == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(user);
            }

            String validateUserSalt = validateUser.getPasswordsalt();
            String validateUserHash = validateUser.getPassword();
            boolean valid = PasswordHashAndSalt.validerMedSalt(user.getPassword(), validateUserSalt, validateUserHash);
            if(!valid) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(user);
            }
            return ResponseEntity.ok(validateUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @ResponseBody
    @GetMapping("/get-all")
    public ResponseEntity<List<User>> getAllUsers() {
       try {
           return ResponseEntity.ok(userService.getAllUsers());
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
       }
    }

    @ResponseBody
    @GetMapping("/get/{userid}")
    public ResponseEntity<User> getUser(@PathVariable Integer userid) {
        try {
            User user = userService.getUser(userid);
            if(user != null) {
                return ResponseEntity.ok(user);
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @ResponseBody
    @PostMapping("/create")
    public ResponseEntity<User> createNewUser(@RequestBody User user) {
        try {
            User userFromDB = userService.getUser(user.getUsername());
            if(userFromDB != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
            }

            String salt = PasswordHashAndSalt.genererTilfeldigSalt();
            String passwordHash = PasswordHashAndSalt.hashMedSalt(user.getPassword(), salt);

            user.setPasswordsalt(salt);
            user.setPassword(passwordHash);
            userService.createUser(user);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(user);
        }
    }

    @ResponseBody
    @DeleteMapping("/delete/{userid}")
    public ResponseEntity<User> deleteUser(@PathVariable int userid) {
        try {
            User userFromDB = userService.getUser(userid);
            if(userFromDB == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
            userService.deleteUser(userid);
            return ResponseEntity.ok(userFromDB);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
