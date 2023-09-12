package todobackend.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import todobackend.todo.model.User;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Integer> {
    List<User> findAll();
    User findUserByUserid(int userid);
    User findUserByUsername(String username);
}
