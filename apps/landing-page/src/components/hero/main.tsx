import React from 'react';
import { cn } from '@nextui-org/theme';
import Image from 'next/image';
import HeroImg from '../../assets/images/hero.png';

const MainSection = async () => {
  // const data = await fetch('https://api.example.com/data');

  const data = {
    title: 'اطلب قطع غيار سيارتك بكل سهولة مع SPT!',
    description:
      'مرحبا بك في SPT وجهتك المثالية لتجعل العثور على قطع غيار السيارات التي تحتاجها بسرعة وكفاءة سواء كنت تبحث عن قطع أصلية، مستعملة أو مستهلكة أخيرا، كل ما يلزم لتلبية احتياجات سيارتك.',
  };
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-24 text-white">
      <div className="container mx-auto flex">
        <div className="md:basis-4/12 leading-loose">
          <h1
            className={cn(
              'text-3xl text-center font-bold mb-4 leading-loose',
              'md:text-4xl md:text-right',
              'lg:text-5xl lg:text-right lg:leading-normal'
            )}
          >
            {data.title}
          </h1>
          {/*<p className="text-sm text-center mb-8 leading-relaxed text-slate-300 md:text-md md:text-right lea">*/}
          <p
            className={cn(
              'text-sm text-center mb-8 leading-loose opacity-90 text-slate-300',
              'md:text-md md:text-right',
              'lg:text-lg lg:text-right lg:leading-relaxed'
            )}
          >
            {data.description}
          </p>
        </div>
      </div>
      <Image
        src={HeroImg}
        alt="SPT on Mobile"
        className="lg:absolute lg:-left-24 lg:top-10 w-[80%] h-[80%] object-contain"
        objectFit={'contain'}
      />
    </section>
  );
};

export default MainSection;
