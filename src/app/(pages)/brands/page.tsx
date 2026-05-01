import PageHeader from '@/components/shared/PageHeader'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import BrandsSection from './_components/BrandsSection'

export default function Brands() {
  const section = {
    classNames:'bg-gradient-to-br from-violet-600 via-violet-500 to-purple-400',
      textColor:'white',
      links: [
        {
          href:'/',
          displayAs:'Home'
        },
        {
          href:'/',
          displayAs:'Brands'
        },
      ],
      badge: {
        iconWrapper: {
          bg:'bg-white/20',
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
      <BrandsSection />
    </>

  )
}
