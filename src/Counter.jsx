import { useState } from "react"

export default function Counter(){
    const [count , setCount]=useState(0);
    const handleAdd=()=>{
        const newCount=count+1;
        setCount(newCount)
    }
    const handleReduce=()=>{
        const newCount=count-1;
        setCount(newCount)
    }
    return(
        <div style={{border:'2px solid tomato',borderRadius:'20px',padding:'10px'}}>
            <h1>Counter: {count}</h1>
            <button onClick={handleAdd} style={{margin:'5px'}}>Set Counter</button>
            <button onClick={handleReduce} style={{margin:'5px'}}>Reduce Counter</button>
        </div>
    )
}