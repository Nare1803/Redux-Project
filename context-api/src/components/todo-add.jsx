import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToDoContext } from "../todo-context";

export const ToDoAdd = () => {
 
    const {onAdd} = useContext(ToDoContext)
    const {register,reset,handleSubmit,formState:{errors}} = useForm()
    return (
        <div className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-200 mb-4">Add To Do</h1>
            <form onSubmit={handleSubmit(onAdd)} action="" className="space-y-4">
                {errors.text&& <p className="text-red-500 p-2 my-2">{errors.text.message}</p>}
                <p id="message" className="text-sm text-amber-400"></p>
                
                <div className="flex flex-col">
                    <label className="text-gray-400 mb-1">Text</label>
                    <input
                        type="text"
                        {...register("text",{required:"please fill the text"})}
                      className="p-2 bg-gray-800 text-gray-300 rounded-lg focus:ring-emerald-400 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-400 mb-1">Description</label>
                    <input
                        type="text"
                        {...register("description",{required:"please fill the text"})}
                        className="p-2 bg-gray-800 text-gray-300 rounded-lg focus:border-emerald-400 focus:outline-none"
                    />
                </div>
                
                <button className="w-full px-4 py-2 text-lg font-semibold text-white bg-indigo-800 rounded-lg hover:bg-indigo-500">
                    Save
                </button>
            </form>
        </div>
    );
};
