import { Button } from '@mui/material'
import React from 'react'

export const Logout = ({setIsLoggedIn}) => {
  return (
        <Button 
         sx={{position:'fixed',top:'5px',right:'5px',backgroundColor:'white'}}
          variant="outlined" onClick={()=>setIsLoggedIn(false)}>
          Logout
        </Button>
   
  )
}
