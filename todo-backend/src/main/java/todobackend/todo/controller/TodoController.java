package todobackend.todo.controller;

import org.springframework.web.bind.annotation.*;
import todobackend.todo.model.Todo;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(
        origins = "http://localhost:5173",
        methods = {RequestMethod.GET, RequestMethod.POST},
        allowedHeaders = {"Content-Type", "Authorization"}
)
public class TodoController {

    private List<Todo> todos = List.of(
            new Todo(1, "First", "Clean you room"),
            new Todo(2, "Second", "Shop clothes"),
            new Todo(3, "Third", "Make dinner")
    );

    @ResponseBody
    @GetMapping("/fetch-todos")
    public List<Todo> fetchTodoData() {
        return todos;
    }

    @PostMapping("/push-todo")
    public String pushTodoData(/* Data inn */) {
        return "pushed todo to db";
    }

    @PutMapping("update-todo")
    public String updateTodoData(/* Data inn */) {
        return "updated todo in db";
    }

}
