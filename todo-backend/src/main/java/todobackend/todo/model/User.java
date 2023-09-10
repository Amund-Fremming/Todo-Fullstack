package todobackend.todo.model;

import java.util.List;

public class User {

    private int userid;
    private String username;
    private String password;
    private String passwordsalt;

    private List<Todo> todos;

    public User(int userid, String username, String password, String passwordsalt, List<Todo> todos) {
        this.userid = userid;
        this.username = username;
        this.password = password;
        this.passwordsalt = passwordsalt;
        this.todos = todos;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasswordsalt() {
        return passwordsalt;
    }

    public void setPasswordsalt(String passwordsalt) {
        this.passwordsalt = passwordsalt;
    }

    public List<Todo> getTodos() {
        return todos;
    }

    public void setTodos(List<Todo> todos) {
        this.todos = todos;
    }
}
