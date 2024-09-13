'use client';
import { Section } from '../components/section';
import Image from 'next/image';
import Service1Bg from '../assets/svg/services/service-1-bg.svg';
import Service2Bg from '../assets/svg/services/service-2-bg.svg';
import Service1Icon from '../assets/svg/services/service-1-icon.svg';
import Service2Icon from '../assets/svg/services/service-2-icon.svg';
import Service2top from '../assets/svg/services/service-2-top.svg';
import { HTMLProps, useState } from 'react';
import { cn } from '@nextui-org/theme';
import { SecondButton } from '../components/second-button';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const data = [
  {
    id: 1,
    title: 'قطع غيار',
    description:
      'هل تبحث عن قطع غيار موثوقة وبأسعار مناسبة لسيارتك؟ مع تطبيق SPT، يمكنك الآن العثور على كل ما تحتاجه لتصليح وصيانة سيارتك بلمسة واحدة!',
    icon: Service1Icon,
    bg: Service1Bg,
    // bgClassNames: 'scale-105 -left-10',
    image: Service2Bg,
  },
  {
    id: 2,
    title: 'بيع سيارات تشليح',
    description:
      'هل تبحث عن قطع غيار موثوقة وبأسعار مناسبة لسيارتك؟ مع تطبيق SPT، يمكنك الآن العثور على كل ما تحتاجه لتصليح وصيانة سيارتك بلمسة واحدة!',
    icon: Service2Icon,
    bg: Service2top,
    bgClassNames: '-left-20',
    image: Service2Bg,
  },
];

export const ServicesSection = () => {
  const [openedCard, setOpenedCard] = useState(1);
  return (
    <Section id={'services'} title={'خدماتنا'} heading={'ماذا يمكن أن نقدم لك'}>
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/*<div className="col-span-2">*/}
        {/*  <ServiceCard*/}
        {/*    title="التوصيل"*/}
        {/*    description="هل تبحث عن قطع غيار موثوقة وبأسعار مناسبة لسيارتك؟ مع تطبيق SPT، يمكنك الآن العثور على كل ما تحتاجه لتصليح وصيانة سيارتك بلمسة واحدة!"*/}
        {/*    icon={Service1Icon}*/}
        {/*    theme={'light'}*/}
        {/*    button={<SecondButton color={'primary'} text={'اطلب الآن'} />}*/}
        {/*    bg={*/}
        {/*      <Image*/}
        {/*        src={Service1Bg}*/}
        {/*        className="left-0 absolute w-1/2  fill-black pointer-events-none"*/}
        {/*        alt="Service 1 Icon"*/}
        {/*      />*/}
        {/*    }*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div className="col-span-2 lg:col-span-1">*/}
        {/*  <ServiceCard*/}
        {/*    title="بيع سيارات تشليح"*/}
        {/*    description="هل تبحث عن قطع غيار موثوقة وبأسعار مناسبة لسيارتك؟ مع تطبيق SPT، يمكنك الآن العثور على كل ما تحتاجه لتصليح وصيانة سيارتك بلمسة واحدة!"*/}
        {/*    icon={Service2Icon}*/}
        {/*    bg={*/}
        {/*      <Image*/}
        {/*        src={Service2Bg}*/}
        {/*        className="left-0 -bottom-20 absolute fill-black pointer-events-none"*/}
        {/*        alt="Service 1 Icon"*/}
        {/*      />*/}
        {/*    }*/}
        {/*    className="bg-primary text-white"*/}
        {/*    button={<SecondButton color={'secondary'} text={'اطلب الآن'} />}*/}
        {/*    theme="dark"*/}
        {/*  />*/}
        {/*</div>*/}
        {data.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            bg={service.bg}
            bgClassNames={service.bgClassNames}
            image={service.image}
            theme={openedCard === service.id ? 'light' : 'dark'}
            onClick={() => setOpenedCard(service.id)}
            isOpened={openedCard === service.id}
          />
        ))}
      </div>
    </Section>
  );
};

export const ServiceCard = (
  props: HTMLProps<any> & {
    title: string;
    description: string;
    icon: string;
    bg?: StaticImport | string;
    bgClassNames?: string;
    image: StaticImport | string;
    theme: 'light' | 'dark';
    isOpened?: boolean;
    onClick?: () => void;
  }
) => {
  const { title, description, icon, bg, image, isOpened } = props;
  return (
    <div
      {...props}
      className={cn(
        'w-full',
        'bg-secondary rounded-3xl h-80 lg:h-72 relative overflow-hidden',
        'shadow hover:shadow-xl transition-shadow duration-300',
        isOpened ? 'text-secondaryText' : 'text-white',
        isOpened ? 'cursor-default' : 'cursor-pointer',
        isOpened ? 'lg:w-8/12 shadow-lg' : 'lg:w-4/12 shadow',
        'transition-all duration-300 ease-in-out',
        'transform-gpu',
        isOpened ? '' : 'bg-primary',
        props.className
      )}
      onClick={() => props.onClick && props.onClick()}
    >
      {bg && (
        <Image
          src={bg}
          className={cn(
            'left-0 absolute w-1/2 fill-black pointer-events-none',
            isOpened ? 'opacity-100' : 'opacity-0',
            'transition-opacity duration-300 ease-in-out',
            props.bgClassNames
          )}
          alt="Service 1 Icon"
        />
      )}

      {image && (
        <Image
          src={image}
          className={cn(
            'left-0 -bottom-20 absolute fill-black pointer-events-none',
            isOpened ? 'opacity-0' : 'opacity-100',
            'transition-opacity duration-300 ease-in-out'
          )}
          alt="Service 1 Icon"
        />
      )}
      <div className={cn('flex flex-col gap-4 p-6')}>
        <Image
          // className={cn('w-16 h-16 invert grayscale')}
          src={icon}
          alt="Service 1"
        />
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className={cn('text-md max-w-sm')}>{description}</p>
        <SecondButton
          color={props.theme === 'light' ? 'primary' : 'secondary'}
          className="font-semibold text-lg tracking-wide w-fit"
          text={'اطلب الآن'}
        />
      </div>
    </div>
  );
};
