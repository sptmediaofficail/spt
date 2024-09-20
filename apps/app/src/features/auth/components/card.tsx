import * as React from 'react';
import { ReactNode } from 'react';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../ui/card';

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
      <CardHeader className="text-center">
        {icon && <div>{icon}</div>}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </div>
  );
};
