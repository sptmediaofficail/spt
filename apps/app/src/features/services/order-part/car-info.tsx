import { useTranslations } from 'next-intl';
import { Controller, useFormContext } from 'react-hook-form';
import { Select, SelectItem } from '@nextui-org/select';
import { FormOrderParts } from './types';
import { InfiniteSelect } from '../../../ui/infinite-select';
import { Brand, useBrandsInfinity } from '../../brands/use-brands';
import React from 'react';
import { Model, useModelsInfinity } from '../../brands/use-models';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) =>
  (currentYear - i).toString()
);
const selectors = [
  { label: 'select_year', options: years, name: 'year' },
] as const;

export const CarInfo = () => {
  const t = useTranslations();
  const form = useFormContext<FormOrderParts>();

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <BrandSelector />
      <ModelSelector />
      {selectors.map((selector) => (
        <Controller
          key={selector.label}
          name={selector.name}
          control={form.control}
          rules={{
            required: t('field_required'),
          }}
          render={({ field, fieldState }) => (
            <Select
              {...field}
              label={t(selector.label)}
              labelPlacement="outside"
              isRequired
              classNames={{
                trigger: 'rounded-lg shadow-sm border border-gray-300',
                label: 'after:text-[#05b5b4] after:px-1',
              }}
              color="primary"
              variant="bordered"
              className="w-full rounded-none"
              placeholder={t(selector.label)}
              {...form.register(selector.name)}
            >
              {selector.options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      ))}
    </div>
  );
};

const BrandSelector = () => {
  const t = useTranslations();
  const form = useFormContext<FormOrderParts>();
  const brandsInfinityHooks = useBrandsInfinity();
  const items = brandsInfinityHooks.items as Brand[];

  return (
    <InfiniteSelect
      items={items}
      {...brandsInfinityHooks}
      label={t('select_brand')}
      labelPlacement="outside"
      isRequired
      classNames={{
        trigger: 'rounded-lg shadow-sm border border-gray-300',
        label: 'after:text-[#05b5b4] after:px-1',
      }}
      color="primary"
      variant="bordered"
      className="w-full rounded-none"
      placeholder={t('select_brand')}
      {...form.register('brand')}
      selectedKeys={[form.getValues().brand]}
    >
      {items.map((item) => (
        <SelectItem key={item.id} value={item.id}>
          {item.name}
        </SelectItem>
      ))}
    </InfiniteSelect>
  );
};

const ModelSelector = () => {
  const t = useTranslations();
  const form = useFormContext<FormOrderParts>();
  const brandId = form.watch('brand') ?? undefined;

  // UseEffect to trigger a re-fetch when the brand changes
  const modelsInfinityHooks = useModelsInfinity({
    brandId, // Make sure the hook depends on the brandId
  })();
  const items = modelsInfinityHooks.items as Model[];

  return (
    <InfiniteSelect
      isDisabled={!brandId}
      items={items}
      {...modelsInfinityHooks}
      label={t('select_model')}
      labelPlacement="outside"
      isRequired
      classNames={{
        trigger: 'rounded-lg shadow-sm border border-gray-300',
        label: 'after:text-[#05b5b4] after:px-1',
      }}
      color="primary"
      variant="bordered"
      className="w-full rounded-none"
      placeholder={t('select_model')}
      {...form.register('model')}
      selectedKeys={[form.getValues().model]}
    >
      {items.map((item) => (
        <SelectItem key={item.id} value={item.id}>
          {item.name}
        </SelectItem>
      ))}
    </InfiniteSelect>
  );
};
