import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../funtionality/TodoList/TodoList';

function AddTodo() {
    const [name, setName] = useState();

    const dispatch = useDispatch();

    //Dispacth change the value in store using the help of Reducer 

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(name));
        setName('');
    }


  return (
    <form onSubmit={handleSubmit}>
        <input
         placeholder='Name'
         value={name}
         onChange={(e)=>setName(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo