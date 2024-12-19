'use client';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  UseDisclosureProps,
} from '@nextui-org/modal';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';
import { PrimaryDivider } from '../../../ui/divider';
import { Button } from '@nextui-org/button';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox';
import { Textarea } from '@nextui-org/input';
import { PrimaryButton } from '../../../ui/primary-button';
import { PartData } from './types';
import { Input } from '../../../ui/input';
import { useEffect } from 'react';
import Image from 'next/image';
import DeleteIcon from './assets/delete-part.svg';
import UnsavedChangesIcon from './assets/unsaved-icon.svg';

export const PartModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  onCloseWithChanges,
}: UseDisclosureProps & {
  onSubmit: (data: PartData) => void;
  initialData?: PartData;
  onCloseWithChanges?: () => void;
}) => {
  const t = useTranslations();
  const { handleSubmit, control, register, reset, setFocus, formState, watch } =
    useForm<PartData>({
      defaultValues: {
        partName: '',
        quantity: 1,
        status: ['new'],
        notes: '',
      },
      mode: 'onChange',
    });
  const isEdit = !!initialData;

  useEffect(() => {
    if (isOpen) {
      setFocus('partName');
      reset(
        initialData || {
          partName: '',
          quantity: 1,
          status: ['new'],
          notes: '',
        }
      );
    }
  }, [isOpen, reset, initialData, setFocus, isEdit]);

  console.log('formState.isDirty', formState.isDirty);

  return (
    <Modal
      isOpen={isOpen}
      onClose={formState.isDirty ? onCloseWithChanges : onClose}
      placement="center"
      size="xl"
      hideCloseButton
      classNames={{ base: 'mx-4' }}
    >
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            <h2 className="text-lg font-semibold text-center">
              {isEdit ? t('edit_part') : t('add_part')}
            </h2>
          </ModalHeader>
          <div className="mx-4 mb-2">
            <PrimaryDivider />
          </div>
          <ModalBody className="flex flex-col gap-4">
            <Input
              isRequired
              label={t('part_name')}
              labelPlacement="outside"
              placeholder={t('enter_part_name')}
              variant="bordered"
              errorMessage={t('field_required')}
              {...register('partName')}
            />

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
                    label: 'after:text-[#05b5b4] after:px-1 text-sm text-black',
                  }}
                >
                  <Checkbox value="new">{t('new')}</Checkbox>
                  <Checkbox classNames={{ base: 'mx-auto' }} value="used">
                    {t('used')}
                  </Checkbox>
                </CheckboxGroup>
              )}
            />
            <Textarea
              label={t('notes')}
              labelPlacement="outside"
              placeholder={t('enter_notes')}
              variant="bordered"
              {...register('notes')}
            />
          </ModalBody>
          <ModalFooter>
            <div className="flex w-full gap-4 justify-end">
              <Button
                onPress={formState.isDirty ? onCloseWithChanges : onClose}
                variant="bordered"
                className="rounded-lg px-8"
              >
                {t('cancel')}
              </Button>
              <PrimaryButton
                text={isEdit ? t('save') : t('add')}
                type="submit"
                className="w-fit px-8"
              />
            </div>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export const DeleteModal = ({
  isOpen,
  onClose,
  onDelete,
}: UseDisclosureProps & { onDelete: () => void }) => {
  const t = useTranslations();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      placement="center"
      size="sm"
      hideCloseButton
      classNames={{ base: 'mx-4' }}
    >
      <ModalContent>
        <ModalHeader>
          <Image src={DeleteIcon} alt="Delete Icon" className="mx-auto" />
        </ModalHeader>
        <ModalBody className="gap-2">
          <h2 className="text-lg font-semibold text-center">
            {t('delete_part')}
          </h2>
          <p className="text-center text-gray-500 text-sm font-semibold">
            {t('delete_part_message')}
          </p>
        </ModalBody>
        <ModalFooter>
          <div className="flex w-full gap-4 items-stretch h-12">
            <Button
              onPress={onClose}
              variant="bordered"
              className="rounded-xl w-full h-full"
            >
              {t('cancel')}
            </Button>
            <PrimaryButton
              text={t('delete')}
              onPress={onDelete}
              className="rounded-xl w-full h-full"
            />
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const UnsavedChangesModal = ({
  isOpen,
  onClose,
  onConfirm,
}: UseDisclosureProps & { onConfirm: () => void }) => {
  const t = useTranslations();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      placement="center"
      size="sm"
      hideCloseButton
      classNames={{ base: 'mx-4' }}
    >
      <ModalContent>
        <ModalHeader>
          <Image
            src={UnsavedChangesIcon}
            alt="Unsaved Changes Icon"
            className="mx-auto"
          />
        </ModalHeader>
        <ModalBody className="gap-2">
          <h2 className="text-lg font-semibold text-center">
            {t('unsaved_changes')}
          </h2>
          <p className="text-center text-gray-500 text-sm font-semibold">
            {t('unsaved_changes_message')}
          </p>
        </ModalBody>
        <ModalFooter>
          <div className="flex w-full gap-4 items-stretch h-12">
            <Button
              onPress={onClose}
              variant="bordered"
              className="rounded-xl w-full h-full"
            >
              {t('cancel')}
            </Button>
            <PrimaryButton
              text={t('confirm')}
              onPress={onConfirm}
              className="rounded-xl w-full h-full"
              autoFocus
            />
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
