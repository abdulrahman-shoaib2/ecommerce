import { IProduct } from "@/interfaces/dummyjson/response/IProduct";
import { ICart, ICartProduct } from "@/interfaces/routeApi/response/ICart";
import { cartServices } from "@/services/routeAPI/cartServices";
import { CartActionResType } from "@/types/routeApi/response/CartResType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState: {
  cart: CartActionResType|null;
  // cartProducts: Partial<ICartProduct<IProduct>[]>;
  itemsCount:number;
  isRemoving:boolean;
  isClearing:boolean;
  isLoading:boolean;
  isAdding:boolean;
  firstLoad:boolean;
} = {
  cart: null ,
  // cartProducts: [],
  itemsCount:0,
  isLoading:false,
  isAdding:false,
  isRemoving:false,
  isClearing:false,
  firstLoad:true,
}

export const getUserCart = createAsyncThunk('cart/getUserCart',async ()=>{
  const cart = await cartServices.getUserCart();
  return cart
})
export const addToCart = createAsyncThunk('cart/addToCart',async (id:string)=>{
  const cart = await cartServices.addToCart({productId:id});
  return cart
})
export const removeFromCart = createAsyncThunk('cart/removeFromCart',async (id:string)=>{
  const cart = await cartServices.removeCartItem(id);
  return cart
})
export const changeItemQuantity = createAsyncThunk('cart/changeItemQuantity',async (data:{count: number, id:string}) =>{
  const cart = await cartServices.updateQuantity({count:data.count},data.id);
  return cart
})
export const clearCart = createAsyncThunk('cart/clearCart',async ()=>{
  const cart = await cartServices.clearUserCart();

})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
		// increaseBy:(state,action)=>{
		// 	const product = state.cart?.data.products.find((cartProduct)=>{
    //     return cartProduct.product.id == action.payload.id
    //   })
    //   if(product){
    //     product.count += action.payload.count;
    //   }
		// }
  },
  extraReducers(builder) {
    builder.addCase(getUserCart.pending,(state)=>{
      state.isLoading=true
    });
    builder.addCase(getUserCart.fulfilled,(state,action)=>{
      state.cart = action.payload;
      state.itemsCount = state.cart.numOfCartItems;
      state.isLoading = false
      state.firstLoad = false
    });
    builder.addCase(getUserCart.rejected,(state)=>{
      state.isLoading = false
      state.firstLoad = false
    })
    builder.addCase(addToCart.pending,(state)=>{
      state.isLoading=true
      state.isAdding=true;
    });
    builder.addCase(addToCart.fulfilled,(state,action)=>{
      state.cart = action.payload;
      state.itemsCount = state.cart.numOfCartItems;
      state.isLoading = false
      state.isAdding=false;
    });
    builder.addCase(addToCart.rejected,(state)=>{
      state.isLoading = false
      state.isAdding=false;
    })
    builder.addCase(removeFromCart.pending,(state)=>{
      state.isLoading=true
      state.isRemoving=true;
    });
    builder.addCase(removeFromCart.fulfilled,(state,action)=>{
      state.cart = action.payload;
      state.itemsCount = state.cart.numOfCartItems;
      state.isLoading = false
      state.isRemoving=false;
    });
    builder.addCase(removeFromCart.rejected,(state)=>{
      state.isLoading = false
      state.isRemoving=false;
    })
    builder.addCase(clearCart.pending,(state)=>{
      state.isLoading=true
      state.isClearing=true;
    });
    builder.addCase(clearCart.fulfilled,(state)=>{
      state.cart = null
      state.itemsCount = 0;
      state.isLoading = false
      state.isClearing=false;
    });
    builder.addCase(clearCart.rejected,(state)=>{
      state.isLoading = false
      state.isClearing=false;
    })
    builder.addCase(changeItemQuantity.pending,(state)=>{
      state.isLoading=true
      
    });
    builder.addCase(changeItemQuantity.fulfilled,(state,action)=>{
      state.cart = action.payload
      state.itemsCount = action.payload.numOfCartItems;
      state.isLoading = false
      
    });
    builder.addCase(changeItemQuantity.rejected,(state)=>{
      state.isLoading = false
      
    })
  }
})

export const cartReducer = cartSlice.reducer
// export const {increaseBy} = cartSlice.actions;