"use client"
import { cartServices } from "@/services/cartServices";
import { createContext, ReactNode, Dispatch,  useEffect, useState, SetStateAction } from "react";

export const cartContext = createContext<{
		cartCount: number;
		setCartCount: Dispatch<SetStateAction<number>>;
		isLoading: boolean;
	}>({
		cartCount: 0,
		setCartCount: () => {},
    isLoading:false,
	})
	
export default function CartContextProvider({
		children,
	}:{
		children: ReactNode;
	}){
	const [cartCount, setCartCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
		
	async function getCart() {
	setIsLoading(true)
		const response = await cartServices.getUserCart();
		setCartCount(response.numOfCartItems);
		setIsLoading(false)
	}

	useEffect(() =>{
		getCart();
	}, []);
	
  // 
	return (
		<cartContext.Provider value={{ cartCount, setCartCount, isLoading}}>
			{children}
		</cartContext.Provider>
	);
}