import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo } from '../funtionality/TodoList/TodoList';

function TodoListing() {
    const todos = useSelector(state=> state.todos);
    const dispatch = useDispatch();

    const handleUpdate = (id, currentName) => {
      const newName = prompt('Enter updated Name Here', currentName);
      if(newName && newName.trim() !== ''){
        dispatch(updateTodo({id, name:newName.trim()}));
      }
    }

  return (
    <>
    <div>Todo List</div>
    {todos.map((todo => (
        <li key={todo.id}>
            {todo.name}
            <button onClick={()=> dispatch(deleteTodo(todo.id))}>Delete Todo</button>
            <button onClick={()=> handleUpdate(todo.id, todo.name)}>Update Todo</button>
        </li>
    )))}
    </>

  )
}

export default TodoListing;