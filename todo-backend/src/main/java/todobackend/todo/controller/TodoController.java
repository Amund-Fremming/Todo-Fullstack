package todobackend.todo.controller;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import todobackend.todo.model.Todo;
import todobackend.todo.model.User;
import todobackend.todo.service.TodoService;
import todobackend.todo.service.UserService;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/todo")
@CrossOrigin(
        origins = {"http://localhost:5173","http://localhost:8080"},
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
        allowedHeaders = {"Content-Type", "Authorization"}
)
public class TodoController {

    @Autowired
    private TodoService todoService;

    @Autowired
    private UserService userService;

    @ResponseBody
    @GetMapping("/get-all")         
    public ResponseEntity<List<Todo>> fetchTodoData() {
        try {
            return ResponseEntity.ok(todoService.getAllTodos());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @ResponseBody
    @GetMapping("/get/{userid}")
    public ResponseEntity<List<Todo>> getUserTodos(@PathVariable int userid) {
        try {
            List<Todo> userTodos = todoService.getAllUserTodo(userid);
            if(userTodos == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }

            return ResponseEntity.ok(userTodos);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @ResponseBody
    @PostMapping("/create/{userid}")
    public ResponseEntity<Todo> createTodo(@RequestBody Todo todo, @PathVariable int userid) {
        try {
            User user = userService.getUser(userid);
            if(user == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
            todo.setUser(user);
            Todo createdTodo = todoService.createTodo(todo);
            return ResponseEntity.ok(createdTodo);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @ResponseBody
    @PutMapping("/update/{todoid}")
    public ResponseEntity<Todo> updateTodoData(@PathVariable int todoid, @RequestBody Todo updatedTodo) {
        try {
            Todo todo = todoService.updateTodo(todoid, updatedTodo);
            if(todo == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }

            return ResponseEntity.ok(todo);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @ResponseBody
    @DeleteMapping("/delete/{todoid}")
    public ResponseEntity<Todo> deleteTodoData(@PathVariable int todoid) {
        try {
            Todo todo = todoService.deleteTodo(todoid);
            if(todo == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }

            return ResponseEntity.ok(todo);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
