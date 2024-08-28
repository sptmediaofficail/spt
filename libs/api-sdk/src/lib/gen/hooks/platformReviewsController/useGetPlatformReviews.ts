import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetPlatformReviewsQueryResponse, GetPlatformReviewsQueryParams } from "../../types/GetPlatformReviews";

 type GetPlatformReviewsClient = typeof client<GetPlatformReviewsQueryResponse, never, never>;
type GetPlatformReviews = {
    data: GetPlatformReviewsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetPlatformReviewsQueryParams;
    headerParams: never;
    response: GetPlatformReviewsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetPlatformReviewsClient>[0]>;
        return: Awaited<ReturnType<GetPlatformReviewsClient>>;
    };
};
export function getPlatformReviewsQueryOptions<TData = GetPlatformReviews["response"]>(params?: GetPlatformReviews["queryParams"], options: GetPlatformReviews["client"]["parameters"] = {}): SWRConfiguration<TData, GetPlatformReviews["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetPlatformReviews["error"]>({
                method: "get",
                url: `/platform-reviews`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary list
 * @link /platform-reviews
 */
export function useGetPlatformReviews<TData = GetPlatformReviews["response"]>(params?: GetPlatformReviews["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetPlatformReviews["error"]>;
    client?: GetPlatformReviews["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetPlatformReviews["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/platform-reviews`;
    const query = useSWR<TData, GetPlatformReviews["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getPlatformReviewsQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}