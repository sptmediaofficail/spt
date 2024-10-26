import React from 'react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { Card } from '@nextui-org/card';
import { Avatar } from '@nextui-org/avatar';

interface StoreCardProps {
  name: string;
  city: string;
  rating: number;
}

export const ProviderCard: React.FC<StoreCardProps> = ({
  name,
  city,
  rating,
}) => {
  return (
    <Card shadow={'sm'} className="p-4 rounded-xl max-w-sm">
      <div className="flex items-center mb-4">
        <Avatar src="/store-icon.png" alt={name} className="mr-4" />
        <h2 className="text-lg font-bold">{name}</h2>
      </div>
      <div className="flex justify-between items-center text-gray-600 mb-2">
        <div className="flex justify-between items-center text-gray-600 mb-2">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-blue-600" />
            <span>{city}</span>
          </div>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="text-gray-500 flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          <h4>عنوان المتجر</h4>
        </div>
        <div className="text-gray-500 flex items-center mt-2">
          <FaStar className="mr-2" />
          <h4>التقييمات</h4>
        </div>
      </div>
    </Card>
  );
};
