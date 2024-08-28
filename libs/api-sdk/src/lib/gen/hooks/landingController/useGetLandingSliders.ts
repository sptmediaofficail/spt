import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingSlidersQueryResponse } from "../../types/GetLandingSliders";

 type GetLandingSlidersClient = typeof client<GetLandingSlidersQueryResponse, never, never>;
type GetLandingSliders = {
    data: GetLandingSlidersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingSlidersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingSlidersClient>[0]>;
        return: Awaited<ReturnType<GetLandingSlidersClient>>;
    };
};
export function getLandingSlidersQueryOptions<TData = GetLandingSliders["response"]>(options: GetLandingSliders["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingSliders["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingSliders["error"]>({
                method: "get",
                url: `/landing/sliders`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary sliders
 * @link /landing/sliders
 */
export function useGetLandingSliders<TData = GetLandingSliders["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingSliders["error"]>;
    client?: GetLandingSliders["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingSliders["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/sliders`;
    const query = useSWR<TData, GetLandingSliders["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingSlidersQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}