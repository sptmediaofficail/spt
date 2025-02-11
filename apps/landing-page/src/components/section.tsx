import { HTMLProps, ReactNode } from 'react';
import { cn } from "@heroui/theme";

export const Section = (
  props: HTMLProps<any> & {
    title?: string;
    heading?: string | ReactNode;
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
      <div
        className={cn(
          'flex flex-col gap-6',
          props.position === 'center' && 'mx-auto max-w-screen-md'
        )}
      >
        {props.title && (
          <h2
            className={cn(
              'text-lg lg:text-xl font-bold bg-primary text-white px-3 py-2 rounded-full w-fit',
              props.position === 'center' && 'mx-auto'
            )}
          >
            {props.title}
          </h2>
        )}
        {props.heading && typeof props.heading === 'string' ? (
          <h3 className={cn('text-3xl lg:text-4xl font-semibold')}>
            {props.heading}
          </h3>
        ) : (
          props.heading
        )}

        {props.description && (
          <p className="text-sm lg:text-lg text-secondaryText max-w-screen-md">
            {props.description}
          </p>
        )}
      </div>

      {props.children}
    </section>
  );
};
