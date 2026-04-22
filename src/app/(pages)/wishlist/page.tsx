import React from "react";

export default function Wishlist() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <a className="hover:text-primary-600 transition-colors" href="/">
              Home
            </a>
            <span>/</span>
            <span className="text-gray-900 font-medium">Wishlist</span>
          </nav>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                <svg
                  data-prefix="fas"
                  data-icon="heart"
                  className="svg-inline--fa fa-heart text-xl text-red-500"
                  role="img"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  My Wishlist
                </h1>
                <p className="text-gray-500 text-sm">1 item saved</p>
              </div>
            </div>
          </div>
        </div>
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors">
              <div className="md:col-span-6 flex items-center gap-4">
                <a
                  className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0"
                  href="/products/6428e997dc1175abc65ca0a1"
                >
                  <img
                    alt="Woman Shawl"
                    className="w-full h-full object-contain p-2"
                    src="https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg"
                  />
                </a>
                <div className="min-w-0">
                  <a
                    className="font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-2"
                    href="/products/6428e997dc1175abc65ca0a1"
                  >
                    Woman Shawl
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Women's Fashion</p>
                </div>
              </div>
              <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                <span className="md:hidden text-sm text-gray-500">Price:</span>
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
                  <svg
                    data-prefix="fas"
                    data-icon="cart-shopping"
                    className="svg-inline--fa fa-cart-shopping text-xs"
                    role="img"
                    viewBox="0 0 640 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                    />
                  </svg>
                  <span className="md:hidden lg:inline">Add to Cart</span>
                </button>
                <button
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50"
                  title="Remove"
                >
                  <svg
                    data-prefix="fas"
                    data-icon="trash"
                    className="svg-inline--fa fa-trash text-sm"
                    role="img"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <a
            className="text-gray-500 hover:text-primary-600 text-sm font-medium transition-colors"
            href="/products"
          >
            ← Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
}
