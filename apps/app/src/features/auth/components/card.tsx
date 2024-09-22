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
    <Card
      {...props}
      className={cn(
        'lg:max-w-lg px-4 lg:px-12 py-8 lg:py-12 bg-white shadow-lg',
        'rounded-b-none lg:rounded-lg',
        'w-full h-full',
        props.className
      )}
    >
      <CardHeader className="flex flex-col text-center gap-4">
        {icon && <div>{icon}</div>}
        <h2 className={cn('text-[#28478A] font-semibold text-2xl')}>{title}</h2>
        <h3 className={cn('text-[#6E7887] text-sm')}>{description}</h3>
      </CardHeader>
      <CardBody className={'px-0'}>{children}</CardBody>
      <CardFooter>{/*<p>Card Footer</p>*/}</CardFooter>
    </Card>
  );
};
