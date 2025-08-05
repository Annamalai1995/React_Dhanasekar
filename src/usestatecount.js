import { useState } from "react"

export let Count=()=>
{
    const[count,setCount]=useState(0)
    const result=()=>
    {
        setCount(count+300)
    }
    const result1=()=>
    {

        setCount(0)
    }
    return(
        <>
        <button onClick={result}onDoubleClick={result1}>CLICKBUTTON</button>
        <span>{count}</span>
        </>
    )
}