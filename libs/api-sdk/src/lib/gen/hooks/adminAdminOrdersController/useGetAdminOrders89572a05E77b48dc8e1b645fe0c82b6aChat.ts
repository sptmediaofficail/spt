import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatQueryResponse, GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatHeaderParams } from "../../types/GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat";

 type GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatClient = typeof client<GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatQueryResponse, never, never>;
type GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat = {
    data: GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatHeaderParams;
    response: GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatClient>[0]>;
        return: Awaited<ReturnType<GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatClient>>;
    };
};
export function getAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatQueryOptions<TData = GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat["response"]>(headers?: GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat["headerParams"], options: GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat["error"]>({
                method: "get",
                url: `/admin/orders/89572a05-e77b-48dc-8e1b-645fe0c82b6a/chat`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary chat
 * @link /admin/orders/89572a05-e77b-48dc-8e1b-645fe0c82b6a/chat
 */
export function useGetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat<TData = GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat["response"]>(headers?: GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat["error"]>;
    client?: GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/orders/89572a05-e77b-48dc-8e1b-645fe0c82b6a/chat`;
    const query = useSWR<TData, GetAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChat["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getAdminOrders89572a05E77b48dc8e1b645fe0c82b6aChatQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}