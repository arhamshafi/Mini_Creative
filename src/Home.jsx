import React from 'react'
import { Main_Data } from "./Data";
import { Sparkles, Search, Signature, CircleUserRound } from 'lucide-react';
import { FaHeart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { GiBarrel } from "react-icons/gi";


function Home() {

    let data = Main_Data || null;

    return (
        <div className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
            style={{ backgroundImage: "url('/bgimg.jpg')" }}>
            <div className='w-[85%] h-[85%] backdrop-blur-[3px] overflow-hidden relative rounded-2xl' >
                <div className='w-full h-full bg-black/40 py-1'>
                    <div className='w-full h-[35px] mt-5 px-5 flex justify-between items-center'>
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
                                <p className='text-sm text-white ml-3'>Arham Shafi</p>
                                <div className='w-[30px] bg-black/40 rounded-2xl h-[30px] absolute top-0 right-0 '> <img className='w-full' src="/admin.png" alt="" /> </div>
                            </div>
                        </div>
                    </div>
                    {/* //////////////// */}
                    <div className='w-full h-[30px] mt-6 px-5 flex justify-between items-center ' >
                        <div className='w-[30px] h-[30px] rounded-full bg-black/40 flex justify-center items-center text-white'><GiBarrel /></div>
                        <ul className='w-max  gap-4 flex justify-between items-center '>
                            {
                                data.map((ele, idx) => {
                                    return (

                                        <li key={idx} className='py-1 px-5 bg-black/40 text-white transition-all duration-200 ease-linear hover:bg-black/30 select-none cursor-pointer rounded-2xl'>{ele.about}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* ////////////////// */}
                            <div className='w-full h-[390px] mt-6 px-5 flex justify-between items-center '>
                                <div className='w-[32.7%] rounded-xl h-full border'></div>
                                <div className='w-[32.7%] rounded-xl h-full'>
                                    <div className='w-full h-[66%] border rounded-xl'></div>
                                    <div className='w-full h-[30%] border rounded-xl mt-4'></div>
                                </div>
                                <div className='w-[32.7%] rounded-xl h-full'>
                                    <div className='w-full h-[32%] rounded-xl border'></div>
                                    <div className='w-full h-[32%] mt-2 rounded-xl border'></div>
                                    <div className='w-full h-[32%] mt-2 rounded-xl border'></div>
                                </div>
                            </div>

                </div>
            </div>
        </div>)
}

export default Home