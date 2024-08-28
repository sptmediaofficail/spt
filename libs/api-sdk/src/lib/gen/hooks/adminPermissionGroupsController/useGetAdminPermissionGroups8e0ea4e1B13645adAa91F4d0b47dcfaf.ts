import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfafQueryResponse } from "../../types/GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf";

 type GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfafClient = typeof client<GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfafQueryResponse, never, never>;
type GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf = {
    data: GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfafQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfafQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfafClient>[0]>;
        return: Awaited<ReturnType<GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfafClient>>;
    };
};
export function getAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfafQueryOptions<TData = GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf["response"]>(options: GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf["error"]>({
                method: "get",
                url: `/admin/permission-groups/8e0ea4e1-b136-45ad-aa91-f4d0b47dcfaf`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary single
 * @link /admin/permission-groups/8e0ea4e1-b136-45ad-aa91-f4d0b47dcfaf
 */
export function useGetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf<TData = GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf["response"]>(options?: {
    query?: SWRConfiguration<TData, GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf["error"]>;
    client?: GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/permission-groups/8e0ea4e1-b136-45ad-aa91-f4d0b47dcfaf`;
    const query = useSWR<TData, GetAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfaf["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getAdminPermissionGroups8e0ea4e1B13645adAa91F4d0b47dcfafQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}