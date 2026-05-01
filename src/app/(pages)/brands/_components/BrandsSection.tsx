import { IBrand } from '@/interfaces/routeApi/response/IBrand'
import { brandsServices } from '@/services/routeAPI/brandsServices'
import BrandCard from './BrandCard'

export default async function BrandsSection() {
  const brands: IBrand[] = await brandsServices.getAllBrands()
  console.log(brands)
  return (

    <>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {
            brands.map((brand, index) => {
              return <BrandCard key={'brand_' + index} brand={brand} />
            })
          }
        </div>
      </div>
    </>

  )
}
