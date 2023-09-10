export interface User {
    userid: number;
    username: string;
    password: string;
    passwordsalt: string;
}

export interface Todo {
    todoid: number;
    todoheader: string;
    todoinfo: string;
}