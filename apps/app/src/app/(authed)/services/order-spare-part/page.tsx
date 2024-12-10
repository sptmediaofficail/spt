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
import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox';
import { Textarea } from '@nextui-org/input';

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
  status: string[];
  notes?: string;
};

export default function OrderSparePartPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations();

  const { handleSubmit, control, register } = useForm<FormData>({
    defaultValues: {
      partName: '',
      quantity: 1,
      status: ['new'],
      notes: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
        size="xl"
        hideCloseButton
        classNames={{
          base: 'mx-4',
        }}
      >
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>
              <h2 className="text-lg font-semibold text-center">
                {t('add_part')}
              </h2>
            </ModalHeader>
            <div className="mx-4 mb-2">
              <PrimaryDivider />
            </div>
            <ModalBody className="flex flex-col gap-4">
              <Input
                isRequired
                label={t('part_name')}
                labelPlacement={'outside'}
                placeholder={t('enter_part_name')}
                variant={'bordered'}
                errorMessage={t('field_required')}
                {...register('partName')}
              />

              {/* Part Count */}
              <Controller
                name="quantity"
                control={control}
                rules={{
                  required: t('field_required'),
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
                        onPress={() => onChange(Math.min(value + 1, 99))}
                        disabled={value <= 0}
                        className="rounded-full"
                      >
                        <BiPlus />
                      </Button>
                      <span className="flex-1 w-2">{value}</span>
                      <Button
                        isIconOnly
                        size="sm"
                        onPress={() => onChange(Math.max(value - 1, 1))}
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
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <CheckboxGroup
                      {...field}
                      isRequired
                      label={t('part_condition')}
                      errorMessage={t('field_required')}
                      classNames={{
                        wrapper: 'flex flex-row gap-4 justify-between lg:w-1/2',
                        label:
                          'after:text-[#05b5b4] after:px-1 text-sm text-black',
                      }}
                    >
                      <Checkbox value="new">{t('new')}</Checkbox>
                      <Checkbox
                        classNames={{
                          base: 'mx-auto',
                        }}
                        value="used"
                      >
                        {t('used')}
                      </Checkbox>
                    </CheckboxGroup>
                  )}
                />
              </div>

              <Textarea
                label={t('notes')}
                labelPlacement={'outside'}
                placeholder={t('enter_notes')}
                variant={'bordered'}
                {...register('notes')}
              />
            </ModalBody>
            <ModalFooter>
              <div className="flex w-full gap-4 justify-end">
                <Button
                  onPress={onClose}
                  variant={'bordered'}
                  className={'rounded-lg px-8'}
                >
                  {t('cancel')}
                </Button>
                <PrimaryButton
                  text={t('add')}
                  type="submit"
                  className={'w-fit px-8'}
                />
              </div>
            </ModalFooter>
          </form>
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
            onPress={onOpen}
            className={'w-fit mx-auto px-8'}
            text={t('add_part')}
          />
        </div>
      </div>
    </>
  );
}
