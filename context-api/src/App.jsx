
import { useState } from "react"
import { ToDoList } from "./components/todo-list"
import { ToDoContext } from "./todo-context"


export default function App(){
  const [todos, setTodos] = useState([
    {id:101,text:"css task",description:"responsivenes",completed:false},
    {id:102,text:"js task",description:"prototype",completed:true},
    {id:103,text:"react task",description:"context Api",completed:false},
    {id:104,text:"node task",description:"modules",completed:true},
  ])
  const [currentFilter,setCurrentFilter] = useState("all")//tvyal pahin arka filter
  const [filters,setFilters] = useState(["all","active","completed"])//bolor hnaravor
  const handleAdd = (todo) => {
    setTodos([...todos,{...todos,completed:false,id:Date.now()}])
  } 

  const handleUpdate = (id) =>{
   setTodos(todos.map(todo => 
     todo.id == id ? {...todo,completed:!todo.completed} : todo
   ))
  }
  
  return <>
  <ToDoContext.Provider value = {{
    todos,
    onUpdate:handleUpdate,
    filters,
    currentFilter,
    onFilter:setCurrentFilter,
    onAdd:handleAdd
  
    }}>
    <ToDoList/>
  </ToDoContext.Provider>
  </>
}




