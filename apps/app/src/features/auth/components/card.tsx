import * as React from 'react';
import { ReactNode } from 'react';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../ui/card';
import { cn } from '@nextui-org/theme';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
};

export const Card = ({
  icon,
  title,
  description,
  children,
  ...props
}: CardProps) => {
  return (
    <div {...props}>
      <CardHeader className="text-center gap-4">
        {icon && <div>{icon}</div>}
        <CardTitle className={cn('text-[#28478A] font-semibold text-2xl')}>
          {title}
        </CardTitle>
        <CardDescription className={cn('text-[#6E7887] text-sm')}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{/*<p>Card Footer</p>*/}</CardFooter>
    </div>
  );
};
