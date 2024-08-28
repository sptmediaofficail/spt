import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminPermissionsQueryResponse } from "../../types/GetAdminPermissions";

 type GetAdminPermissionsClient = typeof client<GetAdminPermissionsQueryResponse, never, never>;
type GetAdminPermissions = {
    data: GetAdminPermissionsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetAdminPermissionsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminPermissionsClient>[0]>;
        return: Awaited<ReturnType<GetAdminPermissionsClient>>;
    };
};
export function getAdminPermissionsQueryOptions<TData = GetAdminPermissions["response"]>(options: GetAdminPermissions["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminPermissions["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminPermissions["error"]>({
                method: "get",
                url: `/admin/permissions`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /admin/permissions
 */
export function useGetAdminPermissions<TData = GetAdminPermissions["response"]>(options?: {
    query?: SWRConfiguration<TData, GetAdminPermissions["error"]>;
    client?: GetAdminPermissions["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminPermissions["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/permissions`;
    const query = useSWR<TData, GetAdminPermissions["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getAdminPermissionsQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}