import { useProviderProviderOfferServicePostProviderOffer } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';
import { useUserStore } from '../auth/user-store';
import { OrderDetails } from '@spt/core';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export type SendOfferPayload = {
  order_id: string;
  price: number;
  delivery_fee: number;
};

export const useSendOffer = (props: Pick<OrderDetails, 'id' | 'offers'>) => {
  const t = useTranslations();
  const { isPending, mutateAsync } =
    useProviderProviderOfferServicePostProviderOffer();

  const form = useForm<SendOfferPayload>({
    defaultValues: {
      order_id: props.id,
    },
  });
  const [isEdit, setIsEdit] = useState(false);

  const currentUserId = useUserStore((state) => state.user?.id);

  useEffect(() => {
    if (props.offers.length) {
      const currentOffer = props.offers.find(
        (offer) => offer.provider_id === currentUserId
      );
      if (currentOffer) {
        setIsEdit(true);
        form.setValue('price', currentOffer.price);
        form.setValue('delivery_fee', currentOffer.delivery_fee);
      }
    }
  }, [props, currentUserId]);

  const sendOffer = async (data: SendOfferPayload) => {
    await toast
      .promise(
        mutateAsync({
          formData: data,
        }),
        {
          loading: t('loading'),
          success: t('offer_sent'),
          error: t('offer_failed'),
        }
      )
      .then(() => {
        setIsEdit(true);
      });
  };

  return {
    isPending,
    sendOffer,
    isEdit,
    form,
  };
};
