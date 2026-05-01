import PageHeader from "@/components/shared/PageHeader";
import ProductsSection from "@/app/_components/ProductsSection";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { Suspense } from 'react';
import { Loader2 } from "lucide-react";

export default function Products() {
  const section = {
    classNames: 'bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400',
    textColor: 'white',
    links: [
      {
        href: '/',
        displayAs: 'Home'
      },
      {
        href: '#',
        displayAs: 'All Products'
      },
    ],
    badge: {
      iconWrapper: {
        bg: 'bg-white/20',
      },
      icon: {
        name: "fa-box-open",
        is: faBoxOpen,
        color: 'white',
        size: 'text-3xl'
      }
    },
    sectionInfo: {
      name: 'All Products',
      desc: 'Explore our complete product collection'
    }
  }
  
  return (
    <>
      <PageHeader  {...section} />
      <section className="py-10">
        <div className="container mx-auto">
          <Suspense fallback={<div className="min-h-[50vh] flex justify-center items-center"><Loader2 className="size-10 animate-spin"/></div>}>
            <ProductsSection showItemCount={true} />
          </Suspense>

        </div>
      </section>
    </>
  );
}
