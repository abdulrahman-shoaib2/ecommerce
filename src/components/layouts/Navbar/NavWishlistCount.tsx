"use client";
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getUserWishlist } from '@/redux/slices/wishlistSlice';
import { useSession } from 'next-auth/react';


export default function NavWishlistCount() {
  const { itemsCount, isLoading } = useSelector((store: RootState) => store.wishlist)
  const dispatch = useDispatch<AppDispatch>()
  const session = useSession()

  useEffect(() => {
    if(session.data?.user.token){

      dispatch(getUserWishlist())
    }
  }, [session.data?.user,dispatch])

  if (itemsCount && itemsCount > 0) {
    return (
      <span className="absolute top-0.5 size-4 right-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">{ itemsCount}</span>
    )
  }
  if (isLoading) {
    return (
      <span className="absolute top-0.5 size-4 right-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center leading-tight ring-2 ring-white"><Loader2 className="size-3.5  animate-spin" /></span>
    )
  }

  return null
}
