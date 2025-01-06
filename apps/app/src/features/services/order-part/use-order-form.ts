import { SubmitHandler, useForm } from 'react-hook-form';
import { FormOrderParts, PartData } from './types';
import { useEffect, useState } from 'react';
import { useDisclosure } from '@nextui-org/modal';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { getLocalTimeZone, now, toCalendarDate } from '@internationalized/date';
import { useOrderSparePartServicePostClientOrderSparePart } from '../../../../../../libs/api-sdk/src/lib/gen2/queries';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export const useOrderForm = () => {
  const partFormModal = useDisclosure();
  const unSavedChangesModal = useDisclosure();
  const t = useTranslations();
  const router = useRouter();
  const validation = z.object({
    vin_serial: z
      .string()
      // .length(17, {
      //   message: t('vin_serial_validation'),
      // })
      .optional(),
    parts: z.array(z.any()).nonempty(),
    address: z.string().min(5, {
      message: t('address_validation'),
    }),
    brand: z.string().min(1, {
      message: t('brand_validation'),
    }),
    model: z.string().min(1, {
      message: t('model_validation'),
    }),
    year: z.string().min(4, {
      message: t('year_validation'),
    }),
    delivery_date: z.string(),
    agent_code: z.string().optional(),
  });
  // .refine(
  //   (data) => {
  //     // If brand, model, and year are provided, vin_serial is not required
  //     if (data.brand && data.model && data.year && !data.vin_serial) {
  //       return true;
  //     }
  //     // If any one of brand, model, or year is missing, vin_serial becomes required
  //     if (!data.brand || !data.model || !data.year) {
  //       if (!data.vin_serial) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   },
  //   {
  //     message: t('vin_serial_required_if_missing_brand_model_year'),
  //     path: ['vin_serial'], // The path to the field that will be triggered for the error
  //   }
  // );
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
  const mutatePart: SubmitHandler<PartData> = (data) => {
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
  const useOrderService = useOrderSparePartServicePostClientOrderSparePart({
    onSuccess: () => router.push('/'),
  });

  const processOrder = async () => {
    const data = form.getValues();
    toast.promise(
      useOrderService.mutateAsync({
        formData: orderAdapter(data),
      }),
      {
        loading: t('loading'),
        success: t('order_successful'),
        error: t('error'),
      }
    );
  };

  const onError = (error) => {
    console.error('Form error', error);
  };

  const orderAdapter = (data: FormOrderParts) => {
    const { parts, ...rest } = data;
    const adaptedParts = parts.map((part, index) => {
      let conditionNew = 0;
      let conditionUsed = 0;
      let conditionBoth = 0;

      if (part.status.includes('new')) conditionNew = 1;
      if (part.status.includes('used')) conditionUsed = 1;
      if (part.status.includes('both')) conditionBoth = 1;
      return {
        [`parts[${index}][name]`]: part.partName,
        [`parts[${index}][quantity]`]: part.quantity,
        [`parts[${index}][notes]`]: part.notes,
        [`parts[${index}][condition_new]`]: conditionNew,
        [`parts[${index}][condition_used]`]: conditionUsed,
        [`parts[${index}][condition_both]`]: conditionBoth,
      };
    });

    const partsObject = Object.assign({}, ...adaptedParts);

    return {
      ...rest,
      is_delivery: data.is_delivery ? 1 : 0,
      only_my_city: data.only_my_city ? 1 : 0,
      is_agent: data.is_agent ? 1 : 0,
      vin_serial: data.vin_serial || undefined,
      ...partsObject,
    };
  };

  return {
    form,
    mutatePart,
    onError,
    processOrder,
    onEditPart,
    editingPart,
    partFormModal,
    unSavedChangesModal,
    closeUnSavedChangesModalAndReset,
    isPending: useOrderService.isPending,
  };
};
