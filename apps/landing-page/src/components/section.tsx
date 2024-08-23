import { HTMLProps } from 'react';
import { cn } from '@nextui-org/theme';

export const Section = (props: HTMLProps<any>) => {
  return (
    <section
      {...props}
      className={cn('pt-24 max-w-screen-2xl mx-4 2xl:mx-auto', props.className)}
    >
      {props.children}
    </section>
  );
};
