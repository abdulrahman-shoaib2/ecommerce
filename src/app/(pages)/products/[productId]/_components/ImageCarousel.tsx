"use client";
import React from 'react'
import {
  type CarouselApi,
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { cn } from '@/lib/utils';



export default function ImageCarousel({ slides }: { slides: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [galleryApi, setGalleryApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);

  React.useEffect(() => {
    if (!api || !galleryApi) return;

    setCurrent(api.selectedScrollSnap() + 1);
    // setCurrent(galleryApi.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      galleryApi?.scrollTo(api.selectedScrollSnap());

    }
    api.on("select", onSelect);

    // galleryApi.on("select", () => {
    //   setCurrent(galleryApi.selectedScrollSnap() + 1);
    //   api.scrollTo(galleryApi.selectedScrollSnap())
    // });
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleThumbClick = (index: number) => {
      api?.scrollTo(index);
      if(current>=index){
        galleryApi?.scrollTo(index-1)
        
      }else{
        galleryApi?.scrollTo(index)
      }
    }



  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
      <CarouselComponent setApi={setApi}>
        <CarouselContent>
          {
            slides.map((slide, index) => {
              return (
                <CarouselItem key={"image-slide_" + index}>
                  <div
                    className="image-gallery-slide  image-gallery-center "
                  >
                    <Image
                      alt='image gallery slide'
                      width={280}
                      height={380}
                      className="h-full image-gallery-image"
                      src={slide}
                    />
                  </div>
                </CarouselItem>
              )
            })
          }
        </CarouselContent>
      </CarouselComponent>
      <CarouselComponent className="mt-4 w-full max-w-xs" setApi={setGalleryApi} >
        <CarouselContent className="my-1 flex">
          {slides.map((image, index) => (
            <CarouselItem
              className={cn(
                "basis-13/40 cursor-pointer transition-opacity pl-1 first-of-type:pl-5 bg-transparent! ",
                current === index + 1 ? "opacity-100" : "opacity-50"
              )}
              key={image}
              onClick={() => handleThumbClick(index)}
            >
              <Image
                height={125}
                width={100}
                alt="gallery image"
                className={cn("size-full rounded-xs object-cover transition-all duration-300 border-4 border-white ",
                  current === index + 1 ? "border-[#337ab7] border-4" : "hover:border-[#337ab7]"
                )}
                src={image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselComponent>

    </div>

  )
}
