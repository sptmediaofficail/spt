import { GoogleMap } from '../../../providers/map';
import { Textarea } from '../../../../ui/input';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from '@nextui-org/date-picker';
import { FormOrderParts } from '../types';
import { useTranslations } from 'next-intl';

export const MapDate = () => {
  const form = useFormContext<FormOrderParts>();
  const t = useTranslations();

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

  form.watch(['address']);

  return (
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
          isRequired
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
            color="primary"
            labelPlacement={'outside'}
            {...field}
            onChange={field.onChange}
          />
        )}
      />
    </div>
  );
};
