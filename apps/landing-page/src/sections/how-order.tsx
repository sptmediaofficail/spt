'use client';
import { Section } from '../components/section';
import { HowOrderData } from '../service/spt-client/types';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const LazyReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
});

export const HowOrderSection = ({
  howOrderData,
}: {
  howOrderData: HowOrderData;
}) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once the section is in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {isInView && (
        <Section
          id={'how-order'}
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
      )}
    </div>
  );
};
