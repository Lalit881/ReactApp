// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


//What is the ContextAPI
// The context API in React is a built in Feature that allow you to share data across the entire component tree without having to pass 
// Props down manually at every level

//Why Use 

// Define Gloabl Variable
// Re-solve Prop Drilling
// Share the Data Between entire component 


//Context Create
//Context Provide
//Context Use{Hook useContext}







// import UserList from "./UserList";
// import Counter from "./useCallback, useMemo and React.Memo/Counter";
import Login from "./Context API/Component/Login";
import Profile from "./Context API/Component/Profile";
import ThemeBox from "./Context API/Component/ThemeBox";
import ThemeToggle from "./Context API/Component/ThemeToggle";
import ThemeContextProvide from "./Context API/Context/ThemeContextProvider";
import UserContextProvider from "./Context API/Context/UserContextProvider";



function App(){
  return(
    // <h1>Hello</h1>
  // <UserContextProvider>
  //     <Login/>
  //     <Profile/>
  // </UserContextProvider>
  <ThemeContextProvide>
    <div>
      <h1>Theme Context</h1>
      <ThemeToggle/> 
      <ThemeBox/>  
    </div>
  </ThemeContextProvide>
  )
};

export default App;
