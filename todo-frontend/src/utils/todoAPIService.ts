import { Todo } from "../types/types";

const URL_BASE = "http://localhost:8080/api/todo";

/**
 * @returns all todos, or SERVER_ERROR
 */
export const getAllTodos = async () => {
    try {
        const response = await fetch(URL_BASE + `/get-all`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });

        if(response.ok) {
            return await response.json();
        }

        // Mulig legge til mer spesifikke returns ut ifra hva responsen sier
        return response.status; 
    } catch(err) {
        console.error("Error in getAllTodos (TODO API)");
        return "SERVER_ERROR";
    }
}

/**
 * @param userid 
 * @returns Todo, NOT_FOUND or SERVER_ERROR
 */
export const getTodo = async (userid: number) => {
    try {
        const response = await fetch(URL_BASE + `/get/${userid}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });

        if(response.ok) {
            return await response.json();
        }

        if(response.status === 404) {
            return "NOT_FOUND";
        }
        
    } catch(err) {
        console.error("Error in getTodo (TODO API)");
        return "SERVER_ERROR";
    }
}

/**
 * @param userid 
 * @param todoheader 
 * @param todoinfo 
 * @returns a new Todo, NOT_FOUND or SERVER_ERROR
 */
export const createTodo = async (userid: number, todoheader: string, todoinfo: string) => {
    try {

        const todo: Todo = {
            todoid: 0,
            userid: 0,
            todoheader: todoheader,
            todoinfo: todoinfo
        }

        const response = await fetch(URL_BASE + `/create/${userid}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(todo)
        });

        if(response.ok) {
            return await response.json();
        }

        if(response.status === 404) {
            return "NOT_FOUND";
        }
        
    } catch(err) {
        console.error("Error in createTodo (TODO API)");
        return "SERVER_ERROR";
    }
}

/**
 * @param todoid 
 * @param todoheader 
 * @param todoinfo 
 * @returns updated todo, NOT_FOUND or SERVER_ERROR
 */
export const updateTodo = async (todoid: number, todoheader: string, todoinfo: string) => {
    try {

        const updatedTodo: Todo = {
            todoid: 0,
            userid: 0,
            todoheader: todoheader,
            todoinfo: todoinfo
        }

        const response = await fetch(URL_BASE + `/update/${todoid}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedTodo)
        });

        if(response.ok) {
            return await response.json();
        }

        if(response.status === 404) {
            return "NOT_FOUND";
        }
        
    } catch(err) {
        console.error("Error in updateTodo (TODO API)");
        return "SERVER_ERROR";
    }
}

/**
 * @param todoid 
 * @returns deleted todo, NOT_FOUND or SERVER_ERROR
 */
export const deleteTodo = async (todoid: number) => {
    try {
        const response = await fetch(URL_BASE + `/delete/${todoid}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
        });

        if(response.ok) {
            return await response.json();
        }

        if(response.status === 404) {
            return "NOT FOUND";
        }
        
    } catch(err) {
        console.error("Error in deleteTodo (TODO API)");
        return "SERVER_ERROR";
    }
}