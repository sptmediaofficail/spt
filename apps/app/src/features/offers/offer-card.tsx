import { IOffer } from '@spt/core';
import { Card, CardHeader } from '@heroui/card';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import EnvatoSvg from '../providers/assets/envato.svg';
import StarSvg from '../providers/assets/star.svg';
import { formatPrice } from '../../utils/formatter';
import { PrimaryButton } from '../../ui/primary-button';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { HyperPayService } from '../../services/hyperpay';
import { hyperpayConfig } from '../../config/hyperpay';
import toast from 'react-hot-toast';
import { PaymentDialog } from '../../components/payment/payment-dialog';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/modal';
import { Button } from '@heroui/button';
import axiosInstance from '../../utils/axios';
import { endpoints } from '../../utils/endpoints';

interface OfferCardProps extends IOffer {
  orderId: string;
  is_paid?: boolean;
}

const OfferDetailsDialog = ({
  isOpen,
  onClose,
  onConfirm,
  offer,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  offer: OfferCardProps;
}) => {
  const t = useTranslations();

  return (
    <Modal isOpen={isOpen} onClose={onClose} placement="center">
      <ModalContent>
        <ModalHeader>
          <h2 className="text-lg font-semibold text-center">
            {t('offer_details')}
          </h2>
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span className="text-gray-600">
                {t('the_price_includes_tax')}
              </span>
              <span className="font-medium">
                {formatPrice(
                  offer.price +
                    offer.fee +
                    offer.tax +
                    offer.bank_fee +
                    offer.commission
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('delivery_fee')}</span>
              <span className="font-medium">
                {formatPrice(offer.delivery_fee)}
              </span>
            </div>

            <div className="border-t pt-2 flex justify-between">
              <span className="text-gray-800 font-semibold">{t('total')}</span>
              <span className="text-primary font-semibold">
                {formatPrice(offer.total)}
              </span>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="flex w-full gap-4 justify-end">
            <PrimaryButton
              text={t('continue_to_payment')}
              onClick={onConfirm}
              className="w-fit px-8"
            />
            <Button
              onPress={onClose}
              variant="bordered"
              className="rounded-lg px-8"
            >
              {t('cancel')}
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const OfferCard = (props: OfferCardProps) => {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [checkoutId, setCheckoutId] = useState<string | null>(null);
  const [ndc, setNdc] = useState<string | null>(null);
  const hyperpayService = new HyperPayService(hyperpayConfig);

  useEffect(() => {
    const offerId = searchParams?.get('offerId');
    const paymentInitiated = searchParams?.get('paymentInitiated');

    if (offerId === props.id && paymentInitiated === 'true' && !checkoutId) {
      handleConfirmPayment();
    }
  }, [searchParams]);

  const handleAcceptOffer = () => {
    setShowDetailsDialog(true);
  };

  const updateOrderStatus = async () => {
    try {
      const res = await axiosInstance.post(
        endpoints.client.orders.acceptOffer(props.id)
      );
      console.log(res);

      return true;
    } catch (error) {
      console.log(error);

      console.error('Failed to update order status:', error);
      toast.error(t('failed_to_update_order'));
      return false;
    }
  };

  const handleConfirmPayment = async () => {
    try {
      setIsLoading(true);
      setShowDetailsDialog(false);

      // Only update order status if it's not already accepted
      if (props.status !== 'ACCEPTED') {
        const orderUpdated = await updateOrderStatus();
        if (!orderUpdated) {
          return;
        }
      }

      // Then proceed with payment
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

  const handleContinueToPayment = () => {
    // Update URL with payment state
    const params = new URLSearchParams(searchParams?.toString());
    params.set('offerId', props.id);
    params.set('paymentInitiated', 'true');
    router.push(`?${params.toString()}`);

    handleConfirmPayment();
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
          {props.status === 'ACCEPTED' && !props.is_paid && (
            <PrimaryButton
              className="hover:bg-primary hover:text-white w-fit mr-auto"
              variant={'bordered'}
              text={isLoading ? t('processing') : t('pay_now')}
              onClick={handleContinueToPayment}
              disabled={isLoading}
            />
          )}
        </CardHeader>
      </Card>

      <OfferDetailsDialog
        isOpen={showDetailsDialog}
        onClose={() => setShowDetailsDialog(false)}
        onConfirm={handleContinueToPayment}
        offer={props}
      />

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
