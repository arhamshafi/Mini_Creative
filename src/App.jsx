// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Catagoery from './Catagoery';
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { useContext } from 'react';
import { appContext, CartProvider } from './Context';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";

function CartModal() {
  const { state, dispatch } = useContext(appContext);

  function quantity_change( clicked_items , updated_quantity ){
      dispatch( {type : "quantity_change" , payload : { item : clicked_items , quan : updated_quantity } })
  }
  

  return (
    <>
      <div className={`fixed top-0 ${state.isCartOpen ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-300 ease-linear  left-0 bg-black/60 w-full h-full`} onClick={() => dispatch({ type: 'close_cart' })}></div>
      <div className={`w-full h-[350px]  ${state.isCartOpen ? "bottom-0" : "bottom-[-350px]"} bg-yellow-900/95 p-3 fixed left-0 transition-all duration-300 ease-in-out`}>

        {/* ////////// */}

        {
          state.cartItems.length === 0 ? (
            <div className='w-full h-full flex justify-center items-center flex-col gap-2 cursor-context-menu'>
              <FaCartArrowDown className='text-white/80 text-6xl' />
              <h1 className='capitalize text-xl tracking-[1px] font-bold text-white/80'>No haven't add any item</h1>
              <button className='py-1 px-2 bg-black text-white tracking-[1px] rounded-lg mt-4 active:scale-95 transition-all duration-200 ease-linear cursor-pointer shadow-lg'
                onClick={() => dispatch({ type: "close_cart" })} >Close</button>
            </div>
          )
            : (
              <>
                <HiMiniShoppingCart className='cursor-context-menu text-white inline-block text-2xl' />
                <h1 className='text-lg text-white tshw tracking-[2px] font-bold inline-block cursor-context-menu ml-3'>Your Selected Items</h1>
                <FaXmark className='absolute top-3 right-4 text-white text-2xl cursor-pointer hover:text-red-500 transition-all duration-100 ease-linear'
                  onClick={() => dispatch({ type: 'close_cart' })}
                />
                <div className="relative bg-white/10 backdrop-blur-sm mt-5 rounded-lg border border-white/30 shadow-lg">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white/60 to-transparent pointer-events-none z-10 rounded-t-lg"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white/60 to-transparent pointer-events-none z-10 rounded-b-lg"></div>
                  <div className='w-full h-[230px] mt-5 px-2 py-2 flex justify-start gap-2 flex-wrap overflow-auto custom-scrollbar '>
                    {
                      state.cartItems.map((ele, idx) => (
                        <div key={idx} className='w-[322px] select-none h-[100px] rounded-2xl group bg-white/50 flex justify-center items-center gap-5 relative'>
                          <div className='w-[80px] rounded-xl  h-[80px] overflow-hidden'><img className='w-full group-hover:scale-110 transition-all duration-200 ease-linear h-full' src={ele.img} alt="" /></div>
                          <div className='w-[200px] rounded-xl h-[90%] '>
                            <p className='text-md mt-1 cursor-context-menu text-black'>{ele.name}</p>
                            <p className='text-sm mt-2 cursor-context-menu text-black/50'>$ {ele.price}</p>
                            <div className='w-max flex justify-start items-center gap-3 text-sm mt-1'>
                              <FaMinus className='cursor-pointer select-none hover:text-red-700' onClick={() => quantity_change(ele , ele.quantity - 1) } />
                              <p className='cursor-context-menu text-lg select-none'>{ele.quantity}</p>
                              <FaPlus className='cursor-pointer select-none hover:text-green-700' onClick={() => quantity_change(ele , ele.quantity + 1) } />
                            </div>
                          </div>
                          <FaXmark className='absolute top-2 hover:text-red-700 cursor-pointer right-2' onClick={()=>dispatch({ type : "del" , payload : ele.un_id })} />
                        </div>
                      ))
                    }
                  </div>
                </div>

                <div className='absolute bottom-0 select-none text-white right-3 w-[200px] h-[30px] m-0 cursor-context-menu font-bold tshw tracking-[1px] flex justify-start items-center gap-2'>
                  <p >Total Price : </p>
                  <p className='text-green-500 tshg '>$ {state.total_amount} </p>
                </div>
              </>
            )
        }


        {/* /////// */}
      </div>
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categorey/:id" element={<Catagoery />} />
        </Routes>
        <CartModal />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
