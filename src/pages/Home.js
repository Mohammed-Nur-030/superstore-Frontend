import React, { useEffect } from 'react'
import { BiSolidHandRight, BiSolidUser, BiSearch } from 'react-icons/bi';
import { ImCart } from 'react-icons/im'
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import 'swiper/css/autoplay';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../features/blogs/blogSlice';
import { getAllProducts } from '../features/products/productSlice';
import { getUserCart } from '../features/user/userSlice';
import { toast } from 'react-toastify';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

// const options = range(0, 1000).map((o) => `Item ${o}`);

const Home = () => {

    const blogState = useSelector((state) => state?.blog?.blog);
    const productState = useSelector((state) => state?.product?.product);
    const cartState = useSelector(state => state?.auth?.cartProduct)
    const navigate = useNavigate();
    console.log("blogState")
    console.log(blogState)
   
    // console.log(cartState?.cart?.length)
    const dispatch = useDispatch();
    const [paginate, setPaginate] = useState(true);
    const [productOpt, setProductOpt] = useState([]);



    useEffect(() => {
        getBlogs();
        getProducts();
        // console.log("homeToken")
        // console.log(localStorage.getItem("user"))
        // console.log(JSON.parse(localStorage.getItem("user")))
       
        if (JSON.parse(localStorage.getItem("user"))?.token) {
            // console.log("Inside Home IF")
           getCart();
        }
    }, [dispatch]);
  
 

    useEffect(() => {
        let data = [];
        for (let index = 0; index < productState?.product?.length; index++) {
            const element = productState?.product[index];
            data.push({ id: index, prod: element?._id, name: element?.title });
        }
        // console.log("data");
        // console.log(data);
        setProductOpt(data);
    }, [productState])
    console.log("productOpt")
    console.log(productOpt)


    const getBlogs = () => {
        dispatch(getAllBlogs());
    }
    const getProducts = () => {
        dispatch(getAllProducts());
    }
    const getCart = async() => {
        console.log("Iside getcart ")
        console.log(localStorage.getItem("user"))
         await dispatch( getUserCart());
        console.log("finsihed")
    }


    const [mobileMenu, setMobileMenu] = useState(false)
    const [mobileMenuSearch, setMobileMenuSearch] = useState(false)
    const testimonials = [
        {
            image: 'https://source.unsplash.com/800x600/?person',
            name: 'Sarah Johnson',
            description: 'I absolutely love the clothing I purchased from your website. The quality is top-notch, and the styles are trendy and unique. Highly recommended!'
        },
        {
            image: 'https://source.unsplash.com/800x600/?people',
            name: 'Michael Thompson',
            description: 'The clothes I bought from your store are fantastic. They fit perfectly and are incredibly comfortable. I\'ve received so many compliments. Thank you!'
        },
        {
            image: 'https://source.unsplash.com/800x600/?portrait',
            name: 'Emily Davis',
            description: 'I\'m amazed by the beautiful designs and attention to detail in your clothing. The fabrics are luxurious, and every piece makes me feel confident and stylish.'
        },
        {
            image: 'https://source.unsplash.com/800x600/?model',
            name: 'Daniel Wilson',
            description: 'Your clothing store is my go-to for all my fashion needs. The customer service is outstanding, and the delivery is always prompt. Great job!'
        },
        {
            image: 'https://source.unsplash.com/800x600/?fashion',
            name: 'Sophia Martinez',
            description: 'I can\'t get enough of the stunning dresses I bought from your website. The craftsmanship is excellent, and the prices are reasonable. I\'m a happy customer!'
        },
        {
            image: 'https://source.unsplash.com/800x600/?person',
            name: 'Aiden Harris',
            description: 'The clothing collection you offer is amazing. From casual wear to formal attire, you have it all. I appreciate the variety and the trendy options available.'
        },
        {
            image: 'https://source.unsplash.com/800x600/?people',
            name: 'Olivia Clark',
            description: 'Shopping from your clothing store has been a delightful experience. The website is user-friendly, and the ordering process is seamless. I\'m thrilled with my purchases!'
        },
        {
            image: 'https://source.unsplash.com/800x600/?portrait',
            name: 'Ethan Walker',
            description: 'I\'ve been recommending your clothing brand to all my friends. The quality, style, and affordability are unmatched. Keep up the fantastic work!'
        }
    ];
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
        toast.success("User Logged Out SucessFully")
    }


    return (
        <div>
            <div className="App ">

                <nav className='big-navbar  top-2 absolute w-full     z-10'>
                    <div className='   w-[95vw] flex justify-between px-4 mx-auto pb-3'>

                        <div className='offer text-sm pt-2'>
                            <span className='text-white'>UPTO 30% OFF ON ALL STYLES , Click here for </span> <BiSolidHandRight className=' inline-block inverted-image' /> <NavLink to="/" className='text-white hover:text-green-500'> More Details</NavLink>
                        </div>

                        <div className=' buttons flex items-center pt-2'>
                            <NavLink to='/login'>
                                <button className='nav-btn px-[10px] py-2  rounded-full hover:bg-green-500 text-white '>
                                    <BiSolidUser className='inline-block text-xl ' />
                                </button>
                            </NavLink>
                            <NavLink to="/cart">
                                <button className='nav-btn p-2 mx-2 rounded-full  text-sm hover:bg-green-500 text-white relative'>
                                    My Cart<ImCart className='inline-block text-sm ' />
                                    <div className="absolute top-[-10px] right-0 bg-white rounded-full w-6 h-6 text-black flex justify-center opacity-1 ">
                                        {(cartState?.cart?.length) ? (cartState?.cart?.length) : 0}
                                    </div>
                                </button>
                            </NavLink>
                        </div>

                    </div>

                    <div className=' nav-2  w-[95vw] flex  px-4 mx-auto'>
                        <div className='logo  border-pink-400'>
                            <NavLink to="/our-store">
                                <span className='font-bold text-md  sm:text-base md:text-xl lg:text-2xl text-yellow-500 hover:text-green-500'>
                                    MYSUPERSTORE
                                </span>
                            </NavLink>

                        </div>

                        <div className='search  mx-4 text-white'>

                            <div className=' flex items-center gap-2 '>
                                <BiSearch className='inline-block text-xl'
                                    onClick={() => setMobileMenuSearch(true)} />
                                {/* <span className=' search-text text-xl'>Search here</span> */}

                                <Typeahead
                                    className='text-black px-2 rounded-xl custom-dropdown 
                                       '

                                    inputProps={{
                                        style: {
                                            backgroundColor: '#f7f7f7', color: 'black', padding: '4px',
                                            borderRadius: '40px',
                                        },
                                    }}
                                    id="pagination-example"
                                    onPaginate={() => console.log('Results paginated')}
                                    // minLength={1}
                                    onChange={(selected) => {
                                        navigate(`/singleproduct/${selected[0].prod}`)
                                    }}
                                    paginate={paginate}
                                    labelKey={"name"}
                                    options={productOpt}
                                    placeholder="Search for Products here..."
                                />

                            </div>

                        </div>


                        <div className='navbar flex items-center  ml-auto'>
                            <ul className='  flex gap-3'>
                                <li className='hover:text-green-400 text-white cursor-pointer mx-2'><NavLink to="/">HOME</NavLink></li>
                                <li className='text-white hover:text-green-400 cursor-pointer mx-2'><NavLink to="/about">ABOUT</NavLink></li>
                                <li className='text-white hover:text-green-400 cursor-pointer mx-2'><NavLink to="/our-store">OUR STORE</NavLink></li>
                                <li className='text-white hover:text-green-400 cursor-pointer mx-2'><NavLink to="/contact">CONTACT</NavLink></li>
                                <button
                                    onClick={handleLogout}
                                    className='text-white hover:text-green-400 cursor-pointer mx-2'>
                                    LOGOUT
                                </button>
                            </ul>
                        </div>

                        <div className="hamburger-menu w-12  hidden " onClick={() => setMobileMenu(true)}>
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
                                        ><NavLink to="/">Home</NavLink></span>

                                    </li>
                                    <li className="py-2">

                                        <span
                                            onClick={() => {
                                                setMobileMenu(false);
                                            }}
                                            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                        ><NavLink to="/about">About</NavLink></span>

                                    </li>



                                    <li className="py-2">

                                        <span
                                            onClick={() => {

                                                setMobileMenu(false);
                                            }}
                                            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                        ><NavLink to="/our-store">OUR STORE</NavLink></span>

                                    </li>

                                    <li className="py-2">

                                        <span
                                            onClick={() => {

                                                setMobileMenu(false);
                                            }}
                                            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                        ><NavLink to="/contact">Contact</NavLink></span>

                                    </li>

                                    <li className="py-2">
                                        <span
                                            onClick={() => {
                                                document.getElementById('blog').scrollIntoView();
                                                setMobileMenu(false);
                                            }}
                                            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                                        >Blog</span>

                                    </li>
                                    <li className="py-2">
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                setMobileMenu(false)

                                            }
                                            }
                                            className='text-white hover:text-green-400 cursor-pointer mx-2'>
                                            LOGOUT
                                        </button>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity  ${mobileMenuSearch ? 'opacity-100 pointer-events-auto' : ''}`}>

                            <div className="absolute left-0 min-h-screen w-1/3 bg-primary py-4 px-8 shadow md:w-1/3 ">
                                <button
                                    className="absolute top-2 left-4 mt-4 mr-4"
                                    onClick={() => setMobileMenuSearch(false)}>
                                    <img src="images/icons8-x-50.png" className="h-10 w-auto inverted-image z-20" alt="close-menu" />
                                </button>
                            </div>
                            <div className="relative top-[120px] py-4 px-8 shadow  ">
                                <div className="text-white flex justify-items-center  ">
                                    <Typeahead
                                        className='px-12 '
                                        inputProps={{
                                            style: {
                                                backgroundColor: '#f7f7f7', color: 'black', padding: '4px',
                                                borderRadius: '40px',
                                            },
                                        }}
                                        id="pagination-example"
                                        onPaginate={() => console.log('Results paginated')}
                                        // minLength={1}
                                        onChange={(selected) => {
                                            navigate(`/singleproduct/${selected[0].prod}`)
                                        }}
                                        paginate={paginate}
                                        labelKey={"name"}
                                        options={productOpt}
                                        placeholder="Search for Products here..."
                                    />
                                </div>


                            </div>
                        </div>

                    </div>
                </nav>


                <div className="hero  w-full  flex justify-center     h-[95vh]   ">

                    <div className=" hero-1 w-2/3 h-full  overflow-hidden">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            speed={300}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false
                            }}
                            navigation={{
                                clickable: true,
                            }}

                            className="mySwiper ">
                            <SwiperSlide>
                                <div className="slide-1 h-full w-full flex justify-start items-center">
                                    <div className="carousel-caption pl-[20%]">
                                        <h3 className='text-white font-bold  py-2 text-4xl'>WOMEN'S
                                            FASHION
                                            <br />40% Off</h3>
                                        <NavLink to="/our-store" className="text-sm px-2 py-1 rounded-full bg-white hover:bg-green-500 hover:text-white  ">
                                            Shop Now
                                        </NavLink>

                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-2 h-full w-full flex justify-start items-center">
                                    <div className="carousel-caption pl-[20%]">
                                        <h3 className='text-white font-bold text-4xl py-2'>MEN'S
                                            FASHION
                                            <br />40% Off</h3>
                                        <NavLink to="/our-store" className="text-sm px-2 py-1 rounded-full bg-white hover:bg-green-500 hover:text-white  ">
                                            Shop Now
                                        </NavLink>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-3 h-full w-full flex justify-start items-center">
                                    <div className="carousel-caption pl-[20%]">
                                        <h3 className='text-white font-bold text-4xl py-2'>WOMEN'S
                                            FASHION
                                            <br />30% Off</h3>
                                        <NavLink to="/our-store" className="text-sm px-2 py-1 rounded-full bg-white hover:bg-green-500 hover:text-white  ">
                                            Shop Now
                                        </NavLink>

                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-4 h-full w-full flex justify-start items-center">
                                    <div className="carousel-caption pl-[20%]">
                                        <h3 className='text-white font-bold text-4xl py-2'>MEN'S FASHION
                                            <br />60% Off</h3>
                                        <NavLink to="/our-store" className="text-sm px-2 py-1 rounded-full bg-white hover:bg-green-500 hover:text-white  ">
                                            Shop Now
                                        </NavLink>

                                    </div>
                                </div>

                            </SwiperSlide>

                        </Swiper>
                    </div>

                    <div className=" hero-2 w-1/3 h-full  overflow-hidden">
                        <img src="images/left3.jpg" alt="" className=' object-cover  h-full w-full  ' />
                    </div>
                </div>


                <section className='py-6'>

                    <div className="container w-[80%] mx-auto py-5">

                        <div className=' py-3'>
                            <h3 className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold '>SHOP WITH
                                <span className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold text-green-500'> US</span>
                            </h3>
                            <p className='text-gray-500 '>Handpicked Favourites just for you</p>

                        </div>


                        <div className="flex  items-center justify-center ">
                            <div className="flex flex-wrap  py-5 gap-2 ">

                                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30   w-[48%] md:w-[30%]   lg:w-[15%] mx-auto rounded-2xl ">
                                    <div className=" h-full">
                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="images/suit.jpg" alt="suit" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                                    </div>
                                </div>

                                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30    w-[48%] md:w-[30%]   lg:w-[15%] mx-auto  rounded-2xl">
                                    <div className=" h-full">
                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="images/Shirt.jpg" alt="Shirt" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                                    </div>
                                </div>
                                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30   w-[48%] md:w-[30%]   lg:w-[15%] mx-auto  rounded-2xl">
                                    <div className=" h-full">
                                        <img className="h-full w-full object-cover  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="images/pants.jpg" alt="Pants" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                                    </div>
                                </div>
                                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30    w-[48%] md:w-[30%]   lg:w-[15%] mx-auto  rounded-2xl">
                                    <div className="h-full ">
                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="images/casuals.jpg" alt="Casuals" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                                    </div>
                                </div>

                                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30    w-[48%] md:w-[30%]   lg:w-[15%] mx-auto  rounded-2xl">
                                    <div className="h-full ">
                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="images/shoe.jpg" alt="" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                                    </div>
                                </div>
                                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30    w-[48%] md:w-[30%]   lg:w-[15%] mx-auto  rounded-2xl">
                                    <div className="h-full ">
                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="images/grid6.jpg" alt="Accesories" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section className='discount-1  p-6   bg-[#f4f4f4]'>
                    <div className="container  w-[80%]  mx-auto p-5 ">
                        <div className='discount-inside-1 flex justify-around gap-2'>
                            <div className="content  flex flex-col justify-center ">
                                <h3 className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold '>ALL BRANDED MEN'S SUITS ARE FLAT
                                    <span className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold text-green-500'>30% DISCOUNT</span>
                                </h3>
                                <p className='text-gray-500'>Visit our shop to see amazing creations from our designers.</p>

                                <button className='rounded-full bg-[#232020] text-white inline-block w-[100px] p-2 mx-auto mt-2 hover:bg-green-500'>
                                    Shop Now
                                </button>


                            </div>

                            <div className='image '>
                                <img src="images/1.jpg" alt="" className='rounded-md mx-auto' />

                            </div>
                        </div>

                    </div>
                </section>

                <section className='discount-2  '>
                    <div className="   ">
                        <div className=" discount-inside-2  flex justify-around h-[50vh]">
                            <div className="grid1 w-2/3 ">
                                <video className="grid1 w-full object-cover h-full z-10" src='/images/video-banner2.mp4' autoPlay loop muted></video>

                            </div>

                            <div className="grid2 w-1/3  flex flex-col justify-center items-center">
                                <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold pt-4'>ALL BRANDED WOMEN'S BAGS ARE FLAT
                                    <span className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-500'>30% DISCOUNT</span>
                                </h3>
                                <p className='text-gray-500'>Visit our shop to see amazing creations from our designers.</p>

                                <button className='rounded-full bg-[#232020] text-white inline-block w-[100px] p-2 mx-auto mt-2 hover:bg-green-500'>
                                    Shop Now
                                </button>



                            </div>
                        </div>

                    </div>

                </section>



                <section className="featured-wrapper  home-wrapper-2 py-8">
                    <div className="container w-[80vw] py-5 mx-auto">
                        <div className="flex  flex-col">
                            <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold ' >
                                SHOP
                                <span className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-500'> WITH </span>
                                US
                            </h3>
                            <p className='text-gray-500 pb-8'>Handpicked Favourites just for you</p>
                            <div className=" flex flex-row  flex-wrap mx-auto  gap-2 gap-y-6 justify-around ">
                                {
                                    productState?.product?.map((item, index) => {
                                        console.log(item.tags[0])
                                        if (item.tags[0] === "featured") {
                                            return (<ProductCard id={item._id} image1={item.images[0]?.url} image2={item.images[1]?.url} title={item.title} price={item.price} disPrice={(item.price) * 3 / 2} />)
                                        }
                                    })
                                }

                                {/* <ProductCard image1="images/shop-1.jpg" image2='images/shop-11.jpg' title='Women Maroom Top' price='999' disPrice='2000' />
                                <ProductCard image1="images/shop-2.jpg" image2='images/shop-22.jpg' title="Men's Pink Shirt" price='1999' disPrice='4000' />
                                <ProductCard image1="images/shop-3.jpg" image2='images/shop-33.jpg' title='Dark Blue Top' price='999' disPrice='3000' />
                                <ProductCard image1="images/shop-4.jpg" image2='images/shop-44.jpg' title='Women Tunic' price='1999' disPrice='4000' />
                                <ProductCard image1="images/shop-5.jpg" image2='images/shop-55.jpg' title='Yellow T-Shirt' price='499' disPrice='1200' />
                                <ProductCard image1="images/shop-6.jpg" image2='images/shop-66.jpg' title='Women Kurta' price='2999' disPrice='8000' />
                                <ProductCard image1="images/shop-7.jpg" image2='images/shop-77.jpg' title='White T-Shirt' price='499' disPrice='2000' />
                                <ProductCard image1="images/shop-8.jpg" image2='images/shop-88.jpg' title='Blue Sweater' price='1499' disPrice='4000' /> */}
                            </div>
                        </div>
                    </div>

                </section>

                <section className="banner h-[80vh] py-4 my-8 flex justify-center items-center" >
                    <div className="container ">
                        <div className=" flex flex-col justify-center items-center">
                            <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-white '>TONS OF PRODUCTS & OPTIONS TO
                                <span className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-500'>CHANGE</span>
                            </h3>
                            <p className='text-white'>Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit...</p>

                            <button className='rounded-full bg-white text-black inline-block w-[100px] p-2 mx-auto mt-2 hover:bg-green-500 hover:text-white'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </section>

                <section className="blog py-5 home-wrapper-2 ">
                    <div className="container w-[90vw] h-auto py-4 mx-auto">
                        <div className="flex  flex-col">
                            <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold ' >
                                LATEST BLOG
                                <span className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-500'>POSTS</span>
                            </h3>
                            <p className='text-gray-500'>Handpicked Favourites just for you</p
                            >
                            <div className="blog-container flex  flex-wrap gap-3 justify-center my-4 py-4 ">

                                {
                                    blogState?.allBlogs?.map((blog, index) => {
                                        return <BlogCard key={index} date={blog.createdAt} id={blog._id} description={blog.description} image={blog.images[0].url} />
                                    })
                                }
                            </div>
                        </div>
                    </div>


                </section>





                <section className="testimonial flex justify-center items-center bg-[#f4f4f4] py-5">
                    <div className="container w-[90vw] py-5 ">
                        <div className=" flex flex-col justify-center items-center py-5">
                            <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 '>CUSTOMERS
                                <span className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-500'>LOVE</span>
                            </h3>
                            <p className='text-gray-500'>What People Say</p>
                        </div>
                        <div className="slider-testimonial py-5">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                slidesPerView={1}
                                spaceBetween={40}
                                speed={300}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                }}


                                pagination={{
                                    clickable: true,
                                }}

                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1080: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }}



                                className="mySwiper "
                            >
                                <SwiperSlide className='bg-[#f4f4f4]'>
                                    <div className='slide bg-[#f4f4f4] mx-auto'>

                                        <div className='flex flex-col  md:relative   bg-[#f4f4f4]   relative'>

                                            <div className='absolute w-14 h-14 top-4'>
                                                <img src={testimonials[0].image} alt="" className='rounded-full mx-auto ' />

                                            </div>
                                            <div className='text-end mt-4 '>
                                                <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[0].name}</p>
                                            </div>

                                            <div className='bg-[#232020] rounded-md'>
                                                <div className='text-violet-400   mx-auto mt-3'>
                                                    <FaQuoteLeft className='mx-auto text-green-500' />
                                                </div>

                                                <div className='text-center mt-1 text-white'>
                                                    {testimonials[0].description}
                                                </div>

                                                <div className='text-violet-400 mx-auto mt-5'>
                                                    <FaQuoteRight className='mx-auto text-green-500' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='bg-[#f4f4f4]'>
                                    <div className='slide bg-[#f4f4f4] mx-auto'>

                                        <div className='flex flex-col  md:relative   bg-[#f4f4f4]   relative'>

                                            <div className='absolute w-14 h-14 top-4'>
                                                <img src={testimonials[1].image} alt="" className='rounded-full mx-auto ' />

                                            </div>
                                            <div className='text-end mt-4 '>
                                                <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[1].name}</p>
                                            </div>

                                            <div className='bg-[#232020] rounded-md'>
                                                <div className='text-violet-400   mx-auto mt-3'>
                                                    <FaQuoteLeft className='mx-auto text-green-500' />
                                                </div>

                                                <div className='text-center mt-1 text-white'>
                                                    {testimonials[1].description}
                                                </div>

                                                <div className='text-violet-400 mx-auto mt-5'>
                                                    <FaQuoteRight className='mx-auto text-green-500' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='bg-[#f4f4f4]'>
                                    <div className='slide bg-[#f4f4f4] mx-auto'>

                                        <div className='flex flex-col  md:relative   bg-[#f4f4f4]   relative'>

                                            <div className='absolute w-14 h-14 top-4'>
                                                <img src={testimonials[2].image} alt="" className='rounded-full mx-auto ' />

                                            </div>
                                            <div className='text-end mt-4 '>
                                                <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[2].name}</p>
                                            </div>

                                            <div className='bg-[#232020] rounded-md'>
                                                <div className='text-violet-400   mx-auto mt-3'>
                                                    <FaQuoteLeft className='mx-auto text-green-500' />
                                                </div>

                                                <div className='text-center mt-1 text-white'>
                                                    {testimonials[2].description}
                                                </div>

                                                <div className='text-violet-400 mx-auto mt-5'>
                                                    <FaQuoteRight className='mx-auto text-green-500' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='bg-[#f4f4f4]'>
                                    <div className='slide bg-[#f4f4f4] mx-auto'>

                                        <div className='flex flex-col  md:relative   bg-[#f4f4f4]   relative'>

                                            <div className='absolute w-14 h-14 top-4'>
                                                <img src={testimonials[3].image} alt="" className='rounded-full mx-auto ' />

                                            </div>
                                            <div className='text-end mt-4 '>
                                                <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[3].name}</p>
                                            </div>

                                            <div className='bg-[#232020] rounded-md'>
                                                <div className='text-violet-400   mx-auto mt-3'>
                                                    <FaQuoteLeft className='mx-auto text-green-500' />
                                                </div>

                                                <div className='text-center mt-1 text-white'>
                                                    {testimonials[3].description}
                                                </div>

                                                <div className='text-violet-400 mx-auto mt-5'>
                                                    <FaQuoteRight className='mx-auto text-green-500' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='bg-[#f4f4f4]'>
                                    <div className='slide bg-[#f4f4f4] mx-auto'>

                                        <div className='flex flex-col  md:relative   bg-[#f4f4f4]   relative'>

                                            <div className='absolute w-14 h-14 top-4'>
                                                <img src={testimonials[4].image} alt="" className='rounded-full mx-auto ' />

                                            </div>
                                            <div className='text-end mt-4 '>
                                                <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[4].name}</p>
                                            </div>

                                            <div className='bg-[#232020] rounded-md'>
                                                <div className='text-violet-400   mx-auto mt-3'>
                                                    <FaQuoteLeft className='mx-auto text-green-500' />
                                                </div>

                                                <div className='text-center mt-1 text-white'>
                                                    {testimonials[4].description}
                                                </div>

                                                <div className='text-violet-400 mx-auto mt-5'>
                                                    <FaQuoteRight className='mx-auto text-green-500' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='bg-[#f4f4f4]'>
                                    <div className='slide bg-[#f4f4f4] mx-auto'>

                                        <div className='flex flex-col  md:relative   bg-[#f4f4f4]   relative'>

                                            <div className='absolute w-14 h-14 top-4'>
                                                <img src={testimonials[5].image} alt="" className='rounded-full mx-auto ' />

                                            </div>
                                            <div className='text-end mt-4 '>
                                                <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[5].name}</p>
                                            </div>

                                            <div className='bg-[#232020] rounded-md'>
                                                <div className='text-violet-400   mx-auto mt-3'>
                                                    <FaQuoteLeft className='mx-auto text-green-500' />
                                                </div>

                                                <div className='text-center mt-1 text-white'>
                                                    {testimonials[5].description}
                                                </div>

                                                <div className='text-violet-400 mx-auto mt-5'>
                                                    <FaQuoteRight className='mx-auto text-green-500' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='bg-[#f4f4f4]'>
                                    <div className='slide bg-[#f4f4f4] mx-auto'>

                                        <div className='flex flex-col  md:relative   bg-[#f4f4f4]   relative'>

                                            <div className='absolute w-14 h-14 top-4'>
                                                <img src={testimonials[6].image} alt="" className='rounded-full mx-auto ' />

                                            </div>
                                            <div className='text-end mt-4 '>
                                                <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[6].name}</p>
                                            </div>

                                            <div className='bg-[#232020] rounded-md'>
                                                <div className='text-violet-400   mx-auto mt-3'>
                                                    <FaQuoteLeft className='mx-auto text-green-500' />
                                                </div>

                                                <div className='text-center mt-1 text-white'>
                                                    {testimonials[6].description}
                                                </div>

                                                <div className='text-violet-400 mx-auto mt-5'>
                                                    <FaQuoteRight className='mx-auto text-green-500' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='bg-[#f4f4f4]'>
                                    <div className='slide bg-[#f4f4f4] mx-auto'>

                                        <div className='flex flex-col  md:relative   bg-[#f4f4f4]   relative'>

                                            <div className='absolute w-14 h-14 top-4'>
                                                <img src={testimonials[7].image} alt="" className='rounded-full mx-auto ' />

                                            </div>
                                            <div className='text-end mt-4 '>
                                                <p className='tracking-wider font-bold text-base md:text-lg lg:text-xl capitalize'>{testimonials[7].name}</p>
                                            </div>

                                            <div className='bg-[#232020] rounded-md'>
                                                <div className='text-violet-400   mx-auto mt-3'>
                                                    <FaQuoteLeft className='mx-auto text-green-500' />
                                                </div>

                                                <div className='text-center mt-1 text-white'>
                                                    {testimonials[7].description}
                                                </div>

                                                <div className='text-violet-400 mx-auto mt-5'>
                                                    <FaQuoteRight className='mx-auto text-green-500' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>


                        </div>
                    </div>
                </section>

                <section className="updates  ">
                    <div className="updates-content flex mx-auto w-full h-[100vh]">
                        <div className="content w-1/2 flex justify-center items-center">
                            <div className="content  flex flex-col justify-center ">
                                <div className='w-[80%] mx-auto'>
                                    <h3 className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold  pt-4'>JOIN US FOR FREE TO GET INSTANT
                                        <span className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold text-green-500'> EMAIL UPDATES!</span>
                                    </h3>
                                    <p className='text-gray-500 py-6'>Subscribe and get notified at first on the latest update and offers!</p>

                                    <form action="#" method="post" className="flex ">
                                        <div className="flex w-full mx-auto py-4">
                                            <div className="input-container w-2/3  bg-[#f4f4f4] flex items-center ">
                                                <input type="email" name="" placeholder="Your email here" required="" className='mx-auto w-full h-full items-center bg-[#f4f4f4] outline-none px-3 ' />
                                            </div>
                                            <div className=" button-container w-1/3 py-4   bg-green-500 ">
                                                <button className="bt bg-green-500 text-white font-bold text-xl">Join</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>
                        <div className="background w-1/2 ">
                            <img src="images/11.jpg" alt="" className='h-full w-full object-cover' />

                        </div>
                    </div>

                </section>









            </div>
            <Footer></Footer>

        </div>
    )
}

export default Home
