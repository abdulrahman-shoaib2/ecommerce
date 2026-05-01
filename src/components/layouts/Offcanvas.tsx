"use client";
import { navbarContext } from "@/contexts/navbarContext";
import {
  faCartShopping,
  faHeadset,
  faRightFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Icon from "../shared/Icon";
import IconText from "../shared/IconText";
import SearchBarClient from "./Navbar/SearchBarClient";
import { navLinks } from "@/constants/routes";
import { signOut, useSession } from "next-auth/react";
import { cartContext } from "@/contexts/cartContext";
import { Loader2 } from "lucide-react";
import NavMenu from "./Navbar/NavMenu";

export default function Offcanvas() {
  const { isVertical, setIsVertical } = useContext(navbarContext);
  const session = useSession();
  const wishlistCount = 2;
  const wishlistLoading=false;
  const  {cartCount,isLoading:cartLoading} = useContext(cartContext)
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300  ${isVertical ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsVertical(!isVertical)}
      >
      </div>
      <div
        className={`fixed z-100 top-0 right-0 h-full lg:hidden grid gap-1 pb-5 w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 overflow-y-hidden ${isVertical ? "translate-x-0" : "translate-x-full"}`}
      >
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
          <Button
            onClick={() => setIsVertical(!isVertical)}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <Icon icon={faXmark} classNames={{ icon: 'fa-xmark text-gray-600' }} />
          </Button>
        </div>
        <div className="p-4">
          <SearchBarClient radius={{ input: 'rounded-lg', button: 'rounded-lg' }} />
        </div>
        <nav className="p-4">
          <div className="space-y-1">
              <NavMenu listDisplay='grid' subMenu={false} />
            {/* {
              navLinks.map((link, index) => {
                return (
                  <Link
                    key={'offcanvas_' + index}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                )
              })
            } */}
          </div>
        </nav>
        <div className="mx-4 border-t border-gray-100" />
        <div className="px-4 space-y-1">
          <Link
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
            href="/wishlist"
          >
            <IconText icon={faHeart} iWProps={{ gap: 'gap-3' }} text="Wishlist" classNames={{
              iconWrapper: 'size-9 rounded-full bg-red-50 flex items-center justify-center',
              icon: 'fa-heart text-red-500',
              text: 'font-medium text-gray-700',
            }} />
            {wishlistCount > 0 && (<span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">{wishlistLoading?<Loader2 className="size-4 animate-spin" />:wishlistCount}</span>)}
          </Link>
          <Link
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
            href="/cart"
          >
            <IconText icon={faCartShopping} iWProps={{ gap: 'gap-3' }} text="Cart" classNames={{
              iconWrapper: 'size-9 rounded-full bg-primary-50 flex items-center justify-center',
              icon: 'fa-cart-shopping text-primary-600',
              text: 'font-medium text-gray-700',
            }} />

            {cartCount > 0 && (<span className="bg-primary-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">{cartLoading?<Loader2 className="size-4 animate-spin" />:cartCount}</span>)}
          </Link>
        </div>
        <div className="mx-4 border-t border-gray-100" />
        <div className="px-4 py-0 space-y-1">
          {
            session.status == 'authenticated' ?
              <>
                <Link
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
                  href="/profile"
                >
                  <IconText icon={faUser} text="Ahmed Abd Al-Muti" classNames={{ iconWrapper: 'size-9 rounded-full bg-gray-100 flex items-center justify-center', icon: 'fa-user text-gray-500', text: 'font-medium text-gray-700' }} />
                </Link>
                <Button type="button" onClick={()=>signOut({callbackUrl:'/login'})} className="flex items-center justify-start gap-3 px-4 py-3 h-14 rounded-xl hover:bg-red-50 transition-colors w-full text-left bg-transparent">
                  <IconText icon={faRightFromBracket} text="Sign Out" classNames={{ iconWrapper: 'size-9 rounded-full bg-red-50 flex items-center justify-center my-3', icon: 'fa-right-from-bracket text-red-500', text: 'font-medium text-red-600' }} />
                </Button>
              </>
              :
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
          }
        </div>
        <Link
          href="/contact"
        >
          <IconText icon={faHeadset} iWProps={{ gap: 'gap-3' }} text="Need Help?" subText="Contact Support" classNames={{
            innerWrapper: 'mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-primary-50 transition-colors',
            iconWrapper: 'size-10 rounded-full bg-primary-100 flex items-center justify-center',
            textsWrapper: 'grid',
            icon: 'fa-headset text-primary-600',
            text: 'text-sm font-semibold text-gray-700',
            subText: 'text-sm text-primary-600'
          }} />

        </Link>
      </div>
    </>
  );
}
