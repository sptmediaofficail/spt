import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetNotificationIndexQueryResponse, GetNotificationIndexQueryParams, GetNotificationIndexHeaderParams } from "../../types/GetNotificationIndex";

 type GetNotificationIndexClient = typeof client<GetNotificationIndexQueryResponse, never, never>;
type GetNotificationIndex = {
    data: GetNotificationIndexQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetNotificationIndexQueryParams;
    headerParams: GetNotificationIndexHeaderParams;
    response: GetNotificationIndexQueryResponse;
    client: {
        parameters: Partial<Parameters<GetNotificationIndexClient>[0]>;
        return: Awaited<ReturnType<GetNotificationIndexClient>>;
    };
};
export function getNotificationIndexQueryOptions<TData = GetNotificationIndex["response"]>(params?: GetNotificationIndex["queryParams"], headers?: GetNotificationIndex["headerParams"], options: GetNotificationIndex["client"]["parameters"] = {}): SWRConfiguration<TData, GetNotificationIndex["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetNotificationIndex["error"]>({
                method: "get",
                url: `/notification/index`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /notification/index
 */
export function useGetNotificationIndex<TData = GetNotificationIndex["response"]>(params?: GetNotificationIndex["queryParams"], headers?: GetNotificationIndex["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetNotificationIndex["error"]>;
    client?: GetNotificationIndex["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetNotificationIndex["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/notification/index`;
    const query = useSWR<TData, GetNotificationIndex["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getNotificationIndexQueryOptions<TData>(params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}