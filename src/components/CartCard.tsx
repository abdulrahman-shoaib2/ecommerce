import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function CartCard() {
  return (

    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">
      <div className="flex gap-4 sm:gap-6">
        <Link
          className="relative shrink-0 group"
          href="/products/6428de2adc1175abc65ca05b"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gray-50 p-3 border border-gray-100 overflow-hidden">
            <img
              alt="Softride Enzo NXT CASTLEROCK-High Risk R"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              src="https://ecommerce.routemisr.com/Route-Academy-products/1680399913757-cover.jpeg"
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="mb-3">
            <Link
              className="group/title"
              href="/products/6428de2adc1175abc65ca05b"
            >
              <h3 className="font-semibold text-gray-900 group-hover/title:text-primary-600 transition-colors leading-relaxed text-base sm:text-lg">
                Softride Enzo NXT CASTLEROCK-High Risk R
              </h3>
            </Link>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-block px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                Men's Fashion
              </span>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-primary-600 font-bold text-lg">
              2,999 EGP
            </span>
          </div>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
              <button
                title="test"
                disabled
                className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-40 transition-all"
              >
                <FontAwesomeIcon icon={faMinus} className=" svg-inline--fa fa-minus text-xs" />
              </button>
              <span className="w-12 text-center font-bold text-gray-900">
                1
              </span>
              <button
                title="test"
                className="h-8 w-8 rounded-lg bg-primary-600 shadow-sm flex items-center justify-center text-white hover:bg-primary-700 transition-all"
              >
                <FontAwesomeIcon icon={faPlus} className=" svg-inline--fa fa-plus text-xs" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-0.5">
                  Total
                </p>
                <p className="text-xl font-bold text-gray-900">
                  2,999{" "}
                  <span className="text-sm font-medium text-gray-400">
                    EGP
                  </span>
                </p>
              </div>
              <button
                className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center transition-all duration-200"
                title="Remove item"
              >
                <FontAwesomeIcon icon={faTrash} className=" svg-inline--fa fa-trash text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
