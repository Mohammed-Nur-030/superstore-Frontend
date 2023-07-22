import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";





export const registerUser=createAsyncThunk("auth/register",async (userData,thunkAPI)=>{
    try{
        return await authService.register(userData)
        
    }catch(error){
        console.log(error)
        console.error(error)
        return thunkAPI.rejectWithValue(error)
        
    }
    
})
export const loginUser=createAsyncThunk("auth/login",async (userData,thunkAPI)=>{
    try{
        console.log("userData")
        console.log(userData)
        return await authService.login(userData)
        
    }catch(error){
        console.log(error)
        console.error(error)
        return thunkAPI.rejectWithValue(error)
    }  
})
export const addProdToCart=createAsyncThunk("auth/cart",async (cartData,thunkAPI)=>{
    try{
        return await authService.addToCart(cartData)
        
    }catch(error){
        console.log(error)
        console.error(error)
        return thunkAPI.rejectWithValue(error)
    }  
})
export const getUserCart=createAsyncThunk("auth/cart/get-cart",async (thunkAPI)=>{
    try{
        return await authService.getCart();
        
    }catch(error){
        console.log("error is get User Cart")
        console.error(error)
        return thunkAPI.rejectWithValue(error)
    }  
})
export const deleteCartItem=createAsyncThunk("auth/cart/delete-item",async (cartItemId,thunkAPI)=>{
    try{
        return await authService.removeProductFromCart(cartItemId);
        
    }catch(error){
        console.log(error)
        console.error(error)
        return thunkAPI.rejectWithValue(error)
    }  
})
export const updateCartItem=createAsyncThunk("auth/cart/update-item",async (cartDetail,thunkAPI)=>{
    try{
        return await authService.updateProductFromCart(cartDetail);
        
    }catch(error){
        console.log(error)
        console.error(error)
        return thunkAPI.rejectWithValue(error)
    }  
})
export const forgotPasswordToken=createAsyncThunk("auth/password/token",async (data,thunkAPI)=>{
    try{
        return await authService.forgotPassToken(data);
        
    }catch(error){
        console.log(error)
        console.error(error)
        return thunkAPI.rejectWithValue(error)
    }  
})
export const resetPassword=createAsyncThunk("auth/password/reset",async (data,thunkAPI)=>{
    try{
        return await authService.resetPass(data);
        
    }catch(error){
        console.log(error)
        console.error(error)
        return thunkAPI.rejectWithValue(error)
    }  
})

const initialState={
    user:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}


export const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdUser=action.payload;
            if(state.isSuccess===true){
                toast.info("User Created Succesfully")
            }
            
        }).addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.payload.response.data.message
            if(state.isError===true){
                toast.error(action.payload.response.data.message)
            }
        })
        .addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdUser=action.payload;
            localStorage.setItem("token",action.payload.token)

            
        if(state.isSuccess===true){
            toast.info("User Logged in Succesfully");
        }
     }).addCase(loginUser.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.isSuccess=false;
        state.message=action.payload?.response?.data?.message
        if(state.isError===true){
            toast.error(action.payload?.response?.data?.message)
        }
    })
    .addCase(addProdToCart.pending,(state)=>{
            state.isLoading=true;
    }).addCase(addProdToCart.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false;
        state.isSuccess=true;
        state.cartProduct=action.payload;
        if(state.isSuccess){
            toast.success("Product Added To Cart");
        }
      
     }).addCase(addProdToCart.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.isSuccess=false;
        state.message=action.payload.response.data.message
      
    })
    .addCase(getUserCart.pending,(state)=>{
            state.isLoading=true;
    }).addCase(getUserCart.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false;
        state.isSuccess=true;
        state.cartProduct=action.payload;
     
      
     }).addCase(getUserCart.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.isSuccess=false;
        state.message=action.payload?.response?.data?.message
      
    })
    .addCase(deleteCartItem.pending,(state)=>{
            state.isLoading=true;
    }).addCase(deleteCartItem.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false;
        state.isSuccess=true;
        state.deletedCartProduct=action.payload;
        if(state.isSuccess){
            toast.success("Product Removed From Cart")
        }
     
      
     }).addCase(deleteCartItem.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.isSuccess=false;
        state.message=action.payload.response.data.message
        if(state.isSuccess===false){
            toast.error(state.message)
        }
      
    })
    .addCase(updateCartItem.pending,(state)=>{
            state.isLoading=true;
    }).addCase(updateCartItem.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false;
        state.isSuccess=true;
        state.deletedCartProduct=action.payload;
        if(state.isSuccess){
            toast.success("Product Updated Sucessfully Cart")
        }
     
      
     }).addCase(updateCartItem.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.isSuccess=false;
        state.message=action.payload.response.data.message
        if(state.isSuccess===false){
            toast.error(state.message)
        }
      
    })
    .addCase(forgotPasswordToken.pending,(state)=>{
            state.isLoading=true;
    }).addCase(forgotPasswordToken.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false;
        state.isSuccess=true;
        state.token=action.payload;
        if(state.isSuccess){
            toast.success("Forgot Password Email Sent SucessFully")
        }
     
      
     }).addCase(forgotPasswordToken.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.isSuccess=false;
        state.message=action.payload?.response?.data?.message
        if(state.isSuccess===false){
            toast.error(state.message)
        }
      
    })
    .addCase(resetPassword.pending,(state)=>{
            state.isLoading=true;
    }).addCase(resetPassword.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false;
        state.isSuccess=true;
        state.pass=action.payload;
        if(state.isSuccess){
            toast.success("Password Updated Succesfully")
        }
     
      
     }).addCase(resetPassword.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.isSuccess=false;
        state.message=action.payload?.response?.data?.message
        if(state.isSuccess===false){
            toast.error(state.message)
        }
      
    })
    }
})

export default authSlice.reducer;