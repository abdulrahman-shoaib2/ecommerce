import InnerCart from "@/components/InnerCart";
import { cartServices } from "@/services/cartServices";

export default async function Cart() {
  const { data: cart } = await cartServices.getUserCart();


  return (
    <>
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
          <InnerCart cart={cart} />
        </div>
      </div>

    </>
  );
}
