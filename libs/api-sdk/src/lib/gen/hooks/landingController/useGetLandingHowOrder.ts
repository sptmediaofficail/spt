import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingHowOrderQueryResponse } from "../../types/GetLandingHowOrder";

 type GetLandingHowOrderClient = typeof client<GetLandingHowOrderQueryResponse, never, never>;
type GetLandingHowOrder = {
    data: GetLandingHowOrderQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingHowOrderQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingHowOrderClient>[0]>;
        return: Awaited<ReturnType<GetLandingHowOrderClient>>;
    };
};
export function getLandingHowOrderQueryOptions<TData = GetLandingHowOrder["response"]>(options: GetLandingHowOrder["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingHowOrder["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingHowOrder["error"]>({
                method: "get",
                url: `/landing/how_order`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary how_order
 * @link /landing/how_order
 */
export function useGetLandingHowOrder<TData = GetLandingHowOrder["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingHowOrder["error"]>;
    client?: GetLandingHowOrder["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingHowOrder["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/how_order`;
    const query = useSWR<TData, GetLandingHowOrder["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingHowOrderQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}