import { useEffect, useState } from 'react'
import React from 'react'
import { TodoProvider } from './context/Todocontext'
import TodoForm from './assets/components/Todoform'
import TodoItem from './assets/components/Todoitem'

function App() {
  const[todos,setTodos]=useState([])
  const addtodo=(todo)=>{
    setTodos((prev) =>[{id:Date.now(),...todo},...prev,])//js ka sikhna h ye 

  }
  const deletodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id));
  };
 

  const updatetodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, ...updatedTodo } : eachTodo
      )
    );
  };
   useEffect(() => {
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
   }, [])
   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
   },[todos])
   

  const togglecomplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))}





  

  return (
    <TodoProvider value={{todos,addtodo,deletodo,updatetodo,togglecomplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'><TodoItem todo={todo}/></div>
                        ))}

                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App




