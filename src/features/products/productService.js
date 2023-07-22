import axios from "axios";
import {base_url} from '../../utils/axiosConfig'
import {config} from '../../utils/axiosConfig'
const queryString = require('query-string');

const getProducts=async(data)=>{
    console.log("data");
    console.log(data);
    
    const queryParams = {};

    if (data?.category) {
      queryParams['category'] = data.category;
    }
    
    if (data?.minPrice) {
      queryParams['price[gte]'] = data.minPrice;
    }
    
    if (data?.maxPrice) {
      queryParams['price[lte]'] = data.maxPrice;
    }
    if (data?.sort) {
      queryParams['sort'] = data.sort;
    }
    
    const response = await axios.get(`${base_url}product/all-products`, {
      params: queryParams,
    });
    
    if(response.data){
        return response.data;
    }
}
const getProductCategory=async(category)=>{
    console.log("category")
    console.log(category)
    const response=await axios.get(`${base_url}product/all-products`, {
        params: {
          category: category,
        },
      });
    if(response.data){
    console.log("response.data")
    console.log(response.data)
        return response.data;
    }
}

const getSingleProduct=async(id)=>{
    const response=await axios.get(`${base_url}product/${id}`);
    if(response.data){
        return response.data;
    } 
}
const getCategories=async()=>{
    const response=await axios.get(`${base_url}category/get-all-category`);
    if(response.data){
        return response.data;
    } 
}
const rateProduct=async(data)=>{
  const user = JSON.parse(localStorage.getItem("user")).token

  const token = {
      headers: {
        Authorization: `Bearer ${user}`,
        Accept: "application/json",
      },
    }
    console.log("token")
    console.log(token)
    const response=await axios.put(`${base_url}product/rating`,data,token);
    if(response.data){
        return response.data;
    } 
}

 

export const productService={
    getProducts,
    getSingleProduct,
    getProductCategory,
    getCategories,
    rateProduct,
}