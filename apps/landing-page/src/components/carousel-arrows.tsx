import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export const CarouselArrows = () => {
  return (
    <>
      <button className="arrow-left bg-primary shadow rounded-full absolute top-1/2 p-1 z-10 left-10 lg:left-20">
        <RiArrowLeftSLine className={'w-6 h-6 fill-white'} />
      </button>
      <button className="arrow-right bg-primary shadow rounded-full absolute top-1/2 p-1 z-10 right-10 lg:right-20">
        <RiArrowRightSLine className={'w-6 h-6 fill-white'} />
      </button>
    </>
  );
};
