import React from 'react'
import { Main_Data } from "./Data";
import { Sparkles, Search, Signature } from 'lucide-react';
import { FaHeart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { GiBarrel } from "react-icons/gi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaEye } from "react-icons/fa6";

function Catagoery() {

    let data = Main_Data || null;



    return (
        <div className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
            style={{ backgroundImage: "url('/bgimg.jpg')" }}>
            <div className='w-[85%] h-[90%] backdrop-blur-[3px] overflow-hidden relative rounded-2xl' >
                <div className='w-full h-full bg-black/40 py-1'>
                    <div className='w-full h-[35px] mt-3 px-5 flex justify-between items-center'>
                        <div className='w-max h-max items-center flex'>
                            <div className='px-3 h-[30px] rounded-2xl bg-black/40 flex justify-center items-center gap-2'>
                                <Sparkles size={16} className='text-white' /><p className='text-white text-sm cursor-context-menu select-none'>MODELA</p></div>
                            <div className='w-[400px] h-[30px] ml-5 relative'>
                                <input type="text" className='w-full pl-4 pr-10 outline-0 text-white h-full rounded-2xl text-sm bg-black/40' />
                                <div className='absolute  text-white right-0 top-0 rounded-2xl cursor-pointer bg-white/20 w-[30px] h-full flex justify-center items-center'><Search size={18} /></div>
                            </div>
                        </div>
                        <div className='w-max h-max flex items-center'>
                            <div className='px-3 flex justify-center items-center gap-2 bg-black/40 rounded-2xl h-[30px]'>
                                <Signature size={16} className='text-white' /><p className='text-white text-sm cursor-context-menu select-none '>App</p></div>
                            <div className='w-[30px] ml-3 flex justify-center items-center gap-2 bg-black/40 rounded-2xl h-[30px] text-red-600'><FaHeart /></div>
                            <div className='w-[30px] ml-3 flex justify-center items-center gap-2 bg-black/40 rounded-2xl h-[30px] text-white'><MdShoppingBag /></div>
                            <div className='w-[135px] h-[30px] flex items-center gap-2 bg-black/40 rounded-2xl ml-3 relative select-none cursor-context-menu'>
                                <p className='text-sm text-white ml-3 '>Arham Shafi</p>
                                <div className='w-[30px] bg-black/40 rounded-2xl h-[30px] absolute top-0 right-0 '> <img className='w-full' src="/admin.png" alt="" /> </div>
                            </div>
                        </div>
                    </div>
                    {/* //////////////// */}
                    <div className='w-full h-[30px] mt-3 px-5 flex justify-center items-center gap-3 relative' >
                        <div className='w-[30px] h-[30px] rounded-full bg-black/40 flex justify-center items-center text-white'><GiBarrel /></div>
                        <h1 className='text-white select-none cursor-context-menu '>Selected Category : </h1>
                        <button className='py-1 px-3 group rounded-2xl flex items-center cursor-pointer gap-1 bg-black absolute left-6 text-sm text-white'>
                            <MdOutlineKeyboardBackspace className='group-hover:opacity-100 text-lg opacity-0 transition-all duration-200 ease-linear' />
                            <p className='translate-x-[-10px] group-hover:translate-x-0 transition-all duration-200 ease-out'>Back</p>
                        </button>
                    </div>
                    {/* ////////////////// */}
                    <div
                        className='w-[90%] mx-auto  h-[460px] mt-3 flex flex-wrap justify-evenly overflow-y-auto'
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitScrollbar: { display: 'none' }
                        }}
                    >
                        {
                            data[3].detail.map((ele, idx) => {
                                return (
                                    <div key={idx} className='w-[32%] group h-[48%] p-3 flex justify-center items-center bg-black/50 rounded-2xl mt-2'>
                                        <div className=' w-[90%] h-[80%] overflow-hidden rounded-2xl'>
                                            <div className='w-full h-full group-hover:scale-110 relative transition-all duration-200 ease-linear rounded-2xl overflow-hidden bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${ele.img})` }}>
                                                  <div className='absolute bg-black/80 w-full h-full opacity-0 z-10 group-hover:opacity-100 transition-all duration-200 ease-linear flex justify-center items-center gap-2 flex-col'>
                                                       <p className='text-white font-bold cursor-context-menu tracking-[1px]'>{ele.name}</p> 
                                                       <p className='text-green-500 font-bold cursor-context-menu tracking-[1px]'>{ele.price} $</p> 
                                                       {/*  */}
                                                       {/*  */}
                                                       <div className='w-[100px] h-[30px] text-white flex gap-3 transition-all duration-300 ease-in text-lg justify-center translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 items-center'>
                                                        <HiMiniShoppingCart className='cursor-pointer transition-all duration-200 hover:text-yellow-600 ease-linear'/>
                                                        <FaEye className='cursor-pointer transition-all duration-200 ease-linear hover:text-yellow-600'/>
                                                       </div>
                                                  </div>
                                            </div>
                                      
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </div>)
}

export default Catagoery