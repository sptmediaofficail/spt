import { useForm } from 'react-hook-form';
import { FormOrderParts, PartData } from './types';
import { useEffect, useState } from 'react';
import { useDisclosure } from '@nextui-org/modal';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { getLocalTimeZone, now, toCalendarDate } from '@internationalized/date';

export const useOrderForm = () => {
  const partFormModal = useDisclosure();
  const unSavedChangesModal = useDisclosure();
  const t = useTranslations();

  const validation = z.object({
    vin_serial: z.string().length(17, {
      message: t('chassis_validation'),
    }),
    parts: z.array(z.any()).nonempty(),
  });

  const form = useForm<FormOrderParts>({
    defaultValues: {
      parts: [],
      // CalendarDateTime
      calender_delivery_date: toCalendarDate(
        now(getLocalTimeZone()).add({ weeks: 1 })
      ),
    },
    mode: 'onChange',
    resolver: zodResolver(validation),
  });

  const calender_delivery_date = form.watch('calender_delivery_date');
  useEffect(() => {
    form.register('delivery_date');
    form.setValue(
      'delivery_date',
      calender_delivery_date.toDate(getLocalTimeZone()).toISOString()
    );
  }, [calender_delivery_date, form]);

  const [editingPart, setEditingPart] = useState<{
    part: PartData;
    index: number;
  } | null>(null);

  const onSubmit = (data: PartData) => {
    if (editingPart) {
      const updatedParts = [...form.getValues().parts];
      updatedParts[editingPart.index] = data;
      form.setValue('parts', updatedParts);
      setEditingPart(null);
    } else {
      form.setValue('parts', [...form.getValues().parts, data]);
    }
    partFormModal.onClose();
  };

  const onEditPart = (part: PartData, index: number) => {
    setEditingPart({ part, index });
    partFormModal.onOpen();
  };

  const closeUnSavedChangesModalAndReset = () => {
    unSavedChangesModal.onClose();
    setEditingPart(null);
    partFormModal.onClose();
  };

  return {
    form,
    onSubmit,
    onEditPart,
    editingPart,
    partFormModal,
    unSavedChangesModal,
    closeUnSavedChangesModalAndReset,
  };
};
