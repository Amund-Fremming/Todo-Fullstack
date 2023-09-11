package todobackend.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import todobackend.todo.model.User;
import todobackend.todo.repository.UserRepo;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User getUser(int userid) {
        // TODO
        return null;
    }

    public User createUser(User user) {
        return userRepo.save(user);
    }

    public void deleteUser(int userid) {
        userRepo.deleteById(userid);
    }

}
