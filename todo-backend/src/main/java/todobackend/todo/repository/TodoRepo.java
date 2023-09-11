package todobackend.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import todobackend.todo.model.Todo;

import java.util.List;

public interface TodoRepo extends JpaRepository<Todo, Integer> {
    List<Todo> findAll();
}
