import React from "react";

export default function Cart() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <a className="hover:text-primary-600 transition" href="/">
              Home
            </a>
            <span>/</span>
            <span className="text-gray-900 font-medium">Shopping Cart</span>
          </nav>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-primary-600 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                  <svg
                    data-prefix="fas"
                    data-icon="cart-shopping"
                    className="svg-inline--fa fa-cart-shopping"
                    role="img"
                    viewBox="0 0 640 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                    />
                  </svg>
                </span>
                Shopping Cart
              </h1>
              <p className="text-gray-500 mt-2">
                You have{" "}
                <span className="font-semibold text-primary-600">1 item</span>{" "}
                in your cart
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">
                <div className="flex gap-4 sm:gap-6">
                  <a
                    className="relative shrink-0 group"
                    href="/products/6428de2adc1175abc65ca05b"
                  >
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gray-50 p-3 border border-gray-100 overflow-hidden">
                      <img
                        alt="Softride Enzo NXT CASTLEROCK-High Risk R"
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        src="https://ecommerce.routemisr.com/Route-Academy-products/1680399913757-cover.jpeg"
                      />
                    </div>
                  </a>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="mb-3">
                      <a
                        className="group/title"
                        href="/products/6428de2adc1175abc65ca05b"
                      >
                        <h3 className="font-semibold text-gray-900 group-hover/title:text-primary-600 transition-colors leading-relaxed text-base sm:text-lg">
                          Softride Enzo NXT CASTLEROCK-High Risk R
                        </h3>
                      </a>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="inline-block px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                          Men's Fashion
                        </span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="text-primary-600 font-bold text-lg">
                        2,999 EGP
                      </span>
                    </div>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                        <button
                          title="test"
                          disabled
                          className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-40 transition-all"
                        >
                          <svg
                            data-prefix="fas"
                            data-icon="minus"
                            className="svg-inline--fa fa-minus text-xs"
                            role="img"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"
                            />
                          </svg>
                        </button>
                        <span className="w-12 text-center font-bold text-gray-900">
                          1
                        </span>
                        <button title="test" className="h-8 w-8 rounded-lg bg-primary-600 shadow-sm flex items-center justify-center text-white hover:bg-primary-700 transition-all">
                          <svg
                            data-prefix="fas"
                            data-icon="plus"
                            className="svg-inline--fa fa-plus text-xs"
                            role="img"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-xs text-gray-400 mb-0.5">Total</p>
                          <p className="text-xl font-bold text-gray-900">
                            2,999{" "}
                            <span className="text-sm font-medium text-gray-400">
                              EGP
                            </span>
                          </p>
                        </div>
                        <button
                          className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center transition-all duration-200"
                          title="Remove item"
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
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
              <a
                className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-2"
                href="/"
              >
                <span>←</span> Continue Shopping
              </a>
              <button className="group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors">
                <svg
                  data-prefix="fas"
                  data-icon="trash"
                  className="svg-inline--fa fa-trash text-xs group-hover:scale-110 transition-transform"
                  role="img"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"
                  />
                </svg>
                <span>Clear all items</span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-4">
              <div className="bg-gray-900 p-5">
                <h2 className="text-white font-bold text-lg">Order Summary</h2>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal (1 items)</span>
                  <span className="font-semibold">2,999 EGP</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">
                    Calculated at checkout
                  </span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Estimated Total</span>
                  <span className="text-primary-600">2,999 EGP</span>
                </div>
                <div className="pt-4 space-y-3">
                  <a
                    className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-all"
                    href="/login?redirect=/cart"
                  >
                    <svg
                      data-prefix="fas"
                      data-icon="user"
                      className="svg-inline--fa fa-user"
                      role="img"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"
                      />
                    </svg>
                    Login to Checkout
                  </a>
                  <p className="text-xs text-gray-400 text-center">
                    Don't have an account?{" "}
                    <a
                      className="text-primary-600 hover:underline"
                      href="/signup?redirect=/cart"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <p className="text-xs text-gray-500">
                    ✓ Your cart items will be saved
                  </p>
                  <p className="text-xs text-gray-500">
                    ✓ Track your orders easily
                  </p>
                  <p className="text-xs text-gray-500">
                    ✓ Access exclusive member deals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
