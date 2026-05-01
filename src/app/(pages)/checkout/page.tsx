import PageHeader from "@/components/shared/PageHeader";
import { ordersServices } from "@/services/ordersServices";
import { faArrowLeft, faBagShopping, faBox, faCheck, faCircleInfo, faCity, faCreditCard, faHouse, faLocationDot, faMoneyBill, faPhone, faReceipt, faShieldHalved, faTruck, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function Checkout() {
    const section = {
      classNames: "",
      textColor: "black",
      links: [
        {
          href: "/",
          displayAs: "Home",
        },
        // {
        //   href: "/cart",
        //   displayAs: "Cart",
        // },
        {
          href: "/checkout",
          displayAs: "Checkout",
        },
      ],
      badge: {
        iconWrapper: {
          bg: "bg-primary-500",
          ring: false,
          shadow: "none",
        },
        icon: {
          name: "fa-box-open",
          is: faReceipt,
          color: "text-white",
          size: "text-xl ",
        },
      },
      sectionInfo: {
        name: "Complete Your Order",
        desc: `Review your items and complete your purchase`,
      },
    };
    async function handleCheckout() {
      // select payment method dn address or add new one
      // components 
      // const response =await ordersServices.checkoutSession() // needs the cart id and address
      // isLoading? <Loader2 className="animate-spin w-5 h-5" /> :
      // location.href= response.session.url
      // after succuess user is directed to allorder page
    }
  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            {/* <PageHeader {...section} /> */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link className="hover:text-primary-600 transition" href="/">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <Link className="hover:text-primary-600 transition" href="/cart">
                Cart
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-medium">Checkout</span>
            </nav>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="bg-gradient-to-br from-primary-600 to-primary-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20">
                  <FontAwesomeIcon icon={faReceipt} className="svg-inline--fa fa-receipt"/>
                  </span>
                  Complete Your Order
                </h1>
                <p className="text-gray-500 mt-2">
                  Review your items and complete your purchase
                </p>
              </div>
              <Link
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary-50 transition-all"
                href="/cart"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="svg-inline--fa fa-arrow-left"/>
                Back to Cart
              </Link>
            </div>
          </div>
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FontAwesomeIcon icon={faHouse} className="svg-inline--fa fa-house"/>
                      Shipping Address
                    </h2>
                    <p className="text-primary-100 text-sm mt-1">
                      Where should we deliver your order?
                    </p>
                  </div>
                  <div className="p-6 space-y-5">
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <FontAwesomeIcon icon={faCircleInfo} className="svg-inline--fa fa-circle-info text-blue-600 text-sm"/>
                      </div>
                      <div>
                        <p className="text-sm text-blue-800 font-medium">
                          Delivery Information
                        </p>
                        <p className="text-xs text-blue-600 mt-0.5">
                          Please ensure your address is accurate for smooth
                          delivery
                        </p>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        City <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <FontAwesomeIcon icon={faCity} className="svg-inline--fa fa-city text-gray-500 text-sm"/>
                        </div>
                        <input
                          id="city"
                          className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                          placeholder="e.g. Cairo, Alexandria, Giza"
                          type="text"
                          name="city"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="details"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <FontAwesomeIcon icon={faLocationDot} className="svg-inline--fa fa-location-dot text-gray-500 text-sm"/>
                        </div>
                        <textarea
                          id="details"
                          rows={3}
                          className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all resize-none border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                          placeholder="Street name, building number, floor, apartment..."
                          name="details"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPhone} className="svg-inline--fa fa-phone text-gray-500 text-sm"/>
                        </div>
                        <input
                          id="phone"
                          className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                          placeholder="01xxxxxxxxx"
                          type="tel"
                          name="phone"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                          Egyptian numbers only
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FontAwesomeIcon icon={faWallet} className="svg-inline--fa fa-wallet"/>
                      Payment Method
                    </h2>
                    <p className="text-primary-100 text-sm mt-1">
                      Choose how you'd like to pay
                    </p>
                  </div>
                  <div className="p-6 space-y-4">
                    <button
                      type="button"
                      className="w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group border-primary-500 bg-gradient-to-r from-primary-50 to-emerald-50 shadow-sm"
                    >
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30">
                      <FontAwesomeIcon icon={faMoneyBill} className="svg-inline--fa fa-money-bill text-xl"/>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-bold text-primary-700">
                          Cash on Delivery
                        </h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Pay when your order arrives at your doorstep
                        </p>
                      </div>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all bg-primary-600 text-white">
                        <FontAwesomeIcon icon={faCheck} className="svg-inline--fa fa-check text-xs"/>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group border-gray-200 hover:border-primary-200 hover:bg-gray-50"
                    >
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-gray-100 text-gray-400 group-hover:bg-gray-200">
                        <FontAwesomeIcon icon={faCreditCard} className="svg-inline--fa fa-credit-card text-xl"/>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-bold text-gray-900">Pay Online</h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Secure payment with Credit/Debit Card via Stripe
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <img
                            alt="Visa"
                            className="h-5"
                            src="https://img.icons8.com/color/48/visa.png"
                          />
                          <img
                            alt="Mastercard"
                            className="h-5"
                            src="https://img.icons8.com/color/48/mastercard.png"
                          />
                          <img
                            alt="Amex"
                            className="h-5"
                            src="https://img.icons8.com/color/48/amex.png"
                          />
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all border-2 border-gray-200" />
                    </button>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 mt-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <FontAwesomeIcon icon={faShieldHalved} className="svg-inline--fa fa-shield-halved text-green-600"/>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800">
                          Secure &amp; Encrypted
                        </p>
                        <p className="text-xs text-green-600 mt-0.5">
                          Your payment info is protected with 256-bit SSL
                          encryption
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FontAwesomeIcon icon={faBagShopping} className="svg-inline--fa fa-bag-shopping"/>
                      Order Summary
                    </h2>
                    <p className="text-primary-100 text-sm mt-1">1 item</p>
                  </div>
                  <div className="p-5">
                    <div className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                          <img
                            alt="Woman Shawl"
                            className="w-full h-full object-contain"
                            src="https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            Woman Shawl
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            3 × 149 EGP
                          </p>
                        </div>
                        <p className="text-sm font-bold text-gray-900 shrink-0">
                          447
                        </p>
                      </div>
                    </div>
                    <hr className="border-gray-100 my-4" />
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-medium">447 EGP</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faTruck} className="svg-inline--fa fa-truck text-gray-400"/>
                          Shipping
                        </span>
                        {/* <span class="text-green-600 font-semibold">FREE</span> */}
                        <span className="font-medium">50 EGP</span>
                      </div>
                      <hr className="border-gray-100" />
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">
                          Total
                        </span>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary-600">
                            497
                          </span>
                          <span className="text-sm text-gray-500 ml-1">EGP</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-xl font-bold hover:from-primary-700 hover:to-primary-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary-600/20 active:scale-[0.98]"
                    >
                      <FontAwesomeIcon icon={faBox} className="svg-inline--fa fa-box"/>
                      Place Order
                    </button>
                    <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FontAwesomeIcon icon={faShieldHalved} className="svg-inline--fa fa-shield-halved text-green-500"/>
                        <span>Secure</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200" />
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FontAwesomeIcon icon={faTruck} className="svg-inline--fa fa-truck text-blue-500"/>
                        <span>Fast Delivery</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200" />
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FontAwesomeIcon icon={faBox} className="svg-inline--fa fa-box text-orange-500"/>
                        <span>Easy Returns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
