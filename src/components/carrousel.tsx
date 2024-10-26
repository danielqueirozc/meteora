import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { useEffect, useState } from "react";
  

export function CarouselBanner() {
    const [isTablet,setIsTablet] = useState(false);

    useEffect(() => {
       setIsTablet(window.innerWidth >= 768);
    }, [])

    return (
        <section className="w-full">
            {isTablet ? 
                (
                <Carousel className="relative w-full">
                    <CarouselContent>
                        <CarouselItem>  
                            <img className="w-full" src="../src/assets/Tablet/BannerCarousel.png" alt="" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="w-full" src="../src/assets/Tablet/BannerCarousel2.png" alt="" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="w-full" src="../src/assets/Tablet/BannerCarousel3.png" alt="" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-12 z-10" />
                    <CarouselNext className="absolute right-12 z-10" />
                </Carousel>
                ) : (
                <Carousel className="relative w-full">
                    <CarouselContent>
                        <CarouselItem>  
                            <img className="w-full" src="../src/assets/mobile/BannerCarousel1.png" alt="" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="w-full" src="../src/assets/mobile/BannerCarousel2.png" alt="" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="w-full" src="../src/assets/mobile/BannerCarousel3.png" alt="" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-12 z-10" />
                    <CarouselNext className="absolute right-12 z-10" />
                </Carousel>
                )
            }
        </section>
    );
}