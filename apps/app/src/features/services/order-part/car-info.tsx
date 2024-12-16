import { useTranslations } from 'next-intl';
import { Controller, useFormContext } from 'react-hook-form';
import { Select, SelectItem } from '@nextui-org/select';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) =>
  (currentYear - i).toString()
);
const selectors = [
  { label: 'select_year', options: years, name: 'year' },
  {
    label: 'select_brand',
    options: ['Toyota', 'Nissan', 'Honda', 'Mitsubishi'],
    name: 'brand',
  },
  {
    label: 'select_model',
    options: ['Corolla', 'Camry', 'Yaris', 'Prius'],
    name: 'model',
  },
];
export const CarInfo = () => {
  const t = useTranslations();
  const form = useFormContext();
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {selectors.map((selector) => (
        <Controller
          key={selector.label}
          name={selector.label}
          control={form.control}
          render={({ field }) => (
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
