import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminCommissionsQueryResponse, GetAdminCommissionsQueryParams } from "../../types/GetAdminCommissions";

 type GetAdminCommissionsClient = typeof client<GetAdminCommissionsQueryResponse, never, never>;
type GetAdminCommissions = {
    data: GetAdminCommissionsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminCommissionsQueryParams;
    headerParams: never;
    response: GetAdminCommissionsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminCommissionsClient>[0]>;
        return: Awaited<ReturnType<GetAdminCommissionsClient>>;
    };
};
export function getAdminCommissionsQueryOptions<TData = GetAdminCommissions["response"]>(params?: GetAdminCommissions["queryParams"], options: GetAdminCommissions["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminCommissions["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminCommissions["error"]>({
                method: "get",
                url: `/admin/commissions`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /admin/commissions
 */
export function useGetAdminCommissions<TData = GetAdminCommissions["response"]>(params?: GetAdminCommissions["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminCommissions["error"]>;
    client?: GetAdminCommissions["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminCommissions["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/commissions`;
    const query = useSWR<TData, GetAdminCommissions["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminCommissionsQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}