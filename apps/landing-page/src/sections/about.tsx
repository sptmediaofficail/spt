import { Section } from '../components/section';

export const AboutSection = () => {
  return (
    <Section
      id={'about'}
      position={'center'}
      title={'عن SPT'}
      heading={'سهلة وبسيطة وبأسعار معقولة'}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <p className="text-lg text-gray-500">
            تعتبر منصة سبورتر منصة إلكترونية تهدف إلى تسهيل عملية البيع والشراء
            بين الأفراد والشركات في مجال الرياضة واللياقة البدنية. تم تأسيس
            المنصة في عام 2021 وتقدم خدماتها في مصر والعديد من الدول العربية.
          </p>
        </div>
        <div>
          <p className="text-lg text-gray-500">
            تعتبر منصة سبورتر منصة إلكترونية تهدف إلى تسهيل عملية البيع والشراء
            بين الأفراد والشركات في مجال الرياضة واللياقة البدنية. تم تأسيس
            المنصة في عام 2021 وتقدم خدماتها في مصر والعديد من الدول العربية.
          </p>
        </div>
      </div>
    </Section>
  );
};
