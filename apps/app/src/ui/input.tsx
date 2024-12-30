import React from 'react';
import {
  Input as NextInput,
  InputProps,
  Textarea as NextTextarea,
  TextAreaProps,
} from '@nextui-org/input';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <NextInput
        ref={ref}
        radius={'sm'}
        classNames={{
          label: 'after:text-[#05b5b4] after:px-1',
          inputWrapper:
            'rounded-lg shadow-sm border-1.5 border-gray-300 active:border-red-500 duration-200 ease-in-out focus:border-red-500',
          ...props.classNames,
        }}
        color="primary"
        labelPlacement={'outside'}
        variant={'bordered'}
        isClearable
        {...props}
      />
    );
  }
);

Input.displayName = 'Primary Input';

export const Textarea = React.forwardRef<HTMLInputElement, TextAreaProps>(
  (props, ref) => {
    return (
      <NextTextarea
        ref={ref}
        radius={'sm'}
        classNames={{
          label: 'after:text-[#05b5b4] after:px-1',
          inputWrapper:
            'rounded-lg shadow-sm border-1.5 border-gray-300 active:border-red-500 duration-200 ease-in-out focus:border-red-500',
          ...props.classNames,
        }}
        labelPlacement={'outside'}
        variant={'bordered'}
        color={'primary'}
        isClearable
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Primary Textarea';
