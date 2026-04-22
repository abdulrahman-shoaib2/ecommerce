import { categoriesService } from "@/services/categoriesServices";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

export default async function CategoriesSection() {
  const categories = await categoriesService.getCategories();

  return (
    <div>
      <section id="categories" className="py-10">
        <div className="container mx-auto px-4">
          <SectionHeader link="/categories" title={{text:'Shop By',highlight:'Category'}} sectionName="Categories" />
          {/* <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
            <div className="flex  items-center gap-3 my-8">
              <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Shop By <span className="text-emerald-600">Category</span>
              </h2>
            </div>
            <Link
              className="text-primary-600 self-end sm:self-auto hover:text-primary-700 font-medium flex items-center cursor-pointer"
              href="/categories"
            >
              View All Categories
              <FontAwesomeIcon icon={faArrowRight} className="svg-inline--fa fa-arrow-right ml-2"/>

            </Link>
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {
              categories.map((category:any,index:number)=>{
                return (
                  <Link
                    key={index}
                    className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
                    href={`/categories/${category._id}`}
                  >
                    <div className="h-20 w-20 overflow-hidden bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition">
                      <Image
                        alt={category.name}
                        loading="lazy"
                        width={100}
                        height={100}
                        decoding="async"
                        data-nimg={1}
                        className="w-full h-full object-cover"
                        src={category.image}
                      />
                    </div>
                    <h3 className="font-medium">{category.name}</h3>
                  </Link>
                )
              })
            }
            {/* <Link
              className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
              href="/categories/6439d61c0049ad0b52b90051"
            >
              <div className="h-20 w-20 overflow-hidden bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition">
                <Image
                  alt="Music"
                  loading="lazy"
                  width={300}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  className="w-full h-full object-cover"
                  srcSet="/_next/image?url=https%3A%2F%2Fecommerce.routemisr.com%2FRoute-Academy-categories%2F1681511964020.jpeg&w=384&q=75 1x, /_next/image?url=https%3A%2F%2Fecommerce.routemisr.com%2FRoute-Academy-categories%2F1681511964020.jpeg&w=640&q=75 2x"
                  src="/_next/image?url=https%3A%2F%2Fecommerce.routemisr.com%2FRoute-Academy-categories%2F1681511964020.jpeg&w=640&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <h3 className="font-medium">Music</h3>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}
