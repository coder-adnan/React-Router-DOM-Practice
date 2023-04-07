import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Mainpage from './Mainpage'
import Services from './Services'
const App = ()=>{
    return(
        <>
        <Mainpage/>
        <div className='container'>
        <Routes>
        <Route path="/about" element = { <About />}/>
        <Route path="/home" element =  {<Home />} />
        <Route path="/home" element =  {<Services />} />
      </Routes>
      </div>
      </>
        )
}
export default App