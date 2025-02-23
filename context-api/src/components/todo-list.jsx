import { useContext } from "react";
import { List } from "./list";
import { ToDoAdd } from "./todo-add";
import { ToDoFilter } from "./todo-filter";
import { ToDoContext } from "../todo-context";
import { ToDoItem } from "./todo-item";

export const ToDoList = () => {
  const { todos,currentFilter} = useContext(ToDoContext);
  const list = currentFilter == "all" ? todos : 
               currentFilter == "active" ? 
               todos.filter(todo => todo.completed == false) :
               todos.filter(todo => todo.completed == true)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-lg space-y-6">
        <div>
          <ToDoAdd />
          <ToDoFilter />
        </div>
        <div>
          {list.map(todo => (
            <ToDoItem key={todo.id} todo={todo} />
          ))}
        </div>
        <List />
      </div>
    </div>
  );
};
