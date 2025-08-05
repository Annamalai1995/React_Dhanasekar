import { useState } from "react";

export function UsestateHooks()
{
    //Const[getvariablename,setvariablename]=useState()
    const [names,setNames]=useState();

    const display=()=>
    {
        alert(names+"Has successfully Added")
    }
    const change=(temp)=>
    {
        setNames(temp.target.value)

    }
    return(
        <>
        <input type="text"placeholder="Names"name="{names}"onChange={change}/>
        <button onClick={display}>ACTION</button>
        </>
    )

}