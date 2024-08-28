import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminPlatformReviewsQueryResponse, GetAdminPlatformReviewsQueryParams } from "../../types/GetAdminPlatformReviews";

 type GetAdminPlatformReviewsClient = typeof client<GetAdminPlatformReviewsQueryResponse, never, never>;
type GetAdminPlatformReviews = {
    data: GetAdminPlatformReviewsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminPlatformReviewsQueryParams;
    headerParams: never;
    response: GetAdminPlatformReviewsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminPlatformReviewsClient>[0]>;
        return: Awaited<ReturnType<GetAdminPlatformReviewsClient>>;
    };
};
export function getAdminPlatformReviewsQueryOptions<TData = GetAdminPlatformReviews["response"]>(params?: GetAdminPlatformReviews["queryParams"], options: GetAdminPlatformReviews["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminPlatformReviews["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminPlatformReviews["error"]>({
                method: "get",
                url: `/admin/platform-reviews`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary list
 * @link /admin/platform-reviews
 */
export function useGetAdminPlatformReviews<TData = GetAdminPlatformReviews["response"]>(params?: GetAdminPlatformReviews["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminPlatformReviews["error"]>;
    client?: GetAdminPlatformReviews["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminPlatformReviews["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/platform-reviews`;
    const query = useSWR<TData, GetAdminPlatformReviews["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminPlatformReviewsQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}