import { DynamicBreadcrumbs } from '../../../ui/dynamic-breadcrumbs';
import { ReactNode } from 'react';

const ServicesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'flex flex-col justify-between h-full'}>
      <DynamicBreadcrumbs />

      <div className="bg-white flex-1">{children}</div>
    </div>
  );
};

export default ServicesLayout;
