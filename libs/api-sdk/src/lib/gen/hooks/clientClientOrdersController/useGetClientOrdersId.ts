import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetClientOrdersIdQueryResponse, GetClientOrdersIdPathParams, GetClientOrdersIdHeaderParams } from "../../types/GetClientOrdersId";

 type GetClientOrdersIdClient = typeof client<GetClientOrdersIdQueryResponse, never, never>;
type GetClientOrdersId = {
    data: GetClientOrdersIdQueryResponse;
    error: never;
    request: never;
    pathParams: GetClientOrdersIdPathParams;
    queryParams: never;
    headerParams: GetClientOrdersIdHeaderParams;
    response: GetClientOrdersIdQueryResponse;
    client: {
        parameters: Partial<Parameters<GetClientOrdersIdClient>[0]>;
        return: Awaited<ReturnType<GetClientOrdersIdClient>>;
    };
};
export function getClientOrdersIdQueryOptions<TData = GetClientOrdersId["response"]>(id: GetClientOrdersIdPathParams["id"], headers?: GetClientOrdersId["headerParams"], options: GetClientOrdersId["client"]["parameters"] = {}): SWRConfiguration<TData, GetClientOrdersId["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetClientOrdersId["error"]>({
                method: "get",
                url: `/client/orders/${id}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary details
 * @link /client/orders/:id
 */
export function useGetClientOrdersId<TData = GetClientOrdersId["response"]>(id: GetClientOrdersIdPathParams["id"], headers?: GetClientOrdersId["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetClientOrdersId["error"]>;
    client?: GetClientOrdersId["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetClientOrdersId["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/client/orders/${id}`;
    const query = useSWR<TData, GetClientOrdersId["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getClientOrdersIdQueryOptions<TData>(id, headers, clientOptions),
        ...queryOptions
    });
    return query;
}