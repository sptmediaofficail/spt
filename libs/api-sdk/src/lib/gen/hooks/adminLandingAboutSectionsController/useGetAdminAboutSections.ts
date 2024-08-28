import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminAboutSectionsQueryResponse, GetAdminAboutSectionsQueryParams } from "../../types/GetAdminAboutSections";

 type GetAdminAboutSectionsClient = typeof client<GetAdminAboutSectionsQueryResponse, never, never>;
type GetAdminAboutSections = {
    data: GetAdminAboutSectionsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminAboutSectionsQueryParams;
    headerParams: never;
    response: GetAdminAboutSectionsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminAboutSectionsClient>[0]>;
        return: Awaited<ReturnType<GetAdminAboutSectionsClient>>;
    };
};
export function getAdminAboutSectionsQueryOptions<TData = GetAdminAboutSections["response"]>(params?: GetAdminAboutSections["queryParams"], options: GetAdminAboutSections["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminAboutSections["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminAboutSections["error"]>({
                method: "get",
                url: `/admin/about_sections`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary list
 * @link /admin/about_sections
 */
export function useGetAdminAboutSections<TData = GetAdminAboutSections["response"]>(params?: GetAdminAboutSections["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminAboutSections["error"]>;
    client?: GetAdminAboutSections["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminAboutSections["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/about_sections`;
    const query = useSWR<TData, GetAdminAboutSections["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminAboutSectionsQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}