import { GoArrowLeft } from 'react-icons/go';
import { cn } from '@nextui-org/theme';
import { Link, LinkProps } from '@nextui-org/link';

export function SecondButton(
  props: LinkProps & { text: string; color: string }
) {
  const { text, color } = props;
  return (
    <Link {...props}>
      <p
        className={cn(
          'px-2',
          'cursor-pointer',
          'transition duration-300 ease-in-out',
          `text-${color}`,
          'hover:text-opacity-80'
        )}
      >
        {text}
      </p>
      <GoArrowLeft color={color} />
    </Link>
  );
}
