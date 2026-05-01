"use client"
import React from "react";
import OfferCard from "./OfferCard";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function OfferSection() {
  const {ref, visible} = useScrollReveal()
  const {ref:ref2, visible:visible2} = useScrollReveal()
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div ref={ref} className={`transition-all duration-600 delay-100  ${visible?'translate-x-0 opacity-100':'-translate-x-15 opacity-0'}`}>
            <OfferCard badge={{ icon: "🔥", text: "Deal of the Day" }} title="Fresh Organic Fruits" description="Get up to 40% off on selected organic fruits" discount="40% OFF" code="ORGANIC40" link="/products" color={{from:'from-emerald-500',to:'to-emerald-700', btnIcon:'text-emerald-600'}}  />
          </div>
          <div ref={ref2} className={`transition-all duration-600 delay-100  ${visible2?'translate-x-0 opacity-100':'translate-x-15 opacity-0'}`}>
            <OfferCard badge={{ icon: "✨", text: "New Arrivals" }} title="Exotic Vegetables" description="Discover our latest collection of premium vegetables" discount="25% OFF" code="FRESH25" link="/products?sort=newest" btnText="Explore Now" color={{ from: "from-orange-400", to: "to-rose-500", btnIcon:'text-orange-600' }}   />
          </div>
        </div>
      </div>
    </section>
  );
}
