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
@RequestMapping("/api")
@CrossOrigin(
        origins = {"http://localhost:5173","http://localhost:8080"},
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
        allowedHeaders = {"Content-Type", "Authorization"}
)
public class TodoController {

    @Autowired
    private TodoService todoService;

    @ResponseBody
    @GetMapping("/fetch-todos")
    public List<Todo> fetchTodoData() {
        return todoService.getAllTodos();
    }

    @ResponseBody
    @PostMapping("/push-todo")
    public ResponseEntity<String> pushTodoData(@RequestBody Todo todo) {
        return ResponseEntity.ok("TODO added successfully");
    }

    @ResponseBody
    @PutMapping("/update-todo/{id}")
    public ResponseEntity<String> updateTodoData(@PathVariable int id, @RequestBody Todo updatedTodo) {
        return ResponseEntity.ok("TODO Updated successfully");
    }

    @ResponseBody
    @DeleteMapping("/delete-todo/{id}")
    public ResponseEntity<String> deleteTodoData(@PathVariable int id) {
        return ResponseEntity.ok("TODO Deleted successfully");
    }

}
