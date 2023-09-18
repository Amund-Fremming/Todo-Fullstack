import { useEffect, useState } from "react";
import { getTodo } from "../../utils/todoAPIService";
import TodoCard from "./TodoCard";
import { Todo } from "../../types/types";

export const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const userid: string = localStorage.getItem("userid") || "";
      const response = await getTodo(Number(userid));
      setTodos(response);
    }

    fetchTodos();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r px-2 from-indigo-500 via-purple-500 to-pink-400 flex flex-col h-screen">
        <div className="mb-12 w-full flex items-start justify-center">
          <button className="text-3xl mt-5 h-14 w-56 rounded-xl bg-white text-purple-500 hover:bg-purple-500 hover:text-white font-serif hover:border-2 hover:border-white m-2">
            Create
          </button>
          <button className="text-3xl mt-5 h-14 w-56 rounded-xl bg-white text-purple-500 hover:bg-purple-500 hover:text-white font-serif hover:border-2 hover:border-white m-2">
            Update
          </button>
        </div>
        {todos.map((todo: Todo) => (
          <TodoCard todo={todo} />
        ))}
        <div className="flex justify-center items-center"></div>
      </div>
    </>
  );
};

export default TodoPage;
