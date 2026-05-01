"use client";
import PageHeader from "@/components/shared/PageHeader";
import WishlistCard from "@/app/(pages)/wishlist/_components/WishlistCard";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import WishlistGrid from "./WishlistGrid";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useSession } from "next-auth/react";

export default function InnerWishlist() {
  const { wishlist, itemsCount } = useSelector((store: RootState) => store.wishlist)
  const session =useSession()

  const section = {
    classNames: '',
    textColor: 'black',
    links: [
      {
        href: '/',
        displayAs: 'Home'
      },
      {
        href: '#',
        displayAs: 'Wishlist'
      },
    ],
    badge: {
      iconWrapper: {
        bg: 'bg-red-50',
        ring: false,
        shadow: 'none'
      },
      icon: {
        name: "fa-box-open",
        is: faHeart,
        color: 'red',
        size: 'text-xl '
      }
    },
    sectionInfo: {
      name: 'My Wishlist',
      desc: `${itemsCount} item saved`
    }
  }
  return (

    <>
      <div className="min-h-screen bg-gray-50/50">
        {session.data?.user.token?
          (
            <>
              <div className="bg-white border-b border-gray-100">
                <PageHeader {...section} />
              </div>
              <div className="container mx-auto px-4 py-8">
                <WishlistGrid />
                <div className="mt-8 flex items-center justify-between">
                  <Link
                    className="text-gray-500 hover:text-primary-600 text-sm font-medium transition-colors"
                    href="/products"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>
            </>
          )
          :
          (
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-sm mx-auto text-center">
                <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon icon={faHeart} className="svg-inline--fa fa-heart text-3xl text-gray-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Your wishlist is empty
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Browse products and save your favorites here. Sign in to sync
                  your wishlist across devices.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                    href="/products"
                  >
                    Browse Products
                    <FontAwesomeIcon icon={faArrowRight} className="svg-inline--fa fa-arrow-right text-sm" />

                  </Link>
                  <Link
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    href="/login"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>

  )
}
