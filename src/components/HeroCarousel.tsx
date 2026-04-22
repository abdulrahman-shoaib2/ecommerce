"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  CarouselApi,
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link'


export default function HeroCarousel() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(carouselApi?.scrollSnapList().length || 0)
  const [isClickable, setIsClickable] = useState(true)
  const [direction, setDirection] = useState<'translate' | '-translate'>('-translate')
  let timeoutId:NodeJS.Timeout ;

  const handleClick = (action: 'scrollNext' | 'scrollPrev') => {
    if (!isClickable) return
    if (action === 'scrollNext') {
      setDirection('-translate')
    } else {
      setDirection('translate')
    }
    setIsClickable(false)
    carouselApi![action]()
    timeoutId =setTimeout(() => {
      setIsClickable(true)
    }, 500)

    autoplay.current.reset();
    autoplay.current.play()
  }


  const slides = [
    {
      title: 'Fresh Products Delivered to your Door',
      description: 'Get 20% off your first order', 
      cta: "Shop Now",
      secondCTA: "View Deals",
      ctaLink: "/products",
      secondLink: "/deals",
    },
    {
      title: 'Premium Quality Guaranteed',
      description: 'Fresh from farm to your table',
      cta:  "Shop Now",
      secondCTA: "Learn More",
      ctaLink: "/products",
      secondLink: "/quality"
    },
    {
      title: 'Fast & Free Delivery',
      description: 'Same day delivery available',
      cta: "Order Now",
      secondCTA:  "Delivery Info",
      ctaLink: "/products",
      secondLink: "/delivery"
    }

  ]
  
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  )

  useEffect(() => {
    if (!carouselApi) return

    setCount(carouselApi.scrollSnapList().length)
    setCurrent(carouselApi.selectedScrollSnap())

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap())
    })
    return ()=>{
      clearTimeout(timeoutId)
    }
}, [carouselApi])

  return (
    <>
      <div className="  overflow-hidden bg-[url(../assets/media/home-slider-1.png)] bg-cover bg-center">
        <CarouselComponent setApi={setCarouselApi} opts={{loop: true,duration: 50}} plugins={[autoplay.current]} onMouseEnter={autoplay.current.stop} onMouseLeave={()=>{autoplay.current.reset();autoplay.current.play()}} className='bg-linear-to-r from-green-500/90 to-green-400/50'>
          <CarouselContent className="relative w-[105%] ease-in-out ">
            {slides.map((slide,index) => (
              <CarouselItem key={index} className='bg-transparent ease-in-out'>
                <div className="relative w-full h-100 overflow-hidden rounded-lg  bg-transparent">
                  {/* <div className="absolute inset-0    " /> */}
                  <div className={`absolute  inset-0 flex flex-col items-start justify-center p-28 text-center text-white `}>
                    <div className={`${current === index ?`opacity-100 ${direction}-y-0 duration-400 ease-in`: `opacity-0 ${direction}-y-14`} transition-all`} >
                      {/* direction =='-translate'?'delay-400 duration-700 ease-in': 'delay-200 duration-300 ease-in-out'} transition-all */}
                    <h2 className={`mb-2 font-bold text-3xl max-w-100 text-left transition-all `}>{slide.title}</h2>
                    <p className={`mb-6 max-w-md text-[16px] text-left transition-all`}>{slide.description}</p>
                    <div className={`flex gap-4  transition-all`}>
                      <Button variant="secondary" className='border-2 text-primary-500 py-6 px-8 hover:bg-white hover:text-green-500 hover:scale-106 transition-all duration-300' size="lg">
                        <Link href={slide.ctaLink}>{slide.cta}</Link>
                      </Button>
                      <Button variant="outline" className='border-2 bg-transparent py-6 px-8 hover:bg-transparent hover:text-white hover:scale-106 transition-all duration-300' size="lg">
                        <Link href={slide.secondLink}>{slide.secondCTA}</Link>
                      </Button>

                    </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious onClick={()=>handleClick('scrollPrev')} className="custom-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full  hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 w-12 h-12" />
          <CarouselNext onClick={() => handleClick('scrollNext')} className="custom-next absolute right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full  hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 w-12 h-12"  />
          
          <div className="absolute bottom-2  w-100  left-[50%] -translate-x-1/2 flex justify-center items-center gap-2 mt-4">
            {Array.from({ length: count }).map((slide, index) => (
              <Button
                key={index}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`bg-white h-3 rounded-full transition-width duration-700  ease-in-out ${
                  current === index ? " w-8" : " w-3! p-0 opacity-60"
                }`}
              />
            ))}
          </div>
        </CarouselComponent>
      </div>

    </>
  )
}
