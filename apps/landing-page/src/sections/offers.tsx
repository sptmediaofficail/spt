'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { Section } from '../components/section';

export const OffersSection = () => {
  return (
    <Section
      position={'right'}
      title={'العروض'}
      heading={'تعرف على أبرز عروض المنصة'}
    >
      <Swiper
        spaceBetween={30}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="relative mt-6"
      >
        <SwiperSlide>
          <div className="bg-[#1F2A48] text-white rounded-lg shadow-lg flex flex-col md:flex-row p-6 md:p-12">
            <div className="md:w-1/2">
              <Image
                src="/path-to-your-image.png"
                alt="Offer Image"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center mt-6 md:mt-0 md:ml-6">
              <div className="flex items-center space-x-2">
                <span className="bg-[#24458E] text-white px-3 py-1 rounded-lg">
                  %خصم 20
                </span>
              </div>
              <h3 className="text-2xl font-bold mt-4">
                عرض شراء واحد واحصل على الثاني مجاناً
              </h3>
              <p className="mt-4 text-lg">
                عند شراء قطعة غيار معينة، احصل على قطعة إضافية مجاناً من نفس
                النوع. العرض يشمل بعض القطع المحددة. تصفح من القائمة لمزيد من
                التفاصيل. ساري حتى نهاية الشهر الحالي.
              </p>
              <p className="mt-4 text-sm">
                عند الدفع، استخدم الكود:{' '}
                <span className="font-bold">SPTT20</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2">
        <FaArrowLeft className="text-[#30326C] w-10 h-10" />
      </div>
      <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2">
        <FaArrowRight className="text-[#30326C] w-10 h-10" />
      </div>
    </Section>
  );
};
