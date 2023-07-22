import React from 'react'
import ProductCard from './ProductCard'
import FeaturedProdcuts from './FeaturedProdcuts'

const GridView = ({products,data}) => {
    // console.log("inside grid")

    

    if(!data.product){
      return <h1>Loading...</h1>
    }

  return (
    <div className=''> 
    <section className="grid-view">
        <div className="container flex flex-wrap gap-4">
{

       

      data.product.map((data,id)=>{
         
            // console.log("inside map in grid")
            return <ProductCard key={data.slug} id={data._id} title={data.title} price={data.price} disPrice={data.price*2}
             image1={data?.images[0]?.url}
             image2={data?.images[1]?.url}
            //  image2="images/banner1.jpg" 
             />
        })

}



         
        </div>
    </section>
      
    </div>
  )
}

export default GridView
