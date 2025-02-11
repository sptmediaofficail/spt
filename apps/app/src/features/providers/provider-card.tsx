import React, { ReactNode } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Card, CardBody, CardHeader, CardProps } from "@heroui/card";
import { Divider } from "@heroui/divider";
import DefaultProviderAvatar from './assets/default-provider-avatar.svg';
import Image from 'next/image';
import { TfiLocationPin } from 'react-icons/tfi';
import { Skeleton } from "@heroui/skeleton";
import { useRouter } from 'next/navigation';

interface DetailedCardProps extends CardProps {
  avatar?: any;
  href: string;
  title: string;
  description?: string;
  data: {
    icon?: ReactNode;
    label: string;
    value: string | number;
  }[];
}

export const DetailedCard = (props: DetailedCardProps) => {
  const router = useRouter();
  return (
    <Card
      isHoverable
      isPressable
      className="p-4 rounded-xl w-80 lg:w-96 max-w-md shadow-sm border cursor-pointer transition-transform ease-in h-fit"
      onPress={() => router.push(props.href)}
      {...props}
    >
      <CardHeader className="flex items-center mb-4 p-0 gap-2">
        <Image
          src={props.avatar ?? DefaultProviderAvatar}
          alt="Provider Avatar"
          width={40}
          height={40}
          className={'rounded-full'}
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-md font-bold">{props.title}</h2>
          {props.description && (
            <p className="text-xs text-gray-600">{props.description}</p>
          )}
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-2 px-0">
        {props.data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-gray-600"
          >
            <div className="text-gray-500 flex items-center gap-2">
              {item.icon && item.icon}
              <h4>{item.label}</h4>
            </div>
            <div className="flex items-center gap-1">{item.value}</div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

interface StoreCardProps {
  name: string;
  city: {
    name_ar: string;
  };
  rating: number;
  avatar: string | null;
  provider_id: string;
}

export const ProviderCard: React.FC<StoreCardProps> = ({
  avatar: avatarSrc,
  name,
  city,
  rating,
  provider_id,
}) => {
  const router = useRouter();
  const avatar = avatarSrc ?? DefaultProviderAvatar;
  const city_name = city.name_ar || city.name;
  return (
    <Card
      isHoverable
      isPressable
      className="p-4 rounded-xl w-80 lg:w-96 max-w-md shadow-sm border cursor-pointer transition-transform ease-in h-fit"
      onPress={() => router.push(`/providers/${provider_id}`)}
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
      <CardBody className="flex flex-col gap-2 px-0">
        <div className="flex justify-between items-center text-gray-600">
          <div className="text-gray-500 flex items-center gap-2">
            <TfiLocationPin className={'text-primary'} />
            <h4>عنوان المتجر</h4>
          </div>
          <div className="flex items-center gap-1">
            <span>{city_name}</span>
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
  <Card className="p-4 rounded-xl w-80 lg:w-96 max-w-md shadow-sm border">
    <CardHeader className="flex items-center mb-4 p-0 gap-2">
      <Skeleton className="w-10 h-10 bg-gray-200 rounded-full" />
      <Skeleton className="w-20 h-4 bg-gray-200 rounded" />
    </CardHeader>
    <Divider />
    <CardBody className="flex flex-col gap-2">
      <div className="flex justify-between items-center text-gray-600">
        <div className="text-gray-500 flex items-center gap-2">
          <Skeleton className="w-20 h-4 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center gap-1">
          <Skeleton className="w-20 h-4 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="flex justify-between items-center text-gray-600">
        <div className="text-gray-500 flex items-center gap-2">
          <Skeleton className="w-20 h-4 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center">
          <Skeleton className="w-12 h-4 bg-gray-200 rounded" />
        </div>
      </div>
    </CardBody>
  </Card>
);
