// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'




// import AddTodo from "./Components/AddTodo";
// import TodoListing from "./Components/TodoListing";



//Advanced Router
//Nested Router
// Dynamic Router
// useParams


//What are the Nested Routes in React?
// In react Router nested Route allow you to define routes inside other routes,

//Why use Nested Routes?
// SHared Layouts:
// Better UI
// Cleaner Code

//Dynamic Routes
//Dynamic routes are Routess whose paths are not fixed that can be changes based on the data or user intreface

//useParams (URL Parameters)
// URL params are variable embeded in the URL they allow you tu capture the value for the inside your componentd

//Example
// if the Route path is /users/:userId
// /users/42
// userId=42

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import DashboardLayout from "./Components/DashboardLayout";
import Orders from "./Components/Orders";
import OrderDetails from "./Components/OrderDetails";
import Products from "./Components/Products";
import Settings from "./Components/Settings";
import ProductDetail from "./Pages/ProductDetail";
import Reviews from "./Pages/Reviews";

function App(){


  return(
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home/>}></Route>
    //     <Route path="/dashboard" element={<DashboardLayout/>}>
    //     {/* Child/Nested Routes */}
    //       <Route path="orders" element={<Orders/>}>
    //         <Route path=":orderId" element={<OrderDetails/>}></Route>
    //       </Route>
    //       <Route path="products" element={<Products/>}></Route>
    //       <Route path="settings" element={<Settings/>}></Route>
    //     </Route>
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}>
          <Route path="review" element={<Reviews/>}></Route>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
