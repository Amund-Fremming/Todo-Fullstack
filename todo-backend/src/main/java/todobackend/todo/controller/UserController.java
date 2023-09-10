package todobackend.todo.controller;

import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import todobackend.todo.model.User;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(
        origins = {"http://localhost:5173","http://localhost:8080"},
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE},
        allowedHeaders = {"Content-Type", "Authorization"}
)
public class UserController {

    @ResponseBody
    @GetMapping("/get-all-users")
    public List<User> getAllUsers() {
        // Get all users
        return new ArrayList<User>();   // Modify return
    }

    @ResponseBody
    @PostMapping("/post-new-user")
    public ResponseEntity<String> createNewUser(@RequestBody User user) {
        try {
            // Add the new user to the database
            return ResponseEntity.ok("New user added!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add the user.");
        }
    }

    @ResponseBody
    @DeleteMapping("/delete-user/{userid}")
    public ResponseEntity<String> deleteUser(@PathVariable int userid) {
        try {
            // Find and delete user from db
            return ResponseEntity.ok("User deleted.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete the user.");
        }
    }

}
