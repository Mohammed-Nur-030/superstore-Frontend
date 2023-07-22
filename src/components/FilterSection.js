import React, { useEffect } from 'react'
import { useFilterContext } from '../context/FilterContext'
import { FaCheck } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { categoryList, getSpecificProduct } from '../features/products/productSlice'

const FilterSection = () => {

  const productState=useSelector((state)=>state.product.categoryProduct);
  const categoryState=useSelector((state)=>state.product.categoryList);

  console.log("productState in OurStyore")
  console.log(productState)
  console.log(categoryState.getAllCategory)

  const dispatch=useDispatch();
  useEffect(()=>{
    getProducts();
    getCategories();

  },[dispatch])
  const getProducts=()=>{
    dispatch(getSpecificProduct('Blazer'));
  }
  const getCategories = () => {
    dispatch(categoryList());
  };

  const handleCategoryClick = (category) => {
   
      dispatch(getSpecificProduct(category));
    
  };




 

  


  return (
    <div>
      <section>
        <div className="filter-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              placeholder="Search"
              // value={text}
              // onChange={updateFilterValue}
              className='border-2 border-black bg-gray-100 my-2 rounded-md px-2'
            />
          </form>
        </div>

              {/* Filter category */}
              <div className="filter-category py-1">
          <h3 className="text-base font-semibold pb-2">Category:</h3>
          <div>
           <div onClick={()=>getProducts()}>
            All Products
           </div>
            {categoryState?.getAllCategory?.map((category) => (
              <div key={category.id}>
                <label>
                  <input
                    type="checkbox"
                    value={category.name}
                    onChange={() => handleCategoryClick(category.title)}
                  />
                  <span className="ml-2">{category.title}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

         
      

        <div className="filter-company py-2">
          <h3 className='text-base font-semibold pb-2'>Company:</h3>
          <form action="#">
            <select
              name="company"
              id="company"
              className=" rounded-md bg-gray-100 text-sm mx-2 border-2 border-black"
              // onClick={updateFilterValue}
              >
              {/* {companyData.map((curElem, index) => {
                return (
                  <option key={index} value={curElem} name="company">
                    {curElem}
                  </option>
                );
              })} */}
            </select>
          </form>
        </div>

        <div className=" py-2">
          <h3 className='text-base font-semibold pb-1'>Price:</h3>
          <p className='text-sm font-semibold px-2'>
            {/* &#8377;{price} */}
          </p>

          <input
            type="range"
            name="price"
         
          />


        </div>

        <div className="filter-clear flex pl-5">
          <button className="px-2 py-2 rounded-full bg-green-400 text-white hover:bg-green-600" 
      
          >
            Clear Filters
          </button>
        </div>
      </section>
    </div>
  )
}

export default FilterSection
