import { IOffer } from '@spt/core';
import { Card, CardHeader } from '@heroui/card';
import Image from 'next/image';
import React, { useState } from 'react';
import EnvatoSvg from '../providers/assets/envato.svg';
import StarSvg from '../providers/assets/star.svg';
import { formatPrice } from '../../utils/formatter';
import { PrimaryButton } from '../../ui/primary-button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { HyperPayService } from '../../services/hyperpay';
import { hyperpayConfig } from '../../config/hyperpay';
import toast from 'react-hot-toast';
import { PaymentDialog } from '../../components/payment/payment-dialog';

interface OfferCardProps extends IOffer {
  orderId: string;
}

export const OfferCard = (props: OfferCardProps) => {
  const t = useTranslations();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [checkoutId, setCheckoutId] = useState<string | null>(null);
  const [ndc, setNdc] = useState<string | null>(null);
  const hyperpayService = new HyperPayService(hyperpayConfig);


  const handleAcceptOffer = async () => {
    try {
      setIsLoading(true);
      const checkout = await hyperpayService.createCheckout(
        props.price,
        props.id
      );
      setCheckoutId(checkout.id);
      setNdc(checkout.ndc);
      setShowPaymentDialog(true);
    } catch (error) {
      console.error('Payment initiation failed:', {
        error,
        offerId: props.id,
        price: props.total,
      });
      toast.error('Payment initiation failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentError = (error: unknown) => {
    console.error('Payment Error in OfferCard:', {
      error,
      offerId: props.id,
      checkoutId,
      ndc,
    });
    toast.error('Payment failed. Please try again.');
    setShowPaymentDialog(false);
  };

  return (
    <>
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
                  <Image
                    src={StarSvg}
                    alt="Star"
                    width={14}
                    height={14}
                    className={'h-3.5 w-3.5'}
                  />
                </div>
                <div className={'flex items-center gap-1'}>
                  <p className={'text-gray-500 text-sm font-semibold'}>
                    {formatPrice(props.price)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {props.status === 'LISTED' && (
            <PrimaryButton
              className="hover:bg-primary hover:text-white w-fit mr-auto"
              variant={'bordered'}
              text={isLoading ? t('processing') : t('accept_offer')}
              onClick={handleAcceptOffer}
              disabled={isLoading}
            />
          )}
        </CardHeader>
      </Card>

      {showPaymentDialog && checkoutId && ndc && (
        <PaymentDialog
          isOpen={showPaymentDialog}
          onClose={() => setShowPaymentDialog(false)}
          checkoutId={checkoutId}
          ndc={ndc}
          orderId={props.orderId}
          onError={handlePaymentError}
        />
      )}
    </>
  );
};
