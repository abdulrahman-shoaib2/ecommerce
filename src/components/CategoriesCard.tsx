import { ICategory } from '@/interfaces/routeApi/response/ICategory'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import Link from "next/link";


export default function CategoriesCard({ category,smallSize=true }: { category: ICategory, smallSize?:boolean }) {
  return (
    <Link
      
      className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
      href={`/categories/${category._id}`}
      // href={`/categories/${category.slug}`}
    >
      <div className={`${smallSize?'h-20 w-20 rounded-full':'h-60 w-full rounded-2xl'} overflow-hidden bg-primary-100  flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition`}>
        {
          category.image ?
            true
            :
            category.image = `https://dummyjson.com/image/100x100/00bc7d/fff?text=${category.name[0].replaceAll(' ', '+')}&fontSize=48`
        }
        <Image
          alt={category.name}
          loading="lazy"
          width={smallSize?100:200}
          height={smallSize?100:200}
          decoding="async"
          data-nimg={1}
          className="w-full h-full object-cover"
          src={category.image}

        />
      </div>
      <h3 className={`font-medium group-hover:text-primary-600 ${smallSize?'':'font-extrabold'}`}>{category.name}</h3>
      {
        !smallSize && <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity"><span className="text-xs text-primary-600 flex items-center gap-1">View Subcategories <FontAwesomeIcon icon={faArrowRight} className='svg-inline--fa fa-arrow-right text-[10px]' /> </span></div>

      }
    </Link>

  )
}

