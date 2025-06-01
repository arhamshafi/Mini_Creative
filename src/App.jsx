import React, { useState } from 'react'
import Home from './Home'
import Catagoery from "./Catagoery"
import { BrowserRouter , Routes , Route } from "react-router-dom"

function App() {
  let [ crt , setcart ] = useState(false)   
  //// crt button bnanaha 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home crt={crt} setsrt={setcart} />}></Route>
        <Route path='/Categorey/:id' element={<Catagoery crt={crt} setsrt={setcart}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App