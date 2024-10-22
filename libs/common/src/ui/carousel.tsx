'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

import { Swiper, SwiperProps } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import { ReactNode, useEffect, useState } from 'react';

interface CarouselProps extends SwiperProps {
  children: ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  ...restProps
}) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Effect to detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      console.log('isMobile', isMobile);
    };

    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile === null) return null;

  return (
    <Swiper
      modules={isMobile ? [EffectCards, Pagination] : [Pagination]}
      effect={'cards'}
      spaceBetween={32}
      slidesPerView={'auto'}
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      grabCursor={true}
      centeredSlides={isMobile}
      {...restProps}
    >
      {children}
    </Swiper>
  );
};
