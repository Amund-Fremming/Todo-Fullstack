package todobackend.todo.model;

public class User {

    private int userid;
    private String username;
    private String password;
    private String passwordsalt;

    public User(int userid, String username, String password, String passwordsalt) {
        this.userid = userid;
        this.username = username;
        this.password = password;
        this.passwordsalt = passwordsalt;
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
    
}
