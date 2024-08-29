import { Section } from '../components/section';
import { FiAward, FiHeadphones, FiTruck } from 'react-icons/fi';
import { HowHelpCard } from './how-help';
import TwoPhones from '../assets/svg/two-phones.svg';
import Image from 'next/image';

const helps = [
  {
    icon: <FiAward size={40} className="text-white" />, // Updated to use React Icon
    title: 'تشكيله واسعه من قطع الغيار',
    description: 'توفير قطع غيار أصلية وعالية الجودة من مصادر موثوقة ومعتمدة.',
  },
  {
    icon: <FiHeadphones size={40} className="text-white" />, // Updated to use React Icon
    title: 'دعم فني متخصص',
    description: 'فريق دعم فني متخصص يقدم لك الدعم الفني اللازم.',
  },
  {
    icon: <FiTruck size={40} className="text-white" />, // Updated to use React Icon
    title: 'اسعار مناسبة',
    description: 'توصيل سريع للقطع الغيار إلى موقعك.',
  },
];

export const AboutSection = () => {
  return (
    <Section
      id={'about'}
      position={'center'}
      title={'عن SPT'}
      heading={'سهلة وبسيطة وبأسعار معقولة'}
      description="في عالم قطع غيار السيارات، نعلم أن العثور على المكان المثالي للشراء هو أمر بالغ الأهمية. هنا في SPT، نقدم لك مجموعة من الأسباب التي تجعلنا خيارك الأول للعثور على قطع غيار سيارتك بكل سهولة وراحة"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-8 lg:mt-0 place-items-center">
        <div className="col-span-1">
          <div className="flex flex-col gap-8">
            {helps.map((help, index) => (
              <div
                className="col-span-2 sm:col-span-1 lg:col-span-1 text-right"
                key={index}
              >
                <HowHelpCard key={index} {...help} />
              </div>
            ))}
          </div>
        </div>
        <Image
          src={TwoPhones}
          alt="how-help"
          className=" hidden lg:block mt-4 w-1/2 lg:w-full col-span-1"
        />
      </div>
    </Section>
  );
};
