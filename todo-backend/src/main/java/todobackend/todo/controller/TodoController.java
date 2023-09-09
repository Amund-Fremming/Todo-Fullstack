package todobackend.todo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import todobackend.todo.model.Todo;

import java.util.ArrayList;
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

    private List<Todo> todos = new ArrayList<Todo>();

    @ResponseBody
    @GetMapping("/fetch-todos")
    public List<Todo> fetchTodoData() {
        return todos;
    }

    @ResponseBody
    @PostMapping("/push-todo")
    public ResponseEntity<String> pushTodoData(@RequestBody Todo todo) {
        todos.add(todo);
        return ResponseEntity.ok("TODO added successfully");
    }

    @ResponseBody
    @PutMapping("/update-todo/{id}")
    public ResponseEntity<String> updateTodoData(@PathVariable int id, @RequestBody Todo updatedTodo) {
        System.out.println(id);
        todos.stream().forEach(todo -> {
            if(todo != null && todo.getTodoid() == id)
                todos.remove(todo);
        });
        todos.add(updatedTodo);
        return ResponseEntity.ok("TODO Updated successfully");
    }

    @ResponseBody
    @DeleteMapping("/delete-todo/{id}")
    public ResponseEntity<String> deleteTodoData(@PathVariable int id) {
        System.out.println(id);
        // Add code
        return ResponseEntity.ok("TODO Deleted successfully");
    }

}
