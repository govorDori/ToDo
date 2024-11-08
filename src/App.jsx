import { useState } from 'react'
import {Header} from './components/Header'
import {AddTodo} from './components/AddTodo'
import {TodoList} from './components/TodoList'
import './App.css'
import { Login } from './components/Login'
import { Logout } from './components/Logout'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(true)

  return (
    <QueryClientProvider client={queryClient}>
    <div className='app'>
      <Header/> 
      {isLoggedIn ?
      <>
          <AddTodo />
          <TodoList />
          <Logout setIsLoggedIn={setIsLoggedIn}/>
        </>
        :
        <Login setIsLoggedIn={setIsLoggedIn}/>
      }

    </div>
    </QueryClientProvider>
  )
}

export default App
