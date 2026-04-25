import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function WishlistCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors">
      <div className="md:col-span-6 flex items-center gap-4">
        <Link
          className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0"
          href="/products/6428e997dc1175abc65ca0a1"
        >
          <img
            alt="Woman Shawl"
            className="w-full h-full object-contain p-2"
            src="https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg"
          />
        </Link>
        <div className="min-w-0">
          <Link
            className="font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-2"
            href="/products/6428e997dc1175abc65ca0a1"
          >
            Woman Shawl
          </Link>
          <p className="text-sm text-gray-400 mt-1">
            Women's Fashion
          </p>
        </div>
      </div>
      <div className="md:col-span-2 flex md:justify-center items-center gap-2">
        <span className="md:hidden text-sm text-gray-500">
          Price:
        </span>
        <div className="text-right md:text-center">
          <div className="font-semibold text-gray-900">149 EGP</div>
        </div>
      </div>
      <div className="md:col-span-2 flex md:justify-center">
        <span className="md:hidden text-sm text-gray-500 mr-2">
          Status:
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          In Stock
        </span>
      </div>
      <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
        <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-primary-600 text-white hover:bg-primary-700">
          <FontAwesomeIcon icon={faCartShopping} className="svg-inline--fa fa-cart-shopping text-xs" />
          <span className="md:hidden lg:inline">Add to Cart</span>
        </button>
        <button
          className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50"
          title="Remove"
        >
          <FontAwesomeIcon icon={faTrash} className="svg-inline--fa fa-trash text-sm" />

        </button>
      </div>
    </div>

  )
}
