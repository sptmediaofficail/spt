import { Input as NextInput, InputProps } from '@nextui-org/input';

export const Input = (props: InputProps) => {
  return (
    <NextInput
      {...props}
      classNames={{
        label: 'after:text-[#05b5b4] after:px-1',
        inputWrapper:
          'rounded-lg shadow-sm border-1.5 border-gray-300 active:border-red-500 duration-200 ease-in-out focus:border-red-500',
        ...props.classNames,
      }}
      labelPlacement={'outside'}
      variant={'bordered'}
      isClearable
    />
  );
};
