"use client";
import Link from "next/link";
import ImageCarousel from "./ImageCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faBolt, faCartShopping, faMinus, faPlus, faShareNodes, faShieldHalved, faSpinner, faStar, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { IProductDetails } from "@/interfaces/routeApi/response/IProduct";
import { getStarRating } from "@/lib/utils";
import { Button } from "./ui/button";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { cartServices } from "@/services/cartServices";
import { useContext, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cartContext } from "@/contexts/cartContext";

export default function ProductDetailsCard({
  product,
}: {
  product: IProductDetails;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
          const {setCartCount} = useContext(cartContext);
  
  async function addToCart() {
    try {
      setIsLoading(true)
      const response = await cartServices.addToCart({ productId: product.id });
      setCartCount(response.numOfCartItems)
      toast.success(response.message,{
        style:{
          color:"green",
          
        }
      })
      
    } catch (error) {

    } finally {
      setIsLoading(false)
    }


  }
  return (
    <section id="product-detail" className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div id="product-images" className="lg:w-1/4">
            <ImageCarousel slides={product.images} />
          </div>

          <div id="product-info" className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Link
                  className="bg-primary-50 text-primary-700 text-xs px-3 py-1.5 rounded-full hover:bg-primary-100 transition"
                  href={`/categories/${product.category._id}`}
                >
                  {product.category.name}
                </Link>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                  {product.brand.name}
                </span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {product.title}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-yellow-400">
                  {getStarRating(product.ratingsAverage).map((star, index) => {
                    return (
                      <FontAwesomeIcon key={"star_" + index} icon={star} />
                    );
                  })}
                </div>
                <span className="text-sm text-gray-600">
                  {product.ratingsAverage} ({product.ratingsQuantity} reviews)
                </span>
              </div>
              <div className="flex items-center flex-wrap gap-3 mb-6">
                {product.priceAfterDiscount ? (
                  <>
                    <span className="text-3xl font-bold text-gray-900">
                      {product.priceAfterDiscount} EGP
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {product.price} EGP
                    </span>
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                      Save{" "}
                      {(Number(product.priceAfterDiscount / product.price) * 100).toFixed(0)}
                      %
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    {product.price} EGP
                  </span>
                )}
              </div>
              {product.quantity > 0 && (
                <div className="flex items-center gap-2 mb-6">
                  <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    In Stock
                  </span>
                </div>
              )}
              <div className="border-t border-gray-100 pt-5 mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                    <button
                      title="increase"
                      id="decrease-qty"
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
                      disabled
                    >
                      <FontAwesomeIcon icon={faMinus} className="svg-inline--fa fa-minus" />
                    </button>
                    <input
                      title="product count"
                      min={1}
                      max={product.quantity}
                      className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
                      id="quantity"
                      type="number"
                      defaultValue={1}
                    />
                    <button
                      title="increase"
                      id="increase-qty"
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
                    >
                      <FontAwesomeIcon icon={faPlus} className="svg-inline--fa fa-plus" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">{product.quantity} available</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Price:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    {product.priceAfterDiscount?.toFixed(2) || product.price.toFixed(2)} EGP
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  id="add-to-cart"
                  disabled={isLoading}
                  title="add to cart"
                  className="flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-primary-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/25 bg-primary-600 disabled:bg-primary-600/50 "
                  onClick={addToCart}
                >
                  {
                    isLoading ?
                    <Loader2 className="w-5 h-5 animate-spin" />
                    :
                    <FontAwesomeIcon icon={faCartShopping} className="svg-inline--fa fa-cart-shopping" />
                  }
                  Add to Cart
                </button>
                <button
                  id="buy-now"
                  className="flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faBolt} className="svg-inline--fa fa-bolt" />
                  Buy Now
                </button>
              </div>

              <div className="flex gap-3 mb-6">
                <button
                  id="wishlist-button"
                  className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600"
                >
                    <FontAwesomeIcon icon={faHeart} className="svg-inline--fa fa-heart" />
                  Add to Wishlist
                </button>
                <button title="share" className="border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-primary-300 hover:text-primary-600 transition">
                  <FontAwesomeIcon icon={faShareNodes} className="svg-inline--fa fa-share-nodes" />
                </button>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                      <FontAwesomeIcon icon={faTruckFast} className="svg-inline--fa fa-truck-fast" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">
                        Free Delivery
                      </h4>
                      <p className="text-xs text-gray-500">Orders over $50</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                      <FontAwesomeIcon icon={faArrowRotateLeft} className="svg-inline--fa fa-arrow-rotate-left" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">
                        30 Days Return
                      </h4>
                      <p className="text-xs text-gray-500">Money back</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                      <FontAwesomeIcon icon={faShieldHalved} className="svg-inline--fa fa-shield-halved" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">
                        Secure Payment
                      </h4>
                      <p className="text-xs text-gray-500">100% Protected</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
