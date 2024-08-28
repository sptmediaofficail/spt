import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminServicesQueryResponse, GetAdminServicesQueryParams } from "../../types/GetAdminServices";

 type GetAdminServicesClient = typeof client<GetAdminServicesQueryResponse, never, never>;
type GetAdminServices = {
    data: GetAdminServicesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminServicesQueryParams;
    headerParams: never;
    response: GetAdminServicesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminServicesClient>[0]>;
        return: Awaited<ReturnType<GetAdminServicesClient>>;
    };
};
export function getAdminServicesQueryOptions<TData = GetAdminServices["response"]>(params?: GetAdminServices["queryParams"], options: GetAdminServices["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminServices["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminServices["error"]>({
                method: "get",
                url: `/admin/services`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /admin/services
 */
export function useGetAdminServices<TData = GetAdminServices["response"]>(params?: GetAdminServices["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminServices["error"]>;
    client?: GetAdminServices["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminServices["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/services`;
    const query = useSWR<TData, GetAdminServices["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminServicesQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}