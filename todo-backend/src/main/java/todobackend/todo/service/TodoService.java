package todobackend.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import todobackend.todo.model.Todo;
import todobackend.todo.model.User;
import todobackend.todo.repository.TodoRepo;
import todobackend.todo.repository.UserRepo;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepo todoRepo;

    @Autowired
    private UserRepo userRepo;

    public List<Todo> getAllTodos() {
        return todoRepo.findAll();
    }

    public List<Todo> getAllUserTodo(int userid) {
        User user = userRepo.findUserByUserid(userid);
        if(user == null) return null;
        return user.getTodos();
    }

    public Todo createTodo(Todo todo) {     // Returnerer denne Todo object?
        return todoRepo.save(todo);
    }

    public Todo updateTodo(int todoid, Todo updatedTodo) {
        Todo todo = todoRepo.findByTodoid(todoid);
        if(todo == null) return null;

        todo.setTodoheader(updatedTodo.getTodoheader());
        todo.setTodoinfo(updatedTodo.getTodoinfo());
        todoRepo.save(todo);
        return todo;
    }

    public Todo deleteTodo(int todoid) {
        Todo todo = todoRepo.findByTodoid(todoid);
        if(todo == null) return null;
        todoRepo.deleteById(todoid);
        return todo;
    }

}
