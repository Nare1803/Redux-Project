import { useContext } from "react";
import { ToDoContext } from "../todo-context";

export const ToDoItem = ({ todo }) => {
    const{onUpdate} = useContext(ToDoContext)
    return (
      <div className={`flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-200 ${todo.completed ? "opacity-40" : ""}`}>
        <div className="flex flex-col">
          <p className="text-gray-300 text-lg font-medium">{todo.text}</p>
          <small className="text-gray-400">{todo.description}</small>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => onUpdate(todo.id)} 
          className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-md shadow hover:bg-green-600 transition duration-200">
          {todo.completed ? "Cancle":"Complete"}
          </button>
          <button className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-md shadow hover:bg-red-600 transition duration-200">
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  
