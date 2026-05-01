"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { ICart, ICartProduct } from "@/interfaces/routeApi/response/ICart";
import { IProduct } from "@/interfaces/routeApi/response/IProduct";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Swal from "sweetalert2";
import { ReactSweetAlert } from "sweetalert2-react-content";
import { CartResType } from "@/types/routeApi/response/CartResType";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { changeItemQuantity,  removeFromCart } from "@/redux/slices/cartSlice";

export default function CartCard({
  // changeCount,
  MySwal,
  cartProduct,
}: {
  cartProduct: ICartProduct<IProduct>;
  // removeItem: (productId: IProduct) => void;
  // changeCount: (newCount: number, productId: string) => Promise<number>;
  MySwal: typeof Swal & ReactSweetAlert;
}) {
  const [itemCount, setItemCount] = useState(+cartProduct.count.toLocaleString().replace(/^0+/, ''));
  const [isRemoving, setIsRemoving] = useState(false);
  const [increasing, setIncreasing] = useState(false);
  const [decreasing, setDecreasing] = useState(false);
  // const [isInEditMode, setIsInEditMode] = useState(false);
  const { itemsCount } = useSelector((store: RootState) => store.cart)
  const dispatch = useDispatch<AppDispatch>()
  const [inEditMode, setInEditMode] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  async function handleRemoveItem() {
    setIsRemoving(true);
    // const res = await cartServices.removeCartItem(cart.product.id);
    await dispatch(removeFromCart(cartProduct.product.id))
    setIsRemoving(false);
  }
  async function changeItemCount() {
    // setInEditMode(true)
    if (
      Number(inputRef.current?.value) === 0 ||
      Number(inputRef.current?.value) > cartProduct.product.quantity
    ) {
      inputRef.current!.value = itemCount.toString();
      console.log("Invalid Item Count");
    } else {
      if(inputRef.current){
        inputRef.current.value = inputRef.current?.value.replace(/^0+/, '') 
      }
      const newCount: number = Number(inputRef.current?.value) || itemCount;
      console.log(newCount)
      setItemCount(newCount)
      await dispatch(changeItemQuantity({ count: newCount, id: cartProduct.product.id }))
      // const id = setTimeout(()=>{
        setInEditMode(false)
      // },500)
      // clearTimeout(id)
    }
  }

  async function increase() {
    setIncreasing(true);
    setItemCount(itemCount+1)
    await dispatch(changeItemQuantity({ count: itemCount+1, id: cartProduct.product.id }))
    setIncreasing(false);

  }
  async function decrease() {
    setIncreasing(true);
    setItemCount(itemCount-1)
    await dispatch(changeItemQuantity({ count: itemCount-1, id: cartProduct.product.id }))
    setIncreasing(false);
  }
  // async function handleChangeCount(plus: number) {
  //   setItemCount(itemCount + plus)
  //   inputRef.current!.value = itemCount.toString();
  //   console.log(itemCount,inputRef.current!.value, plus)
  //   // const data = {
  //   //   count: itemCount
  //   // }
  //   // const res = await cartServices.updateQuantity(data, cart.product._id)
  //   try {
  //     if (itemCount + plus > itemCount) {
  //       setIncreasing(true);
  //     } else {
  //       setDecreasing(true);
  //     }
  //     await dispatch(changeItemQuantity({ count: itemCount, id: cartProduct.product.id }))

  //   } catch (e) {
  //     // setItemCount(itemCount - plus)
  //   } finally {
  //     if (itemCount + plus > itemCount) {
  //       setIncreasing(false);
  //     } else {
  //       setDecreasing(false);
  //     }
  //   }
  // }

  const handleAction = () => {
    MySwal.fire({
      title: <span>Remove Item?</span>,
      html: (
        <p>
          Remove <b>{cartProduct.product.title}</b> from your cart?
        </p>
      ),
      iconHtml: (
        <FontAwesomeIcon icon={faTrashCan} className="text-red-500  text-2xl" />
      ),
      customClass: {
        icon: "w-10 h-10 mx-auto rounded-full bg-red-100 flex items-center justify-center border-none!",
        title: "font-bold! text-xl! text-black!",
        confirmButton:
          "bg-red-500! hover:bg-red-600! text-white! font-semibold! py-3! px-6! rounded-xl! transition-all!",
        htmlContainer: "text-sm! text-black!",
        cancelButton:
          "bg-gray-100! hover:bg-gray-200! text-gray-700! font-semibold! py-3! px-6! rounded-xl! transition-all!",
        actions: "px-6 pb-6 pt-0 gap-3 flex-row-reverse",
      },
      showCancelButton: true,
      confirmButtonText: "Remove",

      // icon: "fa-trash"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) handleRemoveItem();
      // else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
    });
  };

  return (
    <div
      className={`bg-white relative rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5`}
    >
      {
        isRemoving && <div
          className={`bg-white flex justify-center items-center gap-2 absolute top-[50%] left-[50%] -translate-1/2 px-6 py-4 shadow-2xl rounded-full`}
        >
          <Loader2 className="animate-spin w-5 h-5 text-primary-500" />
          <span className="text-sm">  Updating</span>
        </div>
      }
      <div className={`flex gap-4 sm:gap-6 ${isRemoving && "blur-xs"}`}>
        <Link
          className="relative shrink-0 group"
          href={`/products/${cartProduct.product?.id}`}
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gray-50 p-3 border border-gray-100 overflow-hidden">
            <Image
              height={200}
              width={200}
              alt={cartProduct.product.title}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              src={cartProduct.product.imageCover}
            />
          </div>
          {cartProduct.product.quantity > 0 && (
            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
              <FontAwesomeIcon
                icon={faCheck}
                className="svg-inline--fa fa-check text-[8px]"
              />
              In Stock
            </div>
          )}
        </Link>
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="mb-3">
            <Link
              className="group/title"
              href={`/products/${cartProduct.product._id}`}
            >
              <h3 className="font-semibold text-gray-900 group-hover/title:text-primary-600 transition-colors leading-relaxed text-base sm:text-lg">
                {cartProduct.product.title}
              </h3>
            </Link>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-block px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                {cartProduct.product.category.name}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-primary-600 font-bold text-lg">
              {cartProduct.price.toLocaleString()} EGP
            </span>
          </div>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
              <button
                title="-"
                type="button"
                disabled={itemCount < 1 || decreasing}
                onClick={() => {
                  if (itemCount > 1) decrease();
                }}
                className={cn(
                  "h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 active:scale-[90%] disabled:opacity-40 hover:disabled:text-gray-200 transition-all",
                  itemCount > 1 && "hover:text-gray-700",
                )}
              >
                {decreasing ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <FontAwesomeIcon
                    icon={faMinus}
                    className=" svg-inline--fa fa-minus text-xs"
                  />
                )}
              </button>
              {
                inEditMode?
                <input
                  title="product count"
                  ref={inputRef}
                  className="w-18 px-2 py-1 mx-2 text-center font-bold text-gray-900 outline-0 focus:bg-gray-200 rounded-md"
                  defaultValue={itemCount}
                  onChange={changeItemCount}
                />
                :
                <span onClick={()=>setInEditMode(true)}  className="w-18 px-2 py-1 mx-2 text-center font-bold text-gray-900 outline-0 focus:bg-gray-200 rounded-md">
                  {itemCount}
                </span>

              }
              <button
                title="+"
                type="button"
                disabled={itemCount >= cartProduct.product.quantity || increasing}
                onClick={() => {
                  if (itemCount < cartProduct.product.quantity) increase();
                }}
                className="h-8 w-8 rounded-lg bg-primary-600 shadow-sm flex items-center justify-center text-white active:scale-[90%] hover:bg-primary-700 transition-all"
              >
                {increasing ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlus}
                    className=" svg-inline--fa fa-plus text-xs"
                  />
                )}
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-0.5">Total</p>
                <p className="text-xl font-bold text-gray-900">
                  {cartProduct.price.toLocaleString()}
                  <span className="text-sm font-medium text-gray-400">
                    {" "}
                    EGP
                  </span>
                </p>
              </div>
              <button
                className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center transition-all duration-200 active:scale-[90%] disabled:text-red-500/50 disabled:bg-red-200/50"
                title="Remove item"
                onClick={handleAction}
                disabled={isRemoving}
              >
                {isRemoving ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" svg-inline--fa fa-trash text-sm"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
