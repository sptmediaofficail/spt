'use client';
import { useTranslations } from 'next-intl';
import { LoginCard } from '../../../features/auth/components/login-card';

export default function LoginPage() {
  const t = useTranslations();
  return (
    <div className="w-full lg:max-w-lg h-2/3 lg:h-auto">
      <LoginCard
        title={t('login.card.title')}
        description={t('login.card.description')}
        text={t('button.send')}
      />
    </div>
  );
}
