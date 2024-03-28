
import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './Context'
import TodoForm from './components/TodoForm'
import { TodoItems } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updatedTodo = (id, todo) => {
    setTodos((prev) => {
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))

      // prev.map((prevTodo)=>{
      //  return if(prevTodo.id===id){
      //     todo
      //   }else{
      //     prevTodo
      //   }
      // })
    })
  }

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((prevTodo) => prevTodo.id !== id)
    })
  }

  const toggleComplete = (id) => {
    setTodos((prev) => {
      prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
    })
  }

  // localStorage.setItem('helll','lsjadf')
  useEffect(() => {

    const todos1 = JSON.parse(localStorage.getItem(todos))
    if (!todos1) {
      setTodos(todos1)
    }
  }, [])

  useEffect(() => {
    const localTodos = localStorage.setItem("todos", JSON.stringify(todos))
    console.log(localTodos)
  }, [todos])
  return (
    <TodoContextProvider value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => {
                return <div key={todo.id} className='w-full'>
                  <TodoItems />
                </div>
              })
            }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
