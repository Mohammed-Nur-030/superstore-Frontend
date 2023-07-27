
import React, { useState, useEffect } from 'react'
import { BiSolidHandRight, BiSolidUser, BiSearch, BiSolidPhoneCall } from 'react-icons/bi';
import { ImCart } from 'react-icons/im'
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';
import FilterSection from '../components/FilterSection';

import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { categoryList, getAllProducts } from '../features/products/productSlice';
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillGridFill } from 'react-icons/bs'
import { useFilterContext } from '../context/FilterContext'
import { useCallback } from 'react';






const OurStore = () => {

  const dispatch = useDispatch();
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState(null);


  const productState = useSelector((state) => state.product.product);

  const { grid_view, setGridView, setListView, } = useFilterContext();


  useEffect(() => {
    categoryList();
  }, [])

  // useEffect(()=>{
  //     let Category=[];
  //       let newBrand=[];
  //       for (let index = 0; index < productState?.product?.length; index++) {
  //           const element = productState?.product[index];


  //           newBrand.push(element.brand)
  //           Category.push(element.category)
  //       }
  //       // setBrands(newBrand)
  //       setCategory(Category);
  //   },[productState])

  // console.log("category")
  // console.log(category)

  const catArray = ['Shirts', 'Blazer', 'Fashion', 'Jeans', 'Shoes', 'Jackets'];

  const handleCategoryClick = (cat) => {
    setCategory(cat);
    dispatch(getAllProducts({ sort, category: cat, minPrice, maxPrice }));
  };

  const handleMinPriceChange =
    (e) => {
      setMinPrice(e.target.value);
      // dispatch(getAllProducts({ sort, category:cat, minPrice, maxPrice }));

    };

  const handleMaxPriceChange =
    (e) => {
      setMaxPrice(e.target.value);

    };
  const handleDelete = () => {
    setMaxPrice(null);
    setMinPrice(null);
    setSort(null);
    setCategory(null);
    dispatch(getAllProducts({ sort: null, category: null, minPrice: 0, maxPrice: null }));
    // getProducts();

  };
  const handleSort = (e) => {
    setSort(e.target.value);
    dispatch(getAllProducts({ sort: sort, category: null, minPrice: 0, maxPrice: null }));
  };

  const getProducts = () => {

    dispatch(getAllProducts({ sort, category, minPrice, maxPrice }));
  };
  useEffect(() => {
    getProducts();
  }, [sort, minPrice, maxPrice]);





  const [mobileMenu, setMobileMenu] = useState(false)
  // const catArray=catState?.product?.map((ele)=>{
  //   return ele.category
  // });


  return (
    <div>

      <div className="about-hero w-full   flex justify-center    relative    ">

        {/* <img src="images/bg1.jpg" alt="background" className=' object-cover h-full w-full  ' /> */}
        {/* <div className="banner-1 flex items-center justify-center  w-full h-full overflow-hidden absolute top-0 right-0">
                    <div className='flex flex-col mt-7'>
                        <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-center text-white '>Our Store</h3>
                        <div className=''>
                            <Helmet>
                                <title>Our Store</title>
                                <meta name="description" content="This is my page description." charSet='utf-8' />
                            </Helmet>
                            <BreadCrum title="Our Store" />
                        </div>
                    </div>

                </div> */}


        <nav className='big-navbar  w-full  bg-gray-800  pb-3 '>
          <div className='   w-[95vw] flex justify-between px-4 mx-auto pb-3'>

            <div className='offer text-sm pt-2'>
              <span className='text-white '>UPTO 30% OFF ON ALL STYLES , Click here for </span> <BiSolidHandRight className=' inline-block inverted-image' /> <a to="/" className='text-white hover:text-green-500'> More Details</a>
            </div>

            <div className=' buttons flex items-center pt-2'>
              <button className='nav-btn px-[10px] py-2  rounded-full hover:bg-green-500 text-white '>
                <BiSolidUser className='inline-block border-white text-xl ' />
              </button>

              <button className='nav-btn p-2 mx-2 rounded-full  text-sm hover:bg-green-500 text-white '>
                <NavLink to="/cart">
                  My Cart<ImCart className='inline-block text-sm ' />
                </NavLink>
              </button>
            </div>

          </div>

          <div className=' nav-2  w-[95vw] flex  px-4 mx-auto'>
            <div className='logo'>
              <NavLink to="/">
                <span className='font-bold text-xs  sm:text-sm md:text-xl lg:text-2xl text-green-500'>
                  MYSUPERSTORE
                </span>
              </NavLink>

            </div>




            <div className='navbar flex items-center  ml-auto'>
              <ul className='  flex gap-3'>
                <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><NavLink to="/">HOME</NavLink></li>
                <li className=' hover:text-green-400 cursor-pointer mx-2 text-white'><NavLink to="/about">ABOUT</NavLink></li>
                <li className=' hover:text-green-400 cursor-pointer mx-2 text-green-500'><NavLink to="/our-store">OUR STORE</NavLink></li>
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



      <section className="our-products ">
        <div className="container flex  ">
          <div className='w-[25%] bg-gray-200 rounded-md py-8'>
            {/* <FilterSection /> */}
            <section className='px-2'>


              {/* Filter category */}
              <div className="filter-category py-1 ">
                <h3 className="text-base font-semibold pb-2">Category:</h3>
                <div className=' px-2 '>
                  {catArray?.map((cat) => {
                    return <li key={cat._id} 
                    onClick={() => handleCategoryClick(cat)}
                    className={`list-none cursor-pointer 
                text-xs sm:text-base md:text-lg lg:text-lg xl:text-lg
                      inline-block
                    my-2 mr-2 px-2  rounded-md ${category === cat ? "bg-gray-400 " : "bg-slate-100" }`}
                    >
                         {cat}
                        
                          </li>

                  })}
                </div>
              </div>



              <div className=" py-2 ">
                <h3 className='text-base font-semibold pb-1'>Price:</h3>
                <p className='text-sm font-semibold px-2'>
                  {/* &#8377;{price} */}
                </p>
                <div className="flex flex-col tems-center gap-1">
                  <div className="form-floating  ">
                    <label htmlFor="floatingInput">From</label>
                    <input
                      type="number"
                      className="form-control w-full rounded-md px-2"
                      id="floatingInput"
                      placeholder="&#8377;0"
                      onChange={handleMinPriceChange}
                      
                      />
                  </div>
                  <div className="form-floating">
                    <label htmlFor="floatingInput1">To</label>
                    <input
                      type="number"
                      className="form-control w-full rounded-md px-2"
                      id="floatingInput1"
                      placeholder="&#8377;9999"
                      onChange={handleMaxPriceChange}

                    />
                  </div>
                </div>
              </div>

              <div className="filter-clear flex pl-5">
                <button className="px-2
                text-xs sm:text-base md:text-lg lg:text-lg xl:text-lg
                 py-2 rounded-full bg-green-400 text-white hover:bg-green-600"
                  onClick={handleDelete}
                >
                  Clear Filters
                </button>
              </div>
            </section>
          </div>

          <div className='product-view--sort w-[75%] py-8'>
            <div className="sort-filter">
              {/* <Sort productState={productState}/> */}
              <section className="sort">
                <div className="container flex">
                  <div className="w-1/3 flex  gap-3  py-2">
                    <button className={grid_view ? "w-8 h-8" : "w-8 h-8  bg-black text-white"}
                      onClick={setListView}
                    >
                      <GiHamburgerMenu className='w-full h-full p-2' />
                    </button>
                    <button className={grid_view ? "w-8 h-8  bg-black text-white" : "w-8 h-8 "}
                      onClick={setGridView}
                    >
                      <BsFillGridFill className='w-full h-full p-2' />
                    </button>
                  </div>
                  <div className="w-1/3  flex justify-center items-center py-2">
                    <p className='font-semibold'>
                      {`${productState?.product?.length} Products available`}
                    </p>

                  </div>
                  <div className="w-1/3  flex justify py-2 pr-2 ">
                    <div className="dropdown rounded-md">
                      <form action="#">
                        <label htmlFor="sor" hidden className='label'>Sort</label>
                        <select name="sor" id="sort" className='dropdown border-2 border-black rounded-md'
                          //    onClick={sorting}
                          onChange={handleSort}
                        >
                          <option value="price" className='py-3' selected>Price(lowest)</option>
                          <option value="-price" className='py-3'>Price(highest)</option>
                          <option value="title" className='py-3'>A-Z</option>
                          <option value="-title" className='py-3'>Z-A</option>

                        </select>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="main-product mx-6  w-full py-6">
              <ProductList />
            </div>

          </div>
        </div>

      </section>



      <Footer></Footer>



    </div>

  )
}

export default OurStore
