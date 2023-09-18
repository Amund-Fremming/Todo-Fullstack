import { Todo } from "../../types/types";
import { deleteTodo } from "../../utils/todoAPIService";

interface ITodoCard {
  todo: Todo;
}

export default function TodoCard({ todo }: ITodoCard) {
  return (
    <div className="bg-white w-[500px] rounded-xl h-full p-4">
      <div className="flex">
        <div className="flex flex-col w-[80%] mr-4">
          <h1 className="font-serif text-4xl font-bold text-purple-800">
            {todo.todoheader}
          </h1>
          <p>{todo.todoinfo}</p>
        </div>
        <div className="flex">
          <button
            className="w-[100px] h-[40px] rounded-xl bg-purple-500 text-xl font-serif text-white hover:bg-white hover:text-purple-500 hover:border-2 hover:border-purple-500"
            onClick={() => deleteTodo(todo.todoid)}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
