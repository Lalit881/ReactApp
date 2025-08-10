// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import AddTodo from "./Components/AddTodo";
import TodoListing from "./Components/TodoListing";


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









function App(){
  return(
    <>
      <AddTodo/>
      <TodoListing/>
    </>
  )
};

export default App;
