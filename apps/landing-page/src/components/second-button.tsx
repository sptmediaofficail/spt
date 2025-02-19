import { GoArrowLeft } from 'react-icons/go';
import { cn } from '@heroui/theme';
import { Link, LinkProps } from '@heroui/link';

export function SecondButton(
  props: LinkProps & { text: string; color: string }
) {
  const { text, color } = props;
  return (
    <Link {...props} target="_blank">
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
