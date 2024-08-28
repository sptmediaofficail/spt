import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminCityServicesQueryResponse, GetAdminCityServicesQueryParams } from "../../types/GetAdminCityServices";

 type GetAdminCityServicesClient = typeof client<GetAdminCityServicesQueryResponse, never, never>;
type GetAdminCityServices = {
    data: GetAdminCityServicesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminCityServicesQueryParams;
    headerParams: never;
    response: GetAdminCityServicesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminCityServicesClient>[0]>;
        return: Awaited<ReturnType<GetAdminCityServicesClient>>;
    };
};
export function getAdminCityServicesQueryOptions<TData = GetAdminCityServices["response"]>(params?: GetAdminCityServices["queryParams"], options: GetAdminCityServices["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminCityServices["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminCityServices["error"]>({
                method: "get",
                url: `/admin/city-services`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary city-services
 * @link /admin/city-services
 */
export function useGetAdminCityServices<TData = GetAdminCityServices["response"]>(params?: GetAdminCityServices["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminCityServices["error"]>;
    client?: GetAdminCityServices["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminCityServices["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/city-services`;
    const query = useSWR<TData, GetAdminCityServices["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminCityServicesQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}