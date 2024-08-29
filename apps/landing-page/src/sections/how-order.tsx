'use client';
import { Section } from '../components/section';
import { HowOrderData } from '../service/spt-client/types';
import dynamic from 'next/dynamic';

export const HowOrderSection = ({
  howOrderData,
}: {
  howOrderData: HowOrderData;
}) => {
  console.log(howOrderData);
  return (
    <Section
      position={'center'}
      title={howOrderData.title}
      description={howOrderData.description}
    >
      <div className="relative !pt-[56.25%] px-4 !overflow-hidden rounded-xl mt-8">
        <LazyReactPlayer
          className="absolute top-0 left-0 "
          width="100%"
          height="100%"
          url={howOrderData.link}
        />
      </div>
    </Section>
  );
};

export const LazyReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
});
