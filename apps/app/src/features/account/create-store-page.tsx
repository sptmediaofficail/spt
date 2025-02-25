'use client';
import { H1 } from '../../ui/typography';
import { PrimaryDivider } from '../../ui/divider';
import { useTranslations } from 'next-intl';
import { Input, Textarea } from '../../ui/input';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useProviderProviderProfileServicePostProviderProfile } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import PhoneInput from 'react-phone-input-2';
import { GoogleMap } from '../providers/map';
import { Select, SelectItem } from '@heroui/select';
import React, { useEffect, useRef } from 'react';
import { ProviderFAQ } from '../providers/show-provider-page';
import { Checkbox } from '@heroui/checkbox';
import { PrimaryButton } from '../../ui/primary-button';
import { BrandSelector } from '../services/order-part/car-info';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export const CreateStorePage = () => {
  const t = useTranslations();
  const { mutateAsync } = useProviderProviderProfileServicePostProviderProfile(
    {}
  );
  const form = useForm();
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

  const services = ['spare_parts', 'towing', 'maintenance'];

  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      await mutateAsync(
        {
          contentLanguage: 'ar',
          formData: {
            name: data.store_name,
            owner_name: data.store_manager_name,
            ...data,
            terms_and_conditions_accepted: data.terms_and_conditions_accepted
              ? 1
              : 0,
            is_delivery_available: data.is_delivery_available ? 1 : 0,
            is_video_call_available: data.is_video_call_available ? 1 : 0,
            is_voice_call_available: data.is_voice_call_available ? 1 : 0,
            only_my_city: data.only_my_city ? 1 : 0,

            'spare_part_brands[]': data.brand.split(','),
            mobile: `+${data.mobile}`,
            phone: `+${data.phone}`,
          },
        },
        {
          onSuccess: () => {
            toast.success(t('store_created'));
            form.reset();
            router.push('/');
          },
        }
      );
    } catch (error) {
      toast.error(error.body.message);
    }
  };

  const phoneInputs = ['phone', 'mobile'];

  useEffect(() => {
    // get ref of mobile input and change default value to +01
  }, []);

  const phoneRef = useRef();

  return (
    <FormProvider {...form}>
      <form
        className="w-full p-4 flex flex-col gap-4 h-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <H1>{t('create_store')}</H1>
        <PrimaryDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            isRequired
            label={t('store_name')}
            labelPlacement="outside"
            placeholder={t('enter', { field: t('store_name') })}
            variant="bordered"
            errorMessage={t('field_required')}
            {...form.register('store_name', { required: true })}
          />
          <Input
            isRequired
            label={t('store_manager_name')}
            labelPlacement="outside"
            placeholder={t('enter', { field: t('store_manager_name') })}
            variant="bordered"
            errorMessage={t('field_required')}
            {...form.register('store_manager_name', { required: true })}
          />

          <Input
            isRequired
            label={t('bank_name')}
            labelPlacement="outside"
            placeholder={t('enter', { field: t('bank_name') })}
            variant="bordered"
            errorMessage={t('field_required')}
            {...form.register('bank_name', { required: true })}
          />
          <Input
            isRequired
            label={t('bank_username')}
            labelPlacement="outside"
            placeholder={t('enter', { field: t('bank_username') })}
            variant="bordered"
            errorMessage={t('field_required')}
            {...form.register('bank_username', { required: true })}
          />
          <Input
            isRequired
            label={t('bank_account')}
            labelPlacement="outside"
            placeholder={t('enter', { field: t('bank_account') })}
            variant="bordered"
            errorMessage={t('field_required')}
            {...form.register('bank_account', { required: true })}
          />
          <Input
            isRequired
            label={t('iban')}
            labelPlacement="outside"
            placeholder={t('enter', { field: t('iban') })}
            variant="bordered"
            errorMessage={t('field_required')}
            {...form.register('iban', { required: true })}
          />
          {phoneInputs.map((input) => (
            <div key={input} className="flex flex-col gap-3">
              <label className="text-sm text-primary">{t(input)}</label>
              <Controller
                control={form.control}
                name={input}
                defaultValue={input === 'mobile' ? '+966' : '+01'}
                render={({ field }) => (
                  <div dir={'ltr'}>
                    <PhoneInput
                      isValid={(value, country) => {
                        const isDirty = form.getFieldState(input).isDirty;
                        if (!isDirty) return true;

                        const saRegex = /^(966|01)([503649187])([0-9]{8})$/;
                        return 'sa' && saRegex.test(value);
                      }}
                      disableDropdown={true}
                      disableCountryGuess={true}
                      country={'sa'}
                      countryCodeEditable={true}
                      inputStyle={{
                        width: '100%',
                        height: '100%',
                        padding: '0.5rem',
                        paddingLeft: '2.3rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #eaeaea',
                      }}
                      buttonStyle={{
                        backgroundColor: 'transparent',
                        border: '1px solid #eaeaea',
                        borderRightStyle: 'none',
                        borderStyle: 'none',
                        paddingInline: '0.5rem',
                      }}
                      {...field}
                    />
                  </div>
                )}
              />
            </div>
          ))}
        </div>

        <Textarea
          isRequired
          label={t('address_details')}
          labelPlacement="outside"
          placeholder={t('enter', { field: t('address_details') })}
          variant="bordered"
          errorMessage={t('field_required')}
          className="col-span-2"
          {...form.register('address', { required: true })}
        />
        <div className="flex flex-col gap-2 flex-1">
          <label className="text-sm text-primary" htmlFor="address">
            {t('address')}
          </label>
          <div className="w-full h-full min-h-48 flex-1 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden shadow-sm animate-appearance-in">
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

        <Textarea
          label={t('branches')}
          labelPlacement="outside"
          placeholder={t('enter', { field: t('branches') })}
          variant="bordered"
          className="col-span-2"
          {...form.register('branches')}
        />

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <Controller
            name="services"
            control={form.control}
            rules={{ required: t('field_required') }}
            render={({ field }) => (
              <Select
                label={t('select_service')}
                labelPlacement="outside"
                isRequired
                classNames={{
                  trigger: 'rounded-lg shadow-sm border border-gray-300',
                  label: 'after:text-[#05b5b4] after:px-1',
                }}
                color="primary"
                variant="bordered"
                className="w-full rounded-none"
                placeholder={t('select_service')}
                {...field}
              >
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {t(service)}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
          <BrandSelector selectedKeys={form.watch('brand')} />

          {form.watch('services') === 'spare_parts' && (
            <Controller
              name="part_condition"
              control={form.control}
              rules={{ required: t('field_required') }}
              render={({ field }) => (
                <Select
                  label={t('part_condition')}
                  labelPlacement="outside"
                  isRequired
                  classNames={{
                    trigger: 'rounded-lg shadow-sm border border-gray-300',
                    label: 'after:text-[#05b5b4] after:px-1',
                  }}
                  color="primary"
                  variant="bordered"
                  className="w-full rounded-none col-span-2"
                  placeholder={t('part_condition')}
                  {...field}
                >
                  <SelectItem key={'new'} value={'new'}>
                    {t('new')}
                  </SelectItem>
                  <SelectItem key={'used'} value={'used'}>
                    {t('used')}
                  </SelectItem>
                  <SelectItem key={'both'} value={'both'}>
                    {t('both_new_and_used')}
                  </SelectItem>
                </Select>
              )}
            />
          )}
        </div>
        <div className={'mt-2'}>
          <ProviderFAQ form={form} />
        </div>

        {/* accept terms and conditions */}
        <div className="flex justify-between gap-2 w-full mt-4">
          <div className="flex flex-col lg:flex-row gap-4 w-full mt-4">
            <Checkbox
              {...form.register('only_my_city', {
                value: '1',
                valueAsNumber: true,
              })}
              defaultChecked
              color="primary"
            >
              {t('only_my_city')}
            </Checkbox>
            <Checkbox
              {...form.register('terms_and_conditions_accepted', {
                value: '1',
                valueAsNumber: true,
              })}
              defaultChecked
              color="primary"
            >
              {t('accept_terms')}
            </Checkbox>
          </div>

          <PrimaryButton
            text={t('create_store')}
            isLoading={form.formState.isSubmitting}
            className="w-auto hidden lg:block"
            type="submit"
          />
        </div>
        <PrimaryButton
          text={t('create_store')}
          isLoading={form.formState.isSubmitting}
          className="w-auto lg:hidden"
          type="submit"
        />
      </form>
    </FormProvider>
  );
};
