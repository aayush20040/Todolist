import { createContext,useContext } from "react";
export  const Todocontext=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completd:false,
        }
    ],
    addtodo:(todo)=>{}, 
    deletodo:(id)=>{},
    updatetodo:(id,todo)=>{},
    togglecomplete:(id)=>{}


})
 
export const useTodo=()=>{
    return useContext(Todocontext)
}
export const TodoProvider = Todocontext.Provider
 