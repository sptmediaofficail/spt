import { ReactNode } from 'react';
import { DynamicBreadcrumbs } from '../../../ui/dynamic-breadcrumbs';

const ServicesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'flex flex-col justify-between h-full'}>
      <DynamicBreadcrumbs />

      <div className="bg-white flex-1">{children}</div>
    </div>
  );
};

export default ServicesLayout;
