import React, { useCallback, useState } from "react";

const Child = React.memo(({onReset})=>{
    console.log("child Rendered")
    return <button onClick={onReset}>Reset Count</button>;
});

// const Child = ({onReset}) =>{
//      console.log("child Rendered")
//     return <button onClick={onReset}>Reset Count</button>;
// }


//React.Memo
//React Memo perevent The component on Re-Render its depends on there Porps Value;

const Counter = () =>{

    const[count, setCount] = useState(0);
    
    const increment = () => setCount(prev => prev + 1);

    const resertCount = useCallback(()=>{
        setCount(0);
    },[])

        // const resertCount = () =>{
        //     setCount(0);
        // }

    

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <Child onReset={resertCount}/>
        </div>
    )
}

export default Counter;