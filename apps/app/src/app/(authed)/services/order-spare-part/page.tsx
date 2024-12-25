'use client';

import { H1 } from '../../../../ui/typography';
import { PrimaryDivider } from '../../../../ui/divider';
import { Tab, Tabs } from '@nextui-org/tabs';
import { useTranslations } from 'next-intl';
import { FormProvider, useFormContext, useFormState } from 'react-hook-form';
import {
  PartModal,
  UnsavedChangesModal,
} from '../../../../features/services/order-part/part-modal';
import { FormOrderParts } from '../../../../features/services/order-part/types';
import { Steps, StepsProvider, useSteps } from 'react-step-builder';
import { PartsList } from '../../../../features/services/order-part/parts-list';
import { CarInfo } from '../../../../features/services/order-part/car-info';
import { PrimaryButton } from '../../../../ui/primary-button';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { AnimatedDev } from '../../../../ui/animated-dev';
import { ChassisInfo } from '../../../../features/services/order-part/chassis-info';
import { useOrderForm } from '../../../../features/services/order-part/use-order-form';
import { useEffect, useState } from 'react';

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
        <Tabs fullWidth variant="underlined" color="primary" className="w-full">
          <Tab className={'h-full'} title={t('enter_chassis_number')}>
            <form className="flex justify-between flex-col h-full w-full gap-8">
              <StepsProvider>
                <StepsComponent
                  onOpen={partFormModal.onOpen}
                  onEditPart={onEditPart}
                />
              </StepsProvider>
            </form>
          </Tab>
          <Tab className={'h-full'} title={t('enter_car_details')}>
            <form className="flex justify-between flex-col h-full w-full gap-8">
              <StepsProvider>
                <StepsComponent
                  onOpen={partFormModal.onOpen}
                  onEditPart={onEditPart}
                  startWithCarInfo={true}
                />
              </StepsProvider>
            </form>
          </Tab>
        </Tabs>
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
  ];

  if (startWithCarInfo) {
    steps = steps.filter((_, index) => index !== 0);
  }

  return (
    <>
      <Steps>
        {steps.map((step, index) => (
          <AnimatedDev key={index} className="h-full">
            {step.component}
          </AnimatedDev>
        ))}
      </Steps>
      <AnimatedDev className="flex justify-between gap-4">
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
      </AnimatedDev>
    </>
  );
};
