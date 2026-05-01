import PageHeader from "@/components/shared/PageHeader";
import ProductsSection from "@/app/_components/ProductsSection";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

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
          <ProductsSection showItemCount={true} />

        </div>
      </section>
    </>
  );
}
