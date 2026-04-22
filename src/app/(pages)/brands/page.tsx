import PageHeader from '@/components/PageHeader'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function Brands() {
  const section = {
    classNames:'bg-gradient-to-br from-violet-600 via-violet-500 to-purple-400',
      textColor:'white',
      links: [
        {
          href:'/',
          displayAs:'Home'
        },
      ],
      badge: {
        iconWrapper: {
          bg:'white',
        },
        icon: {
          name:"fa-box-open",
          is: faTags,
          color:'white',
          size:'text-3xl'
        }
      },
      sectionInfo: {
        name:'Top Brands',
        desc:'Shop from your favorite brands'
      }
  }  
  return (
    <>
      <PageHeader {...section}/>
    </>

  )
}
