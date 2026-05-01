import { IProductDetails } from "@/interfaces/routeApi/response/IProduct";
import { productsService } from "@/services/routeAPI/productsServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState:{
  products: IProductDetails[];
  isLoading:boolean;
} = {
  products:[],
  isLoading:false,
} 

export const getAllProducts = createAsyncThunk("products/getAllProducts", async (category?:string)=>{
  if(category){
    const products = await productsService.getProducts({category})
    return products
  }else{
    const products = await productsService.getProducts()
    return products

  }
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(getAllProducts.pending,(state)=>{
      state.isLoading=true;
    });
    builder.addCase(getAllProducts.fulfilled,(state,action)=>{
      state.products = action.payload
      state.isLoading= false;
    });
    builder.addCase(getAllProducts.rejected,()=>{

    });
  } 
})

export const productsReducer = productsSlice.reducer