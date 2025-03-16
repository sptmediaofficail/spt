import Error from 'next/error';
import { Progress } from '@heroui/react';
import { useClientClientOrdersServiceGetClientOrdersById } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { type OrderDetails } from '@spt/core';
import { H1 } from '../../ui/typography';
import { PrimaryDivider } from '../../ui/divider';
import { useTranslations } from 'next-intl';
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
import { AiOutlineMessage } from 'react-icons/ai';
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

export const ShowOrderPage = ({ orderId }: { orderId: string }) => {
  const t = useTranslations();
  const { data, isLoading } = useClientClientOrdersServiceGetClientOrdersById({
    id: orderId,
    contentLanguage: 'ar',
  });

  if (isLoading) return <Progress value={50} />;
  if (!data) return <Error statusCode={404} title="Order not found" />;

  // @ts-expect-error data is not null
  const orderDetails = data.data as OrderDetails;

  return (
    <div className="w-full p-4 flex flex-col gap-4 h-full">
      <H1>{t('order_spare_part_details')}</H1>
      <PrimaryDivider />
      <div className="flex flex-row gap-4">
        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-babyBlue bg-white">
          <span className="text-xs text-center">
            {t('offers_presented', { count: orderDetails.offers.length })}
          </span>
        </div>
        <div className="flex flex-col gap-2 h-fit my-auto">
          <h2 className="text-lg font-semibold text-accent">
            {t('order_spare_part')}
          </h2>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-700">{t('order_spare_part_no')}</span>
            <span className="text-gray-500 font-medium">
              #{orderDetails.order_no}
            </span>
          </div>
        </div>
      </div>
      <OrderDetails orderDetails={orderDetails} />
    </div>
  );
};

const OrderDetails = ({ orderDetails }: { orderDetails: OrderDetails }) => {
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
      <SubmitOfferSection {...makeOfferDialog} {...orderDetails} />
    </div>
  );
};

const SubmitOfferSection = (props: UseDisclosureProps & OrderDetails) => {
  const { isPending, sendOffer, isEdit, form } = useSendOffer(props);
  const t = useTranslations();

  const closeModal = () => {
    props.onClose?.();
    form.reset();
  };

  const onSubmit = async (data: SendOfferPayload) => {
    sendOffer(data).then(closeModal);
  };
  return (
    <>
      {props.is_my_order ? (
        <>
          <h2 className="text-lg font-semibold text-primary">
            {t('home.offers')} ({props.offers.length})
          </h2>
          <OrderOffersSection {...props} />
        </>
      ) : (
        <div className="flex gap-4 w-1/3 self-end mt-24">
          <PrimaryButton
            onPress={props.onOpen}
            size={'lg'}
            text={isEdit ? t('edit_offer_modal') : t('send_offer')}
          />
          <PrimaryButton
            onPress={() => {
              toast(t('we_are_working_on_this_feature'));
            }}
            startContent={<AiOutlineMessage className="text-primary w-5 h-5" />}
            size={'lg'}
            variant={'bordered'}
            text={t(t('contact {name}', { name: t('the_store') }))}
          />
        </div>
      )}
      <Modal
        isOpen={props.isOpen}
        // onClose={form.formState.isDirty ? onCloseWithChanges : onClose}
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
            </ModalBody>
            <ModalFooter>
              <div className="flex w-full gap-4 justify-end">
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
