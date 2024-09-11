'use client';
import { Section } from '../components/section';
import Image from 'next/image';
import Service1Bg from '../assets/svg/services/service-1-bg.svg';
import Service2Bg from '../assets/svg/services/service-2-bg.svg';
import Service1Icon from '../assets/svg/services/service-1-icon.svg';
import Service2Icon from '../assets/svg/services/service-2-icon.svg';
import { HTMLProps, ReactNode, useState } from 'react';
import { cn } from '@nextui-org/theme';
import { SecondButton } from '../components/second-button';

const data = [
  {
    id: 1,
    title: 'التوصيل',
    description:
      'هل تبحث عن قطع غيار موثوقة وبأسعار مناسبة لسيارتك؟ مع تطبيق SPT، يمكنك الآن العثور على كل ما تحتاجه لتصليح وصيانة سيارتك بلمسة واحدة!',
    icon: Service1Icon,
    bg: (
      <Image
        src={Service1Bg}
        className="left-0 absolute w-1/2  fill-black pointer-events-none"
        alt="Service 1 Icon"
      />
    ),
  },
  {
    id: 2,
    title: 'بيع سيارات تشليح',
    description:
      'هل تبحث عن قطع غيار موثوقة وبأسعار مناسبة لسيارتك؟ مع تطبيق SPT، يمكنك الآن العثور على كل ما تحتاجه لتصليح وصيانة سيارتك بلمسة واحدة!',
    icon: Service2Icon,
    bg: (
      <Image
        src={Service2Bg}
        className="left-0 -bottom-20 absolute fill-black pointer-events-none"
        alt="Service 1 Icon"
      />
    ),
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
            theme={openedCard === service.id ? 'light' : 'dark'}
            className={cn(
              'transition-all duration-300 ease-in-out',
              openedCard === service.id
                ? 'lg:w-8/12 shadow-lg'
                : 'lg:w-4/12 shadow',
              'w-full'
            )}
            onMouseEnter={() => setOpenedCard(service.id)}
          />
        ))}
      </div>
    </Section>
  );
};

const ServiceCard = (
  props: HTMLProps<any> & {
    title: string;
    description: string;
    icon: string;
    bg: ReactNode;
    theme: 'light' | 'dark';
  }
) => {
  const { title, description, icon, bg } = props;
  return (
    <div
      {...props}
      className={cn(
        'bg-secondary rounded-3xl h-72 relative overflow-hidden',
        'shadow hover:shadow-lg transition-shadow duration-300',
        props.theme === 'light' ? 'text-secondaryText' : 'text-white',

        props.className
      )}
    >
      {bg}
      <div
        className={cn(
          'flex flex-col gap-4 p-6',
          props.theme === 'dark' && 'bg-primary'
        )}
      >
        <Image className={cn('w-16 h-16')} src={icon} alt="Service 1" />
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className={cn('text-md max-w-sm')}>{description}</p>
        <SecondButton
          color={props.theme === 'light' ? 'primary' : 'secondary'}
          text={'اطلب الآن'}
        />
      </div>
    </div>
  );
};
