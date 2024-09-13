'use client';
import Image from 'next/image';
import { Partner } from '../../service/spt-client/types';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const PartnersCarousel = ({ partners }: { partners: Partner[] }) => {
  return (
    <Swiper
      spaceBetween={60}
      centeredSlides={true}
      centeredSlidesBounds={true}
      slidesPerView={'auto'}
      loop={true}
      // autoplay={{ pauseOnMouseEnter: true, waitForTransition: false }}
      // modules={[Autoplay, Pagination, Navigation]}
    >
      {partners.map((partner) => (
        <SwiperSlide className={'pb-6 pt-12 !w-auto'} key={partner.id}>
          <Image
            src={partner.image}
            alt={partner.description || 'partner'}
            className="pointer-events-none"
            width={150}
            height={150}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
