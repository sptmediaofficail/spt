import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingServicesQueryResponse } from "../../types/GetLandingServices";

 type GetLandingServicesClient = typeof client<GetLandingServicesQueryResponse, never, never>;
type GetLandingServices = {
    data: GetLandingServicesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingServicesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingServicesClient>[0]>;
        return: Awaited<ReturnType<GetLandingServicesClient>>;
    };
};
export function getLandingServicesQueryOptions<TData = GetLandingServices["response"]>(options: GetLandingServices["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingServices["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingServices["error"]>({
                method: "get",
                url: `/landing/services`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary services
 * @link /landing/services
 */
export function useGetLandingServices<TData = GetLandingServices["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingServices["error"]>;
    client?: GetLandingServices["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingServices["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/services`;
    const query = useSWR<TData, GetLandingServices["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingServicesQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}