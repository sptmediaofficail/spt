'use client';
import 'swiper/css';
import { Swiper, SwiperProps } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import * as React from 'react';
import { ReactNode } from 'react';

export const Carousel = (props: SwiperProps & { children: ReactNode }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={32}
      navigation={{ nextEl: '.arrow-left', prevEl: '.arrow-right' }}
      slidesPerView={4}
      {...props}
    >
      {props.children}
      {/*<CarouselArrows />*/}
    </Swiper>
  );
};
