import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'



export default function PageHeader({ classNames, textColor, links, badge, sectionInfo }: {
  classNames: string;
  textColor: string;
  links: {
    href: string;
    displayAs: string;
  }[];
  badge: {
    iconWrapper: {
      bg: string;
    };
    icon: {
      name: string;
      is: IconDefinition;
      color: string;
      size: string;
    };
  };
  sectionInfo: {
    name: string;
    desc: string;
  };

}) {
  return (
    <div className={`${classNames} text-${textColor}`}>
      <div className="container mx-auto px-4 py-10 sm:py-14">
        <nav className={`flex items-center gap-2 text-sm text-${textColor}/70 mb-6 flex-wrap`}>
        {
          links.map((link,index)=>{

            return (<span key={link.href} className='flex items-center gap-2 flex-nowrap'>
              <Link className="hover:text-white transition-colors" href="/">
                Home
              </Link>
              <span className={`text-${textColor}/40`}>/</span>
            </span>)
          })
        }
          <span className={`text-${textColor} font-medium`}>{sectionInfo.name}</span>
        </nav>
        <div className="flex items-center gap-5">
          <div className={`w-16 h-16 rounded-2xl bg-${badge.iconWrapper.bg}/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-${textColor}/30`}>
            <FontAwesomeIcon icon={badge.icon.is} className={`svg-inline--fa ${badge.icon.name} text-${badge.icon.color}-500 ${badge.icon.size}` } />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {sectionInfo.name}
            </h1>
            <p className="text-white/80 mt-1">
              {sectionInfo.desc }
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}
