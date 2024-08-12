import React, { useState } from 'react'

const ShortCircuitEval = () => {
    const [demo,setDemo]=useState("");
  return (
    <div>
        <h1 className='h1Style'>{demo || 
            <>
            <h1>My Name is Sudarshan</h1>
            <p1>Jha</p1>
            </>
            }</h1>
        <h1 className='h1Style'>Sundram</h1>

      
    </div>
  )
}

export default ShortCircuitEval
