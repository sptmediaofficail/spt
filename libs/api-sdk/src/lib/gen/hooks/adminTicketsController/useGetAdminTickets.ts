import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminTicketsQueryResponse, GetAdminTicketsQueryParams } from "../../types/GetAdminTickets";

 type GetAdminTicketsClient = typeof client<GetAdminTicketsQueryResponse, never, never>;
type GetAdminTickets = {
    data: GetAdminTicketsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminTicketsQueryParams;
    headerParams: never;
    response: GetAdminTicketsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminTicketsClient>[0]>;
        return: Awaited<ReturnType<GetAdminTicketsClient>>;
    };
};
export function getAdminTicketsQueryOptions<TData = GetAdminTickets["response"]>(params?: GetAdminTickets["queryParams"], options: GetAdminTickets["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminTickets["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminTickets["error"]>({
                method: "get",
                url: `/admin/tickets`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /admin/tickets
 */
export function useGetAdminTickets<TData = GetAdminTickets["response"]>(params?: GetAdminTickets["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminTickets["error"]>;
    client?: GetAdminTickets["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminTickets["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/tickets`;
    const query = useSWR<TData, GetAdminTickets["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminTicketsQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}