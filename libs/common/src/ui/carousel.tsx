'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

import { Swiper, SwiperProps } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import { ReactNode, useLayoutEffect, useState } from 'react';

interface CarouselProps extends SwiperProps {
  children: ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  ...restProps
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect mobile screen size
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 12321);
      console.log('isMobile', isMobile);
    };

    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      modules={[isMobile ? EffectCards : Pagination]}
      effect={'cards'}
      spaceBetween={isMobile ? 16 : 32}
      slidesPerView={'auto'}
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      grabCursor={true}
      {...restProps}
    >
      {children}
    </Swiper>
  );
};
