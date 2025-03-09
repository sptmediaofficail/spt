import { IOffer } from '@spt/core';
import { Card, CardHeader } from '@heroui/card';
import Image from 'next/image';
import React from 'react';
import EnvatoSvg from '../providers/assets/envato.svg';
import StarSvg from '../providers/assets/star.svg';
import { formatPrice } from '../../utils/formatter';
import { PrimaryButton } from '../../ui/primary-button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export const OfferCard = (props: IOffer) => {
  const t = useTranslations();
  const router = useRouter();
  return (
    <Card
      isPressable={true}
      onPress={() => router.push(`/providers/${props.provider_profile_id}`)}
      shadow={'sm'}
    >
      <CardHeader>
        <div className={'flex items-center gap-4 text-right'}>
          <div className={'rounded-full bg-gray-200 w-12 h-12 relative'}>
            <Image src={EnvatoSvg} alt="Envato" fill className={'p-3'} />
          </div>
          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-[#05b5b4] font-semibold text-lg'}>
              {props.provider_profile_name || props.name}
            </h2>
            <div className={'flex items-center gap-4'}>
              <div className={'flex items-center gap-1'}>
                <p className={'text-gray-500 text-sm font-semibold'}>
                  {props.rate}
                </p>
                <Image src={StarSvg} alt="Star" className={'h-3.5 w-3.5'} />
              </div>
              <div className={'flex items-center gap-1'}>
                <p className={'text-gray-500 text-sm font-semibold'}>
                  {formatPrice(props.price)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <PrimaryButton
          className="hover:bg-primary hover:text-white w-fit mr-auto"
          variant={'bordered'}
          text={t('accept_offer')}
        />
      </CardHeader>
    </Card>
  );
};
