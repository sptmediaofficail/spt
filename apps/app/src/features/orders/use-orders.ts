import { useEffect, useState } from 'react';
import { createInfiniteHook } from '../../hooks/create-infinite-hook';
import {
  useClientClientOrdersServiceGetClientOrders,
  useClientClientOrdersServiceGetClientOrdersIndexStatistics,
  useProviderProviderOrdersServiceGetProviderOrdersIndexStatistics,
} from '../../../../../libs/api-sdk/src/lib/gen2/queries';
import {
  useClientClientOrdersServiceGetClientOrdersInfinite,
  useProviderProviderOrdersServiceGetProviderOrdersInfinite,
} from '../../../../../libs/api-sdk/src/lib/gen2/queries/infiniteQueries';
import { Order } from '@spt/core';

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
    orders: orders as Order[],
    setPagination,
  };
};

export const useOrdersStats = () => {
  const [stats, setStats] = useState({
    receiving_offer: 0,
    accepted: 0,
    completed: 0,
  });

  const { data, isSuccess } =
    useClientClientOrdersServiceGetClientOrdersIndexStatistics<{
      data: {
        receiving_offer: number;
        accepted: number;
        completed: number;
      };
    }>();

  useEffect(() => {
    if (isSuccess) {
      setStats({
        receiving_offer: data?.data?.receiving_offer,
        accepted: data?.data?.accepted,
        completed: data?.data?.completed,
      });
    }
  }, [data, isSuccess]);

  return {
    receiving_offer: stats.receiving_offer,
    accepted: stats.accepted,
    completed: stats.completed,
  };
};

export enum OrderStatus {
  accepted = 'accepted',
  receiving_offer = 'receiving_offer',
  completed = 'completed',
}
export const OrderStatusArray = Object.values(OrderStatus);

export const useOrdersInfinity = ({
  status,
}: {
  status: 'receiving_offer' | 'accepted' | 'completed';
}) =>
  createInfiniteHook<
    Order,
    ReturnType<typeof useClientClientOrdersServiceGetClientOrdersInfinite>
  >({
    serviceFunction: useClientClientOrdersServiceGetClientOrdersInfinite,
    queryKey: ['client', 'orders', status],
    additionalParams: {
      statusArray: status,
    },
  })();

export enum StoreOrderStatus {
  already_submit = 'already_submit',
  accepted = 'accepted',
  can_submit = 'can_submit',
  finished = 'finished',
}

export const StoreOrderStatusArray = Object.values(StoreOrderStatus);

export const useStoreOrdersStats = () => {
  const [stats, setStats] = useState({
    already_submit: 0,
    accepted: 0,
    can_submit: 0,
    finished: 0,
  });

  const { data, isSuccess } =
    useProviderProviderOrdersServiceGetProviderOrdersIndexStatistics<{
      data: {
        already_submit: number;
        accepted: number;
        can_submit: number;
        finished: number;
      };
    }>();

  useEffect(() => {
    if (isSuccess) {
      setStats({
        already_submit: data?.data?.already_submit,
        accepted: data?.data?.accepted,
        can_submit: data?.data?.can_submit,
        finished: data?.data?.finished,
      });
    }
  }, [data, isSuccess]);

  return {
    already_submit: stats.already_submit,
    accepted: stats.accepted,
    can_submit: stats.can_submit,
    finished: stats.finished,
  };
};

export const useStoreOrdersInfinity = ({
  status,
}: {
  status: StoreOrderStatus;
}) =>
  createInfiniteHook<
    Order,
    ReturnType<typeof useProviderProviderOrdersServiceGetProviderOrdersInfinite>
  >({
    serviceFunction: useProviderProviderOrdersServiceGetProviderOrdersInfinite,
    queryKey: ['provider', 'orders', status],
    additionalParams: {
      status,
    },
  })();
