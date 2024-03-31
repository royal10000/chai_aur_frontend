
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, text: "hello" }
    ]
}
const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = { id: nanoid(), text: action.payload.text }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            // state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
            console.log(action.payload, 'update is cliked')
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer