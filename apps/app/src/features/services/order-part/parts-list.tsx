import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';
import { OrderPartData } from './types';
import { PrimaryButton } from '../../../ui/primary-button';
import Image from 'next/image';
import { PartCard } from './part-card';
import AddParts from './assets/add-parts.svg';
import PlusIcon from './assets/white-plus-icon.svg';
import PrimaryPlusIcon from './assets/plus-icon.svg';

export const PartsList = ({ onOpen }: { onOpen: () => void }) => {
  const t = useTranslations();
  const form = useFormContext<OrderPartData>();
  const parts = form.watch('parts');

  const onDelete = (index: number) => {
    form.setValue(
      'parts',
      parts.filter((_, i) => i !== index)
    );
  };

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
