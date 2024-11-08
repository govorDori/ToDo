import React from 'react'

export const TodoFooter = ({nrTasks}) => {
  return (
    <div style={{position:'fixed', bottom:'10px', right: '10px', color:'white', fontSize:'20px'}} className='todofooter'>
     Tasks left: {nrTasks}
    </div>
  )
}
