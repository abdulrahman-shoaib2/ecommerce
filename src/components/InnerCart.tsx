"use client";
import { ICart } from "@/interfaces/routeApi/response/ICart";
import { IProduct } from "@/interfaces/routeApi/response/IProduct";
import CartCard from "./CartCard";
import {
  faShoppingCart,
  faArrowRight,
  faBoxOpen,
  faBagShopping,
  faTag,
  faLock,
  faShieldHalved,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import Link from "next/link";
import { faTrash, faUser, faTruck } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import { cartServices } from "@/services/cartServices";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cartContext } from "@/contexts/cartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export default function InnerCart({ cart }: { cart: ICart<IProduct> }) {
  const MySwal = withReactContent(Swal);
  const [isClearing, setIsClearing] = useState(false);
  const [cartCards, setCartCards] = useState<ICart<IProduct>>(cart);
  const { setCartCount } = useContext(cartContext);
  const loggedIn = true;

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
        displayAs: "Cart",
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
      desc: `You have ${cartCards.products.length} item in your cart`,
    },
  };
  async function clearCart() {
    try {
      setIsClearing(true);
      const res = await cartServices.clearUserCart();
      const deepCopy = structuredClone(cartCards);
      deepCopy.products = [];
      setCartCards(deepCopy);
    } catch (error) {
    } finally {
      setIsClearing(false);
    }
  }

  async function removeItem(product: IProduct) {
    try {
      const res = await cartServices.removeCartItem(product._id);
      setCartCards(res.data);
      toast.success(res.message + ` named: ${product.title}`, {
        style: {
          color: "red",
        },
      });
    } catch (error) {
    } finally {
    }
  }

  async function changeCount(newCount: number, productId: string) {
    const res = await cartServices.updateQuantity(
      { count: newCount },
      productId,
    );
    setCartCards(res.data);
  }


  // useEffect( () => {
  //   if(cartCards.products.length == 0){
  //     setCartCount(cartCards.products.length);

  //   }
    
  // }, [cartCards]);

  return (
    <div>
      {cartCards && cartCards.products.length > 0 ? (
        <>
          <PageHeader {...section} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartCards.products.map((cartProduct, index) => {
                  return (
                    <CartCard
                      key={"cart_product_" + index}
                      cart={cartProduct}
                      removeItem={removeItem}
                      changeCount={changeCount}
                      MySwal={MySwal}
                    />
                  );
                })}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                <Link
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-2"
                  href="/"
                >
                  <span>←</span> Continue Shopping
                </Link>
                <Button
                  className="group bg-transparent flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors"
                  disabled={isClearing}
                  onClick={clearCart}
                >
                  {isClearing ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="svg-inline--fa fa-trash text-xs group-hover:scale-110 transition-transform "
                    />
                  )}
                  <span>Clear all items</span>
                </Button>
              </div>
            </div>
            {loggedIn ? (
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faBagShopping}
                        className="svg-inline--fa fa-bag-shopping"
                      />
                      Order Summary
                    </h2>
                    <p className="text-primary-100 text-sm mt-1">
                      {cartCards.products.length} items in your cart
                    </p>
                  </div>
                  <div className="p-6 space-y-5">
                    {
                      cartCards.totalCartPrice >= 500 ?
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <FontAwesomeIcon
                              icon={faTruck}
                              className="svg-inline--fa fa-truck text-green-600"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-green-700">
                              Free Shipping!
                            </p>
                            <p className="text-sm text-green-600">
                              You qualify for free delivery
                            </p>
                          </div>
                        </div>
                        :
                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <FontAwesomeIcon icon={faTruck} className="svg-inline--fa fa-truck text-orange-500"/>
                            <span className="text-sm font-medium text-gray-700">
                              Add {500 - cartCards.totalCartPrice } EGP for free shipping
                            </span>
                          </div>
                          <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500"
                              style={{ width: `${cartCards.totalCartPrice/500*100}%` }}
                            />
                          </div>
                        </div>
                    }


                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-medium text-gray-900">
                          {cartCards.totalCartPrice.toLocaleString()} EGP
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span className="font-medium text-green-600">FREE</span>
                      </div>
                      <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                        <div className="flex justify-between items-baseline">
                          <span className="text-gray-900 font-semibold">
                            Total
                          </span>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-gray-900">
                              {cartCards.totalCartPrice.toLocaleString()}
                            </span>
                            <span className="text-sm text-gray-500 ml-1">
                              EGP
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50/50 transition-all">
                      <FontAwesomeIcon
                        icon={faTag}
                        className="svg-inline--fa fa-tag"
                      />
                      <span className="text-sm font-medium">
                        Apply Promo Code
                      </span>
                    </button>
                    <Link
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary-600/20 active:scale-[0.98]"
                      href="/checkout"
                    >
                      <FontAwesomeIcon
                        icon={faLock}
                        className="svg-inline--fa fa-lock"
                      />
                      <span>Secure Checkout</span>
                    </Link>
                    <div className="flex items-center justify-center gap-4 py-2">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FontAwesomeIcon
                          icon={faShieldHalved}
                          className="svg-inline--fa fa-shield-halved text-green-500"
                        />
                        <span>Secure Payment</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200" />
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FontAwesomeIcon
                          icon={faTruck}
                          className="svg-inline--fa fa-truck text-blue-500"
                        />
                        <span>Fast Delivery</span>
                      </div>
                    </div>
                    <Link
                      className="block text-center text-primary-600 hover:text-primary-700 text-sm font-medium py-2"
                      href="/"
                    >
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="svg-inline--fa fa-arrow-left text-primary-600"
                      />{" "}
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-4">
                  <div className="bg-gray-900 p-5">
                    <h2 className="text-white font-bold text-lg">
                      Order Summary
                    </h2>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({cartCards.products.length} items)</span>
                      <span className="font-semibold">
                        {cartCards.totalCartPrice.toLocaleString()} EGP
                      </span>
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
                      <span className="text-primary-600">
                        {cartCards.totalCartPrice.toLocaleString()} EGP
                      </span>
                    </div>
                    <div className="pt-4 space-y-3">
                      <Link
                        className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-all"
                        href="/login?redirect=/cart"
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="svg-inline--fa fa-user "
                        />
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
            )}
          </div>
        </>
      ) : (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                <FontAwesomeIcon
                  icon={faBoxOpen}
                  className=" svg-inline--fa fa-box-open text-5xl text-gray-300"
                />
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
              <FontAwesomeIcon
                icon={faArrowRight}
                className="svg-inline--fa fa-arrow-right text-sm "
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
