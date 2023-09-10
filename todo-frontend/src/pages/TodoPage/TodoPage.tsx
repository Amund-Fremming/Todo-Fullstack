import { useState } from "react";
import { Todo } from "../../types/types";

export const TodoPage = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [todoid, setTodoid] = useState<string>("");
    const [todoheader, setTodoheader] = useState<string>("");
    const [todoinfo, setTodoinfo] = useState<string>("");

    async function asyncFetch() {
        const apiEndpoint = "/api/fetch-todos";
        
        try {
            const response = await fetch("http://localhost:8080" + apiEndpoint);
            if(!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            setTodos(data);
        } catch (err) {
            throw new Error("Error in fetch");
        }
    }

    async function asyncPush() {
        const apiEndpoint = "/api/push-todo";
        const todo: Todo = {
            todoid: Number(todoid),
            todoheader: todoheader,
            todoinfo: todoinfo
        }

        try {
            const response = await fetch("http://localhost:8080" + apiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(todo)
            });

            console.log(await response.text());
            
        } catch (err) {
            throw new Error("Error in fetch");
        }

        setTodoid("");
        setTodoheader("");
        setTodoinfo("");
    }

    async function asyncUpdate() {
        const apiEndpoint = `/api/update-todo/${todoid}`;
        const todo: Todo = {
            todoid: Number(todoid),
            todoheader: todoheader,
            todoinfo: todoinfo
        }

        /*const response = */await fetch("http://localhost:8080" + apiEndpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        });

        // console.log(await response.text());
    }

    return(
        <div className="flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 justify-center items-center h-screen w-full">
            <h1 className="font-serif text-8xl font bold text-center text-white hover:-translate-y-10 transition-all duration-500">Hello Bitches!</h1>
            <div className="flex flex-col m-1">
                <button
                    className="text-3xl mb-4 h-14 w-56 mt-2 rounded-xl bg-white text-purple-500 hover:bg-purple-500 hover:text-white font-serif hover:border-2 hover:border-white"
                    onClick={asyncFetch}
                >
                    Fetch todos
                </button>
                {todos.map(todo => (
                    <li key={todo.todoid} className="text-2xl m-1 list-disc font-serif text-white">{todo.todoinfo}</li>
                ))}
            </div>

            <div className="flex flex-col justify-center items-center">
                <input
                    placeholder="todo id" 
                    value={todoid}
                    onChange={e => setTodoid(e.target.value)}
                    className="m-1 text-xl h-12 w-48 mt-2 rounded-xl bg-white text-purple-500 hover:bg-purple-500 hover:text-white font-serif hover:border-2 hover:border-white text-center"
                />
                <input
                    placeholder="todo header"
                    value={todoheader}
                    onChange={e => setTodoheader(e.target.value)}
                    className="m-1 text-xl h-12 w-48 mt-2 rounded-xl bg-white text-purple-500 hover:bg-purple-500 hover:text-white font-serif hover:border-2 hover:border-white text-center"
                />
                <input
                    placeholder="todo info"
                    value={todoinfo}
                    onChange={e => setTodoinfo(e.target.value)}
                    className="m-1 text-xl h-12 w-48 mt-2 rounded-xl bg-white text-purple-500 hover:bg-purple-500 hover:text-white font-serif hover:border-2 hover:border-white text-center"
                />
                <button
                    className="text-3xl mt-5 h-14 w-56 rounded-xl bg-white text-purple-500 hover:bg-purple-500 hover:text-white font-serif hover:border-2 hover:border-white"
                    onClick={asyncPush}
                >
                    Push todo
                </button>
                <button
                    className="text-3xl mt-5 h-14 w-56 rounded-xl bg-white text-purple-500 hover:bg-purple-500 hover:text-white font-serif hover:border-2 hover:border-white"
                    onClick={asyncUpdate}
                >
                    Update todo
                </button>
            </div>

        </div>
    )
}

export default TodoPage;
