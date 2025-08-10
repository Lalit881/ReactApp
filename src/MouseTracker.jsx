import React, { useCallback, useState } from "react";


// What is the render props?
// Render props is technique to share the code between react component using a prop whose value is funtion. this funtion is recieve data and return jsx


// Why use the Render Props?
// 1) To Reuse the Login Between Component( State Mangament && React Life Cycle);
// 2) Clean Spration Between Login and UI

// Real Life Cycle 
// Imagine a Component that tract the mouse postion and you want use this date in your UI(Image, Coordinate Of Mouse)

const MouseTracker = ({render}) => {
 const [positon, setPosition] = useState({x:0,y:0});

 const handleMouseMove = useCallback((event)=>{
    // console.log(event);
    setPosition({x:event.clientX,y:event.clientY})
 },[]);

 return(
    <div
        onMouseMove={handleMouseMove}
        style={{height:"300px", width:"300px", color:"white", background:"black"}}
    >
        {render(positon)}
    </div>
 )
};

export default MouseTracker;