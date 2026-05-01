"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { faArrowsRotate, faEye, faHeart, faPlus, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { IProductDetails } from '@/interfaces/routeApi/response/IProduct';
import { cartServices } from '@/services/routeAPI/cartServices';
import { useContext, useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { cartContext } from '@/contexts/cartContext';
import { addToCart } from '@/redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import RatingComponent from './RatingComponent';
import { useSession } from 'next-auth/react';


export default function ProductCard({ product, classNames }: { product: IProductDetails, classNames?: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [addingTowihslist, setAddingTowihslist] = useState<boolean>(false)
  const { setCartCount } = useContext(cartContext);
  const dispatch = useDispatch<AppDispatch>();
  const { itemsCount } = useSelector((store: RootState) => store.cart)
  const { wishlistArr } = useSelector((store: RootState) => store.wishlist)

  const session  =useSession()

  async function handleAddToCart() {
    try {
      setIsLoading(true)
      await dispatch(addToCart(product.id));
      toast.success(`product: ${product.title} was added to cart sccuessfully`, {
        style: {
          color: "green",
        }
      })
    } catch (error) {

    } finally {
      setIsLoading(false)
    }
  }
  async function handleAddToWishlist() {
    try {
      setAddingTowihslist(true)
      // https://freshcart-route.vercel.app/products
      // https://ecommerce.routemisr.com/api/v1/wishlist
      await fetch(`https://freshcart-route.vercel.app/products/${product.id}`,{
        method: 'OPTIONS',
        headers: {
          'Content-Type': 'text/x-component',
          token:session.data!.user.token
        },
        body: JSON.stringify([product.id]) ,

      })
      /*
      { 
        method: 'POST', 
        // body: , 
        headers:{
        }
        }
      */

      toast.success(`product: ${product.title} was added to wishlist sccuessfully`, {
        style: {
          color: "green",
        }
      })
    } catch (error) {
      console.log(error)
    } finally {
      setAddingTowihslist(false)
    }
  }

  return (

    <div
      className={`bg-white border border-gray-200 rounded-lg overflow-hidden ${classNames}`}>
      <div className="relative">
        <Image
          width={250}
          height={250}
          className=" w-full max-h-80 min-h-80 object-contain bg-white"
          alt={product.title}
          src={product.imageCover}
        // src={product.thumbnail}
        />
        {
          product.priceAfterDiscount && <div className="absolute top-3 left-3"><span className="bg-red-500 text-white text-xs px-2 py-1 rounded">-{Math.floor((1 - product.priceAfterDiscount / product.price) * 100)}%</span></div>
          // product.discountPercentage && product.discountPercentage > 1 && <div className="absolute top-3 left-3"><span className="bg-red-500 text-white text-xs px-2 py-1 rounded">-{product.discountPercentage}%</span></div>
        }
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <Button
            className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500"
            title="Add to wishlist"
            tabIndex={0}
            onClick={handleAddToWishlist}
          >
            <FontAwesomeIcon icon={faHeart} className="svg-inline--fa fa-heart" />
          </Button>
          <Button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm">
            <FontAwesomeIcon icon={faArrowsRotate} className="svg-inline--fa fa-arrows-rotate" />
          </Button>
          <Link
            className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm"
            // href={`/products/${product._id}`}
            href={`/products/${product.id}`}
          >
            <FontAwesomeIcon icon={faEye} className="svg-inline--fa fa-eye" />
          </Link>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between h-43">
        {/* <div className="text-xs text-gray-500 mb-1">{product.category}</div> */}
        <div className="text-xs text-gray-500 mb-1">{product.category.name}</div>
        <h3
          className="font-medium mb-1 cursor-pointer "
          title={product.title}
        >
          <Link
            className="line-clamp-2"
            // href={`/products/${product._id}`}
            href={`/products/${product.id}`}
          >
            {product.title}
          </Link>
        </h3>
        <div className="flex items-center mb-2">
          <div className="flex text-amber-400 mr-2">
            <div className="text-yellow-400">
              <RatingComponent rating={product.ratingsAverage} />
            </div>
          </div>
          <span className="text-xs text-gray-500">{product.ratingsAverage} ({product.ratingsQuantity})</span>
          {/* <span className="text-xs text-gray-500">{product.rating} ({ product.reviews.length})</span> */}
        </div>
        <div className="flex items-center justify-between ">
          {
            product.priceAfterDiscount ?
              <div><span className="text-lg font-bold text-primary-600">{product.priceAfterDiscount.toFixed(0)} EGP</span><span className="text-sm text-gray-500 line-through ml-2">{product.price?.toFixed(0)} EGP</span></div>
              :
              <div>
                <span className="text-lg font-bold text-gray-800">
                  {product.price.toFixed(0)} EGP
                </span>
              </div>
          }
          {/* {
            product.discountPercentage && product.discountPercentage !=0 ?
              <div><span className="text-lg font-bold text-primary-600">{product.price.toFixed(0)} EGP</span><span className={`text-sm text-gray-500 line-through ml-2 ${(product.price * product.discountPercentage/100+product.price).toFixed(0)==product.price.toFixed(0)?'hidden':''}`} >{(product.price * product.discountPercentage/100+product.price).toFixed(0)} EGP</span></div>
              :
              <div>
                <span className="text-lg font-bold text-gray-800">
                  {product.price.toFixed(0)} EGP
                </span>
              </div>
          } */}
          <Button disabled={isLoading} className="h-10 w-10 rounded-full flex items-center justify-center transition bg-primary-600 text-white active:scale-[90%] hover:bg-primary-700 disabled:bg-primary-600/50" onClick={handleAddToCart} >
            {
              isLoading ?
                <Loader2 className='w-5 h-5 animate-spin' />
                :
                <FontAwesomeIcon icon={faPlus} className="svg-inline--fa fa-plus" />
            }
          </Button>
        </div>
      </div>
    </div>

  )
}
