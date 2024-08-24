
import './App.css'

import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import HomePage from './components/HomePage'

function App() {
  
  return (
    <>
  
    <Routes>
      <Route path='/' element={ <Navbar/>} >
     
      <Route index element={ <HomePage/>}/>
      
      </Route> 
      
    </Routes>
    
    </>
  )
}

export default App
