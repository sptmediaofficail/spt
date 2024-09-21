import { Button, ButtonProps } from '@nextui-org/button';
import { cn } from '@nextui-org/theme';

type PrimaryButtonProps = ButtonProps & {
  text: string;
  onClick?: () => void;
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
      className={cn(
        'bg-primary text-white w-full rounded-lg font-bold',
        props.className
      )}
    >
      {text}
    </Button>
  );
};
