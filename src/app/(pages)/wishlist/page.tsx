import PageHeader from "@/components/PageHeader";
import WishlistCard from "@/components/WishlistCard";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Wishlist() {
  const wishlist = true;
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
      desc: `1 item saved`
    }
  }
  return (
    <>
      <div className="min-h-screen bg-gray-50/50">
        {wishlist ?
          (
            <>
              <div className="bg-white border-b border-gray-100">
                <PageHeader {...section} />

                {/* <div className="container mx-auto px-4 py-8">
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Link className="hover:text-primary-600 transition-colors" href="/">
                    Home
                  </Link>
                  <span>/</span>
                  <span className="text-gray-900 font-medium">Wishlist</span>
                </nav>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                      <FontAwesomeIcon icon={faHeart} className="svg-inline--fa fa-heart text-xl text-red-500" />

                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">
                        My Wishlist
                      </h1>
                      <p className="text-gray-500 text-sm">1 item saved</p>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
              <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Status</div>
                    <div className="col-span-2 text-center">Actions</div>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {
                      <WishlistCard />
                    }
                  </div>
                </div>
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
  );
}
