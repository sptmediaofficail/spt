import { PartCard } from '../part-card';
import { Input } from '../../../../ui/input';
import { TbMapPinPin } from 'react-icons/tb';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from "@heroui/date-picker";
import { HiMiniCalendarDays } from 'react-icons/hi2';
import { Switch } from "@heroui/switch";
import { useTranslations } from 'next-intl';
import { FormOrderParts } from '../types';
import { AnimatedDev } from '../../../../ui/animated-dev';

export const OrderReview = () => {
  const form = useFormContext<FormOrderParts>();
  const t = useTranslations();

  // Watch the switches values
  const isDelivery = form.watch('is_delivery');
  const isAgent = form.watch('is_agent');
  const receiveOffers = form.watch('only_my_city');

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
          isRequired
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
              aria-label="Do you want delivery and shipping?"
              checked={!!isDelivery}
              onChange={(e) => form.setValue('is_delivery', e.target.checked)}
            />
          </div>
          <div className="flex justify-between w-full">
            <label>{t('order_by_provider')}</label>
            <Switch
              {...form.register('is_agent')}
              aria-label="Is it an agent order?"
              checked={!!isAgent}
              onChange={(e) => form.setValue('is_agent', e.target.checked)}
            />
          </div>
          <div className="flex justify-between w-full">
            <label>{t('only_my_city')}</label>
            <Switch
              {...form.register('only_my_city')}
              aria-label="Do you want to receive offers?"
              checked={!!receiveOffers}
              onChange={(e) => form.setValue('only_my_city', e.target.checked)}
            />
          </div>
        </div>

        {!!isAgent && (
          <AnimatedDev>
            <Input
              {...form.register('agent_code')}
              label={t('agent_code')}
              labelPlacement="outside"
              placeholder={t('enter_agent_code')}
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
