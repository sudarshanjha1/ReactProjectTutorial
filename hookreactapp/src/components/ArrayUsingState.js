
import React, { useState } from 'react'

function ArrayUsingState() {
    
    const var1=[
        {
            id:0,myName:"sudarshan",age:24
        },{
            id:1,myName:"jha",age:25
        },{
            id:1,myName:"jha",age:25
        },{
            id:1,myName:"jha",age:25
        }
    ]
    const [myArray,setMyArray]=useState(var1);
    const clearArray = () =>{
        setMyArray([]);
        console.log("sudars")
    }
    const removeElem = (id) =>{
        const myNewArray=myArray.filter((curEle)=>{
            return curEle.id!==id;

        })
        setMyArray(myNewArray);
    }

    
  return (
    <>
    {
        myArray.map((curEle)=>{
        return(

            <h1>
                Id:{curEle.id}& Name:{curEle.myName}
            & Age:{curEle.age}

            <button className='btntext' onClick={ ()=>removeElem(curEle.id)}>remove</button>
            
            </h1>)
            
                      
        } )
    } 
    <button className='btn' onClick={clearArray}>Clickhere</button>   

    </>
  )
}

export default ArrayUsingState
