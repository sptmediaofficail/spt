import { Right } from '../service/spt-client/types';
import { Section } from '../components/section';
import Image from 'next/image';
import { cn } from '@heroui/theme';
import RightWrench from '../assets/svg/right-wrench.svg';

export const RightsSection = ({ rights }: { rights: Right[] }) => {
  return (
    <Section
      position="center"
      id={'rights'}
      title={'كيف نضمن حقوقك'}
      heading={'نضمن حقوقك بإجراءات أمان متقدمة'}
      // description="نحرص على ضمان حقوقك من خلال تطبيق إجراءات أمان متقدمة وفق التالي:"
      className="max-w-full"
    >
      <Image
        src={RightWrench}
        className="absolute right-0"
        alt="right-wrench"
        width={70}
        height={70}
      />
      <div className="mt-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rights.map((right, index) => (
            <RightCard key={index} right={right} flip={true} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export const RightCard = ({ right, flip }: { right: Right; flip: boolean }) => {
  return (
    <div
      className={cn(
        flip ? 'lg:flex-col' : 'lg:flex-col-reverse',
        'flex flex-col items-center gap-4 max-w-xs mx-auto'
      )}
    >
      <Image src={right.image} alt={right.title} width={100} height={100} />
      <div
        className={cn(
          'flex gap-4 flex-col',
          flip ? 'lg:flex-col' : 'lg:flex-col-reverse'
        )}
      >
        <h4 className="text-2xl font-bold">{right.title}</h4>
        <p className="text-md text-secondaryText">{right.description}</p>
      </div>
    </div>
  );
};
