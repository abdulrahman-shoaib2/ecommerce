import CategoriesSection from '@/app/(pages)/categories/_components/CategoriesSection'
import PageHeader from '@/components/shared/PageHeader'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'

export default function Categories() {
    const section = {
      classNames:'bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400',
        textColor:'white',
        links: [
          {
            href:'/',
            displayAs:'Home'
          },
          {
            href:'#',
            displayAs:'Categories'
          },
        ],
        badge: {
          iconWrapper: {
            bg:'bg-white/20',
          },
          icon: {
            name:"fa-box-open",
            is: faLayerGroup,
            color:'white',
            size:'text-3xl'
          }
        },
        sectionInfo: {
          name:'All Categories',
          desc:'Browse our wide range of product categories'
        }
    }
  return (
    <>
      <PageHeader {...section} />
      <CategoriesSection smallSize={false} />
    </>
  )
}
