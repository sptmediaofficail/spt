import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingOrdersNumbersQueryResponse } from "../../types/GetLandingOrdersNumbers";

 type GetLandingOrdersNumbersClient = typeof client<GetLandingOrdersNumbersQueryResponse, never, never>;
type GetLandingOrdersNumbers = {
    data: GetLandingOrdersNumbersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingOrdersNumbersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingOrdersNumbersClient>[0]>;
        return: Awaited<ReturnType<GetLandingOrdersNumbersClient>>;
    };
};
export function getLandingOrdersNumbersQueryOptions<TData = GetLandingOrdersNumbers["response"]>(options: GetLandingOrdersNumbers["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingOrdersNumbers["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingOrdersNumbers["error"]>({
                method: "get",
                url: `/landing/orders_numbers`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary orders_numbers
 * @link /landing/orders_numbers
 */
export function useGetLandingOrdersNumbers<TData = GetLandingOrdersNumbers["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingOrdersNumbers["error"]>;
    client?: GetLandingOrdersNumbers["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingOrdersNumbers["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/orders_numbers`;
    const query = useSWR<TData, GetLandingOrdersNumbers["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingOrdersNumbersQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}