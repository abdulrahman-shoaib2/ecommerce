import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import useScrollReveal from '@/hooks/useScrollReveal'

export default function CustomSlide({ slide, current, index }: { slide: { title: string, description: string, ctaLink: string, cta: string, secondLink: string, secondCTA: string }, current: number, index: number }) {
  const { ref, visible } = useScrollReveal()
  return (

    <div className="relative w-full h-100 overflow-hidden rounded-lg  bg-transparent">
      <div className={`absolute  inset-0 flex flex-col items-start justify-center p-28 text-center text-white `}>
        <div ref={ref} className={` transition-all duration-400 delay-100 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-12.5 opacity-0'} `}>
          <h2 className={`mb-2 font-bold text-3xl max-w-100 text-left ${current === index ? `opacity-100 translate-y-0 duration-300 ease-in delay-650` : `opacity-0 duration-300 translate-y-10`} transition-all `}>{slide.title}</h2>
          <p className={`mb-6 max-w-md text-[16px] text-left ${current === index ? `opacity-100 translate-y-0 duration-300 ease-in delay-750` : `opacity-0 duration-300 translate-y-10`} transition-all`}>{slide.description}</p>
          <div className={`flex gap-4 ${current === index ? `opacity-100 translate-y-0 duration-300 ease-in delay-850` : `opacity-0 duration-300 translate-y-10`} transition-all`}>
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

  )
}
