'use client';

import { H1 } from '../../../../ui/typography';
import { PrimaryDivider } from '../../../../ui/divider';
import { Tab, Tabs } from '@nextui-org/tabs';
import { useTranslations } from 'next-intl';
import { useDisclosure } from '@nextui-org/modal';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { PartModal } from '../../../../features/services/order-part/part-modal';
import {
  FormOrderParts,
  PartData,
} from '../../../../features/services/order-part/types';
import { Steps, StepsProvider, useSteps } from 'react-step-builder';
import { PartsList } from '../../../../features/services/order-part/parts-list';
import { CarInfo } from '../../../../features/services/order-part/car-info';
import { PrimaryButton } from '../../../../ui/primary-button';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { AnimatedDev } from '../../../../ui/animated-dev';
import { ChassisInfo } from '../../../../features/services/order-part/chassis-info';
import { useState } from 'react';

const OrderSparePartPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations();

  const form = useForm<FormOrderParts>({
    defaultValues: {
      parts: [],
    },
    mode: 'onChange',
  });

  const [editingPart, setEditingPart] = useState<{
    part: PartData;
    index: number;
  } | null>(null);

  const onSubmit = (data: PartData) => {
    if (editingPart) {
      const updatedParts = [...form.getValues().parts];
      updatedParts[editingPart.index] = data;
      form.setValue('parts', updatedParts);
      setEditingPart(null);
    } else {
      form.setValue('parts', [...form.getValues().parts, data]);
    }
    onClose();
  };

  const onEditPart = (part: PartData, index: number) => {
    setEditingPart({ part, index });
    onOpen();
  };

  const closeAndReset = () => {
    setEditingPart(null);
    onClose();
  };

  return (
    <FormProvider {...form}>
      <PartModal
        isOpen={isOpen}
        onClose={closeAndReset}
        onSubmit={onSubmit}
        initialData={editingPart?.part}
      />
      <div className="w-full p-4 flex flex-col gap-4 h-full">
        <H1>{'order_spare_part'}</H1>
        <PrimaryDivider />
        <Tabs fullWidth variant="underlined" color="primary" className="w-full">
          <Tab className={'h-full'} title={t('enter_chassis_number')}>
            <form className="flex justify-between flex-col h-full w-full gap-8">
              <StepsProvider>
                <MySteps onOpen={onOpen} onEditPart={onEditPart} />
              </StepsProvider>
            </form>
          </Tab>
          <Tab className={'h-full'} title={t('enter_car_details')}>
            <form className="flex justify-between flex-col h-full w-full gap-8">
              <CarInfo />
              <PartsList onOpen={onOpen} onEditPart={onEditPart} />
            </form>
          </Tab>
        </Tabs>
      </div>
    </FormProvider>
  );
};

export default OrderSparePartPage;

const MySteps = ({
  onOpen,
  onEditPart,
}: {
  onOpen: () => void;
  onEditPart: (part: FormOrderParts['parts'][number], index: number) => void;
}) => {
  const { next, prev, hasNext, hasPrev } = useSteps();
  const t = useTranslations();
  const form = useFormContext<FormOrderParts>();

  const isChassisValid = form.getFieldState('vin_serial').invalid;

  form.watch();

  return (
    <>
      <Steps>
        <AnimatedDev>
          <ChassisInfo />
        </AnimatedDev>
        <AnimatedDev className="flex flex-col gap-8 h-full">
          <CarInfo />
          <PartsList onOpen={onOpen} onEditPart={onEditPart} />
        </AnimatedDev>
        <AnimatedDev>
          <h1>Step 3</h1>
        </AnimatedDev>
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
        <PrimaryButton
          isDisabled={!hasNext || !isChassisValid}
          onPress={next}
          text={t('next')}
          className={'w-auto'}
          endContent={<GrFormPrevious className={'w-4 h-4'} />}
        />
      </AnimatedDev>
    </>
  );
};
