import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetProviderOrdersIdQueryResponse, GetProviderOrdersIdPathParams, GetProviderOrdersIdHeaderParams } from "../../types/GetProviderOrdersId";

 type GetProviderOrdersIdClient = typeof client<GetProviderOrdersIdQueryResponse, never, never>;
type GetProviderOrdersId = {
    data: GetProviderOrdersIdQueryResponse;
    error: never;
    request: never;
    pathParams: GetProviderOrdersIdPathParams;
    queryParams: never;
    headerParams: GetProviderOrdersIdHeaderParams;
    response: GetProviderOrdersIdQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProviderOrdersIdClient>[0]>;
        return: Awaited<ReturnType<GetProviderOrdersIdClient>>;
    };
};
export function getProviderOrdersIdQueryOptions<TData = GetProviderOrdersId["response"]>(id: GetProviderOrdersIdPathParams["id"], headers?: GetProviderOrdersId["headerParams"], options: GetProviderOrdersId["client"]["parameters"] = {}): SWRConfiguration<TData, GetProviderOrdersId["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetProviderOrdersId["error"]>({
                method: "get",
                url: `/provider/orders/${id}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary details
 * @link /provider/orders/:id
 */
export function useGetProviderOrdersId<TData = GetProviderOrdersId["response"]>(id: GetProviderOrdersIdPathParams["id"], headers?: GetProviderOrdersId["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetProviderOrdersId["error"]>;
    client?: GetProviderOrdersId["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetProviderOrdersId["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/orders/${id}`;
    const query = useSWR<TData, GetProviderOrdersId["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getProviderOrdersIdQueryOptions<TData>(id, headers, clientOptions),
        ...queryOptions
    });
    return query;
}