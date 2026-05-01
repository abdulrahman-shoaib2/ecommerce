"use client"
import { features } from "@/utils/features";
import FeatureCard from "./FeatureCard";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Features() {
  const {ref, visible} = useScrollReveal()

  return (
    <section className={`py-8 bg-gray-50 `}>
      <div className="container mx-auto">
        <div ref={ref}  className={`grid md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-400 delay-200  ${visible?'translate-y-0 opacity-100':'translate-y-10 opacity-0'}`}>
          {
            features.map((feature,index)=>{
              return ( <FeatureCard feature={feature} itemsWrapper={{ className: "flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 opacity-100 transform-none" }} iconWrapper={{ className: " flex items-center justify-center shrink-0 text-blue-500", size: 12, radius: "rounded-full", bg: index+1 }} key={'top_feature_'+index} /> )
            })  
          }

        </div>
      </div>
    </section>

  );
}
