// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, fetchUsers, updateUser } from "./features/usersSlice";

// import AddTodo from "./Components/AddTodo";
// import TodoListing from "./Components/TodoListing";


//What is the Redux 
// Redux is Predictable state container for JS


// Example Use Case
// Managing Global Variable 
//Tracking UI State Like models, theme. etc


//What is the React-Redux
// React-Redux is the official binding Library between React and Redux

// Use Case
// Provided default Hooks
// useSelector()
// useDispatch()


//Redux Toolkit
//More Simplifiy and Get More Otpions with funtionlity for Redux

//Use Case
//createSlice()
//configureStore()


//******* */
//Store  
//Reducer
//useSelector 
//useDispatch


//Data-flow 

// Real Life Example
// Todo List

//redux-thunk
//createAsyncThunk()

//In Redux, middleware has always been used to perform Asynchoronous Task

//CreateAsyncThunk is where we perform Asynchoronous tasks in our slice.

// use case when we manage the Api and fecht the data









function App(){
  const dispatch = useDispatch();
  const { list: users, status, error} = useSelector((state)=> state.users)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(()=>{
    dispatch(fetchUsers());
  }, [dispatch]);

  // console.log(editId);
  const handleAddOrUpdate = () => {
    if (editId) {
      dispatch(updateUser({id: editId, updateUser: {id:editId, name, email}}));
      setEditId(null);
    } else {
      dispatch(addUser({name, email}))
    }
    setName(''),
    setEmail('')
  }

  return(
    <>
      <div>
        <h1>User Management (Thunk API)</h1>
        <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={handleAddOrUpdate}>{editId ? 'Update User': 'Add User'}</button>

        <h2>User List</h2>
        {users.map((user) => (
          <div key={user.id} style={{ margin: '10px 0', borderBottom: '1px solid #ccc'}}>
            <strong>{user.name}</strong> - {user.email}
            <button
              onClick={()=>{
                setEditId(user.id);
                setName(user.name);
                setEmail(user.email);
              }}
            >
              Edit
            </button>
            <button onClick={()=> dispatch(deleteUser(user.id))}>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
};

export default App;
