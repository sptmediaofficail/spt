import { DynamicBreadcrumbs } from '../../../ui/dynamic-breadcrumbs';
import { ReactNode } from 'react';

const ServicesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'flex flex-col'}>
      <DynamicBreadcrumbs />

      <div className="bg-white">{children}</div>
    </div>
  );
};

export default ServicesLayout;
