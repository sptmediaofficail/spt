'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { LoginCard } from '../../../features/auth/components/login-card';
import Image from 'next/image';
import SLogo from '../../../assets/s-logo.png';
import LogoWhite from '../../../assets/logo-white.svg';

export default function LoginPage() {
  const t = useTranslations();
  const [phone, setPhone] = useState('');
  return (
    <div className={'flex flex-col h-full bg-[#1d2d56]'}>
      <div className={'h-2/5 relative'}>
        <Image
          src={LogoWhite}
          alt="Logo White"
          objectFit={'contain'}
          layout={'fill'}
          className={''}
        />
        <Image
          src={SLogo}
          alt="S Logo"
          objectFit={'contain'}
          layout={'fill'}
          className={''}
        />
      </div>
      <div className={'flex-1'}>
        <LoginCard
          title={t('login.card.title')}
          description={t('login.card.description')}
          value={phone}
          onChange={setPhone}
          text={t('button.send')}
          onClick={() => console.log(phone)}
        />
      </div>
    </div>
  );
}
