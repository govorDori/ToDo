import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { v4 } from 'uuid';
import { addTodo } from '../utils';
import { useQueryClient } from '@tanstack/react-query';

export const AddTodo = () => {
  const [newTask,setNewTask] =useState('')

  const queryClient = useQueryClient()

  const handleAdd=async()=>{
    await addTodo({task:newTask})
    queryClient.invalidateQueries('todos')
    setNewTask('')

  }

  return (
    <div className="addTodo">
     <TextField label="Add new task" variant="filled" 
          sx={{backgroundColor:"white"}}
           value={newTask} 
          onChange={(e) =>setNewTask(e.target.value)}/>     
    <Button variant="contained" onClick={handleAdd} disabled={newTask.length == 0}>Add</Button>      
    </div>
  )
}


