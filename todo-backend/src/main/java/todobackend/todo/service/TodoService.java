package todobackend.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import todobackend.todo.model.Todo;
import todobackend.todo.repository.TodoRepo;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepo todoRepo;

    public List<Todo> getAllTodos() {
        return todoRepo.findAll();
    }

    public Todo getTodo(int todoid) {
        // TODO
        return null;
    }

    public Todo createTodo(Todo todo) {     // Returnerer denne Todo object?
        return todoRepo.save(todo);
    }

    public Todo updateTodo(int todoid, Todo updatedTodo) {
        // TODO
        return null;
    }

    public void deleteTodo(int todoid) {
        todoRepo.deleteById(todoid);
    }

}
