import { IBrand } from "@/interfaces/routeApi/response/IBrand";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BrandCard({brand}:{brand:IBrand}) {
  return (
    <Link
      className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
      href="/products?brand=64089fe824b25627a25315d1"
    >
      <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
        <Image
          width={118}
          height={118}
          alt="Canon"
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          src={brand.image}
        />
      </div>
      <h3 className="font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate">
        {brand.name}
      </h3>
      <div className="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs text-violet-600 flex items-center gap-1">
          View Products
          <FontAwesomeIcon icon={faArrowRight} className="svg-inline--fa fa-arrow-right text-[10px]"/>
        </span>
      </div>
    </Link>
  );
}
