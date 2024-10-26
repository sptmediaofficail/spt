import * as React from 'react';
import { HTMLProps } from 'react';
import { RiArrowLeftUpLine } from 'react-icons/ri';

export const HomeSection = (
  props: HTMLProps<HTMLDivElement> & {
    title: string;
  }
) => (
  <section className={'h-96'} {...props}>
    <Header title={props.title} moreText={'More'} />
    {props.children}
  </section>
);

const Header = ({ title, moreText }: { title: string; moreText: string }) => (
  <div
    className={
      'text-2xl font-bold text-right pb-6 flex justify-between px-4 lg:px-0'
    }
  >
    <h2>{title}</h2>
    <button
      className={'text-lg font-light text-gray-400 flex items-center gap-2'}
    >
      <span>{moreText}</span>
      <RiArrowLeftUpLine className={'h-6 w-6'} />
    </button>
  </div>
);
