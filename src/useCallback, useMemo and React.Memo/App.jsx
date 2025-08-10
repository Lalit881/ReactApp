// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// const { jsx } = require("react/jsx-runtime")

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App;

//What is useMemo{React Performance}
//useMemo is the React Hook or Funtion that helps you optimize the performance memoizing results of a funtion or compution 
// it only recalculate the value when it's  dependencies changes

//why use the useMemo
//React re-rendor the components frequently.
// if you have expensive computation or large data transfer in the rendor flow . they will be recalculate every time even if the input haven't change 
// To avoid unnecessary recalculations, use useMemo to chache the result o a computation untill its dependencies change

//Fetch of Users from API and Filter the list by user Role (admin, editor, viewer),

//Difference between useMemo and useEffect
// useMemo -> caches/computes a value, useEffect -> Runs Side Effects after Render
// Return -> useMemo => A memoized Value, useEffect => Nothing


//useCallback
//What is UseCallback
//useCallback is a react hook that return a memoized version of a callback funtion - that is, it given you the same funtion instance its dependencies changes

//Suntax
// const memoizedCallback = useCallback(()=>{}, [dependecies])

//Real Life Example 
//Let's say we have a parent component that rendors a child list and includes a Reset button


//useMemo Return Memoized Value and useCallback Reture Memoized Funtion 
// optimize the performance





// import UserList from "./UserList";
import Counter from "./useCallback, useMemo and React.Memo/Counter";


function App(){
  return(
    // <UserList/>
    <Counter/>
  )
};

export default App;
