import React from 'react'
import { TodoFooter } from './TodoFooter'
import {Box, List } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../utils'
import { Todo } from './Todo'

export const TodoList = () => {
  const {data,isLoading,isError,error}=useQuery({queryKey:['todos'],queryFn:getTodos})
  if(isLoading) return <div>Loading..</div>
  if(isError) return <div>Error: {error.message}</div>
  console.log(data.data);
  

  return (
    <div className="todolist"> 
      
      <Box sx={{width:'100%', maxWidth: 360, bgcolor: 'background.paper',borderRadius:"10px" }}>
       <List>
        {data.data.map(obj=>
            <Todo key={obj.id} {...obj}/>
            )}
        </List> 
      </Box>
      <TodoFooter nrTasks={data.data.filter(obj=>!obj.completed).length}/>
    </div>
  )
}

