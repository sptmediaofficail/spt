'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

import { Swiper, SwiperProps } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import * as React from 'react';
import { ReactNode } from 'react';
import { isMobile } from 'react-device-detect';

interface CarouselProps extends SwiperProps {
  children: ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  ...restProps
}) => {
  return (
    <Swiper
      modules={isMobile ? [EffectCards, Pagination] : [Pagination]}
      className={'!overflow-hidden'}
      effect={'cards'}
      spaceBetween={16}
      slidesPerView={'auto'}
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      grabCursor={true}
      centeredSlides={isMobile}
      cardsEffect={{
        slideShadows: false,
      }}
      {...restProps}
    >
      {children}
    </Swiper>
  );
};
