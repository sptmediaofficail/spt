import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingPartnersQueryResponse } from "../../types/GetLandingPartners";

 type GetLandingPartnersClient = typeof client<GetLandingPartnersQueryResponse, never, never>;
type GetLandingPartners = {
    data: GetLandingPartnersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingPartnersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingPartnersClient>[0]>;
        return: Awaited<ReturnType<GetLandingPartnersClient>>;
    };
};
export function getLandingPartnersQueryOptions<TData = GetLandingPartners["response"]>(options: GetLandingPartners["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingPartners["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingPartners["error"]>({
                method: "get",
                url: `/landing/partners`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary partners
 * @link /landing/partners
 */
export function useGetLandingPartners<TData = GetLandingPartners["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingPartners["error"]>;
    client?: GetLandingPartners["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingPartners["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/partners`;
    const query = useSWR<TData, GetLandingPartners["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingPartnersQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}