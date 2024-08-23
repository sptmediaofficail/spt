import { HTMLProps } from 'react';
import { cn } from '@nextui-org/theme';

export const Section = (props: HTMLProps<any>) => {
  return (
    <section
      {...props}
      className={cn(
        'pt-24 max-w-screen-2xl px-4 xl:mx-auto 2xl:px-0',
        props.className
      )}
    >
      {props.children}
    </section>
  );
};
