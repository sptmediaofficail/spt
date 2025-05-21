import Error from 'next/error';
import { Progress } from '@heroui/react';
import { useClientClientOrdersServiceGetClientOrdersById } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { type OrderDetails } from '@spt/core';
import { PrimaryDivider } from '../../ui/divider';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import {
  FaBox,
  FaCalendar,
  FaCar,
  FaCheckCircle,
  FaHashtag,
  FaMapMarkerAlt,
  FaTruck,
} from 'react-icons/fa';
import { formatDate } from '../../utils/formatter';
import { OrderOffersSection } from '../offers/order-offers-section';
import { PrimaryButton } from '../../ui/primary-button';
import deliveredFill from '../../assets/delivered-fill.svg';
import delivered from '../../assets/delivered.svg';
import shippingFill from '../../assets/shipping-fill.svg';
import loaf from '../../assets/leaf.svg';
import otpIcon from '../../assets/otp.svg';
import toast from 'react-hot-toast';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  UseDisclosureProps,
} from '@heroui/modal';
import { Input } from '../../ui/input';
import { Button } from '@heroui/button';
import { SendOfferPayload, useSendOffer } from './use-send-offer';
import Image from 'next/image';
import { endpoints } from '../../utils/endpoints';
import axiosInstance from '../../utils/axios';
import { InputOtp } from '@heroui/input-otp';
import { useState, useEffect } from 'react';
import { invalidatePath } from '../../utils/cach-validation';

export const ShowOrderPage = ({ orderId }: { orderId: string }) => {
  const t = useTranslations();
  const { data, isLoading } = useClientClientOrdersServiceGetClientOrdersById({
    id: orderId,
    contentLanguage: 'ar',
  });
  const [orderStatus, setOrderStatus] = useState<string>('');
  const router = useRouter();

  // Set initial orderStatus when data is loaded
  useEffect(() => {
    if (data?.data) {
      setOrderStatus(data.data.status);
    }
  }, [data]);

  const handleCancelOrder = async () => {
    try {
      await axiosInstance.post(endpoints.client.orders.cancel, {
        order_id: orderId,
      });
      toast.success(t('order_cancelled_successfully'));
      router.push('/orders');
    } catch (error) {
      toast.error(t(error?.message || 'failed_to_cancel_order'));
    }
  };

  if (isLoading) return <Progress value={50} />;
  if (!data) return <Error statusCode={404} title="Order not found" />;

  // @ts-expect-error data is not null
  const orderDetails = data.data as OrderDetails;

  return (
    <div className="w-full p-4 flex flex-col gap-4 h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-primary">
          {t('order_spare_part_details')}
        </h2>
        {orderDetails.is_my_order &&
          orderDetails.status === 'receiving_offer' && (
            <PrimaryButton
              onPress={handleCancelOrder}
              variant={'bordered'}
              text={t('cancel_order')}
              className="text-red-500 border-red-500 hover:bg-red-50 w-fit"
            />
          )}
      </div>
      <PrimaryDivider />

      {orderDetails?.is_paid === true &&
        orderDetails?.status !== 'receiving_offer' && (
          <div className="flex flex-row gap-4 items-center justify-center my">
            <div className="flex flex-col items-center gap-2">
              <Image src={shippingFill} alt="logo" width={80} height={80} />
              <span className="text-sm text-gray-600">
                {t('ready_for_shipping')}
              </span>
            </div>
            <div className="h-0.5 w-1/3 border-t-2 border-dashed border-gray-300 mt-[-25px]" />
            <div className="flex flex-col items-center gap-2">
              {orderStatus === 'completed' ? (
                <Image src={deliveredFill} alt="logo" width={80} height={80} />
              ) : (
                <Image src={delivered} alt="logo" width={80} height={80} />
              )}
              <span className="text-sm text-gray-600">{t('delivered')}</span>
            </div>
          </div>
        )}
      <div className="flex flex-row gap-4">
        {!orderDetails.is_paid ? (
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-babyBlue bg-white">
            <span className="text-xs text-center">
              {t('offers_presented', { count: orderDetails.offers.length })}
            </span>
          </div>
        ) : (
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-babyBlue bg-white">
            <span className="text-xs text-center">
              <Image src={loaf} alt="logo" width={100} height={100} />
            </span>
          </div>
        )}
        <div className="flex flex-col gap-2 h-fit my-auto">
          {!orderDetails.is_paid ? (
            <h2 className="text-lg font-semibold text-primary">
              {t('order_spare_part')}
            </h2>
          ) : (
            <span className="text-lg font-semibold text-primary">
              {orderDetails.offers.find((offer) => offer.status === 'ACCEPTED')
                ?.name || t('unknown')}
            </span>
          )}

          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-700">{t('order_spare_part_no')}</span>
            <span className="text-gray-500 font-medium">
              #{orderDetails.order_no}
            </span>
          </div>
        </div>
      </div>
      <OrderDetails
        orderDetails={orderDetails}
        orderStatus={orderStatus}
        setOrderStatus={setOrderStatus}
      />
    </div>
  );
};

