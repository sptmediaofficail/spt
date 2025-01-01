import { FormOrderParts } from '../types';
import { useEffect, useState } from 'react';
import { Steps, useSteps } from 'react-step-builder';
import { useTranslations } from 'next-intl';
import { useFormContext, useFormState } from 'react-hook-form';
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

  form.watch(['year', 'brand', 'model', 'parts']);

  const isCarInfoValid =
    dirtyFields.year &&
    !errors.year &&
    dirtyFields.brand &&
    !errors.brand &&
    dirtyFields.model &&
    !errors.model;
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
      component: <MapDate />,
      validation:
        !errors.address && dirtyFields.address && !errors.delivery_date,
    },
    {
      component: <OrderReview />,
      validation: true,
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
            onPress={next}
            type={'button'}
            text={t('next')}
            className={'w-auto'}
            endContent={<GrFormPrevious className={'w-4 h-4'} />}
          />
        ) : (
          <PrimaryButton
            isDisabled={!isThisStepValid}
            type={'submit'}
            text={t('confirm')}
            className={'w-auto'}
          />
        )}
      </div>
    </div>
  );
};
