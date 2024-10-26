import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import DefaultProviderAvatar from './assets/default-provider-avatar.svg';
import Image from 'next/image';
import { TfiLocationPin } from 'react-icons/tfi';

interface StoreCardProps {
  name: string;
  city_name_ar: string;
  rating: number;
  avatar: string | null;
}

export const ProviderCard: React.FC<StoreCardProps> = ({
  avatar: avatarSrc,
  name,
  city_name_ar,
  rating,
}) => {
  const avatar = avatarSrc ?? DefaultProviderAvatar;
  return (
    <Card
      isHoverable
      className="p-4 rounded-xl w-80 lg:w-96 max-w-md shadow-sm border cursor-pointer transition-transform ease-in"
    >
      <CardHeader className="flex items-center mb-4 p-0 gap-2">
        <Image
          src={avatar}
          alt="Provider Avatar"
          width={40}
          height={40}
          className={'rounded-full'}
        />
        <h2 className="text-md font-bold">{name}</h2>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-2">
        <div className="flex justify-between items-center text-gray-600">
          <div className="text-gray-500 flex items-center gap-2">
            <TfiLocationPin className={'text-primary'} />
            <h4>عنوان المتجر</h4>
          </div>
          <div className="flex items-center gap-1">
            <span>{city_name_ar}</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-gray-600">
          <div className="text-gray-500 flex items-center gap-2">
            <FaRegStar className={'text-primary'} />
            <h4>التقييمات</h4>
          </div>
          <div className="flex items-center">
            <span>{rating}</span>
            <FaStar className="text-yellow-500 mr-1" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export const ProviderCardSkeleton = () => (
  <Card className="p-4 rounded-xl w-80 lg:w-96 m-1 max-w-md shadow-sm border">
    <CardHeader className="flex items-center mb-4 p-0 gap-2">
      <div className="w-10 h-10 bg-gray-200 rounded-full" />
      <div className="w-20 h-4 bg-gray-200 rounded" />
    </CardHeader>
    <Divider />
    <CardBody className="flex flex-col gap-2">
      <div className="flex justify-between items-center text-gray-600">
        <div className="text-gray-500 flex items-center gap-2">
          <div className="w-20 h-4 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center gap-1">
          <div className="w-20 h-4 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="flex justify-between items-center text-gray-600">
        <div className="text-gray-500 flex items-center gap-2">
          <div className="w-20 h-4 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center">
          <div className="w-12 h-4 bg-gray-200 rounded" />
        </div>
      </div>
    </CardBody>
  </Card>
);
