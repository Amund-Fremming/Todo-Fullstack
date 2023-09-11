package todobackend.todo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "todo")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int todoid;
    private String todoheader;
    private String todoinfo;

    @ManyToOne
    @JoinColumn(name = "userid")
    private User user;

    public Todo() {

    }

    public Todo(String todoheader, String todoinfo) {
        this.todoheader = todoheader;
        this.todoinfo = todoinfo;
    }

    public int getTodoid() {
        return this.todoid;
    }

    public void setTodoid(int id) {
        this.todoid = id;
    }

    public String getTodoheader() {
        return this.todoheader;
    }

    public void setTodoheader(String header) {
        this.todoheader = header;
    }

    public String getTodoinfo() {
        return this.todoinfo;
    }

    public void setTodoinfo(String info) {
        this.todoinfo = info;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
