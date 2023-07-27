import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'

import ReactStars from 'react-rating-stars-component'
import { BiSolidHandRight, BiSolidUser, BiSearch } from 'react-icons/bi';
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { ImCart } from 'react-icons/im'

import { BiMenu } from 'react-icons/bi'
import Loader from '../components/Loader';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addRating, getAProduct, getAllProducts } from '../features/products/productSlice';
import ProductCard from '../components/ProductCard';
import { toast } from 'react-toastify';
import { addProdToCart, getUserCart } from '../features/user/userSlice';
import Signup from './Signup';



const SingleProduct = () => {

  // const orderedProduct = true;

  const location = useLocation();
  const navigate = useNavigate();
  const [alreadyAdded, setAlreadyAdded] = useState(false)
  const getProdId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const prodState = useSelector(state => state.product.singleProduct.findProduct)
  const extraProduct = useSelector(state => state.product)
  const cartState = useSelector(state => state?.auth?.cartProduct)

  useEffect(() => {
    dispatch(getAProduct(getProdId));
    if (localStorage.getItem("user")) {

      dispatch(getUserCart());
    }
    // console.log(alreadyAdded)
  }, [dispatch])

  useEffect(() => {
    for (let index = 0; index < cartState?.cart?.length; index++) {
      if (getProdId === cartState?.cart[index]?.productId?._id) {
        setAlreadyAdded(true);

      }
    }
  }, [])
  useEffect(()=>{
    getProducts();
  },[])
  const getProducts=()=>{
    dispatch(getAllProducts());
  }
 

  console.log(alreadyAdded)
  const uploadCart = () => {
    if (!colors) {
      toast.error("Please Choose Color")
      return false;
    } else {
      dispatch(addProdToCart({
        productId: prodState?._id,
        amount: amount,
        color: colors,
        price: prodState?.price
      }))
    }
  }
  const [mobileMenu, setMobileMenu] = useState(false)
  const [activeImg, setActiveImage] = useState();
  const [colors, setColors] = useState('');
  const [amount, setAmount] = useState(1);
  const [star, setStart] = useState(null);
  const [comment, setComment] = useState(null);

  const addRatingToProduct = () => {
    if (star === null) {
      toast.error("Please add Star Rating");
      return false
    }
    else if (comment === null) {
      toast.error("Please write Review About Product");
      return false

    }
    else {
      console.log("Inside else")
      dispatch(addRating({ star: star, comment: comment, prodId: getProdId }))
    }
    return false;

  }



  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < prodState?.quantity ? setAmount(amount + 1) : setAmount(prodState?.quantity);
  };


  // console.log("prodState")
  // console.log(prodState)
  // console.log("extraProdict")
  // console.log(extraProduct)




  if (!prodState?.images) {
    return (
      <>
        <Navbar></Navbar>
        <Loader></Loader>
      </>
    )
  }
    
  if (!localStorage.getItem("user")) {
    return( <Signup></Signup>)
}

  const category=prodState?.category;
  // console.log("category")
  // console.log(category)






  return (
    <div>

      <nav className='big-navbar bg-gray-800 w-full pb-3'>
        <div className='   w-[95vw] flex justify-between px-4 mx-auto pb-3'>

          <div className='offer text-sm pt-2'>
            <span className='text-white '>UPTO 30% OFF ON ALL STYLES , Click here for </span> <BiSolidHandRight className=' inline-block inverted-image' /> <a to="/" className='text-white hover:text-green-500'> More Details</a>
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
            <Link to="/">
              <span className='font-bold text-xs  sm:text-sm md:text-xl lg:text-2xl text-yellow-500 hover:text-green-500'>
                MYSUPERSTORE
              </span>
            </Link>

          </div>

          <div className='search  mx-4 text-white'>
            <Link to="#">
              <div className=' flex items-center gap-2 '>
                <BiSearch className='inline-block text-2xl ' />
                <span className=' search-text text-xl'>Search here</span>
              </div>
            </Link>
          </div>


          <div className='navbar flex items-center  ml-auto'>
            <ul className='  flex gap-3'>
              <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><NavLink to="/">HOME</NavLink></li>
              <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><NavLink to="/about">ABOUT</NavLink></li>
              <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><NavLink to="/our-store">OUR STORE</NavLink></li>
              <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
          </div>

          <div className="hamburger-menu w-12 0 hidden " onClick={() => setMobileMenu(true)}>
            {/* <img src="images/icons8-menu.svg" alt="menu" className='inverted-image w-14 h-8  object-cover ' /> */}
            <BiMenu></BiMenu>
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
      <div className='big-box flex  w-[100%] mx-auto justify-between gap-4 px-10 py-5 '>
        <div className='image-container flex flex-col  w-[40%] '>
          <div className='big-image w-full h-[80%]'>

            <img src={activeImg ? activeImg : prodState.images[0].url} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />

          </div>

          <div className='sub-images flex flex-row flex-wrap gap-1  justify-center pt-4 '>
            <div className="sub-image inline-block w-28 h-28">
              <img src={prodState.images[0]?.url} alt="product" className='w-full h-full rounded-md cursor-pointer' onClick={() => setActiveImage(prodState.images[0].url)} />
            </div>
            <div className="sub-image inline-block w-28 h-28">
              <img src={prodState.images[1]?.url} alt="product" className='w-full h-full rounded-md cursor-pointer' onClick={() => setActiveImage(prodState.images[1].url)} />
            </div>
            <div className="sub-image inline-block w-28 h-28">
              <img src={prodState.images[2]?.url} alt="product" className='w-full h-full rounded-md cursor-pointer' onClick={() => setActiveImage(prodState.images[2].url)} />
            </div>
            <div className="sub-image inline-block w-28 h-28">
              <img src={prodState.images[3]?.url} alt="product" className='w-full h-full rounded-md cursor-pointer' onClick={() => setActiveImage(prodState.images[3].url)} />
            </div>

          </div>
        </div>
        {/* ABOUT */}
        <div className='about-container  flex flex-col  items-start px-2 justify-center w-[60%] gap-4  '>
          <div>
            <span className=' text-violet-600 font-semibold'>{prodState.brand}</span>
            <h1 className='text-3xl font-bold'>{prodState.title}</h1>
          </div>
          <div className='flex gap-2 w-full items-center justify-between '>
          <ReactStars
                  count={5}
                  size={20}
                  value={parseInt(prodState?.totalRating)}
                  // value={3}
                  edit={false}
                  activeColor="#ffd700"
                />
              <p className="mb-0 text-red-900">{`${prodState?.ratings?.length} global ratings`}</p>

         
          </div>
          {
            alreadyAdded === false &&
            <>
              <div>
                <p className='font-bold  text-gray-700'>Available:
                  <span className='text-black'> {prodState.quantity > 0 ? "In Stock " : "Not Available"}</span>
                </p>
              </div>
            </>
          }
          <p className='text-gray-700'
            dangerouslySetInnerHTML={{ __html: prodState.description }}
          >
          </p>
          {
            alreadyAdded === false &&
            <>
              <p className=" text-center flex justify-center items-center gap-3">
                Color:
                {prodState?.color?.map((curColor, index) => {
                  return (
                    <button
                      key={index}
                      style={{ backgroundColor: curColor.toLowerCase() }}
                      className={colors === curColor ? "btnStyle active" : "btnStyle"}
                      onClick={() => setColors(curColor)}
                    >
                      {colors === curColor ? <FaCheck className="checkStyle" /> : null}
                    </button>
                  );
                })}
              </p>
            </>
          }

          <h6 className='text-2xl font-semibold '>&#8377;{prodState.price * amount}</h6>
          <div>
            <p className='text-gray-500'>
              Items Left:{prodState.quantity}
            </p>
            <p className='font-bold  text-gray-700'>ID:
              <span className='text-black'> {prodState._id}</span>
            </p>
            <p className='font-bold  text-gray-700'>Brand:
              <span className='text-black'> {prodState.brand}</span>
            </p>
          </div>
          <div className='border-[1px] border-gray-500 h-[2px] w-full' ></div>

          <div className='flex flex-col items-center gap-4'>

            {prodState.quantity > 0 &&
              // <AddToCart product={prodState} />
              <div className=" w-[200px] flex justify-start">
                <div className="cart-button w-[50%] mx-auto">
                  <div className="amount-toggle flex justify-around  rounded-xl mt-1">
                    <button onClick={() => setDecrease()} className="border-black  rounded-tl-xl rounded-bl-xl bg-green-400 w-1/3 py-2">
                      <FaMinus className="w-3 h-3 mx-auto" />
                    </button>
                    <div className=" px-4 flex w-1/3 mx-auto justify-center bg-gray-100 text-sm py-2">{amount}</div>
                    <button onClick={() => setIncrease()} className="border-black  rounded-tr-xl rounded-br-xl bg-green-400 w-1/3 py-2">
                      <FaPlus className="w-3 h-3 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            }
            {/* <NavLink to="/cart"> */}


            {alreadyAdded ? (
              <button
                className="py-3 px-4 rounded-full bg-green-500 text-white hover:bg-green-600 mx-10 my-4"
                onClick={() => {
                  navigate('/cart');
                }}
              >
                Go To Cart
              </button>
            ) : (
              <button
                className="py-3 px-4 rounded-full bg-green-500 text-white hover:bg-green-600 mx-10 my-4"
                onClick={() => {
                  if (!localStorage.getItem("user")) {
                    navigate('/signup')
                  } else {

                    uploadCart(prodState?._id)
                  }
                }}
              >
                Add To Cart
              </button>
            )}


            {/* </NavLink> */}
          </div>
          {/* <Loader src="images/loader.png"/> */}
        </div>


      </div>
      <section className="featured-wrapper  home-wrapper-2 py-8">
                    <div className="container w-[80vw] py-5 mx-auto">
                        <div className="flex  flex-col ">
                            <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-center' >
                               SIMILAR PRODUCTS
                            </h3>
                            <p className='text-gray-500 pb-8 text-center'>Products Similar to your Choice</p>
                            <div className=" flex flex-row  flex-wrap mx-auto  gap-2 gap-y-6 min-w-[50vw] justify-around ">
                                {
                                    extraProduct.product?.product?.map((item, index) => {
                                        console.log("item")
                                        console.log(item)
                                        if (item.category === category) {
                                            return (<ProductCard id={item._id} image1={item.images[0]?.url} image2={item.images[1]?.url} title={item.title} price={item.price} disPrice={(item.price) * 3 / 2} />)
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </section>

      <section className='reveiws min-h-[40vh] bg-gray-100 py-6'>
        <h2 className='text-2xl text-gray-800 font-semibold text-center '>Reveiws Sections</h2>
        <div className="container review-container flex gap-3  mx-auto py-4">

          <div className="w-[45%] review-item flex px-2 flex-col ">
            <div className='py-4'>
              <h4 className="mb-2 text-red-600 font-semibold">Customer Reviews</h4>
              <div className="flex items-center gap-2">
                <ReactStars
                  count={5}
                  size={20}
                  value={parseInt(prodState?.totalRating)}
                  // value={3}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="text-gray-600 text-sm">{` (${parseInt(prodState?.totalRating)} out of 5)`}</p>
              </div>
              <p className="mb-0 text-red-900">{`${prodState?.ratings?.length} global ratings`}</p>
            </div>
     
              <div className="flex flex-col py-4 mb-0">
                <h4 className='mb-2 font-semibold text-red-600'>Add Your Review</h4>
                <hr />

                <div className='flex justify-between'>
                  <span className='mb-0 pt-2  text-red-900'>Add a star</span>
                  <ReactStars
                    count={5}
                    size={24}
                    value={1}
                    edit={true}
                    activeColor="#ffd700"
                    onChange={(e) => (
                      setStart(e)
                    )}
                  />
                </div>
                <div className='px-2'>
                  <textarea
                    name=""
                    id=""
                    className="w-full px-4 py-2 "
                    // cols="30"
                    rows="4"
                    placeholder="Your Reveiw"
                    onChange={(e) => (
                      setComment(e.target.value)
                    )}

                  ></textarea>

                </div>
                <div className="flex justify-end">
                  <button className="button  py-1 px-4 rounded-full bg-green-500 text-white hover:bg-green-600 mx-10 my-4" type='button'
                    onClick={addRatingToProduct}
                  >Submit Review</button>
                </div>

              </div>
        

          </div>
          <div className="w-[55%] review-item ">
            <div className="reviews mt-4 ">
              {
                prodState && prodState?.ratings?.map((item, index) => {

                  return (
                    <>
                      <div key={index} className="review  ">
                        <div className="flex  items-center justify-between ">
                          <h6 className="text-sm">~{item?.name}</h6>
                          <ReactStars
                            count={5}
                            size={20}
                            value={item?.star}
                            edit={false}
                            activeColor="#ffd700"

                          />
                        </div>
                        <p className="bg-gray-300 rounded-xl min-h-[50px] px-4 py-2">
                          {
                            item?.comment
                          }
                        </p>
                      </div>
                      <br />
                    </>
                  )
                })
              }
            </div>

          </div>

        </div>

      </section>


      
     



      <Footer></Footer>
    </div>
  )
}

export default SingleProduct
