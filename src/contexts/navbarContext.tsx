"use client"
import { createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";

export const navbarContext = createContext<{
    isVertical: boolean;
    setIsVertical: Dispatch<SetStateAction<boolean>>;
  }>({
    isVertical: false,
    setIsVertical: () => {},
  })
  
export default function NavbarContextProvider({
    children,
  }:{
    children: React.ReactNode;
  }){
  const [isVertical, setIsVertical] = useState(false);
    
  return (
    <navbarContext.Provider value={{ isVertical, setIsVertical}}>
      {children}
    </navbarContext.Provider>
  );
}