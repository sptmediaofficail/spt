'use client';
import ReactStars from 'react-stars';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import Image from 'next/image';
import { SecondButton } from '../../../components/second-button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CarouselArrows } from '../../../components/carousel-arrows';
import { Provider } from '@spt/core';

export const ProvidersCarousel = ({ providers }: { providers: Provider[] }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={32}
      navigation={{ nextEl: '.arrow-left', prevEl: '.arrow-right' }}
      centeredSlides={true}
      centeredSlidesBounds={true}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      slidesPerView={'auto'}
    >
      {providers.map((provider) => (
        <SwiperSlide className={'py-6 !w-auto'} key={provider.id}>
          <ShopCard {...provider} />
        </SwiperSlide>
      ))}

      <CarouselArrows />
    </Swiper>
  );
};

const ShopCard = (provider: Provider) => {
  const renderStars = (rating: number) => {
    return (
      <ReactStars
        value={rating}
        edit={false}
        size={16}
        color2={'#f5a623'}
        color1={'#e0e0e0'}
      />
    );
  };

  return (
    <Card isHoverable className="w-[240px]">
      <CardHeader>
        <div className="relative p-8 m-auto">
          <Image
            src={provider.avatar ?? '/partners/BMW.png'}
            alt="Shop Logo"
            fill={true}
          />
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-1 text-center">
        <h3 className="text-lg font-semibold">{provider.name}</h3>
        <div className="mx-auto">{renderStars(provider.rating)}</div>
      </CardBody>
      <CardFooter>
        <div className="mx-auto">
          <SecondButton
            href={`https://services.spt.sa/providers/${provider.provider_id}`}
            className={'text-xs'}
            text={'طلب الخدمه'}
            color={'primary'}
          />
        </div>
      </CardFooter>
    </Card>
  );
};
