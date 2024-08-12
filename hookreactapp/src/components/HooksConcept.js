import React, { useState } from 'react';

function HooksConcept() {
    const [text,setText]=useState("sudarshan");
  return (
    <div>
        <h1>{text}</h1>
        
      
    </div>
  );
}

export default HooksConcept;
