import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

export const H1 = (props: { children: ReactNode }) => {
  const t = useTranslations();
  return <h1 className="text-xl lg:text-3xl font-bold">{t(props.children)}</h1>;
};

export const IconText = (props: {
  icon: ReactNode;
  children: ReactNode;
  color: 'accent' | 'warning' | 'error';
}) => {
  return (
    <div className={`flex gap-2 items-start text-${props.color}`}>
      {props.icon}
      <p>{props.children}</p>
    </div>
  );
};
