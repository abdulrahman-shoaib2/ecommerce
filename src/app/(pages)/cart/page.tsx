import CartCard from "@/components/CartCard";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { faArrowRight, faBoxOpen, faShoppingCart, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Cart() {
  const cart = true;
  const section = {
    classNames: "",
    textColor: "black",
    links: [
      {
        href: "/",
        displayAs: "Home",
      },
      {
        href: "#",
        displayAs: "Wishlist",
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
        is: faShoppingCart,
        color: "text-white",
        size: "text-xl ",
      },
    },
    sectionInfo: {
      name: "Shopping Cart",
      desc: `You have 1 item in your cart`,
    },
  };
  return (
    <>
      {cart ? (
        <div className="bg-gray-50 min-h-screen py-8">
          <div className="container mx-auto px-4">
            {/* <div className="mb-8">
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Link className="hover:text-primary-600 transition" href="/">
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Shopping Cart</span>
              </nav>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <span className="bg-primary-600 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faShoppingCart} className="svg-inline--fa fa-cart-shopping " />
                    </span>
                    Shopping Cart
                  </h1>
                  <p className="text-gray-500 mt-2">
                    You have{" "}
                    <span className="font-semibold text-primary-600">
                      1 item
                    </span>{" "}
                    in your cart
                  </p>
                </div>
              </div>
            </div> */}
            <PageHeader {...section} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  <CartCard />
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <Link
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-2"
                    href="/"
                  >
                    <span>←</span> Continue Shopping
                  </Link>
                  <Button className="group bg-transparent flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors">
                    <FontAwesomeIcon icon={faTrash} className="svg-inline--fa fa-trash text-xs group-hover:scale-110 transition-transform " />
                    <span>Clear all items</span>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-4">
                  <div className="bg-gray-900 p-5">
                    <h2 className="text-white font-bold text-lg">
                      Order Summary
                    </h2>
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
                      <Link
                        className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-all"
                        href="/login?redirect=/cart"
                      >
                        <FontAwesomeIcon icon={faUser} className="svg-inline--fa fa-user " />
                        Login to Checkout
                      </Link>
                      <p className="text-xs text-gray-400 text-center">
                        Don't have an account?{" "}
                        <Link
                          className="text-primary-600 hover:underline"
                          href="/register?redirect=/cart"
                        >
                          Sign up
                        </Link>
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
      ) : (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                <FontAwesomeIcon icon={faBoxOpen} className=" svg-inline--fa fa-box-open text-5xl text-gray-300" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Looks like you haven't added anything to your cart yet.
              <br />
              Start exploring our products!
            </p>
            <Link
              className="inline-flex items-center gap-2 bg-primary-600 text-white py-3.5 px-8 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg active:scale-[0.98]"
              href="/"
            >
              Start Shopping
              <FontAwesomeIcon icon={faArrowRight} className="svg-inline--fa fa-arrow-right text-sm " />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
