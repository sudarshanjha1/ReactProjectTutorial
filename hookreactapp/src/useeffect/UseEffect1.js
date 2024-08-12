import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
  const[count,setCount]=useState(0);
    useEffect(()=>{
      if(count>=1){
        document.title=`Count(${count})`

      }else{
        document.title=`Count`
      }
      
    },[count])
    console.log("hello world 2")
  return (
    <div>
      <button className='btn' onClick={()=>
        setCount(count+1)
      }>Click</button>

      <h1>{count}</h1>
      
    </div>
  )
}

export default UseEffect1
