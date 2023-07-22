import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { contactService } from "./contactService";



export const createQuery=createAsyncThunk("contact/post",async (userData,thunkAPI)=>{
    try{
        console.log("userData")
        console.log(userData)
        return await contactService.postQuery(userData);
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
    
})



const contactState = {
    product:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
    addToWishList:""
}


export const contactSlice=createSlice({
    name:"contact",
    initialState:contactState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createQuery.pending,(state)=>{
                state.isLoading=true;
            }).addCase(createQuery.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.contact=action.payload;
                if(state.isSuccess === true){
                    toast.success("Contact Form Submitted Succesfully");
                }
            }).addCase(createQuery.rejected,(state,action)=>{
                state.isLoading=false;
                state.isError=true;
                state.isSuccess=false;
                state.contact=action.contact;
                state.message=action.error;
                if(state.isError === true){
                    toast.error("Problem while Submitting the Form");
                }
            })
          
    }
})

export default contactSlice.reducer;