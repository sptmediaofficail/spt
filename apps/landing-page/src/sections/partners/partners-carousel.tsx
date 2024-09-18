'use client';
import Image from 'next/image';
import { Partner } from '../../service/spt-client/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CarouselArrows } from '../../components/carousel-arrows';

export const PartnersCarousel = ({ partners }: { partners: Partner[] }) => {
  return (
    <Swiper
      spaceBetween={60}
      centeredSlides={true}
      centeredSlidesBounds={true}
      slidesPerView={'auto'}
      loop={true}
      // autoplay={{ pauseOnMouseEnter: true, waitForTransition: false }}
      navigation={{ nextEl: '.arrow-left', prevEl: '.arrow-right' }}
      modules={[Navigation]}
    >
      {[...partners, ...partners].map((partner) => (
        <SwiperSlide className={'pb-6 pt-12 !w-auto'} key={partner.id}>
          <Image
            src={partner.image}
            alt={partner.description || 'partner'}
            className="pointer-events-none"
            width={100}
            height={100}
          />
        </SwiperSlide>
      ))}
      <CarouselArrows />
    </Swiper>
  );
};
