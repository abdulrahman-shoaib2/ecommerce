"use client"
import { createContext, ReactNode, Dispatch,  useEffect, useState, SetStateAction } from "react";

export const cartContext = createContext<{
		cartCount: number;
		setCartCount: Dispatch<SetStateAction<number>>;
		isLoading: boolean;
	}>({
		cartCount: 0,
		setCartCount: () => {},
		isLoading:true
	})
	
export default function CartContextProvider({
		children,
	}:{
		children: ReactNode;
	}){
	const [cartCount, setCartCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
		
	// async function getCart() {
	// setIsLoading(true)
	// 	const response = await apiServices.getUserCart();
	// 	setCartCount(response.numOfCartItems);
	// 	setIsLoading(false)
	// }

	// useEffect(() =>{
	// 	getCart();
	// }, []);
	
	return (
		<cartContext.Provider value={{ cartCount, setCartCount, isLoading}}>
			{children}
		</cartContext.Provider>
	);
}