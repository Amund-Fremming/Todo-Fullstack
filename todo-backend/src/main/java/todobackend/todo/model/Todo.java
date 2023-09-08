package todobackend.todo.model;

public class Todo {

    private int todoid;
    private String todoheader;
    private String todoinfo;

    public Todo(int todoid, String todoheader, String todoinfo) {
        this.todoid = todoid;
        this.todoheader = todoheader;
        this.todoinfo = todoinfo;
    }

    public Todo() {}

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

}
