import {  faGift, faPhone, faTruck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import {  faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { contactInfo } from "@/util/data";



export default function HeaderStrip() {
  return (
    <div className="hidden lg:block text-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-6 text-gray-500">
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTruck} className="svg-inline--fa fa-truck text-primary-600 text-xs" />

              <span>Free Shipping on Orders 500 EGP</span>
            </span>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faGift} className="svg-inline--fa fa-gift text-primary-600 text-xs" />
              <span>New Arrivals Daily</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-gray-500">
              <Link
                href="tel:+18001234567"
                className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
              >
                
              <FontAwesomeIcon icon={contactInfo[0].icon.faName} className="svg-inline--fa fa-phone  text-xs" />
                <span>{contactInfo[0].text?.content}</span>
              </Link>
              <Link
                href="mailto:support@freshcart.com"
                className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="svg-inline--fa fa-envelope  text-xs" />
                <span>{contactInfo[1].text?.content}</span>
              </Link>
            </div>
            <span className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-4">
              <Link
                className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                href="/login"
              >

                <FontAwesomeIcon icon={faUser} className="svg-inline--fa fa-user  text-xs" />
                <span>Sign In</span>
              </Link>
              <Link
                className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                href="/register"
              >
                <FontAwesomeIcon icon={faUserPlus} className="svg-inline--fa fa-user-plus  text-xs" />

                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
