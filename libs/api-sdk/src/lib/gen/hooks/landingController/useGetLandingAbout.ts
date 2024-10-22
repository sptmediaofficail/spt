import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingAboutQueryResponse } from "../../types/GetLandingAbout";

 type GetLandingAboutClient = typeof client<GetLandingAboutQueryResponse, never, never>;
type GetLandingAbout = {
    data: GetLandingAboutQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingAboutQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingAboutClient>[0]>;
        return: Awaited<ReturnType<GetLandingAboutClient>>;
    };
};
export function getLandingAboutQueryOptions<TData = GetLandingAbout["response"]>(options: GetLandingAbout["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingAbout["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingAbout["error"]>({
                method: "get",
                url: `/landing/about`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary about
 * @link /landing/about
 */
export function useGetLandingAbout<TData = GetLandingAbout["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingAbout["error"]>;
    client?: GetLandingAbout["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingAbout["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/about`;
    const query = useSWR<TData, GetLandingAbout["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingAboutQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}