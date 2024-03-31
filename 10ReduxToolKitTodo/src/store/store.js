// import } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: sliceReducer
})