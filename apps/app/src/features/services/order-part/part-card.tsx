import { PartData } from './types';
import { useTranslations } from 'next-intl';
import { Card, CardBody, CardHeader } from "@heroui/card";
import { PrimaryDivider } from '../../../ui/divider';
import React from 'react';
import QuantityIcon from './assets/quantity-icon.svg';
import StatusIcon from './assets/status-icon.svg';
import Image from 'next/image';
import EditIcon from './assets/edit-icon.svg';
import DeleteIcon from './assets/delete-icon.svg';
import { Button } from "@heroui/button";

export const PartCard = (
  part: PartData & {
    index: number;
    onEdit?: (index: number) => void;
    onDelete?: (index: number) => void;
  }
) => {
  const t = useTranslations();
  const { partName, quantity, status } = part;
  const details = [
    {
      icon: QuantityIcon,
      label: t('quantity'),
      value: t('part', { count: quantity }),
    },
    {
      icon: StatusIcon,
      label: t('status'),
      value: status.map((s) => t(s)).join(' ,'),
    },
  ];

  return (
    <Card
      className="flex flex-col gap-4 p-4 rounded-lg border border-gray-200"
      shadow={'none'}
    >
      <CardHeader className={'p-0 flex justify-between'}>
        <h2 className="text-lg font-semibold">{partName}</h2>
        <div className="flex">
          {part.onEdit && (
            <Button
              isIconOnly
              variant={'light'}
              onPress={() => part.onEdit(part.index)}
            >
              <Image src={EditIcon} alt="Edit" width={18} height={18} />
            </Button>
          )}
          {part.onDelete && (
            <Button
              isIconOnly
              variant={'light'}
              onPress={() => part.onDelete(part.index)}
            >
              <Image src={DeleteIcon} alt="Delete" width={18} height={18} />
            </Button>
          )}
        </div>
      </CardHeader>
      <PrimaryDivider />
      <CardBody className="flex flex-col gap-4 p-0">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-gray-600"
          >
            <div className="text-gray-500 flex items-center gap-2">
              <Image
                src={detail.icon}
                alt={detail.label}
                width={20}
                height={20}
              />
              <h4>{detail.label}</h4>
            </div>
            <div className="flex items-center gap-1">
              <span>{detail.value}</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};
