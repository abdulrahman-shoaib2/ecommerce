import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <a className="hover:text-primary-600 transition-colors" href="/">
              Home
            </a>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">Search Results</span>
          </nav>
          <form className="max-w-2xl">
            <div className="relative">
              <svg
                data-prefix="fas"
                data-icon="magnifying-glass"
                className="svg-inline--fa fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                role="img"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
              <input
                placeholder="Search for products..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-lg"
                type="text"
                defaultValue="l"
              />
            </div>
          </form>
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Search Results for "l"
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              We found 0 products for you
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">Categories</h3>
                  </div>
                  <div className="space-y-2 max-h-52 overflow-y-auto">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Music
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Men's Fashion
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Women's Fashion
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        SuperMarket
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Baby &amp; Toys
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Home
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Books
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Beauty &amp; Health
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Mobiles
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Electronics
                      </span>
                    </label>
                  </div>
                </div>
                <hr className="border-gray-100" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">
                        Min (EGP)
                      </label>
                      <input
                        placeholder="0"
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                        type="number"
                        
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">
                        Max (EGP)
                      </label>
                      <input
                        placeholder="No limit"
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                        type="number"
                        
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">
                      Under 500
                    </button>
                    <button className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">
                      Under 1K
                    </button>
                    <button className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">
                      Under 5K
                    </button>
                    <button className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">
                      Under 10K
                    </button>
                  </div>
                </div>
                <hr className="border-gray-100" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">Brands</h3>
                  </div>
                  <div className="space-y-2 max-h-52 overflow-y-auto">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Canon
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Dell
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Lenovo
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        SONY
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Infinix
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Realme
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        HONOR
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Nokia
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        OPPO
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Huawei
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Apple
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Xiaomi
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Samsung
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        Jack &amp; Jones
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        type="checkbox"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        LC Waikiki
                      </span>
                    </label>
                  </div>
                </div>
                <hr className="border-gray-100" />
                <button className="w-full py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors">
                  Clear All Filters
                </button>
              </div>
            </div>
          </aside>
          <main className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <button className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                  <svg
                    data-prefix="fas"
                    data-icon="sliders"
                    className="svg-inline--fa fa-sliders"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z"
                    />
                  </svg>
                  Filters
                </button>
                <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200 p-1">
                  <button title="test" className="p-2 rounded-md transition-colors bg-primary-600 text-white">
                    <svg
                      data-prefix="fas"
                      data-icon="grip-vertical"
                      className="svg-inline--fa fa-grip-vertical"
                      role="img"
                      viewBox="0 0 320 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"
                      />
                    </svg>
                  </button>
                  <button title="test" className="p-2 rounded-md transition-colors text-gray-500 hover:text-gray-700">
                    <svg
                      data-prefix="fas"
                      data-icon="list"
                      className="svg-inline--fa fa-list"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select title="test" className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none bg-white">
                  <option value=''>Relevance</option>
                  <option value="price">Price: Low to High</option>
                  <option value="-price">Price: High to Low</option>
                  <option value="-ratingsAverage">Rating: High to Low</option>
                  <option value="title">Name: A to Z</option>
                  <option value="-title">Name: Z to A</option>
                </select>
              </div>
            </div>
            <div className="mb-6 flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <svg
                  data-prefix="fas"
                  data-icon="filter"
                  className="svg-inline--fa fa-filter text-xs"
                  role="img"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"
                  />
                </svg>
                Active:
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                "l"
                <button title="test" className="hover:text-red-500">
                  <svg
                    data-prefix="fas"
                    data-icon="xmark"
                    className="svg-inline--fa fa-xmark"
                    role="img"
                    viewBox="0 0 384 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"
                    />
                  </svg>
                </button>
              </span>
              <button className="text-xs text-gray-500 hover:text-gray-700 underline ml-2">
                Clear all
              </button>
            </div>
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <svg
                  data-prefix="fas"
                  data-icon="magnifying-glass"
                  className="svg-inline--fa fa-magnifying-glass text-3xl text-gray-400"
                  role="img"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors">
                Clear Filters
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
