package todobackend.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import todobackend.todo.model.Todo;
import todobackend.todo.service.TodoService;

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

    @ResponseBody
    @GetMapping("/get-all")         // Denne må beskyttes
    public List<Todo> fetchTodoData() {
        return todoService.getAllTodos();
    }

    @ResponseBody
    @GetMapping("/get/{userid)")         // Denne må beskyttes
    public List<Todo> fetchTodoData(@PathVariable int userid) {
        return todoService.getAllTodos();
    }

    @ResponseBody
    @PostMapping("/create/{userid}")
    public ResponseEntity<String> pushTodoData(@RequestBody Todo todo, @PathVariable int userid) {
        return ResponseEntity.ok("TODO added successfully");
    }

    @ResponseBody
    @PutMapping("/update/{todoid}")
    public ResponseEntity<String> updateTodoData(@PathVariable int todoid, @RequestBody Todo updatedTodo) {
        return ResponseEntity.ok("TODO Updated successfully");
    }

    @ResponseBody
    @DeleteMapping("/delete/{todoid}")
    public ResponseEntity<String> deleteTodoData(@PathVariable int todoid) {
        return ResponseEntity.ok("TODO Deleted successfully");
    }

}
