import React, { useReducer, useState } from 'react'
import Home from './Home'
import Catagoery from "./Catagoery"
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { BrowserRouter , Routes , Route } from "react-router-dom"

// let initial_state = 

// function reducerfunction( state , action ){

// }

function App() {
  let [ crt , setcart ] = useState(false)   
  // let [state , dispatch] = useReducer(reducerfunction , initial_state)
  //// crt button bnanaha 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home setcart={setcart}/>}></Route>
        <Route path='/Categorey/:id' element={<Catagoery setcart={setcart}/>}></Route>
      </Routes>
            <>
            <div className={`fixed top-0 ${ crt ? "visible opacity-100" : "invisible opacity-0" } transition-all duration-300 ease-linear  left-0 bg-black/60 w-full h-full`}></div>
            <div className={`w-full h-[300px]  ${ crt ? "bottom-0" : "bottom-[-300px]" } bg-yellow-900/95 p-3 fixed left-0 transition-all duration-300 ease-in-out`}>
              <HiMiniShoppingCart className=' cursor-context-menu text-white inline-block text-2xl' />
              <h1 className='text-lg text-white tshw tracking-[2px] font-bold inline-block cursor-context-menu ml-3'>Your Selected Items</h1>
              <FaXmark className='absolute top-3 right-4 text-white text-2xl cursor-pointer hover:text-red-500 transition-all duration-100 ease-linear' onClick={()=>setcart(false)}/>
              <div className='w-full h-[230px] border mt-5'></div>
            </div>
            </>
    </BrowserRouter>
    </>
  )
}

export default App