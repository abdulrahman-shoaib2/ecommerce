"use client"
import { Button } from '@/components/ui/button'
import { addToCart } from '@/redux/slices/cartSlice';
import { removeFromWishlist } from '@/redux/slices/wishlistSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { cartServices } from '@/services/routeAPI/cartServices';
import { wishlistServices } from '@/services/routeAPI/wishlistServices';
import { faCartShopping, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CustomCellRendererProps } from 'ag-grid-react';
import { Link, Loader2 } from 'lucide-react';
import Loadable from 'next/dist/shared/lib/loadable.shared-runtime';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function GridActions(props: CustomCellRendererProps) {
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const { data, api, node } = props;

  const handleDelete = async () => {
    setDeleteLoading(true)
    try {
      node.setData({
        ...data,
        actions: {
          removeFromWishlist: true
        },
      });
      await dispatch(removeFromWishlist(data.product.id))

      setTimeout(() => {
        api.applyTransaction({
          remove: [{id:data.id}],
        });
      }, 410);
    } catch (e) {
      node.setData({
        ...data,
        actions: {
          removeFromWishlist: false
        },
      });
    } finally {

      setDeleteLoading(false)
    }
    // remove from grid
  };

  const handleAddToCart = async () => {
    setAddToCartLoading(true)
    const oldData = data.stock
    try {
      await dispatch(addToCart(data.product.id))
      node.setData({
        ...data,
        status: 'In cart',
      });

    } catch (err) {
      node.setData({ ...data, status: oldData });
      console.error('Failed to add to cart', err);
    } finally {
      setAddToCartLoading(false)
    }
  };


  return (
    <div className="md:col-span-2 h-full flex items-center gap-4 md:justify-center">
      {
        addToCartLoading ?
          <div
            className="flex-1 h-10 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-primary-600 text-white hover:bg-primary-700"
          >
            <FontAwesomeIcon icon={faCheck} className='fa-check text-xs text-white' />
            <span className="md:hidden lg:inline">Added!</span>
          </div>
          :
          (data.status === "In cart" ? (
            <Button
              className="flex-1 h-10 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
              onClick={() => router.push('/cart')}
            >
              <FontAwesomeIcon icon={faCheck} className='fa-check text-xs text-green-600' />
              <span className="md:hidden lg:inline">View Cart</span>
            </Button>
          ) : (
            <Button
              className="flex-1 h-10 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-primary-600 text-white hover:bg-primary-700"
              onClick={handleAddToCart}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="svg-inline--fa fa-cart-shopping text-xs"
              />
              <span className="md:hidden lg:inline">Add to Cart</span>
            </Button>
          ))

      }

      <Button
        className="w-10 h-10 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50"
        title="Remove"
        disabled={deleteLoading}
        onClick={handleDelete}
      >
        {
          deleteLoading ?
            <Loader2 className='size-5 animate-spin text-red-500' />
            :
            <FontAwesomeIcon
              icon={faTrash}
              className="svg-inline--fa fa-trash text-sm"
            />
        }
      </Button>
    </div>
  );


}
