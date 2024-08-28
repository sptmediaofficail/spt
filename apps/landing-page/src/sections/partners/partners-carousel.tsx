'use client';
import Image from 'next/image';
import { Partner } from '../../service/spt-client/types';
import { Swiper, SwiperSlide } from 'swiper/react';

export const PartnersCarousel = ({ partners }: { partners: Partner[] }) => {
  return (
    <Swiper
      spaceBetween={32}
      centeredSlides={true}
      centeredSlidesBounds={true}
      slidesPerView={'auto'}
      loop={true}
    >
      {partners.map((partner) => (
        <SwiperSlide className={'py-6 !w-auto'} key={partner.id}>
          <Image src={partner.image} alt={'Partner'} width={150} height={150} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
