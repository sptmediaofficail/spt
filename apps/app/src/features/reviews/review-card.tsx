import Image from 'next/image';
import { Card } from '@nextui-org/card';
import { Truncate } from '@re-dev/react-truncate';

export const ReviewCard = ({
  comment,
  name,
  avatar,
}: {
  comment: string;
  name: string;
  avatar: string;
}) => (
  <Card
    isHoverable
    className="p-4 rounded-xl w-80 lg:w-96 max-w-md shadow-sm border cursor-pointer transition-transform ease-in flex flex-row gap-4"
  >
    <Image
      src={avatar}
      alt="Provider Avatar"
      width={48}
      height={48}
      className={'rounded-full'}
    />
    <div className={'flex flex-col w-full'}>
      <h3 className={'text-lg font-bold'}>{name}</h3>
      <Truncate className={'text-gray-500 w-full'} lines={2}>
        {comment}
      </Truncate>
    </div>
  </Card>
);

export const ReviewCardSkeleton = () => (
  <Card className="w-80 lg:w-96 shadow-sm border">
    <div className="p-4 animate-pulse flex flex-row gap-4">
      <div className={'w-12 h-12 bg-gray-200 rounded-full'} />
      <div className={'flex flex-col w-full gap-4'}>
        <div className={'w-24 h-2 bg-gray-200'} />
        <div className={'w-32 h-2 bg-gray-200'} />
        <div className={'w-32 h-2 bg-gray-200'} />
      </div>
    </div>
  </Card>
);
