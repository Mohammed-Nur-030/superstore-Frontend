import React, { useState, useHistory, useContext } from 'react'
import { BiSolidHandRight, BiSolidUser, BiSearch, BiSolidPhoneCall } from 'react-icons/bi';
import { LiaShippingFastSolid } from 'react-icons/lia'
import { GiRunningShoe, GiFirewall, GiSleevelessJacket, } from 'react-icons/gi';
import { BsFillBagHeartFill } from 'react-icons/bs'
import { FaRecycle } from 'react-icons/fa'
import { HiCurrencyRupee } from 'react-icons/hi'
import { ImCart } from 'react-icons/im'
import BreadCrum from '../components/BreadCrum';
import { Helmet } from 'react-helmet';
import { AppContext, useProductContext } from '../context/ProductContext';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';




const About = () => {
  const [mobileMenu, setMobileMenu] = useState(false)



  return (
    <div>


      <div className="about-hero w-full   flex justify-center  h-[65vh]  relative    ">

        <div className="banner-1 flex items-center justify-center  w-full h-full overflow-hidden absolute top-0 right-0">
          {/* <img src="images/bg1.jpg" alt="background" className=' object-cover h-full w-full  ' /> */}
          <div className='flex flex-col mt-7'>
            <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-center text-white '>About Us</h3>
            <div className=''>
              <Helmet>
                <title>About Us</title>
                <meta name="description" content="This is my page description." charSet='utf-8' />
              </Helmet>
              <BreadCrum title="About Us" />
            </div>
          </div>

        </div>


        <nav className='big-navbar  w-full   '>
          <div className='   w-[95vw] flex justify-between px-4 mx-auto pb-3'>

            <div className='offer text-sm pt-2'>
              <span className='text-white '>UPTO 30% OFF ON ALL STYLES , Click here for </span> <BiSolidHandRight className=' inline-block inverted-image' /> <NavLink to="/" className='text-white hover:text-green-500'> More Details</NavLink>
            </div>

            <div className=' buttons flex items-center pt-2'>
              <button className='nav-btn px-[10px] py-2  rounded-full hover:bg-green-500 text-white '>
                <BiSolidUser className='inline-block border-white text-xl ' />
              </button>

<NavLink to="/cart">

              <button className='nav-btn p-2 mx-2 rounded-full  text-sm hover:bg-green-500 text-white '>
                My Cart<ImCart className='inline-block text-sm ' />
              </button>
</NavLink>
            </div>

          </div>

          <div className=' nav-2  w-[95vw] flex  px-4 mx-auto'>
            <div className='logo'>
              <NavLink to="/">
                <span className='font-bold text-xs  sm:text-sm md:text-xl lg:text-2xl text-yellow-500 hover:text-green-500'>
                  MYSUPERSTORE
                </span>
              </NavLink>

            </div>

           


            <div className='navbar flex items-center  ml-auto'>
              <ul className='  flex gap-3'>
                <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><NavLink to="/">HOME</NavLink></li>
                <li className=' hover:text-green-400 cursor-pointer mx-2 text-green-500'><NavLink to="/about">ABOUT</NavLink></li>
                <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><NavLink to="/our-store">OUR STORE</NavLink></li>
                <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><NavLink to="/contact">CONTACT</NavLink></li>
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


                </ul>
              </div>
            </div>



          </div>
        </nav>
      </div>


      <section className='discount-1   py-8  '>
        <div className="container  w-full  mx-auto p-5 ">
          <div className='discount-inside-1 flex justify-around gap-2'>
            <div className="content  py-5 flex flex-col justify-center ">
              <h3 className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold py-4 '>ABOUT OUR SPRY
                <span className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold text-green-500'>STORE</span>
              </h3>
              <p className='text-gray-500'>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.</p>
              <br />
              <p className='text-gray-500'>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.</p>

              <button className='rounded-full bg-[#232020]  text-white inline-block  w-[100px] p-2 mx-auto mt-2 hover:bg-green-500'>
                Shop Now
              </button>



            </div>

            <div className='image  '>
              <img src="images/2.jpg" alt="" className='rounded-md object-cover h-full w-full ' />

            </div>
          </div>

        </div>
      </section>

      <section className="about-offer bg-[#f4f4f4] py-10">
        <div className="container about-offer-container flex w-[90vw] gap-4 mx-auto">
          <div className="w-1/3 about-offer-container-image">
            <img src="images/left2.jpg" alt="ad-img" className='h-full w-full object-cover' />
          </div>

          <div className=" about-offer-container-content w-2/3 flex justify-center items-center flex-col">
            <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 my-3 '>WHAT WE
              <span className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-500 my-3'>OFFER</span>
            </h3>
            <p className='text-gray-500'>Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit. Fuga, suscipit totam animi consequatur saepe blanditiis.</p>

            <div className="flex flex-wrap py-4">
              <div className="about-offer-point w-1/2 py-2">
                <h3 className='text-base md:text-base lg:text-xl xl:text-2xl font-bold text-gray-900 '>01. VISIT STORE</h3>
                <p className='text-gray-500'>Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur.</p>
              </div>
              <div className="about-offer-point w-1/2 py-2">
                <h3 className='text-base md:text-base lg:text-xl xl:text-2xl font-bold text-gray-900'>02.GIFT CARDS</h3>
                <p className='text-gray-500'>Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur.</p>
              </div>
              <div className="about-offer-point w-1/2 py-2">
                <h3 className='text-base md:text-base lg:text-xl xl:text-2xl font-bold text-gray-900 '>03. UNIQUE SHOP </h3>
                <p className='text-gray-500'>Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur.</p>
              </div>
              <div className="about-offer-point w-1/2 py-2">
                <h3 className='text-base md:text-base lg:text-xl xl:text-2xl font-bold text-gray-900 '>04. ADD to CART</h3>
                <p className='text-gray-500'>Lorem illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur.</p>
              </div>

            </div>
          </div>
        </div>


      </section>


      <section className="speciality h-[90vh] flex justify-center items-center">
        <div className="container h-full flex items-center justify-center ">

          <div className="flex flex-wrap justify-center items-center  h-[80%] w-[80%] mx-auto">

            <div className="speciality-content w-1/2 h-1/2  px-4  py-5 flex flex-col justify-center ">
              <h3 className='text-md md:text-md lg:text-base xl:text-xl font-bold text-white flex py-3'><GiRunningShoe className='text-green-500 mx-2 w-6 h-6' />  Let your footwear do the talking</h3>
              <p className='text-sm text-gray-200'> Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.</p>
            </div>
            <div className=" speciality-content w-1/2 h-1/2  px-4 py-5 flex flex-col justify-center">
              <h3 className='text-md md:text-md lg:text-base xl:text-xl font-bold text-white flex py-3'> <GiSleevelessJacket className='text-green-500 mx-2 w-6 h-6' />Trendy celebrity collections</h3>
              <p className=' text-sm text-gray-200'>Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.</p>
            </div>
            <div className=" speciality-content w-1/2 h-1/2  px-4 py-5 flex flex-col justify-center">
              <h3 className='text-md md:text-md lg:text-base xl:text-xl font-bold text-white flex py-3'> <GiFirewall className='text-green-500 mx-2 w-6 h-6' />Unique Designed Collecton</h3>
              <p className='text-sm text-gray-200'>Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.</p>
            </div>
            <div className=" speciality-content w-1/2 h-1/2  px-4 py-5 flex flex-col justify-center">
              <h3 className='text-md md:text-md lg:text-base xl:text-xl font-bold text-white flex py-3'> <BsFillBagHeartFill className='text-green-500 mx-2 w-6 h-6' />High Quality Footwear</h3>
              <p className='text-sm text-gray-200'>Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-store py-6  bg-[#f4f4f4]">
        <div className="container py-8 mx-auto">
          <div className="flex flex-col mx-auto    justify-center items-center ">
            <h3 className='text-green-500 '>WE ARE THE BEST</h3>
            <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900  pb-5 pt-0  my-0'>WHAT ARE WE
              <span className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-500 my-3'> OFFER</span>
            </h3>
            <div className="cards w-full flex flex-wrap mx-auto gap-2 py-6 h-[40vh] justify-center ">

              <div className='card-item flex flex-col w-1/5   justify-center items-center rounded-md bg-white hover:bg-green-200 cursor-pointer'>
                <div className='card-item-icon h-1/2 flex  justify-center  mb-0 pb-0 items-end'>
                  <BiSolidPhoneCall className=' text-green-500 h-14 w-14' />
                </div>
                <div className=' h-1/2 flex flex-col items-center justify-center '>
                  <h2 className='text-md md:text-md lg:text-base xl:text-xl  text-gray-900'>Call Us Anytime</h2>
                  <p className='text-gray-400 text-center'>Our dedicated helpline to receive assistance with your concerns.</p>
                </div>
              </div>

              <div className='card-item flex flex-col w-1/5   justify-center items-center rounded-md bg-white hover:bg-green-200 cursor-pointer'>
                <div className=' h-1/2 flex items-end justify-center '>
                  <LiaShippingFastSolid className='card-item-icon  text-green-500 h-14 w-14  ' />
                </div>
                <div className=' h-1/2 flex flex-col items-center justify-center '>

                  <h2 className='text-md md:text-md lg:text-base xl:text-xl  text-gray-900'>*Free Shipping </h2>
                  <p className='text-gray-400 text-center'>Free Shipping on all of your orders above &#8377;1000 </p>
                </div>
              </div>

              <div className='card-item flex flex-col w-1/5  justify-center items-center rounded-md  bg-white hover:bg-green-200 cursor-pointer'>
                <div className=' h-1/2 flex items-end justify-center '>
                  <FaRecycle className='card-item-icon  text-green-500 h-14 w-14' />
                </div>
                <div className=' h-1/2 flex flex-col items-center justify-center '>

                  <h2 className='text-md md:text-md lg:text-base xl:text-xl  text-gray-900'>Easy Returns</h2>
                  <p className='text-gray-400 text-center'>We offer hassle-free returns on all products.</p>
                </div>
              </div>

              <div className='card-item flex flex-col w-1/5   justify-center items-center rounded-md  bg-white hover:bg-green-200 cursor-pointer'>
                <div className=' h-1/2 flex items-end justify-center '>
                  <HiCurrencyRupee className='card-item-icon  text-green-500 h-14 w-14 ' />
                </div>
                <div className=' h-1/2 flex flex-col items-center justify-center '>
                  <h2 className='text-md md:text-md lg:text-base xl:text-xl text-gray-900 '>Secured Payments</h2>
                  <p className='text-gray-400 text-center'>Shop with confidence your payments are safe and secure. </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      <Footer></Footer>





    </div>
  )
}

export default About
