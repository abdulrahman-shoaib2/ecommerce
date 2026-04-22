"use client";
import CartContextProvider from "@/contexts/cartContext";
import { SessionProvider } from "next-auth/react";
import React from "react";
import {store} from "@/redux/store";
import { Provider } from "react-redux";
import NavbarContextProvider from "@/contexts/navbarContext";

export default function ProvidersWrapper({
	children,
}: {
	children: React.ReactNode;
}){
	return (
		<>
			<Provider store={store} >
				<SessionProvider>
					<CartContextProvider>
            <NavbarContextProvider>
              {children}
            </NavbarContextProvider>
            </CartContextProvider>
				</SessionProvider>
			</Provider>
		</>
	
	);
}

