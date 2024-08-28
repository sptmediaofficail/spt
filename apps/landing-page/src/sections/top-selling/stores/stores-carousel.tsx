'use client';
import ReactStars from 'react-stars';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { SecondButton } from '../../../components/second-button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CarouselArrows } from '../../../components/carousel-arrows';

const stores = [
  {
    logo: 'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    shopName: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    logo: 'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    shopName: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    logo: 'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    shopName: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    logo: 'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    shopName: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    logo: 'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    shopName: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    logo: 'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    shopName: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    logo: 'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    shopName: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    logo: 'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    shopName: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    logo: 'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    shopName: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    logo: 'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    shopName: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    logo: 'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    shopName: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
  {
    logo: 'https://i.pinimg.com/originals/99/cd/f6/99cdf63cf38419fa5e1aa25645a6776b.png',
    shopName: 'اسم المتجر',
    description:
      'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
    rating: 4,
  },
];

export const StoresCarousel = () => {
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
      {stores.map((store, index) => (
        <SwiperSlide className={'py-6 !w-auto'} key={index}>
          <ShopCard
            logo={store.logo}
            shopName={store.shopName}
            description={store.description}
            rating={store.rating}
          />
        </SwiperSlide>
      ))}

      <CarouselArrows />
    </Swiper>
  );
};

const ShopCard = ({
  logo,
  shopName,
  description,
  rating,
}: {
  logo: string;
  shopName: string;
  description: string;
  rating: number;
}) => {
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
          <Image src={logo} alt="Shop Logo" fill={true} />
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-1 text-center">
        <h3 className="text-lg font-semibold">{shopName}</h3>
        <div className="mx-auto">{renderStars(rating)}</div>
        <p className="text-sm text-secondaryText">{description}</p>
      </CardBody>
      <CardFooter>
        <div className="mx-auto">
          <SecondButton
            className={'text-xs'}
            text={'طلب الخدمه'}
            color={'primary'}
          />
        </div>
      </CardFooter>
    </Card>
  );
};
