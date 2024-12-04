import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

export const H1 = (props: { children: ReactNode }) => {
  const t = useTranslations();
  return <h1 className="text-xl lg:text-3xl font-bold">{t(props.children)}</h1>;
};
