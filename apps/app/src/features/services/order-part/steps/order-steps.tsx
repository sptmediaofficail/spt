import { FormOrderParts } from '../types';
import { ReactNode, useEffect, useState } from 'react';
import { Steps, useSteps } from 'react-step-builder';
import { useTranslations } from 'next-intl';
import { useFormContext, useWatch } from 'react-hook-form';
import { ChassisInfo } from '../chassis-info';
import { CarInfo } from '../car-info';
import { PartsList } from '../parts-list';
import { MapDate } from './map-date';
import { OrderReview } from './order-review';
import { DevTool } from '@hookform/devtools';
import { AnimatedDev } from '../../../../ui/animated-dev';
import { PrimaryButton } from '../../../../ui/primary-button';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export const StepsComponent = ({
  onOpen,
  onEditPart,
  startWithCarInfo = false,
  onSubmit,
  isPending,
}: {
  onOpen: () => void;
  onEditPart: (part: FormOrderParts['parts'][number], index: number) => void;
  startWithCarInfo?: boolean;
  onSubmit: () => void;
  isPending?: boolean;
}) => {
  const [isThisStepValid, setIsThisStepValid] = useState(false);
  const { next, prev, hasNext, hasPrev, current, total } = useSteps();
  const t = useTranslations();
  const form = useFormContext<FormOrderParts>();

  let steps: {
    component: ReactNode;
    fields: (keyof FormOrderParts)[];
  }[] = [
    {
      component: <ChassisInfo />,
      fields: ['vin_serial'],
    },
    {
      component: (
        <div className="flex flex-col gap-8 h-full">
          <CarInfo />
          <PartsList onAddPart={onOpen} onEditPart={onEditPart} />
        </div>
      ),
      fields: ['year', 'brand', 'model', 'parts'],
    },
    {
      component: <MapDate />,
      fields: ['delivery_date', 'address', 'longitude', 'latitude'],
    },
    {
      component: <OrderReview />,
      fields: ['is_agent', 'only_my_city', 'agent_code', 'is_delivery'],
    },
  ];

  useEffect(() => {
    if (current > total) return;
    form.trigger(steps[current - 1].fields).then((isValid) => {
      setIsThisStepValid(isValid);
    });
  }, [current, useWatch({ control: form.control })]);

  const goNext = () => {
    form.trigger(steps[current - 1].fields).then((isValid) => {
      if (isValid) next();
      else console.log('form is not valid', form.formState.errors);
    });
  };

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
      <div className="flex justify-between gap-4 mt-auto">
        <PrimaryButton
          isDisabled={!hasPrev}
          onPress={prev}
          type={'button'}
          variant={'bordered'}
          className="w-fit"
          text={t('prev')}
          startContent={<GrFormNext className={'w-4 h-4'} />}
        />
        {hasNext ? (
          <PrimaryButton
            isDisabled={!isThisStepValid}
            onPress={goNext}
            type={'button'}
            text={t('next')}
            className={'w-auto'}
            endContent={<GrFormPrevious className={'w-4 h-4'} />}
          />
        ) : (
          <PrimaryButton
            isDisabled={!isThisStepValid}
            isLoading={isPending}
            onPress={onSubmit}
            text={t('confirm')}
            className={'w-auto'}
          />
        )}
      </div>
    </div>
  );
};
