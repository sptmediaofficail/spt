import { DynamicBreadcrumbs } from '../../../ui/dynamic-breadcrumbs';
import { ReactNode } from 'react';

const ServicesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'h-[calc(100svh-65px)] flex flex-col'}>
      <DynamicBreadcrumbs />

      <div className="bg-white h-full">{children}</div>
    </div>
  );
};

export default ServicesLayout;
