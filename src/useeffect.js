import { useEffect, useState } from "react";

export function Effect()
{
    const[count,setCount]=useState(0);
    const[multiply,setMultiply]=useState(0);

    useEffect(()=>{
        setMultiply(()=>count*500);
    },[count]);
    return(
        
        <>
        <p>Count THE VALUE:{count}</p>
        <button onClick={()=>setCount((c)=>c+1)}>Click Here</button>
        <p>Multiply value:{multiply}</p>
        </>
    )
}