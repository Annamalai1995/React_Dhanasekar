import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
export let Ternary=()=>
{
    const[wish,setWish]=useState("No");
    const[output,setOutput]=useState("");
    const[changes,setChanges]=useState();
    const getting=(temp)=>
    {
        setWish(temp.target.value)
    }
    const ternaryOperator=()=>{
        const data=
        (wish=='Ooty')?
        ({color:'green',backgroundcolor:'black'}):
        
        (wish=='Manali')?
        ({color:'blue',backgroundcolor:'black'}):

        (wish=='kodai')?
        ({color:'red',backgroundcolor:'black'}):

        {color:'yellow',backgroundcolor:'black'}

        setChanges(data);
        setOutput(wish);



    }
    return(
        <>
        <input type="text"placeholder="Enter Fav colling places" onChange={getting}/>
        <button className="btn btn-outline-dark fw-bold" onClick={ternaryOperator}>CHECK PLACES</button>
        <p style={changes}>
            {output}
        </p>
        </>
    )
}