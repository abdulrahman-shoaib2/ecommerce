"use client";
import React from 'react'
import { useContext } from "react";
import { navbarContext } from "@/contexts/navbarContext";
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function VerticalBtn() {
  const { isVertical, setIsVertical } = useContext(navbarContext);

  return (
    <Button
      onClick={() => setIsVertical(!isVertical)}
      className="lg:hidden ml-1 w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center transition-colors"
    >
      <FontAwesomeIcon
        icon={faBars}
        className="svg-inline--fa fa-bars"
      />
    </Button>

  )
}
