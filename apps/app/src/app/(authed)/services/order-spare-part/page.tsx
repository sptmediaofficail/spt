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
import { Button } from '@nextui-org/button';
import { PartsList } from '../../../../features/services/order-part/parts-list';
import { CarInfo } from '../../../../features/services/order-part/car-info';

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
  const { next, prev } = useSteps();
  return (
    <FormProvider {...form}>
      <AddPartModal isOpen={isOpen} onClose={onClose} onSubmit={onAddPart} />
      <div className="w-full p-4 flex flex-col gap-4 h-full">
        <H1>{'order_spare_part'}</H1>
        <PrimaryDivider />
        <Tabs
          fullWidth
          variant="underlined"
          color="primary"
          className="w-full "
        >
          <Tab className={'h-full'} title={t('enter_chassis_number')}>
            <Button onPress={next}>Next</Button>
            <form className="flex justify-between flex-col h-full w-full gap-8 lg:gap-0">
              <StepsProvider>
                <Steps>
                  <div>
                    <h1>Step 1</h1>
                  </div>
                  <div>
                    <h1>Step 2</h1>
                  </div>
                  <div>
                    <h1>Step 3</h1>
                  </div>
                </Steps>
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
