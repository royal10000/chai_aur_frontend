import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateTodo, removeTodo } from '../features/todo/todoSlice'
const TodoNote = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const [todo, setTodo] = useState(todos.text)
    console.log(todos)
    return (
        <>

            {
                todos.map(todo => {
                    return <div key={todo.id} className='bg-slate-300 m-4 flex justify-between px-5 rounded-md h-[3.5rem] items-center'>
                        <p className='text font-bold tracking-wide'>{todo.text}</p>
                        <div className='flex gap-4'>
                            <button onClick={() => { dispatch(updateTodo(todo.id)) }} className='bg-green-400 px-4 py-1 text-xl rounded-md shadow-lg  text-white font-medium'>Edit</button>
                            <button onClick={() => { dispatch(removeTodo(todo.id)) }} className='bg-red-400 px-4 py-1 text-xl rounded-md shadow-lg  text-white font-medium'>Delete </button>
                        </div>
                    </div >
                })
            }
        </>
    )
}

export default TodoNote