import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { NavLink } from 'react-router-dom';


const ListView = ({ data }) => {
   console.log("INside List view");
   console.log("data")
   console.log(data)

    return (
        <div>
            <section className="list-view">
                <div className="container gap-3 flex flex-col">
                    {
                        data?.product?.map((curElem) => {
                            console.log("curElem")
                            console.log(curElem)
                            const { _id, title, images, price, description,brand,totalRating } = curElem;
                            return (
                                <NavLink to={`/singleProduct/${_id}`} >

                                <div className="product-card relative flex  shadow-md rouned-xl">
                                <div className="wishlist-icon absolute  ">
                                    <a>
                                        <img src="images/wish.svg" alt="wishlist" className='object-cover' />
                                    </a>
                                </div>
                                <div className='relative w-1/3'>
            
                                    <div className="product-image ">
                                        <img src={images[0]?.url} alt="product" className='rounded-t-md' />
                                        <img src={images[1]?.url} alt="product" className='rounded-t-md' />
                                    </div>
                                
                                   
                                </div>
            
                                <div className="product-details py-3 px-6 w-2/3">
                                    <h6 className="brand">{brand}</h6>
                                    <h5 className=" hover:text-green-500">
                                        {title}
                                    </h5>
                                    <ReactStars
                                        count={5} size={24} activeColor="#ffd700"
                                        value={totalRating}
                                        edit={false}
                                    />
                                    <div className='flex flex-col py-2'>
                                    {/* <p className="price inline-block"
                                    dangerouslySetInnerHTML={{__html:description}}
                                    ></p> */}
                                    <div className='flex gap-2'>

                                    <p className="price inline-block">&#8377;{price}</p>
                                    <div className='scratch text-gray-500  w-14'>&#8377;{price*3/2}</div>

                                    </div>
                                    </div>
                                    
                                    <NavLink to={`/singleproduct/${_id}`}>
                                        <button className='text-sm px-4 py-1 rounded-full
                                        
                                         bg-gray-500 
                                        hover:bg-green-500 hover:text-white'>
                                            View
                                        </button>
                                    </NavLink>
            
                                </div>
            
                            </div>
                            </NavLink>

                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default ListView
