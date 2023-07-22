
import { NavLink, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import React, { useState, useEffect } from 'react'
import { BiSolidHandRight, BiSolidUser, BiSearch, BiSolidPhoneCall } from 'react-icons/bi';
import { ImCart } from 'react-icons/im'

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, getUserCart, updateCartItem } from "../features/user/userSlice";
import Signup from './Signup'

const Cart = () => {
   
    const [mobileMenu, setMobileMenu] = useState(false)
    const [totalAmount, setTotalAmount] = useState(null)
    const dispatch=useDispatch();
    const navigate=useNavigate()

    
    const cartState=useSelector(state=>state?.auth?.cartProduct)
    
    useEffect(()=>{
            dispatch(getUserCart()); 
    },[dispatch,localStorage.getItem("user")?.token])
    
     useEffect(()=>{
            let sum=0;
            
            for (let index = 0; index < cartState?.cart?.length; index++) {

                sum=sum+(Number(cartState.cart[index].amount))*cartState.cart[index].price;
                
            }
            setTotalAmount(sum);
        },[dispatch])
        // console.log("totalAmount")
        // console.log(totalAmount)
        const deleteACartProduct=(id)=>{
            dispatch(deleteCartItem(id))
            setTimeout(()=>{
                dispatch(getUserCart());
            },200)
    }
//  const updateACartProduct=(id)=>{
//             // dispatch(updateCartItem({cartItemId:id,quantity:}))
//             setTimeout(()=>{
    //                 dispatch(getUserCart());
    //         },200)
    //     }
    
    // console.log("cartState")
    // console.log(cartState)
    
    
    if (!localStorage.getItem("user")) {
        return( <Signup></Signup>)
    }
    
    if (cartState?.cart?.length === 0) {
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

                                <NavLink to="/cart">
                                    <button className=' p-2 mx-2 rounded-full  text-sm bg-green-500 text-white linear flex justify-center items-center gap-1 '>
                                        My Cart<ImCart className='inline-block text-sm ' />
                                    </button>
                                </NavLink>
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
                <div className="empty-cart">
                    <div className="py-10 flex flex-col justify-center items-center ">

                        <motion.img
                            src="images/empty-cart.jpg"
                            alt="Floating Image"
                            style={{
                                position: "relative",
                                top: 0,
                            }}
                            animate={{
                                y: [-10, 10, -10], // Values for the y-axis animation
                            }}
                            transition={{
                                duration: 2, // Duration of each animation cycle in seconds
                                repeat: Infinity, // Repeat the animation indefinitely
                                repeatType: "reverse", // Reverse the animation after each cycle
                            }}
                            className="empty-cart-img w-[30vw]  my-4"
                        />

                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold text-2xl text-gray-900 text-center py-3">No Items In Cart</p>
                            <p className=" text-gray-400 text-center">Before proceed to check out you must add some products to your shopping cart.</p>
                            <p className=" text-gray-400 text-center">You will find a lot of interesting products on our website.</p>
                            <div className="py-4 flex justify-center items-center">
                            <NavLink to="/">
                                <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-700">
                                    Shop Now
                                </button>
                            </NavLink>
                            </div>
                        </div>



                        {/* <img src="images/empty-cart.jpg" alt="" className="h-full w-full" /> */}
                    </div>

                </div>
            </div>
        );
    }
    return (
        <section className="my-cart">


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

                            <button className='p-2 mx-2 rounded-full  text-sm bg-green-500 text-white linear flex justify-center items-center gap-1  '>
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





            <div className="container w-[70%] mx-auto py-8 ">
                <div className="cart_heading flex gap-2  font-semibold">
                    <p className="w-1/5   text-center">Item</p>
                    <p className="w-1/5   text-center">Price</p>
                    <p className="w-1/5   text-center">Quantity</p>
                    <p className="w-1/5   text-center">Subtotal</p>
                    <p className="w-1/5   text-center">Remove</p>
                </div>
                <div className="border-[1px] border-gray-400"></div>
                <div className="cart-item py-4">
                    {cartState?.cart?.map((curElem) => {
                        console.log("curElem")
                        console.log(curElem)
                        return <CartItem key={curElem._id} {...curElem} deleteACartProduct={deleteACartProduct}/>;
                    })}
                    {
                        console.log(cartState)
                    }
                </div>
                {/* <hr /> */}
                <div className="cart-two-button flex justify-around py-4">
                    <NavLink to="/products">
                        <button className="px-2 py-1 bg-green-400 text-white hover:bg-green-500 rounded-full"> continue Shopping </button>
                    </NavLink>
          
                </div>

                {/* order total_amount */}
                <div className="order-total--amount  flex  px-5  py-5">
                    <div className="order-total--subdata   rounded-md bg-gray-300 px-5 py-5 ">
                        <div className="flex flex-wrap gap-2 py-2">
                            <p className="font-semibold text-gray-500">subtotal:</p>
                            <p className="font-semibold">
                                &#8377;{totalAmount? totalAmount: 0}
                            </p>
                        </div>
                        <div  className="flex flex-wrap gap-2 py-2">
                            <p  className="font-semibold text-gray-500">shipping fee:</p>
                            <p className="font-semibold">
                               &#8377;{
                                totalAmount>1000 ?49 : 99
                               }
                            </p>
                        </div>
                        <hr />
                        <div  className="flex flex-wrap gap-2">
                            <p  className="font-semibold text-gray-500">order total:</p>
                            <p className="font-semibold">
                                &#8377;{ totalAmount>1000 ?49 : 99 + (totalAmount? totalAmount: 0)}
                            </p>
                        </div>
                    </div>
                </div>
                    <div className="mx-auto">
                    <NavLink to="/checkout">
                    <button
                    className="ml-6 py-2 px-2 bg-green-400  text-white rounded-full hover:bg-green-600">
                        Checkout
                    </button>
                    </NavLink>
        </div>
            </div>
            <Footer></Footer>
        </section>
    );
};
export default Cart;