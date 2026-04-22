"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faHeadset, faSearch } from "@fortawesome/free-solid-svg-icons";
import {  faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { navbarContext } from "@/contexts/navbarContext";


const navLinks = [
  { name: "Home", href: "/", hasChildren: false },
  { name: "Shop", href: "/products", hasChildren: false },
  {
    name: "Categories", href: "/categories", hasChildren: true, children: [
      { name: 'All Categories', href: '/categories' },
      { name: 'Electronics', href: '/products?category=6439d58a0049ad0b52b9003f' },
      { name: 'Women\'s Fashion', href: '/products?category=6439d5b90049ad0b52b90048' },
      { name: 'Men\'s Fashion', href: '/products?category=6439d2d167d9aa4ca970649f' },
      { name: 'Beauty & Health', href: '/products?category=6439d40367d9aa4ca97064a8' },
    ]
  },
  { name: "Brands", href: "/brands", hasChildren: false },
];

export default function Navbar() {
  const { isVertical, setIsVertical } = useContext(navbarContext);
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-[72px] gap-4 lg:gap-8">
            <Link className="shrink-0" href="/">
              <Image
                alt="FreshCart"
                loading="lazy"
                width={160}
                height={31}
                decoding="async"
                data-nimg={1}
                className="h-6 lg:h-8 w-auto select-none"
                style={{ color: "transparent" }}
                src="/freshcart-logo.svg"
              />
            </Link>
            <form className="hidden lg:flex flex-1 max-w-2xl">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm select-none"
                />
                <Button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  <FontAwesomeIcon icon={faSearch} className="svg-inline--fa fa-magnifying-glass text-sm" />
                </Button>
              </div>
            </form>
            <nav className="hidden xl:flex items-center gap-6">
              {
                navLinks.map((link, index) => {
                  if (link.hasChildren) {
                    return (
                      <div className="relative group" key={'navLink_' + index}>
                        <Link href='/categories' className="flex items-center gap-1.5 text-gray-700 hover:text-primary-600 font-medium transition-colors py-2  ">
                          Categories
                          <svg
                            data-prefix="fas"
                            data-icon="chevron-down"
                            className="svg-inline--fa fa-chevron-down text-[10px] transition-transform group-hover:rotate-180"
                            role="img"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                            />
                          </svg>
                        </Link>
                        <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-50">
                            {
                              link.children?.map((child, index) => {
                                return (
                                  <Link
                                    key={link.name + "_subLink_" + index}
                                    className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                    href={child.href}
                                  >
                                    {child.name}
                                  </Link>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return (
                    <Link
                      key={'navLink_' + index}
                      className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  );
                })

              }

            </nav>
            <div className="flex items-center gap-1 lg:gap-2">
              <Link
                className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
                href="/contact"
              >
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                  <FontAwesomeIcon icon={faHeadset} className="svg-inline--fa fa-headset text-primary-600" />
                </div>
                <div className="text-xs">
                  <div className="text-gray-400">Support</div>
                  <div className="font-semibold text-gray-700">24/7 Help</div>
                </div>
              </Link>
              <Link
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
                title="Wishlist"
                href="/wishlist"
              >
                <FontAwesomeIcon icon={faHeart} className="svg-inline--fa fa-heart text-xl text-gray-500 group-hover:text-primary-600 transition-colors" />
              </Link>
              <Link
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
                title="Cart"
                href="/cart"
              >
                <FontAwesomeIcon icon={faCartShopping} className="svg-inline--fa fa-cart-shopping text-xl text-gray-500 group-hover:text-primary-600 transition-colors" />
              </Link>
              <Link
                className="hidden lg:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-primary-600/20"
                href="/login"
              >
                <FontAwesomeIcon icon={faUser} className="svg-inline--fa fa-user text-xs" />

                {/* <svg
                  data-prefix="far"
                  data-icon="user"
                  className="svg-inline--fa fa-user text-xs"
                  role="img"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"
                  />
                </svg> */}
                Sign In
              </Link>
              <Button onClick={()=>setIsVertical(!isVertical)} className="lg:hidden ml-1 w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center transition-colors">
                <FontAwesomeIcon icon={faBars} className="svg-inline--fa fa-bars" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
