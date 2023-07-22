import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {  NavLink  } from 'react-router-dom'




const ProductCard = (props) => {
    const { image1, image2, title, price, disPrice,id} = props;
   
  

    // console.log(id)

    return (
        <div className='productCard w-[23%] '>
            <NavLink to={`/singleProduct/${id}`} >
                <div className="product-card relative  shadow-md rouned-xl">
                   
                    <div className='relative'>

                        <div className="product-image ">
                            <img src={image1} alt="product" className='rounded-t-md' />
                            <img src={image2} alt="product" className='rounded-t-md' />
                        </div>
                       
                     
                       
                    </div>

                    <div className="product-details py-3 ">
                        {/* <h6 className="brand">Havels</h6> */}
                        <h5 className=" hover:text-green-500">
                            {title}
                        </h5>
                        <ReactStars
                            count={5} size={24} activeColor="#ffd700"
                            value='3'
                            edit={false}
                        />
                        <span className='scratch text-gray-500 mr-2'>&#8377;{disPrice}</span>
                        <p className="price inline-block">&#8377;{price}</p>

                    </div>

                </div>
            </NavLink>

        </div>

        // 










    )
}

export default ProductCard
