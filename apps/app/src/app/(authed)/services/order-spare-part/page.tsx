'use client';

import { H1 } from '../../../../ui/typography';
import { PrimaryDivider } from '../../../../ui/divider';
import { Tab, Tabs } from '@nextui-org/tabs';
import { useTranslations } from 'next-intl';
import { FormProvider } from 'react-hook-form';
import {
  PartModal,
  UnsavedChangesModal,
} from '../../../../features/services/order-part/part-modal';
import { StepsProvider } from 'react-step-builder';
import { useOrderForm } from '../../../../features/services/order-part/use-order-form';
import { Divider } from '@nextui-org/divider';
import { StepsComponent } from '../../../../features/services/order-part/steps/order-steps';

const OrderSparePartPage = () => {
  const t = useTranslations();
  const {
    form,
    mutatePart,
    editingPart,
    onEditPart,
    partFormModal,
    unSavedChangesModal,
    closeUnSavedChangesModalAndReset,
    processOrder,
    onError,
  } = useOrderForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(processOrder, onError)}>
        <UnsavedChangesModal
          {...unSavedChangesModal}
          onConfirm={closeUnSavedChangesModalAndReset}
        />
        <PartModal
          {...partFormModal}
          onSubmit={mutatePart}
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
      </form>
    </FormProvider>
  );
};

export default OrderSparePartPage;
