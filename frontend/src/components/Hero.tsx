import hero from "../assets/hero.png";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex relative">
        <div className="embla__slide flex mi"><img src={hero} className="w-full max-h-[600px] object-cover" /></div>
        <div className="embla__slide"><img src={hero} className="w-full max-h-[600px] object-cover" /></div>
        <div className="embla__slide"><img src={hero} className="w-full max-h-[600px] object-cover" /></div>
      </div>

      <button className="embla__prev absolute bottom-72 left-5 bg-violet2 rounded-md p-2" onClick={scrollPrev}>
        <ChevronLeft className="text-white" />
      </button>

      <button className="embla__prev absolute bottom-72 right-5 bg-violet2 rounded-md p-2" onClick={scrollNext}>
        <ChevronRight className="text-white" />
      </button>
    </div>

    // <div>
    //     <img src={hero} className="w-full max-h-[600px] object-cover" />
    // </div>
  )
}

export default Hero;