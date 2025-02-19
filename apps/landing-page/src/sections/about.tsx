import { Section } from '../components/section';
import { FiAward, FiHeadphones, FiTruck } from 'react-icons/fi';
import { HowHelpCard } from './how-help';
import TwoPhones from '../assets/svg/two-phones.svg';
import Image from 'next/image';

const helps = [
  {
    icon: <FiAward size={44} className="text-white" />, // Updated to use React Icon
    title: 'سجل طلبك',
    description:
      'قم بانشاء طلب قطع غيار واضف تفاصيل البيانات واحصل على عروض المتاجر المتخصصة في دقائق محدودة.',
  },
  {
    icon: <FiHeadphones size={44} className="text-white" />, // Updated to use React Icon
    title: 'اختر العرض المناسب',
    description:
      'قارن عروض المتاجر وتصفح ملفاتهم وتقيماتهم وأعمالهم، تفاوض معهم عبر المحادثة الفورية واختر الأفضل لتنفيذ طلبك.',
  },
  {
    icon: <FiTruck size={44} className="text-white" />, // Updated to use React Icon
    title: 'استلم طلبك',
    description:
      'سيعمل المتجر الذي اخترته على طلبك ويتابع معك حتى حصولك على طلبك المتفق عليه وتسليمه.',
  },
];

export const AboutSection = () => {
  return (
    <Section
      id={'about'}
      position={'center'}
      title={'عن SPT'}
      heading={'هي منصة إلكترونية متكاملة تشمل تطبيق جوال وموقع الكتروني'}
      description="وجهتك المثالية للعثور على قطع غيار السيارات بسرعة وسهولة. سواء كنت تبحث عن قطع أصلية أو مستعملة، نوفر لك كل ما تحتاجه لتلبية احتياجات سيارتك بكل راحة."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-8 lg:mt-0 place-items-center">
        <div className="col-span-1">
          <div className="flex flex-col gap-8">
            {helps.map((help, index) => (
              <div
                className="col-span-2 sm:col-span-1 lg:col-span-1 text-right"
                key={index}
              >
                {/*
  // @ts-expect-error - to be fixed */}
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
