'use client';
import { H1 } from '../../../../ui/typography';
import { PrimaryDivider } from '../../../../ui/divider';
import { Tab, Tabs } from '@nextui-org/tabs';
import { useTranslations } from 'next-intl';
import { Select, SelectItem } from '@nextui-org/select';
import Image from 'next/image';
import AddParts from '../../../../features/services/assets/add-parts.svg';
import { PrimaryButton } from '../../../../ui/primary-button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/modal';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../../../../ui/input';
import { Button } from '@nextui-org/button';
import { BiMinus, BiPlus } from 'react-icons/bi';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

const selectors = [
  {
    label: 'select_year',
    options: years,
  },
  {
    label: 'select_brand',
    options: ['Toyota', 'Nissan', 'Honda', 'Mitsubishi'],
  },
  {
    label: 'select_model',
    options: ['Corolla', 'Camry', 'Yaris', 'Prius'],
  },
];

type FormData = {
  partName: string;
  quantity: number;
  status: {
    new: boolean;
    used: boolean;
  };
  notes?: string;
};

export default function OrderSparePartPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const t = useTranslations();
  const addPart = () => {
    onOpen();
  };

  const { handleSubmit, control, register } = useForm<FormData>({
    defaultValues: {
      partName: '',
      quantity: 1,
      status: {
        new: false,
        used: false,
      },
      notes: '',
    },
  });

  const onSubmit = (data) => {
    // Call your API here.
  };

  return (
    <>
      <Modal
        isOpen={true}
        onClose={onOpenChange}
        placement="top-center"
        size="xl"
      >
        <ModalContent>
          <ModalHeader>
            <h2 className="text-lg font-semibold text-center">
              {t('add_part')}
            </h2>
          </ModalHeader>
          <div className="mx-4 mb-2">
            <PrimaryDivider />
          </div>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Part Name Field */}
              <Controller
                name="partName"
                control={control}
                rules={{ required: t('required') }}
                render={({ field }) => (
                  <Input
                    {...field}
                    isRequired
                    label={t('part_name')}
                    labelPlacement={'outside'}
                    placeholder={t('enter_part_name')}
                  />
                )}
              />

              {/* Part Count */}
              <Controller
                name="quantity"
                control={control}
                rules={{
                  required: t('required'),
                  validate: (value) => value >= 0 || t('must_be_positive'),
                }}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <div className="flex flex-col gap-2">
                    <label className="block text-sm font-medium">
                      {t('parts_quantity')}
                    </label>
                    <div className="w-1/5 flex items-center gap-4">
                      <Button
                        isIconOnly
                        size="sm"
                        onClick={() => onChange(Math.min(value + 1, 99))}
                        disabled={value <= 0}
                        className="rounded-full"
                      >
                        <BiPlus />
                      </Button>
                      <span className="flex-1 w-2">{value}</span>
                      <Button
                        isIconOnly
                        size="sm"
                        onClick={() => onChange(Math.max(value - 1, 1))}
                        className="rounded-full"
                      >
                        <BiMinus />
                      </Button>
                    </div>
                    {error && (
                      <span className="text-red-500 text-sm">
                        {error.message}
                      </span>
                    )}
                  </div>
                )}
              />

              {/* Part Condition */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t('part_condition')}
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="new"
                      {...register('status')}
                      value="new"
                    />
                    <label htmlFor="new">{t('new')}</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="used"
                      {...register('status')}
                      value="used"
                    />
                    <label htmlFor="used">{t('used')}</label>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t('notes')}
                </label>
                <textarea
                  {...register('notes')}
                  placeholder={t('enter_notes')}
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows={3}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <div className="flex justify-between w-full">
              <button
                type="button"
                onClick={onOpenChange}
                className="btn btn-outline px-8"
              >
                {t('cancel')}
              </button>
              <button type="submit" className="btn btn-primary px-8">
                {t('add')}
              </button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div className={'w-full p-4 flex flex-col gap-4 h-full'}>
        <H1>{'order_spare_part'}</H1>

        <PrimaryDivider />

        <Tabs
          fullWidth
          variant={'underlined'}
          color={'primary'}
          className={'w-full'}
        >
          <Tab title={t('enter_chassis_number')}>
            <div className={'flex flex-col lg:flex-row gap-4'}>
              {selectors.map((selector) => (
                <Select
                  label={t(selector.label)}
                  labelPlacement={'outside'}
                  isRequired
                  key={selector.label}
                  classNames={{
                    trigger: 'rounded-lg shadow-sm border border-gray-300',
                    label: 'after:text-[#05b5b4] after:px-1',
                  }}
                  color={'primary'}
                  required
                  variant={'bordered'}
                  className={'w-full rounded-none'}
                  placeholder={t(selector.label)}
                >
                  {selector.options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </Select>
              ))}
            </div>
          </Tab>
          <Tab title={t('enter_car_details')}>Tab 2</Tab>
        </Tabs>

        <div
          className={'flex-1 flex flex-col gap-4 items-center justify-center'}
        >
          <Image src={AddParts} alt="Add Parts" />
          <h2 className={'text-center text-gray-500 text-lg font-semibold'}>
            {t('no_parts_added')}
          </h2>

          <PrimaryButton
            onClick={addPart}
            className={'w-fit mx-auto px-8'}
            text={t('add_part')}
          />
        </div>
      </div>
    </>
  );
}
