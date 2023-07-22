import React from 'react'
import { useProductContext } from '../context/ProductContext'
import ProductCard from './ProductCard';

const FeaturedProdcuts = () => {
    const {isLoading,featuredProducts}=useProductContext();
    console.log("in featured componenet",featuredProducts) ;
  
       if(isLoading){
           return (<div>Loading....</div>)
        } 
        
      
        return (
            featuredProducts.map((currElem)=>{
                console.log("currElem",currElem)
                return <ProductCard key={currElem.id}
                id={currElem.id} title={currElem.name} price={currElem.price} disPrice={currElem.price*2} image1={currElem.image} image2="images/banner1.jpg" ></ProductCard>
            })
  )
}

export default FeaturedProdcuts
