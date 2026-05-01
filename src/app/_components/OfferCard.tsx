"use client"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { RefObject } from 'react';

export default function OfferCard({ badge, title, description, discount, code, link, color, btnText="Shop Now",className=''}: { badge: {icon:string,text:string}, title: string, description: string, discount: string, code: string, link: string, color: {from:string,to:string, btnIcon:string, };btnText?:string,className?:string}) {
  return (

    <div  className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${color.from} ${color.to} p-8 text-white ${className}`}>
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
          <span>{badge.icon}</span>
          <span>{badge.text}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-white/80 mb-4">
          {description}
        </p>
        <div className="flex items-center gap-4 mb-6">
          <div className="text-3xl font-bold">{discount}</div>
          <div className="text-sm text-white/70">
            Use code: 
            <span className="font-bold text-white"> {code}</span>
          </div>
        </div>
        <Link
          className={`inline-flex items-center gap-2 bg-white ${color.btnIcon} px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors`}
          href={link}
        >
          {btnText}
          <FontAwesomeIcon icon={faArrowRight} className='svg-inline--fa fa-arrow-right' />

        </Link>
      </div>
    </div>

  )
}
