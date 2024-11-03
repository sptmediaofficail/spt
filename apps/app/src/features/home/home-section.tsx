import * as React from 'react';
import { HTMLProps } from 'react';
import { RiArrowLeftUpLine } from 'react-icons/ri';
import { useTranslations } from 'next-intl';

export const HomeSection = (
  props: HTMLProps<HTMLDivElement> & {
    title: string;
    moreText?: string;
    onMoreClick?: () => void;
  }
) => (
  <section className={'h-96'} {...props}>
    <Header
      title={props.title}
      moreText={props.moreText}
      onMoreClick={props.onMoreClick}
    />
    {props.children}
  </section>
);

const Header = ({
  title,
  moreText = 'more',
  onMoreClick,
}: {
  title: string;
  moreText?: string;
  onMoreClick?: () => void;
}) => {
  const t = useTranslations('home');
  return (
    <div
      className={
        'text-2xl font-bold text-right pb-6 flex justify-between px-4 lg:px-0'
      }
    >
      <h2>{title}</h2>
      <button
        onClick={onMoreClick}
        className={
          'text-lg font-light text-gray-400 flex items-center gap-2 hover:text-primary cursor-pointer transition-colors'
        }
      >
        <span>{t(moreText)}</span>
        <RiArrowLeftUpLine className={'h-6 w-6'} />
      </button>
    </div>
  );
};
