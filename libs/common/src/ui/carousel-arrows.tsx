import * as React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export const CarouselArrows = () => {
  return (
    <>
      <button className="hidden md:block arrow-left bg-primary shadow rounded-full absolute top-1/2 p-1 z-10 left-2 lg:left-20">
        <RiArrowLeftSLine className={'w-6 h-6 fill-white'} />
      </button>
      <button className="hidden md:block arrow-right bg-primary shadow rounded-full absolute top-1/2 p-1 z-10 right-2 lg:right-20">
        <RiArrowRightSLine className={'w-6 h-6 fill-white'} />
      </button>
    </>
  );
};
