'use client';
import { Button, ButtonProps } from '@nextui-org/button';
import { cn } from '@nextui-org/theme';
import Link from 'next/link';

type PrimaryButtonProps = ButtonProps & {
  text: string;
};
export const PrimaryButton = ({
  text,
  onClick,
  ...props
}: PrimaryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      {...props}
      className={cn('w-full rounded-lg font-semibold', props.className)}
      color={'primary'}
    >
      {text}
    </Button>
  );
};

export const PrimaryLink = ({
  text,
  href,
  ...props
}: PrimaryButtonProps & { href: string }) => {
  return (
    <Link
      href={href}
      className={cn(
        'bg-primary text-white w-full rounded-lg font-bold text-sm text-center h-[40px] flex items-center justify-center',
        props.className
      )}
    >
      {text}
    </Link>
  );
};
