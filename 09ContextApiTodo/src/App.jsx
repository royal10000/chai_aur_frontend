import { useEffect, useState } from 'react'
import './App.css'
import { useContextTodo, contextTodo, contextTodoProvider } from "./Contexts/ContextTodo"
import InputForm from './components/InputForm'
import InputNote from './components/InputNote'

function App() {

  const [todos, settodos] = useState([])

  function addTodo(todos) {
    settodos(prev => [{ id: Date.now(), todos, completed: false }, ...prev])
  }

  function updateTodo(id, todos) {
    settodos(prev => prev.map(todo => todo.id === id ? {...todo,todos:todos}: todo))
  }
  function deleteTodo(id) {
    const deleteTodo = todos.filter(todo => (todo.id !== id))
    settodos(deleteTodo)
  }
  useEffect(() => {
    settodos(JSON.parse(localStorage.getItem("todos")))
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <contextTodo.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <InputForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* {todos.length} */}

            {
              todos.length>0?
              todos.map((todo) => {
                return <div key={todo.id} className='w-full'>
                  <InputNote todos={todo} />
                </div>
              }): <div className=' border border-black/10 rounded-lg px-3 gap-x-3 shadow-sm shadow-white/50 duration-300 capitalize text-3xl py-5 font-bold bg-pink-950    w-full'>You haven't add any todos</div>
            }
          </div>
        </div>
      </div>
    </contextTodo.Provider>
  )
}


export default App
