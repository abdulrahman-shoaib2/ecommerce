"use client";
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import { useEffect, useMemo, useState } from 'react';
import { ColDef } from 'ag-grid-community';
import { formatCurrency } from '@/utils/formatCurrency';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCartShopping, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { themeQuartz } from 'ag-grid-community';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Icon from '@/components/shared/Icon';
import GridActions from './GridActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { getUserWishlist } from '@/redux/slices/wishlistSlice';
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";


const ProdcutFormatter = (props: CustomCellRendererProps) => {
  return (
    <div className="md:col-span-6 py-3 h-full flex items-center gap-4">
      <Link
        className="max-w-16 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0"
        href={`/products/${props.data.product.id}`}
      >
        <Image
          width={100}
          height={100}
          alt={props.data.product.title}
          className="w-full h-full object-contain p-2"
          src={props.data.product.image}
        />
      </Link>
      <div className="h-full flex flex-col  justify-center  ">
        <Link
          className="font-normal text-wrap text-lg text-gray-900 hover:text-primary-600 transition-colors "
          href={`/products/${props.data.product.id}`}
        >
          {props.data.product.title}
        </Link>
        <p className="text-sm font-medium text-gray-400 mt-1">
          {props.data.product.category}
        </p>
      </div>
    </div>
  )
}

const PriceFormatter = (props: CustomCellRendererProps) => {
  // formatCurrency
  return (
    <div className="md:col-span-2 h-full flex md:justify-center items-center gap-2">
      {/* <span className="md:hidden text-sm text-gray-500">
        Price:
      </span> */}
      <div className="text-right md:text-center">
        {
          !props.data.priceAfterDiscount ?
            <div className="font-semibold text-lg text-gray-900">{formatCurrency(props.data.price)}</div>
            :
            <div className="grid">
              <div className="font-semibold leading-6 text-lg text-gray-900">{formatCurrency(props.data.priceAfterDiscount)}</div>
              <div className="font-medium text-[14px] leading-4 line-through text-gray-400">{formatCurrency(props.data.price)}</div>
            </div>
        }
      </div>
    </div>
  )
}

const StatusFormatter = (props: CustomCellRendererProps) => {
  return (
    <div className="md:col-span-2 h-full flex items-center md:justify-center">
      {/* <span className="md:hidden text-sm text-gray-500 mr-2">
        Status:
      </span> */}
      {
        props.data.status == 'In cart' ?
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
            <FontAwesomeIcon icon={faShoppingCart} className='text-primary-500' />
            In cart
          </span>
          :
          (props.data.status == 'In Stock' ?
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              In Stock
            </span>
            :
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Out of Stock
            </span>)
      }
    </div>
  )
}

const myTheme = themeQuartz.withParams({
  backgroundColor: '#ffffff',
  foregroundColor: '#6a7282',
  headerBackgroundColor: '#f9fafb',
  headerColumnBorder: 'none',
  rowHoverColor: '#f9fafb',
  spacing: 10,
  fontSize: 12,
  headerFontSize: 14,
  headerHeight: 50,
  rowHeight: 100,
  headerFontWeight: 'bold',
  headerColumnResizeHandleColor: '#00000000',
  borderColor: '#ffffff0f',
  rowBorder: '1px #fff solid',


});


const onFilterChanged = (params: any) => {
  if (params.api.getDisplayedRowCount() === 0) {
    params.api.showNoRowsOverlay();
  } else {
    params.api.hideOverlay();
  }
};

const defaultColDef = {
  resizable: false,
  suppressMovable: true,
  headerClass: 'header-center',
};

export default function WishlistGrid() {
  const [colDefs, setColDefs] = useState<ColDef<IWishlistGrid>[]>([
    {
      field: 'product', flex: 5, minWidth: 150, cellRenderer: ProdcutFormatter, cellDataType: false, comparator: (a, b) => (a.title < b.title ? -1 : 1), filter: true, filterParams: {
        filterOptions: ['contains'], textMatcher: (props: any) => {
          return props.data.product.title.toLowerCase().includes(props.filterText)
        }, trimInput: true
      }
    },
    {
      field: 'price', flex: 1, minWidth: 100, cellRenderer: PriceFormatter, cellDataType: false, comparator: (a, b) => (a.price < b.price ? -1 : 1), filter: true, filterParams: {
        filterOptions: ['contains'], textMatcher: (props: any) => {
          return Number(props.data.product.price) == Number(props.filterText)
        }, trimInput: true
      }
    },
    { field: 'status', flex: 1, minWidth: 100, cellRenderer: StatusFormatter, cellDataType: false },
    { field: 'actions', headerClass: 'header-center', flex: 2, minWidth: 150, cellRenderer: GridActions, cellDataType: false, filter: false, sortable: false, },
  ])
  const { wishlist, isLoading, firstLoad, itemsCount } = useSelector((store: RootState) => store.wishlist)
  const dispatch = useDispatch<AppDispatch>()

  const rowData: IWishlistGrid[]|undefined = useMemo(() => {
    return wishlist?.data.map((product: any) => ({
      id: product.id,
      product: {
        id: product.id,
        image: product.imageCover,
        title: product.title,
        category: product.category.name,
      },
      price: product.price.toString(),
      priceAfterDiscount: product.priceAfterDiscount?.toString(),
      status: product.quantity > 0 ? 'In Stock' : 'Out of Stock',
      actions: {
        addToCart: false,
        removeFromWishlist: false,
      }
    }));
  }, [wishlist]);

  useEffect(() => {
    dispatch(getUserWishlist());

  }, [dispatch])

  return (
    <div className="min-h-100 ag-theme-quartz ">
      {itemsCount || isLoading ? (
        <div className='ag-theme-quartz custom-grid '>
          <AgGridReact
            theme={myTheme}
            rowData={rowData}
            columnDefs={colDefs}
            domLayout="autoHeight"
            // overlayNoRowsAfterFilterTemplate="<span>No matching results</span>"
            defaultColDef={defaultColDef}
            onFilterChanged={onFilterChanged}
            getRowId={(params) => params.data.id}

            getRowClass={(params) => {
              return params.data?.actions.removeFromWishlist ? 'row-deleting' : '';
            }}
          />
        </div>
      ) : (
        firstLoad?
        <div className="min-h-[50vh] flex items-center justify-center">
          <Loader2 className="text-primary-500 size-20 animate-spin" />
        </div>
        :
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-sm mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <Icon icon={faHeart} classNames={{ icon: "fa-heart text-3xl text-gray-400" }} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Browse products and save your favorites here.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                href="/products"
              >
                Browse Products
                <Icon icon={faArrowRight} classNames={{ icon: "fa-arrow-right text-sm" }} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
