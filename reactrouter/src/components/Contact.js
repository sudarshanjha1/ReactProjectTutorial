import React from 'react'
import { useNavigate } from 'react-router-dom';



const Contact=()=> {
    const navigate = useNavigate();   
    const ContactUs=()=>{
        navigate("/about")
    }    
  return (
    <>
      
      <section>
        <h1>Contact Page</h1>
        <button onClick={ContactUs}>GoToAbout</button>
      </section>
    </>
  )
}

export default Contact
