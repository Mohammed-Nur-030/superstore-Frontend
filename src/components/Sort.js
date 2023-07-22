import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillGridFill} from 'react-icons/bs'
import { useFilterContext } from '../context/FilterContext'

const Sort = ({productState}) => {
  const {grid_view,setGridView,setListView ,filter_products,sorting}=useFilterContext();
  

  return (
    <div>
      <section className="sort">
        <div className="container flex">
          <div className="w-1/3 flex  gap-3  py-2">
            <button className={grid_view ? "w-8 h-8" : "w-8 h-8  bg-black text-white"} 
            onClick={setListView}
            >
            <GiHamburgerMenu className='w-full h-full p-2'/>
            </button>
            <button className={grid_view ? "w-8 h-8  bg-black text-white" : "w-8 h-8 "} 
              onClick={setGridView}
            >
            <BsFillGridFill  className='w-full h-full p-2'/>
            </button>
          </div>
          <div className="w-1/3  flex justify-center items-center py-2">
            <p className='font-semibold'>
              {`${productState?.product?.length} Products available`}
            </p>

          </div>
          <div className="w-1/3  flex justify-end py-2 pr-2 ">
              <div className="dropdown rounded-md">
                <form action="#">
                  <label htmlFor="sor" hidden className='label'>Sort</label>
                  <select name="sor" id="sort"  className='dropdown border-2 border-black rounded-md'
                   onClick={sorting}
                   >
                        <option value="lowest" className='py-3' selected>Price(lowest)</option>
                        <option value="highest" className='py-3'>Price(highest)</option>
                        <option value="atoz">A-Z</option>
                        <option value="ztoa">Z-A</option>
                  </select>
                </form>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sort
