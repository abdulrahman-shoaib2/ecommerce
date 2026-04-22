"use client";
import { navbarContext } from "@/contexts/navbarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faHeadset, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import {  faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import React, { useContext } from "react";
import { Button } from "./ui/button";
import Link from 'next/link'
import Image from "next/image";


export default function Offcanvas() {

  const {isVertical, setIsVertical} =  useContext(navbarContext);

  return (
    <div className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300  ${isVertical?'opacity-100':'opacity-0 pointer-events-none'}`}>
      <div className={`fixed top-0 right-0 h-full grid gap-2 pb-5 w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 overflow-y-hidden ${isVertical?'translate-x-0':'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
          <Image
            alt="FreshCart"
            loading="lazy"
            width={160}
            height={31}
            decoding="async"
            data-nimg={1}
            className="h-8 w-auto"
            style={{ color: "transparent" }}
            src="/freshcart-logo.svg"
          />
          <Button onClick={()=>setIsVertical(!isVertical)} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <FontAwesomeIcon icon={faXmark} className="svg-inline--fa fa-xmark text-gray-600"/>
          </Button>
        </div>
        <form className="p-4 border-b border-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm select-none"
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faSearch} className="svg-inline--fa fa-magnifying-glass text-sm" />
            </Button>
          </div>
        </form>
        <nav className="p-4">
          <div className="space-y-1">
            {
              

            }
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              href="/products"
            >
              Shop
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              href="/categories"
            >
              Categories
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              href="/brands"
            >
              Brands
            </Link>
          </div>
        </nav>
        <div className="mx-4 border-t border-gray-100" />
        <div className="p-4 space-y-1">
          <Link
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
            href="/wishlist"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                  <FontAwesomeIcon icon={faHeart} className="svg-inline--fa fa-heart text-red-500" />
              </div>
              <span className="font-medium text-gray-700">Wishlist</span>
            </div>
          </Link>
          <Link
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
            href="/cart"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center">
                <FontAwesomeIcon icon={faCartShopping} className="svg-inline--fa fa-cart-shopping text-primary-600" />
              </div>
              <span className="font-medium text-gray-700">Cart</span>
            </div>
          </Link>
        </div>
        <div className="mx-4 border-t border-gray-100" />
        <div className="p-4 space-y-1">
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Link
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
              href="/login"
            >
              Sign In
            </Link>
            <Link
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition-colors"
              href="/register"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <Link
          className="mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-primary-50 transition-colors "
          href="/contact"
        >
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
            <FontAwesomeIcon icon={faHeadset} className="svg-inline--fa fa-headset text-primary-600" />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-700">
              Need Help?
            </div>
            <div className="text-sm text-primary-600">Contact Support</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
