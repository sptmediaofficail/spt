import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetNotificationUnreadCountQueryResponse, GetNotificationUnreadCountHeaderParams } from "../../types/GetNotificationUnreadCount";

 type GetNotificationUnreadCountClient = typeof client<GetNotificationUnreadCountQueryResponse, never, never>;
type GetNotificationUnreadCount = {
    data: GetNotificationUnreadCountQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetNotificationUnreadCountHeaderParams;
    response: GetNotificationUnreadCountQueryResponse;
    client: {
        parameters: Partial<Parameters<GetNotificationUnreadCountClient>[0]>;
        return: Awaited<ReturnType<GetNotificationUnreadCountClient>>;
    };
};
export function getNotificationUnreadCountQueryOptions<TData = GetNotificationUnreadCount["response"]>(headers?: GetNotificationUnreadCount["headerParams"], options: GetNotificationUnreadCount["client"]["parameters"] = {}): SWRConfiguration<TData, GetNotificationUnreadCount["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetNotificationUnreadCount["error"]>({
                method: "get",
                url: `/notification/unread_count`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary unReadCount
 * @link /notification/unread_count
 */
export function useGetNotificationUnreadCount<TData = GetNotificationUnreadCount["response"]>(headers?: GetNotificationUnreadCount["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetNotificationUnreadCount["error"]>;
    client?: GetNotificationUnreadCount["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetNotificationUnreadCount["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/notification/unread_count`;
    const query = useSWR<TData, GetNotificationUnreadCount["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getNotificationUnreadCountQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}