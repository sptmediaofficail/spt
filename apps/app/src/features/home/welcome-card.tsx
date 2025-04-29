import { Card, CardBody } from '@heroui/card';
import Image from 'next/image';
import SptLogo from './assets/s.svg';
import Symbol from './assets/symbol.svg';
import { useTranslations } from 'next-intl';

export const WelcomeCard = () => {
  const t = useTranslations('cards.welcome');
  return (
    <Card
      className={
        'w-full h-48 bg-[#28478a] text-white rounded-none lg:rounded-2xl'
      }
    >
      <div className={'flex justify-between w-full relative'}>
        <Image
          src={SptLogo}
          alt="SPT Logo"
          width={100}
          height={192}
          className={'absolute left-0 h-48 py-1'}
        />
        <Image
          src={Symbol}
          alt="Symbol"
          width={192}
          height={256}
          className={
            'opacity-0 lg:opacity-100 absolute h-64 w-48 right-0 top-0'
          }
        />
      </div>
      <CardBody className={'flex justify-center gap-4 text-right px-4'}>
        <h1 className={'font-black text-3xl flex align-middle'}>
          {t('header')}
        </h1>

        <p className={'text-lg font-semibold max-w-sm'}>{t('body')}</p>
      </CardBody>
    </Card>
  );
};
