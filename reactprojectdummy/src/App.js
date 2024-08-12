import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {BrowserRouter, Routes,Route} from "react-router-dom";


function App() {

  const[mode,setMode]=useState("dark");
  const[alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })

  }

  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode is enabled","success")
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled","success")
    }
  }
  

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/about" element={<About />} />
      </Routes>
    
    </BrowserRouter>
    <Navbar  title="TextBox" mode={mode}  onClick={toggleMode}/>
    <Alert  />
    {/* <Navbar/> */}
   

    <div className="container">
    
         
        
      <Text  heading="Enter the Text"/>
          
    
    </div>

    {/* <About/> */}
   

    
    </>
  );
}

export default App;
