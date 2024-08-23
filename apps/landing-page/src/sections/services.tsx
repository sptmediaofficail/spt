import { Section } from '../components/section';
import Image from 'next/image';
import Service1Bg from '../assets/svg/services/service-1-bg.svg';
import Service2Bg from '../assets/svg/services/service-2-bg.svg';
import Service1Icon from '../assets/svg/services/service-1-icon.svg';
import { Link } from '@nextui-org/link';
import SideArrowSvg from '../assets/svg/side-arrow.svg';
import { HTMLProps, ReactNode } from 'react';
import { cn } from '@nextui-org/theme';

export const ServicesSection = () => {
  return (
    <Section>
      <h2 className="text-2xl font-bold bg-primary text-white px-3 py-2 rounded-full w-fit">
        خدماتنا
      </h2>
      <h3 className="text-4xl font-semibold mt-12">ماذا يمكن أن نقدم لك</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="col-span-2">
          <ServiceCard
            title="التوصيل"
            description="هل تبحث عن قطع غيار موثوقة وبأسعار مناسبة لسيارتك؟ مع تطبيق SPT، يمكنك الآن العثور على كل ما تحتاجه لتصليح وصيانة سيارتك بلمسة واحدة!"
            icon={SideArrowSvg}
            bg={
              <Image
                src={Service1Bg}
                className="left-0 absolute"
                alt="Service 1 Icon"
              />
            }
          />
        </div>
        <div className="col-span-1">
          <ServiceCard
            title="التوصيل"
            description="نقوم بتوصيل القطع الغيار إلى باب منزلك بأسرع وقت ممكن"
            icon={SideArrowSvg}
            bg={
              <Image
                src={Service2Bg}
                className="left-0 -bottom-20 absolute"
                alt="Service 1 Icon"
              />
            }
            className="bg-primary text-white"
          />
        </div>

        <div className="col-span-1 bg-gray-100">s</div>
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
  }
) => {
  const { title, description, icon, bg } = props;
  return (
    <div
      {...props}
      className={cn(
        'bg-secondary rounded-3xl h-72 relative overflow-hidden',
        props.className
      )}
    >
      {bg}
      <div className="flex flex-col gap-4 p-6">
        <Image src={Service1Icon} alt="Service 1" />
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className="text-md max-w-sm text-secondaryText">{description}</p>
        <Link href="#" color="foreground">
          <p>اطلب الآن</p>
          <Image width={16} className={'mx-1'} src={icon} alt="Arrow" />
        </Link>
      </div>
    </div>
  );
};
