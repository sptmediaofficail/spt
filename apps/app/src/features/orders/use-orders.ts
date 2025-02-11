import { useEffect, useState } from 'react';
import { createInfiniteHook } from '../../hooks/create-infinite-hook';
import { useClientClientOrdersServiceGetClientOrders } from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import { useClientClientOrdersServiceGetClientOrdersInfinite } from '../../../../../libs/api-sdk/src/lib/gen2/queries/infiniteQueries';
import { IOrder } from '@spt/core';

export enum OrderStatus {
  accepted = 'accepted',
  receiving_offer = 'receiving_offer',
  completed = 'completed',
}
export const OrderStatusArray = Object.values(OrderStatus);

export const useOrders = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    paginate: 10,
  });

  const props = useClientClientOrdersServiceGetClientOrders({
    page: pagination.page,
    paginate: pagination.paginate,
  });

  useEffect(() => {
    props.refetch();
  }, [pagination, props.refetch]);

  const orders = props.data?.data?.data || [];

  return {
    ...props,
    orders: orders as IOrder[],
    setPagination,
  };
};

export const useOrdersStats = () => {
  const [stats, setStats] = useState({
    receiving_offer: 0,
    accepted: 0,
    completed: 0,
  });

  // const status = Object.values(OrderStatus);

  // Promise.allSettled(
  //   status.map((status) => {
  //     // eslint-disable-next-line react-hooks/rules-of-hooks
  //     const props = useClientClientOrdersServiceGetClientOrders({
  //       page: 1,
  //       paginate: 1,
  //       statusArray: status,
  //     });
  //
  //     const total = props?.data?.data.meta.total;
  //     setStats((prev) => ({
  //       ...prev,
  //       [status]: total,
  //     }));
  //   })
  // );

  return {
    receiving_offer: stats.receiving_offer,
    accepted: stats.accepted,
    completed: stats.completed,
  };
};

export const useOrdersInfinity = ({
  status,
}: {
  status: 'receiving_offer' | 'accepted' | 'completed';
}) =>
  createInfiniteHook<
    IOrder,
    ReturnType<typeof useClientClientOrdersServiceGetClientOrdersInfinite>
  >({
    serviceFunction: useClientClientOrdersServiceGetClientOrdersInfinite,
    queryKey: ['client', 'orders', status],
    additionalParams: {
      statusArray: status,
    },
  })();
