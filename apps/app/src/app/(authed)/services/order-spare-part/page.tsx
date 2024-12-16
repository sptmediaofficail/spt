'use client';

import { H1 } from '../../../../ui/typography';
import { PrimaryDivider } from '../../../../ui/divider';
import { Tab, Tabs } from '@nextui-org/tabs';
import { useTranslations } from 'next-intl';
import { useDisclosure } from '@nextui-org/modal';
import { FormProvider, useForm } from 'react-hook-form';
import { AddPartModal } from '../../../../features/services/order-part/add-part-modal';
import {
  OrderPartData,
  PartData,
} from '../../../../features/services/order-part/types';
import { Steps, StepsProvider, useSteps } from 'react-step-builder';
import { PartsList } from '../../../../features/services/order-part/parts-list';
import { CarInfo } from '../../../../features/services/order-part/car-info';
import { PrimaryButton } from '../../../../ui/primary-button';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { AnimatedDev } from '../../../../ui/animated-dev';

const OrderSparePartPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations();

  const form = useForm<OrderPartData>({
    defaultValues: {
      parts: [],
    },
  });

  const onAddPart = (data: PartData) => {
    form.setValue('parts', [...form.getValues().parts, data]);
    onClose();
  };
  return (
    <FormProvider {...form}>
      <AddPartModal isOpen={isOpen} onClose={onClose} onSubmit={onAddPart} />
      <div className="w-full p-4 flex flex-col gap-4 h-full">
        <H1>{'order_spare_part'}</H1>
        <PrimaryDivider />
        <Tabs fullWidth variant="underlined" color="primary" className="w-full">
          <Tab className={'h-full'} title={t('enter_chassis_number')}>
            <form className="flex justify-between flex-col h-full w-full gap-8 lg:gap-0">
              <StepsProvider>
                <MySteps onOpen={onOpen} />
              </StepsProvider>
            </form>
          </Tab>
          <Tab className={'h-full'} title={t('enter_car_details')}>
            <form className="flex justify-between flex-col h-full w-full gap-8 lg:gap-0">
              <CarInfo />
              <PartsList onOpen={onOpen} />
            </form>
          </Tab>
        </Tabs>
      </div>
    </FormProvider>
  );
};

export default OrderSparePartPage;
const MySteps = ({ onOpen }: { onOpen: () => void }) => {
  const { next, prev } = useSteps();
  const t = useTranslations();

  return (
    <>
      <Steps>
        <AnimatedDev>
          <h1>Step 1</h1>
        </AnimatedDev>
        <AnimatedDev className="flex flex-col gap-8 lg:gap-0 justify-between h-full">
          <CarInfo />
          <PartsList onOpen={onOpen} />
        </AnimatedDev>
        <AnimatedDev>
          <h1>Step 3</h1>
        </AnimatedDev>
      </Steps>
      <AnimatedDev className="flex justify-between gap-4">
        <PrimaryButton
          onPress={prev}
          variant={'bordered'}
          className="w-fit"
          text={t('prev')}
          startContent={<GrFormNext className={'w-4 h-4'} />}
        />
        <PrimaryButton
          onPress={next}
          text={t('next')}
          className={'w-auto'}
          endContent={<GrFormPrevious className={'w-4 h-4'} />}
        />
      </AnimatedDev>
    </>
  );
};
