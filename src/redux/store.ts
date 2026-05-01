import {configureStore} from '@reduxjs/toolkit';
import {counterReducer} from './slices/counterSlice'
import { productsReducer } from './slices/productsSlice';
import { cartReducer } from './slices/cartSlice';
import { wishlistReducer } from './slices/wishlistSlice';
import { profileReducer } from './slices/profileSlice';

export const store = configureStore({
	reducer:{
		counter:counterReducer,
		// products:productsReducer,
    cart:cartReducer,
    wishlist:wishlistReducer,
    profile:profileReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
