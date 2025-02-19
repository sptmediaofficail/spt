import { Section } from '../components/section';
import Image from 'next/image';
import CarImage from '../assets/svg/car.svg';
import {
  FaBalanceScale,
  FaRocket,
  FaShieldAlt,
  FaStore,
  FaTools,
} from 'react-icons/fa';
import { FiDollarSign } from 'react-icons/fi';

const helps = [
  {
    icon: <FaRocket size={44} className="text-white" />, // Updated to use React Icon
    title: 'أنجز طلبك بسرعة وسهولة',
    description:
      'انشر طلبك واترك مهمة تنفيذه لأفضل المتاجر المتخصصة والموثوقة.',
  },
  {
    icon: <FaStore size={44} className="text-white" />, // Updated to use React Icon
    title: 'اختر افضل المتاجر',
    description:
      'تصفح ملفات المتاجر واطلع على انشطتهم وتقييمات العملاء واختر الأنسب.',
  },
  {
    icon: <FiDollarSign size={44} className="text-white" />, // Updated to use React Icon
    title: 'نفذ طلبك بتكلفة اقل',
    description:
      'حدد ميزانية العرض المناسب لطلبك واختر من بين المتاجر للعمل على إنجازه.',
  },
  {
    icon: <FaShieldAlt size={44} className="text-white" />, // Updated to use React Icon
    title: 'ادفع بأريحية وأمان',
    description:
      'ادفع قيمة الطلب عبر وسائل دفع آمنة مع ضمان كامل لحقوقك المالية في SPT.',
  },
  {
    icon: <FaTools size={44} className="text-white" />, // Updated to use React Icon
    title: 'غطي احتياجاتك من قطع غيار لسيارتك',
    description:
      'اختر المتاجر المناسبة في مجال قطع غيار السيارات ومن مختلف البلدان لتنفيذ طلباتك التي تحتاجها.',
  },
  {
    icon: <FaBalanceScale size={44} className="text-white" />, // Updated to use React Icon
    title: 'اضمن حقوقك',
    description:
      'احفظ حقوقك بشكل كامل حيث يقوم موقع SPT بدور الوسيط بينك وبين متاجر قطع غيار السيارات.',
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
      <div className="flex gap-2 flex-col max-w-sm">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-md text-secondaryText">{description}</p>
      </div>
    </div>
  );
};
