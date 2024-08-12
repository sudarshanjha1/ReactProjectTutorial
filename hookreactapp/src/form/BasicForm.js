import React, { useState } from 'react'

const BasicForm = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[allEntry,setallEntry]=useState([]);
    const submitForm = (e) =>{
        e.preventDefault();
        if(email && password){
            const newEntry={email:email,password:password};
            setallEntry([...allEntry,newEntry]);
            console.log(setallEntry);
            setEmail("");
            setPassword("");

        }else{
            alert("Please Fill The Form")
        }
        
        

    }

    // To Stored the data in particular 
    
  return (
    <div>
      <>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' autoComplete='off' value={email}
                onChange={(e) =>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' value={password}
                onChange={(e) =>setPassword(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
        <div>
            {
                allEntry.map((abc)=>{
                    return(
                        <div>
                            Email is: <span style={{ marginRight: '10px' }}>{abc.email}</span> 
                         Password: {abc.password}
                            
                        </div>

                    )
                })
            }
        </div>
      </>
    </div>
  )
}

export default BasicForm
