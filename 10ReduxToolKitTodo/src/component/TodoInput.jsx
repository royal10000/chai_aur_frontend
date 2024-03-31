import React, { useRef, useState } from 'react'
import { addTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'
const TodoInput = () => {
    const inputRef = useRef()
    function handleCopy() {
        inputRef.current.select()
        
        // alert("helo")
    }
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (input.length > 0) {
            console.log(input)
            setInput("")
            dispatch(addTodo({ text: input }))
        }

    }

    return (
        <>
            <form onSubmit={HandleSubmit} action="" className='mb-10'>
                <input type="text" value={input} ref={inputRef} onChange={(e) => { setInput(e.currentTarget.value) }} placeholder='Write your todo' className=' h-10 w-1/2 focus-visible:outline-none pl-3' />
                <button className='bg-green-400 ml-5 px-4 py-1 text-2xl rounded-md text-white font-bold '>Add Todo</button>
            </form>
            <button className='bg-green-400 ml-5 px-4 py-1 text-2xl rounded-md text-white font-bold ' onClick={handleCopy}>copy</button>
        </>
    )
}

export default TodoInput