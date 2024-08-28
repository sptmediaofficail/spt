import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminPartnersQueryResponse, GetAdminPartnersQueryParams } from "../../types/GetAdminPartners";

 type GetAdminPartnersClient = typeof client<GetAdminPartnersQueryResponse, never, never>;
type GetAdminPartners = {
    data: GetAdminPartnersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminPartnersQueryParams;
    headerParams: never;
    response: GetAdminPartnersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminPartnersClient>[0]>;
        return: Awaited<ReturnType<GetAdminPartnersClient>>;
    };
};
export function getAdminPartnersQueryOptions<TData = GetAdminPartners["response"]>(params?: GetAdminPartners["queryParams"], options: GetAdminPartners["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminPartners["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminPartners["error"]>({
                method: "get",
                url: `/admin/partners`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary list
 * @link /admin/partners
 */
export function useGetAdminPartners<TData = GetAdminPartners["response"]>(params?: GetAdminPartners["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminPartners["error"]>;
    client?: GetAdminPartners["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminPartners["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/partners`;
    const query = useSWR<TData, GetAdminPartners["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminPartnersQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}