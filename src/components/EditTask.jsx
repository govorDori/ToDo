import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { updateTask } from '../utils';

export const EditTask=({open,setOpen,id,task})=> {
    const [updatedTask,setUpdatedTask]=useState(task)
    const queryClient=useQueryClient()

  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate=async()=>{
    await updateTask(id,{task:updatedTask})
    queryClient.invalidateQueries('todos')
    handleClose()
  }

  return (
    <React.Fragment>
     
      <Dialog   open={open}  onClose={handleClose}      >
        <DialogTitle>Edit task</DialogTitle>
        <DialogContent>
        
          <TextField
            autoFocus
            required
            margin="dense"
           fullWidth
            variant="standard"
            value={updatedTask}
            onChange={(e)=>setUpdatedTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
