import { useTranslations } from 'next-intl';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { Select, SelectItem } from '@heroui/select';
import { FormOrderParts } from './types';
import { InfiniteSelect } from '../../../ui/infinite-select';
import { Brand, useBrandsInfinity } from '../../brands/use-brands';
import { Model, useModelsInfinity } from '../../brands/use-models';
import React from 'react';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) =>
  (currentYear - i).toString()
);
const selectors = [
  { label: 'select_year', options: years, name: 'year' },
] as const;

export const CarInfo = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <BrandSelector />
      <ModelSelector />
      {selectors.map((selector) => (
        <FormSelect
          key={selector.label}
          label={t(selector.label)}
          name={selector.name}
          options={selector.options}
        />
      ))}
    </div>
  );
};

// Reusable Select Component
const FormSelect = ({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) => {
  const t = useTranslations();
  const form = useFormContext<FormOrderParts>();

  return (
    <Controller
      name={name}
      control={form.control}
      rules={{ required: t('field_required') }}
      render={({ field }) => (
        <Select
          {...field}
          label={label}
          labelPlacement="outside"
          isRequired
          classNames={{
            trigger: 'rounded-lg shadow-sm border border-gray-300',
            label: 'after:text-[#05b5b4] after:px-1',
          }}
          color="primary"
          variant="bordered"
          className="w-full rounded-none"
          placeholder={label}
          selectedKeys={[form.watch('year')]}
        >
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </Select>
      )}
    />
  );
};

export const BrandSelector = ({
  multiple = false,
  selectedKeys,
}: {
  multiple?: boolean;
  selectedKeys?: string[];
}) => {
  const t = useTranslations();
  const form = useFormContext<FormOrderParts>();
  const brandsInfinityHooks = useBrandsInfinity();
  const items = brandsInfinityHooks.items as Brand[];

  return (
    <Controller
      name="brand"
      control={form.control}
      rules={{ required: t('field_required') }}
      render={({ field }) => (
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
          {...field}
        >
          {items.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </InfiniteSelect>
      )}
    />
  );
};

const ModelSelector = () => {
  const t = useTranslations();
  const form = useFormContext<FormOrderParts>();
  const brandId = useWatch({ control: form.control, name: 'brand' });

  const modelsInfinityHooks = useModelsInfinity({ brandId })();
  const items = modelsInfinityHooks.items as Model[];
  const selectedModel = form.watch('model');
  return (
    <Controller
      name="model"
      control={form.control}
      rules={{ required: t('field_required') }}
      disabled={!brandId}
      render={({ field }) => (
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
          selectedKeys={selectedModel ? [selectedModel] : []}
          {...field}
        >
          {items.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </InfiniteSelect>
      )}
    />
  );
};
