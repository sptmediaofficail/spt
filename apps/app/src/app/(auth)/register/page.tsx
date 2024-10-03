'use client';
import { useTranslations } from 'next-intl';
import { RegisterCard } from '../../../features/auth/components/register-card';
import { AuthCard } from '../../../features/auth/auth-card';

export default function RegisterPage() {
  const t = useTranslations();
  return (
    <div className="w-full lg:max-w-lg h-2/3 lg:h-auto">
      <AuthCard
        title={t('register.card.title')}
        description={t('register.card.description')}
      >
        <RegisterCard text={t('register.card.button')} />
      </AuthCard>
    </div>
  );
}
