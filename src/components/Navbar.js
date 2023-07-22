import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext';
import ReactStars from 'react-rating-stars-component'
import { BiSolidHandRight, BiSolidUser, BiSearch, BiSolidPhoneCall } from 'react-icons/bi';
import { LiaShippingFastSolid } from 'react-icons/lia'
import { GiRunningShoe, GiFirewall, GiSleevelessJacket, } from 'react-icons/gi';
import { BsFillBagHeartFill } from 'react-icons/bs'
import { FaRecycle } from 'react-icons/fa'
import { HiCurrencyRupee } from 'react-icons/hi'
import { ImCart } from 'react-icons/im'
import { FaCheck } from 'react-icons/fa';
import AddToCart from '../components/AddToCart';
import {BiMenu} from 'react-icons/bi'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <div>
      
<div className="about-hero w-full   flex justify-center    relative    ">
            <nav className='big-navbar  w-full  bg-gray-800  pb-3 '>
                <div className='   w-[95vw] flex justify-between px-4 mx-auto pb-3'>

                    <div className='offer text-sm pt-2'>
                        <span className='text-white '>UPTO 30% OFF ON ALL STYLES , Click here for </span> <BiSolidHandRight className=' inline-block inverted-image' /> <a href="/" className='text-white hover:text-green-500'> More Details</a>
                    </div>

                    <div className=' buttons flex items-center pt-2'>
                        <button className='nav-btn px-[10px] py-2  rounded-full hover:bg-green-500 text-white '>
                            <BiSolidUser className='inline-block border-white text-xl ' />
                        </button>

                        <button className='nav-btn p-2 mx-2 rounded-full  text-sm hover:bg-green-500 text-white '>
                            My Cart<ImCart className='inline-block text-sm ' />
                        </button>
                    </div>

                </div>

                <div className=' nav-2  w-[95vw] flex  px-4 mx-auto'>
                    <div className='logo'>
                        <a href="#">
                            <span className='font-bold text-xs  sm:text-sm md:text-xl lg:text-2xl text-yellow-500 hover:text-green-500'>
                                MYSUPERSTORE
                            </span>
                        </a>

                    </div>

                    <div className='search  mx-4 text-white'>
                        <a href="#">
                            <div className=' flex items-center gap-2 '>
                                <BiSearch className='inline-block text-2xl ' />
                                <span className=' search-text text-xl'>Search here</span>
                            </div>
                        </a>
                    </div>


                    <div className='navbar flex items-center  ml-auto'>
                        <ul className='  flex gap-3'>
                            <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><a href="/">HOME</a></li>
                            <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><a href="/about">ABOUT</a></li>
                            <li className=' hover:text-green-400 cursor-pointer mx-2 text-green-500'><a href="/our-store">OUR STORE</a></li>
                            <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><a href="/contact">CONTACT</a></li>
                        </ul>
                    </div>

                    <div className="hamburger-menu w-12 0 hidden " onClick={() => setMobileMenu(true)}>
                        <img src="images/icons8-menu.svg" alt="" className='inverted-image w-14 h-8  object-cover ' />
                    </div>
                    <div className={`pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity border-4 border-white ${mobileMenu ? 'opacity-100 pointer-events-auto' : ''}`}>

                        <div className="absolute left-0 min-h-screen w-1/3 bg-primary py-4 px-8 shadow md:w-1/3">
                            <button
                                className="absolute top-2 left-4 mt-4 mr-4"
                                onClick={() => setMobileMenu(false)}>
                                <img src="images/icons8-x-50.png" className="h-10 w-auto inverted-image z-20" alt="close-menu" />
                            </button>
                        </div>
                        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3 ">


                            <ul className="mt-8 flex flex-col">

                                <li className="py-2">

                                    <span
                                        onClick={() => {
                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><a href="/">Home</a></span>

                                </li>
                                <li className="py-2">

                                    <span
                                        onClick={() => {
                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><a href="/about">About</a></span>

                                </li>



                                <li className="py-2">

                                    <span
                                        onClick={() => {

                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><a href="/our-store">OUR STORE</a></span>

                                </li>

                                <li className="py-2">

                                    <span
                                        onClick={() => {

                                            setMobileMenu(false);
                                        }}
                                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                    ><a href="/contact">Contact</a></span>

                                </li>


                            </ul>
                        </div>
                    </div>



                </div>
            </nav>
</div>
    </div>
  )
}

export default Navbar
