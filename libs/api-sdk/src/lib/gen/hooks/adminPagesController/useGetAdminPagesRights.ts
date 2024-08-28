import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminPagesRightsQueryResponse } from "../../types/GetAdminPagesRights";

 type GetAdminPagesRightsClient = typeof client<GetAdminPagesRightsQueryResponse, never, never>;
type GetAdminPagesRights = {
    data: GetAdminPagesRightsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetAdminPagesRightsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminPagesRightsClient>[0]>;
        return: Awaited<ReturnType<GetAdminPagesRightsClient>>;
    };
};
export function getAdminPagesRightsQueryOptions<TData = GetAdminPagesRights["response"]>(options: GetAdminPagesRights["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminPagesRights["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminPagesRights["error"]>({
                method: "get",
                url: `/admin/pages/rights`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary get page by type
 * @link /admin/pages/rights
 */
export function useGetAdminPagesRights<TData = GetAdminPagesRights["response"]>(options?: {
    query?: SWRConfiguration<TData, GetAdminPagesRights["error"]>;
    client?: GetAdminPagesRights["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminPagesRights["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/pages/rights`;
    const query = useSWR<TData, GetAdminPagesRights["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getAdminPagesRightsQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}