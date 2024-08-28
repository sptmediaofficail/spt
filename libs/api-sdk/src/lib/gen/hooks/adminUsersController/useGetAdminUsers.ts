import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminUsersQueryResponse, GetAdminUsersQueryParams, GetAdminUsersHeaderParams } from "../../types/GetAdminUsers";

 type GetAdminUsersClient = typeof client<GetAdminUsersQueryResponse, never, never>;
type GetAdminUsers = {
    data: GetAdminUsersQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminUsersQueryParams;
    headerParams: GetAdminUsersHeaderParams;
    response: GetAdminUsersQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminUsersClient>[0]>;
        return: Awaited<ReturnType<GetAdminUsersClient>>;
    };
};
export function getAdminUsersQueryOptions<TData = GetAdminUsers["response"]>(params?: GetAdminUsers["queryParams"], headers?: GetAdminUsers["headerParams"], options: GetAdminUsers["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminUsers["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminUsers["error"]>({
                method: "get",
                url: `/admin/users`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary index
 * @link /admin/users
 */
export function useGetAdminUsers<TData = GetAdminUsers["response"]>(params?: GetAdminUsers["queryParams"], headers?: GetAdminUsers["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminUsers["error"]>;
    client?: GetAdminUsers["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminUsers["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/users`;
    const query = useSWR<TData, GetAdminUsers["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminUsersQueryOptions<TData>(params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}