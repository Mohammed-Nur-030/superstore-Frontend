import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { productService } from "./productService";


export const getAllProducts=createAsyncThunk("product/get",async (data,thunkAPI)=>{
    try{
        return await productService.getProducts(data);
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
    
})
export const getAProduct=createAsyncThunk("product/getProduct",async (id,thunkAPI)=>{
    try{
        return await productService.getSingleProduct(id);
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
    
})
export const getSpecificProduct=createAsyncThunk("product/specificProduct",async (category,thunkAPI)=>{
    try{
        return await productService.getProductCategory(category);
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
    
})
export const categoryList=createAsyncThunk("product/categoryList",async (category,thunkAPI)=>{
    try{
        return await productService.getCategories();
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
    
})
export const addRating=createAsyncThunk("product/rating",async (data,thunkAPI)=>{
    try{
        console.log("Inside Add rating")
        return await productService.rateProduct(data);
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
    
})

 


const productState = {
    product:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
    singleProduct:"",
    categoryProduct:"",
    categoryList:""
}


export const productSlice=createSlice({
    name:"product",
    initialState:productState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state)=>{
                state.isLoading=true;
            }).addCase(getAllProducts.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.product=action.payload
            }).addCase(getAllProducts.rejected,(state,action)=>{
                state.isLoading=false;
                state.isError=true;
                state.isSuccess=false;
                state.product=action.payload
                state.message=action.error;
            }).addCase(categoryList.pending,(state)=>{
                state.isLoading=true;
            }).addCase(categoryList.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.categoryList=action.payload
                state.message="Product Added ToWishList";
           }).addCase(categoryList.rejected,(state,action)=>{
                state.isLoading=false;
                state.isError=true;
                state.isSuccess=false;  
                state.message=action.error;
           }).addCase(getAProduct.pending,(state)=>{
                state.isLoading=true;
            }).addCase(getAProduct.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.singleProduct=action.payload;
                state.message="Product Fetched SucessFully";
           }).addCase(getAProduct.rejected,(state,action)=>{
                state.isLoading=false;
                state.isError=true;
                state.isSuccess=false;  
                state.message=action.error;
           })
           .addCase(getSpecificProduct.pending,(state)=>{
                state.isLoading=true;
            }).addCase(getSpecificProduct.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.categoryProduct=action.payload;
                state.message="Product Fetched SucessFully";
           }).addCase(getSpecificProduct.rejected,(state,action)=>{
                state.isLoading=false;
                state.isError=true;
                state.isSuccess=false;  
                state.message=action.error;
           })
           .addCase(addRating.pending,(state)=>{
                state.isLoading=true;
            }).addCase(addRating.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.rating=action.payload;
                state.message="Rating Added Sucessfully";
                if(state.isSuccess){
                    toast.success("Rating Added Sucessfully");
                }
                
           }).addCase(addRating.rejected,(state,action)=>{
                state.isLoading=false;
                state.isError=true;
                state.isSuccess=false;  
                state.message=action.error;
           })
          
    }
})

export default productSlice.reducer;