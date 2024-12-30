import { PartCard } from '../part-card';
import { Input } from '../../../../ui/input';
import { TbMapPinPin } from 'react-icons/tb';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from '@nextui-org/date-picker';
import { HiMiniCalendarDays } from 'react-icons/hi2';
import { Switch } from '@nextui-org/switch';
import { useTranslations } from 'next-intl';
import { FormOrderParts } from '../types';
import { AnimatedDev } from '../../../../ui/animated-dev';

export const OrderReview = () => {
  const form = useFormContext<FormOrderParts>();
  const t = useTranslations();

  form.watch(['is_agent']);

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {form.getValues().parts.map((part, index) => (
          <PartCard key={index} index={index} {...part} />
        ))}
      </div>
      <div className="flex lg:flex-row flex-col gap-4 items-stretch">
        <Input
          {...form.register('address')}
          readOnly
          label={t('address_details')}
          labelPlacement="outside"
          variant="bordered"
          isClearable={false}
          className={'place-self-end'}
          startContent={<TbMapPinPin className={'stroke-accent'} />}
        />
        <Controller
          control={form.control}
          name="calender_delivery_date"
          render={({ field }) => (
            <DatePicker
              hideTimeZone
              dir={'rtl'}
              isReadOnly
              color="primary"
              showMonthAndYearPickers
              shouldForceLeadingZeros
              radius={'sm'}
              label={t('pickup_date_time')}
              variant="bordered"
              classNames={{
                selectorIcon: 'text-accent',
              }}
              selectorIcon={<HiMiniCalendarDays />}
              selectorButtonPlacement={'start'}
              labelPlacement={'outside'}
              {...field}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between w-full">
            <label>{t('order_with_delivery_and_shipping')}</label>
            <Switch
              {...form.register('is_delivery')}
              defaultSelected
              aria-label="Do you want delivery?"
            />
          </div>
          <div className="flex justify-between w-full">
            <label>{t('order_by_provider')}</label>
            <Switch
              {...form.register('is_agent')}
              aria-label="Is it an agent order?"
            />
          </div>
          <div className="flex justify-between w-full">
            <label>{t('receive_offers')}</label>
            <Switch
              {...form.register('receive_offers')}
              aria-label="Do you want to receive offers?"
            />
          </div>
        </div>

        {form.getValues().is_agent && (
          <AnimatedDev>
            <Input
              {...form.register('agent_code')}
              label={t('agent_code')}
              labelPlacement="outside"
              placeholder={t('enter_agent_code')}
              disabled={!form.getValues().is_agent}
              isRequired
              variant="bordered"
              isClearable={false}
              className={'w-full'}
            />
          </AnimatedDev>
        )}
      </div>
    </div>
  );
};
