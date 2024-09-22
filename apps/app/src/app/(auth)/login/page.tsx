'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { LoginCard } from '../../../features/auth/components/login-card';

export default function LoginPage() {
  const t = useTranslations();
  const [phone, setPhone] = useState('');
  return (
    <div className="w-full lg:max-w-lg h-2/3 lg:h-auto">
      <LoginCard
        title={t('login.card.title')}
        description={t('login.card.description')}
        value={phone}
        onChange={setPhone}
        text={t('button.send')}
        onClick={() => console.log(phone)}
      />
    </div>
  );
}