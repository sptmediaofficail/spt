'use client';
import { Tab, Tabs } from '@nextui-org/tabs';
import { useTranslations } from 'next-intl';
import { BsCartCheck } from 'react-icons/bs';
import {
  OrderStatusArray,
  useOrdersInfinity,
  useOrdersStats,
} from '../../../features/orders/use-orders';
import { useEffect, useState } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import { OrderCard } from '../../../features/orders/order-card';

export default function Page() {
  const t = useTranslations();
  const [tab, setTab] = useState<'receiving_offer' | 'accepted' | 'completed'>(
    'accepted'
  );
  const {
    items,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    pageSize,
  } = useOrdersInfinity({
    status: tab,
  });
  const stats = useOrdersStats();

  const [isFirstMount, setIsFirstMount] = useState(true);

  const { ref } = useIntersectionObserver({
    threshold: 0.5,
    onChange: (isIntersecting) => {
      if (isFirstMount) return;
      if (isIntersecting) {
        fetchNextPage({ pageParam: pageSize });
      }
    },
  });

  useEffect(() => {
    if (isFirstMount) setIsFirstMount(false);
  }, []);

  return (
    <div className={'p-4'}>
      <Tabs
        onSelectionChange={(value) => setTab(value as any)}
        color={'primary'}
        radius={'full'}
        variant={'light'}
        disableAnimation={true}
        size={'lg'}
        classNames={{
          tabList: 'gap-3',
          tab: 'p-5 text-sm font-semibold border-1 transition-all duration-300',
        }}
      >
        {OrderStatusArray.map((status) => (
          <Tab
            key={status}
            title={
              <div className={'flex items-center gap-2'}>
                <BsCartCheck className={'w-5 h-5'} />
                <span>{t(status)}</span>
                <span className={'text-xs text-accent'}>({stats[status]})</span>
              </div>
            }
          >
            <div className="flex flex-wrap flex-row gap-6 lg:gap-4 justify-center">
              {items &&
                items.map((order) => <OrderCard key={order.id} {...order} />)}
              <div ref={ref} className="w-full h-1" />
              {isFetchingNextPage && 'yes'}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
