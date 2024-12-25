import { useForm } from 'react-hook-form';
import { FormOrderParts, PartData } from './types';
import { useState } from 'react';
import { useDisclosure } from '@nextui-org/modal';

export const usePartForm = () => {
  const partFormModal = useDisclosure();
  const unSavedChangesModal = useDisclosure();

  const form = useForm<FormOrderParts>({
    defaultValues: {
      parts: [],
    },
    mode: 'onChange',
  });

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
