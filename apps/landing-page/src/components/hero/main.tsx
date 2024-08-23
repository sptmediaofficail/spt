import React from 'react';
import Image from 'next/image';
import HeroImg from '../../assets/images/hero.png';
import { cn } from '@nextui-org/theme';

const MainSection = async () => {
  // const data = await fetch('https://api.example.com/data');

  const data = {
    title: 'اطلب قطع غيار سيارتك بكل سهولة مع SPT!',
    description:
      'مرحبا بك في SPT وجهتك المثالية لتجعل العثور على قطع غيار السيارات التي تحتاجها بسرعة وكفاءة سواء كنت تبحث عن قطع أصلية، مستعملة أو مستهلكة أخيرا، كل ما يلزم لتلبية احتياجات سيارتك.',
  };
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 text-white bg-primary">
      <div className="container py-20 mx-auto flex">
        <div className="md:basis-4/12 leading-loose">
          <h1
            className={cn(
              'text-3xl text-center font-bold mb-4 leading-loose',
              'md:text-4xl text-right'
            )}
          >
            {data.title}
          </h1>
          <p className="text-sm text-center mb-8 leading-relaxed text-slate-300 md:text-md md:text-right lea">
            {data.description}
          </p>
        </div>
      </div>
      <div className="relative mt-8 md:mt-0">
        <Image src={HeroImg} alt="SPT on Mobile" width={200} height={200} />
      </div>
    </section>
  );
};

export default MainSection;
