import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetTicketsQueryResponse, GetTicketsQueryParams, GetTicketsHeaderParams } from "../../types/GetTickets";

 type GetTicketsClient = typeof client<GetTicketsQueryResponse, never, never>;
type GetTickets = {
    data: GetTicketsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetTicketsQueryParams;
    headerParams: GetTicketsHeaderParams;
    response: GetTicketsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetTicketsClient>[0]>;
        return: Awaited<ReturnType<GetTicketsClient>>;
    };
};
export function getTicketsQueryOptions<TData = GetTickets["response"]>(params?: GetTickets["queryParams"], headers?: GetTickets["headerParams"], options: GetTickets["client"]["parameters"] = {}): SWRConfiguration<TData, GetTickets["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetTickets["error"]>({
                method: "get",
                url: `/tickets`,
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
 * @link /tickets
 */
export function useGetTickets<TData = GetTickets["response"]>(params?: GetTickets["queryParams"], headers?: GetTickets["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetTickets["error"]>;
    client?: GetTickets["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetTickets["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/tickets`;
    const query = useSWR<TData, GetTickets["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getTicketsQueryOptions<TData>(params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}