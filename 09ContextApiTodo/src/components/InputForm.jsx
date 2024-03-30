import React, { useState } from 'react'
import { useContextTodo } from '../Contexts/ContextTodo';

const InputForm = () => {
    const { addTodo } = useContextTodo({})
    const [data, setData] = useState("")

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (!data) return
        addTodo(data)
        setData("")
    }

    

    return (
        <form onSubmit={HandleSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={data}
                onChange={(e) => setData(e.currentTarget.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default InputForm