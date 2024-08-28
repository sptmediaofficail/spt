import { HTMLProps } from 'react';
import { cn } from '@nextui-org/theme';

export const Section = (
  props: HTMLProps<any> & {
    title?: string;
    heading?: string;
    description?: string;
    position?: 'center' | 'right';
  }
) => {
  return (
    <section
      {...props}
      className={cn(
        'pt-12 lg:pt-24 max-w-screen-xl px-4 xl:mx-auto xl:px-0',
        props.position === 'center' && 'text-center',
        props.className
      )}
    >
      <div className="flex flex-col gap-6">
        {props.title && (
          <h2
            className={cn(
              'text-xl font-bold bg-primary text-white px-3 py-2 rounded-full w-fit',
              props.position === 'center' && 'mx-auto'
            )}
          >
            {props.title}
          </h2>
        )}
        {props.heading && (
          <h3 className={cn('text-4xl font-semibold')}>{props.heading}</h3>
        )}

        {props.description && (
          <p className="text-xs text-secondaryText">{props.description}</p>
        )}
      </div>

      {props.children}
    </section>
  );
};
