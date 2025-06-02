import React, { useEffect, useState } from 'react'
import { Main_Data } from "./Data";
import { Sparkles, Search, Signature } from 'lucide-react';
import { FaHeart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { GiBarrel } from "react-icons/gi";
import { LuMoveLeft } from "react-icons/lu";
import { LuMoveRight } from "react-icons/lu";
import { PiStarFill } from "react-icons/pi";
import { BsArrowUpRight } from "react-icons/bs";
import Loader from './Loader';
import { Link } from 'react-router-dom';

function Home({setcart }) {

    let data = Main_Data

    let [load, setload] = useState(false)
    useEffect(() => {
        let timer = setTimeout(() => {
            setload(true)
        }, 1500)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    if (!load) {
        return (
            <div className='w-full flex-col flex justify-center items-center h-screen bg-white'>
                <Loader />
                <h1 className='text-md text-gray-600 mt-12 '>loading...🙇‍♂️</h1>
            </div>
        )
    }

    return (
        <div className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
            style={{ backgroundImage: "url('/bgimg.jpg')" }}>
            <div className='w-[85%] h-[90%] backdrop-blur-[3px] overflow-hidden relative rounded-2xl' >
                <div className='w-full h-full bg-black/40 py-1'>
                    <div className='w-full  h-[35px] mt-3 px-5 flex justify-between items-center'>
                        <div className='w-max h-max items-center flex'>
                            <div className='px-3 h-[30px] rounded-2xl bg-black/40 flex justify-center items-center gap-2 nav_1'>
                                <Sparkles size={16} className='text-white' /><p className='text-white text-sm cursor-context-menu  select-none'>MODELA</p></div>
                            <div className='w-[400px] h-[30px] ml-5 relative nav_2'>
                                <input type="text" placeholder="Search Here" className='w-full pl-4 pr-10 outline-0 text-white h-full rounded-2xl text-sm bg-black/40' />
                                <div className='absolute  text-white right-0 top-0 rounded-2xl cursor-pointer bg-white/20 w-[30px] h-full flex justify-center items-center'><Search size={18} /></div>
                            </div>
                        </div>
                        <div className='w-max h-max flex items-center'>
                            <div className='px-3 flex justify-center items-center nav_6 gap-2 bg-black/40 rounded-2xl h-[30px]'>
                                <Signature size={16} className='text-white' /><p className='text-white text-sm cursor-context-menu select-none '>App</p></div>
                            <div className='w-[30px] ml-3 flex justify-center nav_5 items-center gap-2 bg-black/40 rounded-2xl h-[30px] text-red-600'><FaHeart /></div>
                            <div className='w-[30px] ml-3 flex justify-center nav_4 items-center gap-2 bg-black/40 rounded-2xl h-[30px] text-white cursor-pointer' onClick={() => setcart(true)} ><MdShoppingBag /></div>

                            <div className='w-[135px] h-[30px] flex nav_3 items-center gap-2 bg-black/40 rounded-2xl ml-3 relative select-none cursor-context-menu'>
                                <p className='text-sm text-white ml-3'>Arham Shafi</p>
                                <div className='w-[30px] bg-black/40 rounded-2xl h-[30px] absolute top-0 right-0 '> <img className='w-full' src="/admin.png" alt="" /> </div>
                            </div>
                        </div>
                    </div>
                    {/* //////////////// */}
                    <div className='w-full h-[30px] mt-3 px-5 flex justify-between items-center ' >
                        <div className='w-[30px] h-[30px] rounded-full bg-black/40 flex justify-center items-center text-white'><GiBarrel /></div>
                        <ul className='w-max  gap-4 flex justify-between items-center '>
                            {
                                data.map((ele, idx) => {
                                    return (
                                        <Link key={idx} to={`/Categorey/${ele.id}`}>
                                            <li className='py-1 px-5 bg-black/40 text-white transition-all duration-200 li_anime ease-linear hover:bg-black/30 select-none cursor-pointer rounded-2xl'>{ele.about}</li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* ////////////////// */}
                    <div className='w-full h-[460px] mt-3 px-5 flex justify-between items-center '>
                        <div className='w-[32.7%] rounded-xl h-full bg-no-repeat overflow-hidden anime_10 bg-black/40 bg-cover bg-center' style={{ backgroundImage: "url(/h_img3.jpg)" }}>
                            <div className='w-full h-full bg-black/40 backdrop-blur-[3px] rounded-xl flex flex-col items-center transform will-change-transform'>
                                <div className=' bg-center bg-cover bg-no-repeat  w-[70%] h-[70%] rounded-xl mt-12 relative ' style={{ backgroundImage: "url(/h_img3.jpg)" }}>
                                    <div className='absolute top-2 right-2 bg-white/70 gap-2 py-1 px-2  rounded-2xl flex justify-center items-center'>
                                        <PiStarFill className='text-yellow-500' />
                                        <p className='text-black font-bold text-sm  cursor-context-menu'>4.8</p>
                                    </div>
                                    <div className='w-[100px] h-[40px] absolute bottom-2 right-2 flex justify-center gap-2 items-center '>
                                        <div className='w-[40px] flex justify-center items-center bg-white/70 rounded-full cursor-pointer hover:scale-110 transition-all duration-200 ease-out h-[40px] text-red-600'><FaHeart /></div>
                                        <div className='w-[40px] flex justify-center items-center bg-white/70 rounded-full cursor-pointer hover:scale-110 transition-all duration-200 ease-out h-[40px] text-black'><MdShoppingBag /></div>
                                    </div>

                                </div>
                                <div className=' bg-center bg-white/60  relative w-[90%] h-[50px] rounded-3xl mt-6' >
                                    <div className='w-[50px] h-[50px] rounded-full bg-black absolute top-0 left-[-1px] flex justify-center items-center text-white  text-2xl'><LuMoveLeft className='alanime' /></div>
                                    <p className='text-center text-black mt-4 font-bold text-sm tracking-[1px] cursor-context-menu'>Slide Left And Right</p>
                                    <div className='w-[50px] h-[50px] rounded-full bg-white absolute top-0 right-[-1px] flex justify-center items-center text-black text-2xl'><LuMoveRight className='aranime' /></div>

                                </div>
                            </div>

                        </div>
                        <div className='w-[32.7%] rounded-xl h-full  '>
                            <div className='w-full h-[66%] bg-black/40 nav_7 rounded-xl relative overflow-hidden'>
                                <img className='w-full h-full rounded-xl ' src="/h_img2.jpg" alt="" />
                                <div className='w-full h-full p-3 bg-black/30 absolute top-0 left-0'>
                                    <h1 className='text-white text-3xl tshw cursor-context-menu'>Great Values Deal</h1>
                                    <p className='text-white tshw mt-2 ml-1 text-sm cursor-context-menu'>Find Deal with 50%-60% OFF</p>
                                </div>
                                <div className='py-1 px-2 rounded-2xl bg-white/70 absolute bottom-3 left-3 flex justify-center items-center gap-2'><PiStarFill className='text-yellow-500' /> <p className='text-black font-bold text-sm  cursor-context-menu'>4.8</p> </div>
                            </div>
                            <div className='w-full flex anime_9 justify-between items-center p-3 h-[32%] bg-black/40 rounded-xl mt-2'>
                                <div className='w-[59%] h-full'>
                                    <button className='py-1 px-3 rounded-2xl bg-black/30 text-white text-sm cursor-context-menu'>Exclusive</button>
                                    <h1 className='text-white text-[15px] mt-3 tshw cursor-context-menu '>Elegance Meets Simplicity</h1>
                                    <p className='text-white/70 text-[12px] mt-2 cursor-context-menu '>Upgrade Your Room with Luxries or Elegance</p>
                                </div>
                                <div className='w-[40%]  h-full rounded-2xl overflow-hidden group'>
                                    <img className='w-full object-fit mt-[-40px] group-hover:scale-110 transition-all duration-200 ease-in' src="/h_img1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='w-[32.7%] rounded-xl h-full'>
                            <div className='w-full p-3 h-[32%] rounded-xl bg-black/40 box_1'>
                                {/* ////////////////////////////// */}
                                <div className='w-full h-[40px] flex justify-between items-center '>
                                    <button className='py-1 px-3 bg-white/30 rounded-2xl tshw text-white text-sm cursor-pointer hover:bg-white/20 transition-all duration-200 ease-linear'>Our Team</button>
                                    <button className='w-[35px] h-[35px] bg-white/30 rounded-full flex justify-center items-center cursor-pointer text-white text-xl hover:bg-white/20 transition-all duration-200 ease-linear'><BsArrowUpRight /></button>
                                </div>
                                <p className='text-white/80 text-md cursor-context-menu tracking-[1px] mt-2'> Our Team Design Minimalist Modern Furniture </p>
                                <div className='w-full h-[35px] flex justify-start items-center gap-2'>
                                    <div className='w-[30px] h-[30px] scale-100 hover:scale-110 transition-all duration-200 ease-linear bg-black/30 rounded-full overflow-hidden'><img className='w-full h-full' src="/adim2.png" alt="" /></div>
                                    <div className='w-[30px] h-[30px] scale-100 hover:scale-110 transition-all duration-200 ease-linear bg-black/30 rounded-full overflow-hidden'><img className='w-full h-full' src="/admin3.png" alt="" /></div>
                                    <div className='w-[30px] h-[30px] scale-100 hover:scale-110 transition-all duration-200 ease-linear bg-black/30 rounded-full overflow-hidden'><img className='w-full h-full' src="/admin4.jpeg" alt="" /></div>
                                    <div className='w-[30px] h-[30px] scale-100 hover:scale-110 transition-all duration-200 ease-linear bg-black/30 rounded-full overflow-hidden'><img className='w-full h-full' src="/admin5.jpeg" alt="" /></div>
                                </div>
                            </div>
                            <div className='w-full h-[32%] rounded-xl bg-black/40 mt-2 p-3 box_2'>
                                <div className='w-full h-[40px] flex justify-between items-center '>
                                    <button className='py-1 px-3 bg-white/30 rounded-2xl tshw cursor-pointer text-white text-sm hover:bg-white/20 transition-all duration-200 ease-linear'>Join Now</button>
                                    <button className='w-[35px] h-[35px] bg-white/30 rounded-full flex justify-center cursor-pointer items-center hover:bg-white/20 transition-all duration-200 ease-linear text-white text-xl'><BsArrowUpRight /></button>
                                </div>
                                <input type="text" className='w-[95%] border-b border-white outline-0 text-white mx-auto block mt-6'
                                    placeholder='E-mail'
                                />
                                <button className='w-[90%] h-[30px] rounded-xl bg-black tshw text-sm tracking-[1px] cursor-pointer hover:bg-black/80 active:scale-95 transition-all duration-200 ease-linear text-white block mx-auto mt-2'>Subscribe</button>
                            </div>
                            <div className='w-full h-[32%] rounded-xl bg-black/40 mt-2 p-3 relative box_3'>
                                <div className='w-full h-[40px] flex justify-between items-center '>
                                    <button className='py-1 px-3 bg-white/30 rounded-2xl tshw cursor-pointer text-white text-sm hover:bg-white/20 transition-all duration-200 ease-linear'>Our Shop</button>
                                    <button className='w-[35px] h-[35px] bg-white/30 rounded-full flex justify-center cursor-pointer items-center hover:bg-white/20 transition-all duration-200 ease-linear text-white text-xl'><BsArrowUpRight /></button>
                                </div>
                                <p className='text-white text-[12px] w-[60%] cursor-context-menu mt-3'> Web Devrs , Office No. __ , 2nd Floor, IT . Tower , Main Boulevard, Gulberg III , Lahore, Punjab , Pakistan</p>
                                <div className='w-[40%] h-[90px] absolute bottom-[-2px] right-0 overflow-hidden'>
                                    <div className='w-[90px] h-[70px] bg-white absolute bottom-0 right-8 z-10 rounded-xl rotate-[-15deg] overflow-hidden'> <img className='w-full h-full' src="lawn_1.jpg" alt="" /> </div>
                                    <div className='w-[90px] h-[70px] bg-white absolute bottom-0 right-2 z-20 rounded-xl rotate-[-10deg] overflow-hidden'> <img className='w-full h-full' src="lawn2.jpg" alt="" /> </div>
                                    <div className='w-[90px] h-[70px] bg-white absolute bottom-0 right-[-15px] z-30 rounded-xl rotate-[-5deg] overflow-hidden'> <img className='w-full h-full' src="lawn3.jpg" alt="" /> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>)
}

export default Home