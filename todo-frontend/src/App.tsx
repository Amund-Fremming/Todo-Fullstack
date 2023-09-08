import { useState, useEffect } from "react";

interface Todo {
    todoid: number
    todoheader: string
    todoinfo: string
}

export const App = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

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
        </div>
    )
}

export default App;
