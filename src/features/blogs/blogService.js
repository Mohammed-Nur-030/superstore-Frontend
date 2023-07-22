import axios from "axios";
import {base_url} from '../../utils/axiosConfig'

const getBlogs=async(userData)=>{
    const response=await axios.get(`${base_url}blog/`,userData);
    if(response.data){
    
        return response.data;
    }
}
const getBlog=async(id,userData)=>{
    const response=await axios.get(`${base_url}blog/${id}`,userData);
    if(response.data){
        return response.data;
    }
}



export const blogService={
    getBlogs,
    getBlog,
   
}