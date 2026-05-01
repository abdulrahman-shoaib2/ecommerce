"use client";
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "@/redux/slices/cartSlice";
import { useSession } from 'next-auth/react';


export default function NavCartCount() {
  const { cart, itemsCount, isLoading } = useSelector((store: RootState) => store.cart)
  const dispatch = useDispatch<AppDispatch>()
  const session = useSession()

  useEffect(() => {
    if(session.data?.user.token){
      dispatch(getUserCart())
    }
  }, [session.data?.user,dispatch])

  if ( itemsCount > 0) {
    return (
      <span className="absolute size-4 top-0.5 right-0.5  rounded-full bg-primary-600 text-white text-[10px] leading-tight font-bold flex items-center justify-center ring-2 ring-white ">
        {itemsCount}
      </span>
    )

  }
  if(isLoading){
    return (
      <span className="absolute size-3.5 top-0.5 right-0.5  rounded-full bg-primary-600 text-white text-[10px] leading-tight font-bold flex items-center justify-center ring-2 ring-white ">
        <Loader2 className="size-3.5  animate-spin" />
      </span>
    )
  }
  return null

}
