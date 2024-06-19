import { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import shoe1 from "../assets/shoe2.webp";

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const NewArrivals: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
      AutoScroll({ playOnInit: true })
    ])
    const [isPlaying, setIsPlaying] = useState(false)
  
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
  
  
    const toggleAutoplay = useCallback(() => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return
  
      const playOrStop = autoScroll.isPlaying()
        ? autoScroll.stop
        : autoScroll.play
      playOrStop()
    }, [emblaApi])
  
    useEffect(() => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return
  
      setIsPlaying(autoScroll.isPlaying())
      emblaApi
        .on('autoScroll:play', () => setIsPlaying(true))
        .on('autoScroll:stop', () => setIsPlaying(false))
        .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
    }, [emblaApi])
  
    return (
        <div className='relative'>
            <h1 className='text-center border py-6 font-inter text-5xl font-bold italic text-white hover:text-black bg-violet3'>New Arrivals</h1>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container ">
                        {slides.map((index) => (
                            <div className="embla__slide m-4" key={index}>
                                
                                <div className="w-[550px] h-[450px] flex flex-col  items-center rounded-lg">
                                    <img src={shoe1} alt=""  height={20} width={350}/>    
                                    <div className="flex justify-between w-full px-4  font-inter gap-10 ">
                                        <p className='text-[21px] font-medium'>SORA 2740 COLOURBLOCKING WHITE AVORIO PINK BLUE</p>
                                        <p className='text-nowrap font-bold text-[28px]'>RM 125.00</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        
                <div className="embla__controls flex justify-center mt-8">
                    <button className="embla__prev  bg-black rounded-full p-2" onClick={scrollPrev}>
                        <ChevronLeft className="text-white" />
                    </button>

                    <button className="embla__play" onClick={toggleAutoplay} type="button">
                        {isPlaying ? 'Stop' : 'Start'}
                    </button>

                    <button className="embla__prev   bg-black rounded-full p-2" onClick={scrollNext}>
                        <ChevronRight className="text-white" />
                    </button>
                    
                </div>
            </div>

        </div>
      
    )
}

export default NewArrivals