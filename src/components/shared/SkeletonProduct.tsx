import React from 'react'
import { Skeleton } from '../ui/skeleton'
import Icon from './Icon'
import {  faHeart } from '@fortawesome/free-regular-svg-icons'
import { Button } from '../ui/button'
import { Eye, Link } from 'lucide-react'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

export default function SkeletonProduct() {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg overflow-hidden min-h-490`}>
      <div className="relative">
        <Skeleton className='w-full h-60' />
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <div
            className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600/50 "
            title="Add to wishlist"
            tabIndex={0}
          >
            <Icon icon={faHeart} classNames={{icon:"svg-inline--fa fa-heart"}} />
          </div>
          <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600/50  shadow-sm">
            <Icon icon={faArrowsRotate} classNames={{icon:"svg-inline--fa fa-arrows-rotate"}} />
          </div>
          <div
            className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600/50  shadow-sm"
            // href={`/products/${product._id}`}
          >
            <Eye />
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between h-43">
        {/* <div className="text-xs text-gray-500 mb-1">{product.category}</div> */}
        <div className="text-xs text-gray-500 mb-1">
          <Skeleton className='w-10 h-4' />
        </div>
        <h3
          className="font-medium mb-1 cursor-pointer grid gap-2 "
        >
          <Skeleton className='w-37 h-4' />
          <Skeleton className='w-20 h-4' />
        </h3>
        <div className="flex items-center mb-2">
          <div className="flex text-amber-400 mr-2">
            <div className="text-yellow-400">
              <Skeleton className='w-16 h-5' />
            </div>
          </div>
          <span className="text-xs text-gray-500">
            <Skeleton className='w-10 h-5' />
          </span>
          {/* <span className="text-xs text-gray-500">{product.rating} ({ product.reviews.length})</span> */}
        </div>
        <div className="flex items-center justify-between ">
          <Skeleton className='w-15 h-5' />

          <Skeleton className='size-15 rounded-full' />


          {/* <Button disabled={isLoading} className="h-10 w-10 rounded-full flex items-center justify-center transition bg-primary-600 text-white active:scale-[90%] hover:bg-primary-700 disabled:bg-primary-600/50" onClick={addToCart} >
            {
              isLoading ?
                <Loader2 className='w-5 h-5 animate-spin' />
                :
                <FontAwesomeIcon icon={faPlus} className="svg-inline--fa fa-plus" />
            }
          </Button> */}
        </div>
      </div>
    </div>  )
}
