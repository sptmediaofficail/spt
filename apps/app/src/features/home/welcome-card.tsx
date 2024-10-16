import { Card, CardBody } from '@nextui-org/card';
import Image from 'next/image';
import SptLogo from './assets/s.svg';
import Symbol from './assets/symbol.svg';
import { useTranslations } from 'next-intl';

export const WelcomeCard = () => {
  const t = useTranslations();
  return (
    <Card className={'w-full h-48 bg-[#28478a] text-white'}>
      <div className={'flex justify-between w-full relative'}>
        <Image
          src={SptLogo}
          alt="SPT Logo"
          className={'absolute left-0 h-48 py-1'}
        />
        <Image
          src={Symbol}
          alt="Symbol"
          className={'absolute h-64 w-48 right-0 top-0'}
        />
      </div>
      <CardBody className={'flex justify-center gap-4 text-right px-4'}>
        <h1 className={'font-black text-3xl flex align-middle'}>
          {t('cards.welcome.header')}
        </h1>

        <p className={'text-lg font-semibold max-w-sm'}>
          {t('cards.welcome.body')}
        </p>
      </CardBody>
    </Card>
  );
};
