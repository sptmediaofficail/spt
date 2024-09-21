import * as React from 'react';
import { ReactNode } from 'react';
import { cn } from '@nextui-org/theme';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
} from '@nextui-org/card';

type AuthCardProps = CardProps & {
  icon?: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
};

export const AuthCard = ({
  icon,
  title,
  description,
  children,
  ...props
}: AuthCardProps) => {
  return (
    <Card {...props}>
      <CardHeader className="flex flex-col text-center gap-4">
        {icon && <div>{icon}</div>}
        <h2 className={cn('text-[#28478A] font-semibold text-2xl')}>{title}</h2>
        <h3 className={cn('text-[#6E7887] text-sm')}>{description}</h3>
      </CardHeader>
      <CardBody>{children}</CardBody>
      <CardFooter>{/*<p>Card Footer</p>*/}</CardFooter>
    </Card>
  );
};
