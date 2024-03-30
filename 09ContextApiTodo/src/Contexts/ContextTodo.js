import { createContext, useContext } from "react";

const contextTodo = createContext({
    todos: [{ id: Date.now(), todo: "hello world", completed: false }],
    addTodo: function (todos) { },
    updateTodo: function (id, todo) { },
    deleteTodo: function (id) { }
})


const contextTodoProvider = contextTodo.Provider

const useContextTodo = () => {
    return useContext(contextTodo)
}

export { contextTodo, contextTodoProvider, useContextTodo }