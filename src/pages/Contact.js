import React, { useState } from 'react'
import { BiSolidHandRight, BiSolidUser, BiSearch, BiSolidPhoneCall } from 'react-icons/bi';
import { ImCart } from 'react-icons/im'
import BreadCrum from '../components/BreadCrum';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createQuery } from '../features/contact/contactSlice';

const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  mobile: yup.string().default('').required("Mobile number is required"),
  email: yup.string().nullable().email("Email should be valid").required("Email is required"),
  subject: yup.string().defined().required("Subject is required"),
  comment: yup.string().default('').nullable().required("Query is required"),
});


const Contact = () => {
  const dispatch=useDispatch();

  const [mobileMenu, setMobileMenu] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      mobile: '',
      comment: '',
    },
    validationSchema: contactSchema,
    onSubmit: (values,{resetForm}) => {
      // alert(JSON.stringify(values, null, 2));
     dispatch(createQuery(values))
     formik.resetForm();
    },
  });

  return (
    <div>


      <div className="about-hero w-full   flex justify-center  h-[65vh]  relative    ">

        <div className="banner-1 flex items-center justify-center  w-full h-full overflow-hidden absolute top-0 right-0">
          {/* <img src="images/bg1.jpg" alt="background" className=' object-cover h-full w-full  ' /> */}
          <div className='flex flex-col mt-7'>
            <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-center text-white '>Contact Us</h3>
            <div className=''>
              <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="This is my page description." charSet='utf-8' />
              </Helmet>
              <BreadCrum title="Contact Us" />
            </div>
          </div>

        </div>


        <nav className='big-navbar  w-full   '>
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
                <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><a href="/our-store">OUR STORE</a></li>
                <li className=' hover:text-green-400 cursor-pointer mx-2 text-green-500'><a href="/contact">CONTACT</a></li>
              </ul>
            </div>

            <div className="hamburger-menu w-12  hidden" onClick={() => setMobileMenu(true)}>
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



      <section className="contact-us py-6">
        <div className="container contact-us  w-[80%] h-[85vh] mx-auto py-5 flex  flex-wrap  gap-4 md:gap-0">

          <div className="contact-item w-[45%] flex flex-col">
            <div className=" flex flex-col">
              <h3 className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold py-4 pb-0'>GET IN
                <span className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold text-green-500'> TOUCH</span>
              </h3>
              <p className='text-gray-500 pb-4'>We're ready to lead you into the future with Business Services.</p>
              <p className=""><span className="text-green-500">Call Us : </span> <a href="tel:+(21) 255 999 8899" className='hover:text-green-500 hover:underline'>+(21)
                255 999 8899</a></p>
              <p> <span className="text-green-500">Email : </span> <a href="mailto:info@example.com" className='hover:text-green-500 hover:underline '>
                info@example.com</a></p>
              <p className="text-gray-500 pt-5"> 433 California St, Suite 300
                San Francisco, CA 94104, USA </p>

            </div>
            <div className=" flex flex-col ">
              <h3 className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold py-4 '>WORKING
                <span className='text-xl  md:text-xl lg:text2xl xl:text-3xl font-bold text-green-500'> HOURS</span>
              </h3>
              <div className='py-3'>
                <h6 className='text-gray-700 font-bold leading-5 '>Business Service:</h6>
                <p className="text-gray-500"> Monday to Friday 8.00 am - 6.00 pm</p>
                <p className="text-gray-500"> Saturday and Sunday - Closed</p>
              </div>

              <h6 className='text-gray-700 font-bold leading-5 '>Customer support:</h6>
              <p className="text-gray-500"> Monday to Friday 8.00 am - 6.00 pm</p>
              <p className="text-gray-500"> Saturday 10.00 am - 4.00 pm</p>
              <p className="text-gray-500"> Sunday - Closed</p>

            </div>

          </div>
          <div className="contact-item w-[45%]  ">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62222.68861425496!2d77.5981345!3d13.0066783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17aea68d5a1f%3A0x3ebab1ebcc4ebcd!2sHM%20Green%20Oak%20Apartments!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
  frameborder="0"
  allowfullscreen=""
  className='h-full w-full object-cover'
></iframe>

          </div>
        </div>

      </section>

      <section className="form py-10">
        <div className="container w-[90%] mx-auto py-6">
          <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-white my-3 text-center'>FEEDBACK FORM </h3>

          <div className="flex  mx-auto">
            <form className="mx-auto mt-4 w-full"
              onSubmit={formik.handleSubmit}
            >
              <div className=" w-full">
                <div className='flex gap-2'>
                  <div className=''>
                    <input type="text" name="name" id="w3lName"
                      placeholder="Name"
                      className=' rounded-md py-2 px-2 '
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                    <div className="errors">
                      {formik.touched.name && formik.errors.name}
                    </div>
                  </div>

                  <div>
                    <input type="email" name="email" id="w3lSender" placeholder="Email" required="" className=' rounded-md px-2 py-2'
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                    <div className="errors">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>

                  <div>
                    <input type="subject" name="subject" id="w3lSubject" placeholder="Subject" required="" className=' rounded-md px-2 py-2'
                      onChange={formik.handleChange("subject")}
                      onBlur={formik.handleBlur("subject")}
                      value={formik.values.subject}
                    />
                    <div className="errors">
                      {formik.touched.subject && formik.errors.subject}
                    </div>
                  </div>

                  <div>
                    <input type="mobile" name="number" id="w3lSubject" placeholder="Number" required="" className=' rounded-md px-2 py-2'
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                    <div className="errors">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                  </div>
                  
                </div>


                <div className="input-textarea w-full py-4 ">
                  <textarea name="comment" id="w3lMessage" placeholder="Message" required="" className='w-[92%] mx-auto rounded-md px-2 py-2 h-[20vh]'
                    onChange={formik.handleChange("comment")}
                    onBlur={formik.handleBlur("comment")}
                    value={formik.values.comment}
                  />
                  {/* </textarea> */}
                  <div className="errors">
                    {formik.touched.comment && formik.errors.comment}
                  </div>
                </div>
                <button type="submit"
                  className=" text-white font-bold px-4 py-2 bg-green-500 rounded-md w-[70px]">
                  Send
                </button>
              </div>

            </form>
          </div>


        </div>
      </section>
      <Footer></Footer>

    </div>
  )
}

export default Contact
