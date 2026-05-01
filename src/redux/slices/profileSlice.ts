import { IUser } from "@/interfaces/routeApi/response/IUser";
import { authServices } from "@/services/routeAPI/authServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState: {
  profile: IUser|null;
  isLoading:boolean
} = {
  profile: null ,
  isLoading:false
}

export const getUserprofile = createAsyncThunk('profile/getUserprofile',async ()=>{
  // const profile = await authServices.Signup();
  // return profile
})

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(getUserprofile.pending,(state)=>{
      state.isLoading=true
    });
    builder.addCase(getUserprofile.fulfilled,(state,action)=>{
      state.isLoading = false
    });
    builder.addCase(getUserprofile.rejected,(state)=>{
      state.isLoading = false
    })
  }
})

export const profileReducer = profileSlice.reducer