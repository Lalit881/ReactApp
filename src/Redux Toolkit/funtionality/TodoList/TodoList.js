import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, name: 'Roy'}]
}
        
    

export const TodoList = createSlice({
    name: 'todolist',
    initialState,

    // state => current value of the store
    // action => get the data from dispatch
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: Date.now(),
                name: action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action)=>{
            const {id, name} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if(todo){
                todo.name = name;
            }
        }
    }
});



export const {addTodo, deleteTodo, updateTodo} = TodoList.actions

export default TodoList.reducer






