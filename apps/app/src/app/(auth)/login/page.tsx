'use client';
import { useTranslations } from 'next-intl';
import { LoginCard } from '../../../features/auth/components/login-card';
import { AuthCard } from '../../../features/auth/auth-card';
import { useState } from 'react';
import { OtpCard } from '../../../features/auth/components/otp-card';
import Image from 'next/image';
import OTPIcon from '../../../assets/otp.svg';
import { usePreAuthStore } from '../../../features/auth/preAuthStore';

export default function LoginPage() {
  const t = useTranslations();
  const [showOTP, setShowOTP] = useState(false);
  const { state } = usePreAuthStore();

  return (
    <div className="w-full lg:max-w-lg h-2/3 lg:h-auto">
      {!showOTP ? (
        <AuthCard
          title={t('login.card.title')}
          description={t('login.card.description')}
        >
          <LoginCard onSuccessfulLogin={() => setShowOTP(true)} />
        </AuthCard>
      ) : (
        <AuthCard
          icon={<Image src={OTPIcon} alt="OTP Icon" />}
          title={t('otp.card.title')}
          description={
            t('otp.card.description') + '+' + hashedPhoneNumber(state.recipient)
          }
        >
          <OtpCard />
        </AuthCard>
      )}
    </div>
  );
}

const hashedPhoneNumber = (phone: string) => {
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$6');
};
