import { Section } from '../components/section';
import { FiAward, FiDollarSign, FiHeadphones, FiTruck } from 'react-icons/fi';
import Image from 'next/image';
import CarImage from '../assets/svg/car.svg';

const helps = [
  {
    icon: <FiAward size={40} className="text-white" />, // Updated to use React Icon
    title: 'جودة عالية',
    description: 'توفير قطع غيار أصلية وعالية الجودة من مصادر موثوقة ومعتمدة.',
  },
  {
    icon: <FiHeadphones size={40} className="text-white" />, // Updated to use React Icon
    title: 'دعم فني متخصص',
    description: 'فريق دعم فني متخصص يقدم لك الدعم الفني اللازم.',
  },
  {
    icon: <FiTruck size={40} className="text-white" />, // Updated to use React Icon
    title: 'تسليم سريع',
    description: 'توصيل سريع للقطع الغيار إلى موقعك.',
  },
  {
    icon: <FiDollarSign size={40} className="text-white" />, // Updated to use React Icon
    title: 'توفير تكاليف',
    description: 'توفير تكاليف الصيانة والتشغيل بشكل ملحوظ.',
  },
];

export const HowHelpSection = ({
  // @ts-expect-error - to be fixed
  data = helps,
}: {
  data?: { icon: string; title: string; description: string }[];
}) => {
  return (
    <Section
      position="right"
      id={'how-help'}
      title="كيف يساعدك SPT"
      heading="مفتاحك لتحقيق الكفاءة والتوفير"
      description="اكتشف كيف يمكن SPT أن تحول مشاريعك من خلال توفير قطع عالية الجودة، دعم فني متخصص، وتسليم سريع، مما يساعدك على تحقيق كفاءة تشغيلية مثلى وتقليل التكاليف التشغيلية بشكل ملحوظ."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-8 place-items-center">
        <Image
          src={CarImage}
          alt="how-help"
          className=" hidden lg:block mt-4 w-1/2 lg:w-full col-span-1"
        />
        <div className="col-span-1">
          <div className="flex flex-col gap-8">
            {data.map((help, index) => (
              <div
                className="col-span-2 sm:col-span-1 lg:col-span-1"
                key={index}
              >
                <HowHelpCard key={index} {...help} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export const HowHelpCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center gap-4 content-stretch">
      <div className="flex items-center justify-center bg-primary text-white rounded-xl p-3">
        {icon}
      </div>
      <div className="flex gap-4 flex-col max-w-sm">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-md text-secondaryText">{description}</p>
      </div>
    </div>
  );
};
