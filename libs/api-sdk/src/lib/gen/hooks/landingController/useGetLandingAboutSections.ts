import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingAboutSectionsQueryResponse } from "../../types/GetLandingAboutSections";

 type GetLandingAboutSectionsClient = typeof client<GetLandingAboutSectionsQueryResponse, never, never>;
type GetLandingAboutSections = {
    data: GetLandingAboutSectionsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingAboutSectionsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingAboutSectionsClient>[0]>;
        return: Awaited<ReturnType<GetLandingAboutSectionsClient>>;
    };
};
export function getLandingAboutSectionsQueryOptions<TData = GetLandingAboutSections["response"]>(options: GetLandingAboutSections["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingAboutSections["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingAboutSections["error"]>({
                method: "get",
                url: `/landing/about_sections`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary about sections
 * @link /landing/about_sections
 */
export function useGetLandingAboutSections<TData = GetLandingAboutSections["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingAboutSections["error"]>;
    client?: GetLandingAboutSections["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingAboutSections["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/about_sections`;
    const query = useSWR<TData, GetLandingAboutSections["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingAboutSectionsQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}