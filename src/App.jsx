import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import About from './Component/About'
import Contact from './Component/Contact'
import Service from './Component/Service'
import Home from './Component/Home'

const App = () => {
  return (
   <>
      <BrowserRouter>
         <Routes>
             <Route path='/'  element={<Home/>}/>
             <Route path='/about'  element={<About/>}/>
             <Route path='/contact'  element={<Contact/>}/>
             <Route path='/service'  element={<Service/>}/>
             

         </Routes>
      
      
      </BrowserRouter>
   
   </>
  )
}

export default App

