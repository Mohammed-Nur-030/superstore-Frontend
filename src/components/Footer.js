import React from 'react'


import {  FaGooglePlusG } from 'react-icons/fa';

import { BsInstagram, BsTwitter, BsFacebook, } from 'react-icons/bs';
import { FaCcPaypal, FaCcVisa, FaCcMastercard, } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <section className="footer py-5 bg-[#232020]">
        <div className="container w-[90vw] py-8 my-3 flex flex-col mx-auto">

          <div className="footer-wrapper flex py-5">
            <div className="footer-wrapper-1 w-1/3 flex flex-col py-5 ">
              <div className=" flex flex-col justify-center items-center">
                <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-white p-4  '>MY SUPER
                  <span className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-500 '> STORE</span>
                </h3>
                <p className=' text-[#a09292]'>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus a ligula quam. Ut blandit eu leo non suscipit.</p>
              </div>
              <div className="icons p-4">
                <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-green-500 cursor-pointer'>
                  <BsInstagram className='w-5 h-5 text-white' />
                </div>
                <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-green-500 cursor-pointer'>
                  <BsTwitter className='w-5 h-5 text-white' />
                </div>
                <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-green-500 cursor-pointer'>
                  <BsFacebook className='w-5 h-5 text-white' />
                </div>
                <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-green-500 cursor-pointer'>
                  <FaGooglePlusG className='w-5 h-5 text-white' />
                </div>

              </div>
            </div>
            <div className="footer-wrapper-2 w-2/3 flex-flex-col py-5">
              <div className="heading">
                <h1 className='text-3xl leading-10 text-white font-bold'>Women's Day Special Offer All Branded Sandals are Flat 50% Discount</h1>
              </div>
              <div className="links flex  gap-4 py-2  px-4">
                <div className="usefull-links w-1/2">
                  <h2 className='text-xl leading-10 text-white text-start cursor-pointer  py-2'>USEFUL LINKS</h2>
                  <div className="flex ">
                    <div className="w-1/2 flex flex-col justify-start ">
                      <ul className='text-md leading-10  text-white '>
                        <li className='text-start cursor-pointer text-[#a09292]'><a href="" className='hover:text-green-500'>Home</a></li>
                        <li className='text-start cursor-pointer text-[#a09292]'><a href="" className='hover:text-green-500'>About</a></li>
                        <li className='text-start cursor-pointer text-[#a09292]'><a href="" className='hover:text-green-500'>Blog</a></li>
                        <li className='text-start cursor-pointer text-[#a09292]'><a href="" className='hover:text-green-500'>Contact</a></li>
                      </ul>
                    </div>
                    <div className="w-1/2 flex flex-col justify-start ">
                      <ul className=' text-md leading-10 text-white  '>
                        <li className='text-start cursor-pointer text-[#a09292]'><a href="" className='hover:text-green-500'>Careers</a></li>
                        <li className='text-start cursor-pointer text-[#a09292]'><a href="" className='hover:text-green-500'>Privacy Policy</a></li>
                        <li className='text-start cursor-pointer text-[#a09292]'><a href="" className='hover:text-green-500'>Terms and Conditions</a></li>
                        <li className='text-start cursor-pointer text-[#a09292]'><a href="" className='hover:text-green-500'>Support</a></li>
                      </ul>
                    </div>

                  </div>

                </div>
                <div className="our-store-main w-1/2 text-start cursor-pointer  ">
                  <div className="flex flex-col m-2 py-2">
                    <div className="our-store py-2">
                      <h2 className='text-xl leading-10 text-white '>OUR STORE</h2>
                      <p className='text-[#a09292]'>49436 Broaddus Honey Court Avenue, Madisonville KY 95020, United States of America</p>
                    </div>

                    <div className="we-accept">
                      <h2 className='text-xl leading-10 text-white py-2 '>WE ACCEPT:</h2>
                      <div className=" icons-payment flex flex-wrap ">
                        <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-green-500 cursor-pointer mx-3'>
                          <FaCcVisa className=' w-6 h-6 text-white' />
                        </div>
                        <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-green-500 cursor-pointer mx-3'>
                          <FaCcPaypal className=' w-6 h-6 text-white' />
                        </div>
                        <div className=' inline-block rounded-full p-3 m-2 bg-[#3a3535] hover:bg-green-500 cursor-pointer mx-3'>
                          <FaCcMastercard className=' w-6 h-6 text-white' />
                        </div>

                      </div>


                    </div>

                  </div>


                </div>
              </div>
            </div>


          </div>
          <hr className=' bg-gray-800' />
          <div className='footer-final flex m-3 py-4'>
            <div className="w-1/2 footer-final-content">
              <ul className=' flex gap-3 text-md leading-10 text-white '>

                <li className='footer-final-content-link text-start cursor-pointer mx-4 text-[#a09292]'><a href="" className='hover:text-green-500'>Privacy Policy</a></li>
                <li className='footer-final-content-link text-start cursor-pointer mx-4 text-[#a09292]'><a href="" className='hover:text-green-500'>Customer Care</a></li>
                <li className='footer-final-content-link text-start cursor-pointer mx-4 text-[#a09292]'><a href="" className='hover:text-green-500'>Terms and Conditions</a></li>
              </ul>
            </div>
            <div className="w-1/2 m-3 footer-final-content">
              <h3 className='text-md text-[#a09292]'>© 2023 Galileo-store. All rights reserved.</h3>
            </div>


          </div>

        </div>
      </section>

    </>
  )
}

export default Footer
