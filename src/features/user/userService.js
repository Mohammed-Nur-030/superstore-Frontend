import axios from "axios";
import {base_url, config} from '../../utils/axiosConfig'


const register=async(userData)=>{
    const response=await axios.post(`${base_url}auth/signup`,userData);
    if(response.data){
        return response.data;
    }
}
const login=async(userData)=>{

    const response=await axios.post(`${base_url}auth/login`,userData);
    if(response.data){
        localStorage.setItem("user",JSON.stringify(response.data));
        return response.data;
    }
}
const addToCart=async(cartData)=>{
   
    const response=await axios.post(`${base_url}auth/add-to-cart`,cartData,config);
    if(response.data){
        return response.data;
    }
}
const getCart=async()=>{
    console.log("IIIIII")
    console.log(localStorage.getItem("user"))
    const user = JSON.parse(localStorage.getItem("user")).token

    const token = {
        headers: {
          Authorization: `Bearer ${user}`,
          Accept: "application/json",
        },
      }
      console.log("token")
      console.log(token)
    const response=await axios.get(`${base_url}auth/get-cart-items`,token);
    if(response.data){
        return response.data;
    }
}

const removeProductFromCart=async(cartItemId)=>{
    const response=await axios.delete(`${base_url}auth/delete-cart-item/${cartItemId}`,config);
    if(response.data){
        return response.data;
    }
 
}
const updateProductFromCart=async(cartDetail)=>{
    const response=await axios.delete(`${base_url}auth/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,config);
    if(response.data){
        return response.data;
    }

}
const forgotPassToken=async(data)=>{
    const response=await axios.post(`${base_url}auth/forget-password`,data);
    if(response.data){
        return response.data;
    }   
}
const resetPass=async(data)=>{
    const response=await axios.put(`${base_url}auth/reset-password/${data.token}`,{password:data?.password,confirmPassword:data?.confirmPassword});
    if(response.data){
        return response.data;
    }   
}


export const authService={
    register,
    login,
    addToCart,
    getCart,
    removeProductFromCart,
    updateProductFromCart,
    forgotPassToken,
    resetPass,
}