'use client';

import { H1 } from '../../../../ui/typography';
import { PrimaryDivider } from '../../../../ui/divider';
import { Tab, Tabs } from '@nextui-org/tabs';
import { useTranslations } from 'next-intl';
import { Select, SelectItem } from '@nextui-org/select';
import { useDisclosure } from '@nextui-org/modal';
import { Control, Controller, useForm } from 'react-hook-form';
import { AddPartModal } from '../../../../features/services/add-part-modal';
import { OrderPartData, PartData } from '../../../../features/services/types';
import { PartCard } from '../../../../features/services/part-card';
import { PrimaryButton } from '../../../../ui/primary-button';
import Image from 'next/image';
import AddParts from '../../../../features/services/assets/add-parts.svg';
import PlusIcon from '../../../../features/services/assets/white-plus-icon.svg';
import PrimaryPlusIcon from '../../../../features/services/assets/plus-icon.svg';

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

const OrderSparePartPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations();

  const { handleSubmit, control, reset, getValues, setValue } =
    useForm<OrderPartData>({
      defaultValues: {
        parts: [],
      },
    });

  const onAddPart = (data: PartData) => {
    setValue('parts', [...getValues().parts, data]);
    onClose();
  };

  return (
    <>
      <AddPartModal isOpen={isOpen} onClose={onClose} onSubmit={onAddPart} />
      <div className="w-full p-4 flex flex-col gap-4 h-full">
        <H1>{'order_spare_part'}</H1>
        <PrimaryDivider />
        <Tabs
          fullWidth
          variant="underlined"
          color="primary"
          className="w-full "
        >
          <Tab className={'h-full'} title={t('enter_chassis_number')}>
            <form className="flex justify-between flex-col h-full w-full gap-8 lg:gap-0">
              <CarDataSelectors control={control} selectors={selectors} />
              <PartsList
                parts={getValues().parts}
                onOpen={onOpen}
                onDelete={(index) =>
                  setValue(
                    'parts',
                    getValues().parts.filter((_, i) => i !== index)
                  )
                }
              />
            </form>
          </Tab>
          <Tab className={'h-full'} title={t('enter_car_details')}>
            <form className="flex justify-between flex-col h-full w-full gap-8 lg:gap-0">
              <CarDataSelectors control={control} selectors={selectors} />
              <PartsList
                parts={getValues().parts}
                onOpen={onOpen}
                onDelete={(index) =>
                  setValue(
                    'parts',
                    getValues().parts.filter((_, i) => i !== index)
                  )
                }
              />
            </form>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default OrderSparePartPage;

const CarDataSelectors = ({
  control,
  selectors,
}: {
  control: Control;
  selectors: { label: string; options: string[]; name: string }[];
}) => {
  const t = useTranslations();
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {selectors.map((selector) => (
        <Controller
          key={selector.label}
          name={selector.label}
          control={control}
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

const PartsList = ({
  parts,
  onOpen,
  onDelete,
}: {
  parts: PartData[];
  onOpen: () => void;
  onDelete: (index: number) => void;
}) => {
  const t = useTranslations();
  return parts.length > 0 ? (
    <>
      <div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-md font-semibold">{t('add_part')}</h2>
          <p className="text-accent text-sm font-semibold">
            {t('add_more_parts')}
          </p>
        </div>
        <PrimaryButton
          variant={'bordered'}
          onPress={onOpen}
          className="w-fit"
          text={t('add_part')}
          startContent={
            <Image src={PrimaryPlusIcon} alt="Add Parts" className={'w-3'} />
          }
        />
      </div>
      {parts.map((part, index) => (
        <PartCard
          key={index}
          index={index}
          {...part}
          onDelete={onDelete}
          onEdit={(index) => {
            console.log('Edit', index);
          }}
        />
      ))}
    </>
  ) : (
    <div className="flex-1 flex flex-col gap-4 items-center justify-center">
      <Image src={AddParts} alt="Add Parts" />
      <h2 className="text-center text-gray-500 text-lg font-semibold">
        {t('no_parts_added')}
      </h2>
      <PrimaryButton
        onPress={onOpen}
        className="w-fit mx-auto px-8"
        text={t('add_part')}
        startContent={
          <Image src={PlusIcon} alt="Add Parts" className={'w-3'} />
        }
      />
    </div>
  );
};
