import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';

export const Login=({setIsLoggedIn})=> {
    const [userName,setUserName]=useState('')
    const [pw,setPw]=useState('')
    const [isValidUserName,setIsValidUserName]=useState(null)
    const [isValidPw,setIsValidPw]=useState(null)
   

    const handleLogin=()=>{
        userName==import.meta.env.VITE_USERNAME && pw==import.meta.env.VITE_PW ? setIsLoggedIn(true):setIsLoggedIn(false)
    }
  return (
      <div className='login'>
        <TextField  label="Username" variant="standard"   
            error={!isValidUserName && isValidUserName!=null}   value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            onBlur={()=>setIsValidUserName(userName==import.meta.env.VITE_USERNAME)}
        />
        <TextField  type='password' label="Password" variant="standard"  
            error={!isValidPw && isValidPw!=null}  value={pw} 
            onChange={(e)=>setPw(e.target.value)}
            onBlur={()=>setIsValidPw(pw==import.meta.env.VITE_PW)}
        />
        <div>
            <Button variant="outlined" onClick={handleLogin}>Login</Button>
        </div>
        
      </div>
  )
}
