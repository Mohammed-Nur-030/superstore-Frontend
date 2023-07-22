import React, { useEffect, useState } from 'react'
import { useFilterContext } from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/products/productSlice';





const ProductList = () => {
  const [loading,setLoading]=useState(false);
  const {grid_view}=useFilterContext();

  const productState=useSelector((state)=>state.product.product);
 
  const dispatch=useDispatch();
  useEffect(()=>{
    getProducts();
  },[])
  const getProducts=()=>{
    dispatch(getAllProducts());
  }
 

if(grid_view===true){
  return(<GridView data={productState} />)
}

if(grid_view===false){
  return(<ListView data={productState}/>)
}

}

export default ProductList
 