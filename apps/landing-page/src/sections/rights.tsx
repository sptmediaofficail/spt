import { Right } from '../service/spt-client/types';
import { Section } from '../components/section';
import Image from 'next/image';
import { cn } from '@nextui-org/theme';

export const RightsSection = ({ rights }: { rights: Right[] }) => {
  return (
    <Section
      position="center"
      id={'rights'}
      title="كيف تضمن حقوقك"
      heading={'كيف نضمن حقوقك في SPT بكل احترافية'}
      description="نحرص على ضمان حقوقك من خلال تطبيق إجراءات أمان متقدمة، توفير سياسات خصوصية شفافة، وتقديم دعم فني متواصل، مما يضمن حماية بياناتك الشخصية، وضمان الشفافية في استخدام المعلومات"
      className="max-w-full"
    >
      <div className="mt-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {rights.map((right, index) => (
            <RightCard key={index} right={right} flip={index % 2 === 0} />
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
      <Image
        className={cn(
          'shadow-xl rounded-t-full',
          flip ? 'lg:rounded-t-full' : 'lg:rounded-b-full'
        )}
        src={right.image}
        alt={right.title}
        width={100}
        height={100}
      />
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
