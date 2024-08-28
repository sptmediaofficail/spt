import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingPlatformReviewsQueryResponse } from "../../types/GetLandingPlatformReviews";

 type GetLandingPlatformReviewsClient = typeof client<GetLandingPlatformReviewsQueryResponse, never, never>;
type GetLandingPlatformReviews = {
    data: GetLandingPlatformReviewsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingPlatformReviewsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingPlatformReviewsClient>[0]>;
        return: Awaited<ReturnType<GetLandingPlatformReviewsClient>>;
    };
};
export function getLandingPlatformReviewsQueryOptions<TData = GetLandingPlatformReviews["response"]>(options: GetLandingPlatformReviews["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingPlatformReviews["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingPlatformReviews["error"]>({
                method: "get",
                url: `/landing/platform_reviews`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary platform_reviews
 * @link /landing/platform_reviews
 */
export function useGetLandingPlatformReviews<TData = GetLandingPlatformReviews["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingPlatformReviews["error"]>;
    client?: GetLandingPlatformReviews["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingPlatformReviews["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/platform_reviews`;
    const query = useSWR<TData, GetLandingPlatformReviews["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingPlatformReviewsQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}