import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminPermissionGroupsQueryResponse, GetAdminPermissionGroupsQueryParams } from "../../types/GetAdminPermissionGroups";

 type GetAdminPermissionGroupsClient = typeof client<GetAdminPermissionGroupsQueryResponse, never, never>;
type GetAdminPermissionGroups = {
    data: GetAdminPermissionGroupsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminPermissionGroupsQueryParams;
    headerParams: never;
    response: GetAdminPermissionGroupsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminPermissionGroupsClient>[0]>;
        return: Awaited<ReturnType<GetAdminPermissionGroupsClient>>;
    };
};
export function getAdminPermissionGroupsQueryOptions<TData = GetAdminPermissionGroups["response"]>(params?: GetAdminPermissionGroups["queryParams"], options: GetAdminPermissionGroups["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminPermissionGroups["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminPermissionGroups["error"]>({
                method: "get",
                url: `/admin/permission-groups`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /admin/permission-groups
 */
export function useGetAdminPermissionGroups<TData = GetAdminPermissionGroups["response"]>(params?: GetAdminPermissionGroups["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminPermissionGroups["error"]>;
    client?: GetAdminPermissionGroups["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminPermissionGroups["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/permission-groups`;
    const query = useSWR<TData, GetAdminPermissionGroups["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminPermissionGroupsQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}