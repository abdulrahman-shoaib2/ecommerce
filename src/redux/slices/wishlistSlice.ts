import { wishlistServices } from "@/services/routeAPI/wishlistServices";
import { GetWishlist } from "@/types/routeApi/response/WishlistResType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: {
  wishlist: GetWishlist | null;
  itemsCount: number;
  wishlistArr: string[]
  isRemoving: boolean;
  isAdding: boolean;
  isLoading: boolean;
  firstLoad: boolean;
} = {
  wishlist: null,
  itemsCount: 0,
  wishlistArr: [],
  isLoading: false,
  isAdding: false,
  isRemoving: false,
  firstLoad: true,
}

export const getUserWishlist = createAsyncThunk('wishlist/getUserWishlist', async () => {
  const wishlist = await wishlistServices.getUserWithlist();

  return wishlist
})

export const removeFromWishlist = createAsyncThunk('wishlist/removeFromWishlist', async (id: string) => {
  const wishlist = await wishlistServices.removeFromWishlist(id);
  return wishlist.data
})
// export const addToWishlist = createAsyncThunk('wishlist/addToWishlist', async (id: string) => {
//   const wishlist = 
//   console.log(wishlist)
//   return wishlist
// })


const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(getUserWishlist.pending, (state) => {
      state.isLoading = true
    });
    builder.addCase(getUserWishlist.fulfilled, (state, action) => {
      state.wishlist = action.payload;
      state.wishlistArr = state.wishlist?.data.map((product, index) => {
        return product.id
      }) || []
      state.itemsCount = state.wishlist.count;
      state.isLoading = false
      state.firstLoad = false
    });
    builder.addCase(getUserWishlist.rejected, (state) => {
      state.isLoading = false
      state.firstLoad = false
    })
    builder.addCase(removeFromWishlist.pending, (state) => {
      state.isLoading = true
      state.isRemoving = true

    });
    builder.addCase(removeFromWishlist.fulfilled, (state, action) => {
      state.wishlistArr = action.payload;
      state.itemsCount = state.wishlistArr.length;
      state.isRemoving = false
      state.isLoading = false
    });
    builder.addCase(removeFromWishlist.rejected, (state) => {
      state.isRemoving = false
      state.isLoading = false
    })
    // builder.addCase(addToWishlist.pending, (state) => {
    //   state.isLoading = true
    //   state.isAdding = true

    // });
    // builder.addCase(addToWishlist.fulfilled, (state, action) => {
    //   // state.wishlistArr = action.payload;
    //   state.isAdding = false
    //   state.isLoading = false
    //   getUserWishlist()
    //   console.log(action.payload)
    // });
    // builder.addCase(addToWishlist.rejected, (state) => {
    //   state.isAdding = false
    //   state.isLoading = false
    // })
  }
})

export const wishlistReducer = wishlistSlice.reducer

