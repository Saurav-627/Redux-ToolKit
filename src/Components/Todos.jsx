import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <section className="mt-8">
      <h2 className="text-2xl text-white font-bold mb-4">Todos</h2>
      {todos.length === 0 ? (
        <p className="text-gray-400">No todos available. Add some!</p>
      ) : (
        <ul className="list-none space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            >
              <div className="text-white">{todo.text}</div>
              <button
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Todos;
