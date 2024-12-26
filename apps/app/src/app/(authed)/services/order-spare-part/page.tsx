'use client';

import { H1 } from '../../../../ui/typography';
import { PrimaryDivider } from '../../../../ui/divider';
import { Tab, Tabs } from '@nextui-org/tabs';
import { useTranslations } from 'next-intl';
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
} from 'react-hook-form';
import {
  PartModal,
  UnsavedChangesModal,
} from '../../../../features/services/order-part/part-modal';
import { FormOrderParts } from '../../../../features/services/order-part/types';
import { Steps, StepsProvider, useSteps } from 'react-step-builder';
import { PrimaryButton } from '../../../../ui/primary-button';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { AnimatedDev } from '../../../../ui/animated-dev';
import { ChassisInfo } from '../../../../features/services/order-part/chassis-info';
import { useOrderForm } from '../../../../features/services/order-part/use-order-form';
import { useEffect, useState } from 'react';
import { GoogleMap } from '../../../../features/providers/map';
import { Textarea } from '../../../../ui/input';
import { DatePicker } from '@nextui-org/date-picker';
import { DevTool } from '@hookform/devtools';
import { CarInfo } from '../../../../features/services/order-part/car-info';
import { PartsList } from '../../../../features/services/order-part/parts-list';
import { Divider } from '@nextui-org/divider';

const OrderSparePartPage = () => {
  const t = useTranslations();
  const {
    form,
    onSubmit,
    editingPart,
    onEditPart,
    partFormModal,
    unSavedChangesModal,
    closeUnSavedChangesModalAndReset,
  } = useOrderForm();

  return (
    <FormProvider {...form}>
      <UnsavedChangesModal
        {...unSavedChangesModal}
        onConfirm={closeUnSavedChangesModalAndReset}
      />
      <PartModal
        {...partFormModal}
        onSubmit={onSubmit}
        onCloseWithChanges={unSavedChangesModal.onOpen}
        initialData={editingPart?.part}
      />
      <div className="w-full p-4 flex flex-col gap-4 h-full">
        <H1>{'order_spare_part'}</H1>
        <PrimaryDivider />
        <div className="relative flex-1">
          <div className={'absolute top-[42px] right-0 w-full'}>
            <Divider className="bg-gray-100 mx-auto h-[2px] w-[89%]" />
          </div>

          <Tabs
            fullWidth
            variant="underlined"
            color="primary"
            classNames={{
              tab: 'pb-4 mb-2',
              panel: 'max-h-[calc(100%_-_3.5rem)] p-0 pt-2',
            }}
          >
            <Tab className={'h-full'} title={t('enter_chassis_number')}>
              <StepsProvider>
                <StepsComponent
                  onOpen={partFormModal.onOpen}
                  onEditPart={onEditPart}
                />
              </StepsProvider>
            </Tab>
            <Tab className={'h-full'} title={t('enter_car_details')}>
              <StepsProvider>
                <StepsComponent
                  onOpen={partFormModal.onOpen}
                  onEditPart={onEditPart}
                  startWithCarInfo={true}
                />
              </StepsProvider>
            </Tab>
          </Tabs>
        </div>
      </div>
    </FormProvider>
  );
};

export default OrderSparePartPage;

const StepsComponent = ({
  onOpen,
  onEditPart,
  startWithCarInfo = false,
}: {
  onOpen: () => void;
  onEditPart: (part: FormOrderParts['parts'][number], index: number) => void;
  startWithCarInfo?: boolean;
}) => {
  const [isThisStepValid, setIsThisStepValid] = useState(false);
  const { next, prev, hasNext, hasPrev, current } = useSteps();
  const t = useTranslations();
  const form = useFormContext<FormOrderParts>();
  const setLocation = ({
    lat,
    lng,
  }: {
    lat: number | undefined;
    lng: number | undefined;
  }) => {
    form.setValue('latitude', lat);
    form.setValue('longitude', lng);
  };

  const { errors, dirtyFields } = useFormState<FormOrderParts>(form.formState);

  const isCarInfoValid =
    dirtyFields.year && dirtyFields.brand && dirtyFields.model;
  const isPartsListValid = form.getValues().parts.length > 0;

  useEffect(() => {
    // get current step and run it's validation
    console.log({ current, isValid: steps[current - 1].validation });
    setIsThisStepValid(steps[current - 1].validation);
  }, [form.getValues(), current]);

  let steps = [
    {
      component: <ChassisInfo />,
      validation: !!(!errors.vin_serial && dirtyFields.vin_serial),
    },
    {
      component: (
        <div className="flex flex-col gap-8 h-full">
          <CarInfo />
          <PartsList onAddPart={onOpen} onEditPart={onEditPart} />
        </div>
      ),
      validation: !!(isCarInfoValid && isPartsListValid),
    },
    {
      component: (
        <div className="flex flex-col h-full gap-6 font-semibold text-gray-800 text-sm">
          <div className="flex flex-col gap-2 flex-1">
            <label>{t('pickup')}</label>
            <div className="w-full h-full flex-1 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden shadow-sm animate-appearance-in">
              <GoogleMap
                onInit={setLocation}
                onDragEnd={(e) =>
                  setLocation({ lat: e?.latLng?.lat(), lng: e?.latLng?.lng() })
                }
                {...form.register('latitude')}
                {...form.register('longitude')}
              />
            </div>
          </div>
          <div>
            <label>{t('address_details')}</label>
            <Textarea
              {...form.register('address', { required: true })}
              placeholder={t('enter_address_details')}
              radius={'sm'}
              classNames={{
                inputWrapper: 'mt-2',
              }}
            />
          </div>
          <Controller
            control={form.control}
            name="calender_delivery_date"
            render={({ field }) => (
              <DatePicker
                hideTimeZone
                dir={'rtl'}
                showMonthAndYearPickers
                shouldForceLeadingZeros
                radius={'sm'}
                label={t('pickup_date_time')}
                variant="bordered"
                labelPlacement={'outside'}
                {...field}
                onChange={field.onChange}
              />
            )}
          />
        </div>
      ),
    },
  ];

  if (startWithCarInfo) {
    steps = steps.filter((_, index) => index !== 0);
  }

  return (
    <div className="flex flex-col justify-between gap-6 h-full">
      <DevTool control={form.control} />
      <Steps>
        {steps.map((step, index) => (
          <AnimatedDev key={index} className="flex-1">
            {step.component}
          </AnimatedDev>
        ))}
      </Steps>
      <dev className="flex justify-between gap-4 mt-auto">
        <PrimaryButton
          isDisabled={!hasPrev}
          onPress={prev}
          variant={'bordered'}
          className="w-fit"
          text={t('prev')}
          startContent={<GrFormNext className={'w-4 h-4'} />}
        />
        {hasNext ? (
          <PrimaryButton
            isDisabled={!isThisStepValid}
            onPress={next}
            text={t('next')}
            className={'w-auto'}
            endContent={<GrFormPrevious className={'w-4 h-4'} />}
          />
        ) : (
          <PrimaryButton
            isDisabled={!isThisStepValid}
            onSubmit={form.handleSubmit((data) => console.log(data))}
            text={t('confirm')}
            className={'w-auto'}
          />
        )}
      </dev>
    </div>
  );
};