const OrderDetails = ({
  orderDetails,
  orderStatus,
  setOrderStatus,
}: {
  orderDetails: OrderDetails;
  orderStatus: string;
  setOrderStatus: (status: string) => void;
}) => {
  const makeOfferDialog = useDisclosure();
  const t = useTranslations();
  const details = [
    {
      label: t('order_spare_part_year'),
      value: orderDetails.details.year,
      icon: FaCalendar,
    },
    {
      label: t('order_spare_part_brand'),
      value: orderDetails.details?.brand?.name || t('unknown'),
      icon: FaCar,
    },
    {
      label: t('order_spare_part_model'),
      value:
        orderDetails.details.model?.name ||
        orderDetails.details.model?.id ||
        t('unknown'),
      icon: FaCar,
    },
    {
      label: t('order_spare_part_location'),
      value: orderDetails.details.address,
      icon: FaMapMarkerAlt,
    },
    {
      label: t('order_spare_part_date'),
      value: formatDate(orderDetails.details.delivery_date),
      icon: FaTruck,
    },
    {
      label: t('order_spare_part_ship'),
      value: orderDetails.details.is_delivery ? t('yes') : t('no'),
      icon: FaTruck,
    },
    {
      label: t('part_name'),
      value: orderDetails.details.name,
      icon: FaBox,
    },
    {
      label: t('order_spare_part_quantity'),
      value: orderDetails.details.quantity,
      icon: FaHashtag,
    },
    {
      label: t('order_spare_part_status'),
      value: (() => {
        if (
          orderDetails.details.condition_both ||
          (orderDetails.details.condition_new &&
            orderDetails.details.condition_used)
        ) {
          return `${t('order_spare_part_new')} / ${t('order_spare_part_used')}`;
        }
        if (orderDetails.details.condition_new) {
          return t('order_spare_part_new');
        }
        if (orderDetails.details.condition_used) {
          return t('order_spare_part_used');
        }
      })(),
      icon: FaCheckCircle,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-4">
        {details.map((detail, index) => {
          return (
            <div
              key={detail.label}
              className={`
                flex items-center gap-4 p-4 border-spacing-y-[21px]
                ${index >= 2 ? 'lg:border-0 border-gray-100 border-t' : ''}
                ${index >= 3 ? 'border-gray-100 lg:border-t' : ''}
                border-gray-200
              `}
            >
              <div className="flex items-center justify-center p-2 bg-babyBlue rounded-full">
                {<detail.icon className="text-primary w-5 h-5" />}
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-500">{detail.label}</span>
                <span className="text-gray-800 font-medium">
                  {detail.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <SubmitOfferSection
        {...makeOfferDialog}
        {...orderDetails}
        orderStatus={orderStatus}
        setOrderStatus={setOrderStatus}
      />
    </div>
  );
};

const SubmitOfferSection = (
  props: UseDisclosureProps &
    OrderDetails & {
      orderStatus: string;
      setOrderStatus: (status: string) => void;
    }
) => {
  const { isPending, sendOffer, isEdit, form } = useSendOffer(props);
  const t = useTranslations();
  const [otp, setOtp] = useState('');
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const otpDialog = useDisclosure();
  const router = useRouter();
  const [providerConfirm, setProviderConfirm] = useState(props.code_sent_at);

  const closeModal = () => {
    props.onClose?.();
    form.reset();
  };

  const onSubmit = async (data: SendOfferPayload) => {
    sendOffer(data).then(closeModal);
  };

  const handleConfirmDelivery = async () => {
    try {
      if (props.is_my_order) {
        otpDialog.onOpen();
      } else {
        await axiosInstance.post(
          `${endpoints.provider.orders.confirmDelivery(props.id)}`
        );
        toast.success(t('delivery_confirmed'));
        setProviderConfirm(new Date().toISOString());
      }
    } catch (error) {
      console.error('Failed to confirm delivery:', error);
      toast.error(t('failed_to_confirm_delivery'));
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await axiosInstance.post(
        `${endpoints.client.orders.confirmDelivery(props.id)}`,
        { code: otp }
      );
      toast.success(t('delivery_confirmed'));
      otpDialog.onClose();
      setOtp('');
      setIsOtpComplete(false);
      props.setOrderStatus('completed');
    } catch (error) {
      console.error(error);
      toast.error(t(error?.message || 'failed_to_confirm_delivery'));
    }
  };

  return (
    <>
      {props.is_my_order &&
      props.is_paid &&
      props.orderStatus !== 'completed' ? (
        <div className="flex gap-4 lg:w-1/3 w-full self-end mt-8 lg:mt-24">
          <PrimaryButton
            onPress={handleConfirmDelivery}
            size={'lg'}
            variant={'solid'}
            text={t('confirm_delivery')}
            className="px-8 w-1/2"
          />
          <PrimaryButton
            onPress={() => {
              toast(t('we_are_working_on_this_feature'));
            }}
            size={'lg'}
            variant={'bordered'}
            text={t('contact {name}', { name: t('the_store') })}
            className={'hidden lg:block w-1/2'}
          />
        </div>
      ) : props.is_my_order && !props.is_paid ? (
        <>
          <h2 className="text-lg font-semibold text-primary">
            {t('home.offers')} ({props.offers.length})
          </h2>
          <OrderOffersSection {...props} />
        </>
      ) : !props.is_my_order &&
        !props.is_paid &&
        props.orderStatus !== 'completed' ? (
        <PrimaryButton
          onPress={props.onOpen}
          size={'lg'}
          text={isEdit ? t('edit_offer_modal') : t('send_offer')}
          className={'w-1/4 lg:w-1/4 flex self-end'}
        />
      ) : !props.is_my_order &&
        props.is_paid &&
        props.orderStatus !== 'completed' &&
        providerConfirm === null ? (
        <div className="flex gap-4 lg:w-1/3 w-full self-end mt-8 lg:mt-24">
          <PrimaryButton
            onPress={handleConfirmDelivery}
            size={'lg'}
            variant={'solid'}
            text={t('confirm_delivery')}
            className="w-1/2 px-8 flex self-end"
          />
          <PrimaryButton
            onPress={() => {
              toast(t('we_are_working_on_this_feature'));
            }}
            size={'lg'}
            variant={'bordered'}
            text={t('contact {name}', { name: t('the_client') })}
            className={'hidden lg:block w-1/2'}
          />
        </div>
      ) : null}

      {/* OTP Dialog */}
      <Modal
        isOpen={otpDialog.isOpen}
        onClose={otpDialog.onClose}
        placement="center"
        size="sm"
        hideCloseButton
      >
        <ModalContent>
          <div className="flex flex-col items-center gap-4 p-6">
            <Image src={otpIcon} alt="OTP Icon" width={100} height={100} />
            <h2 className="text-lg font-semibold text-center">
              {t('label.end_order')}
            </h2>
          </div>

          <div className="mx-4 mb-2"></div>
          <ModalBody className="flex flex-col gap-4">
            <p className="text-center text-gray-500 mb-2">
              {t('otp.confirm_delivery_instruction')}
            </p>
            <PrimaryDivider />
            <InputOtp
              width={'full'}
              variant={'bordered'}
              length={4}
              value={otp}
              dir={'ltr'}
              className={'mx-auto'}
              autoFocus
              onValueChange={(value) => {
                setOtp(value);
                setIsOtpComplete(value.length === 4);
              }}
              onComplete={() => handleVerifyOtp()}
              size={'lg'}
            />
          </ModalBody>
          <ModalFooter>
            <div className="flex w-full gap-4 justify-end">
              {/* <PrimaryButton
                text={t('button.confirm')}
                onPress={handleVerifyOtp}
                isDisabled={!isOtpComplete}
                className="w-fit px-8"
              /> */}
              <Button
                onPress={otpDialog.onClose}
                variant="bordered"
                className="rounded-lg px-8"
              >
                {t('cancel')}
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Offer Modal */}
      <Modal
        isOpen={props.isOpen}
        onClose={closeModal}
        placement="center"
        size="xl"
        hideCloseButton
        classNames={{ base: 'mx-4' }}
      >
        <ModalContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ModalHeader>
              <h2 className="text-lg font-semibold text-center">
                {isEdit ? t('edit_offer_modal') : t('send_offer_modal')}
              </h2>
            </ModalHeader>
            <div className="mx-4 mb-2">
              <PrimaryDivider />
            </div>
            <ModalBody className="flex flex-col gap-4">
              <Input
                isRequired
                type={'number'}
                label={t('price')}
                labelPlacement="outside"
                placeholder={t('enter', { field: t('price') })}
                variant="bordered"
                errorMessage={t('field_required')}
                {...form.register('price')}
              />
              <Input
                isRequired
                type={'number'}
                label={t('delivery_fee')}
                labelPlacement="outside"
                placeholder={t('enter', { field: t('delivery_fee') })}
                variant="bordered"
                errorMessage={t('field_required')}
                {...form.register('delivery_fee')}
              />

              <p className="text-[13px] text-red-500">
                {t('commission_message')}
              </p>
            </ModalBody>
            <ModalFooter>
              <div className="flex w-full gap-4 justify-end ">
                <PrimaryButton
                  text={isEdit ? t('save') : t('add')}
                  type="submit"
                  isDisabled={isPending}
                  isLoading={isPending}
                  className="w-fit px-8"
                />
                <Button
                  onPress={props.onClose}
                  isDisabled={isPending}
                  variant="bordered"
                  className="rounded-lg px-8"
                >
                  {t('cancel')}
                </Button>
              </div>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
