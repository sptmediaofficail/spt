import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7QueryResponse, GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7HeaderParams } from "../../types/GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7";

 type GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7Client = typeof client<GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7QueryResponse, never, never>;
type GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7 = {
    data: GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7QueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7HeaderParams;
    response: GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7QueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7Client>[0]>;
        return: Awaited<ReturnType<GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7Client>>;
    };
};
export function getAdminUsers72d5778fB67b4e97B4e2F98f695162a7QueryOptions<TData = GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7["response"]>(headers?: GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7["headerParams"], options: GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7["error"]>({
                method: "get",
                url: `/admin/users/72d5778f-b67b-4e97-b4e2-f98f695162a7`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary single
 * @link /admin/users/72d5778f-b67b-4e97-b4e2-f98f695162a7
 */
export function useGetAdminUsers72d5778fB67b4e97B4e2F98f695162a7<TData = GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7["response"]>(headers?: GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7["error"]>;
    client?: GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/users/72d5778f-b67b-4e97-b4e2-f98f695162a7`;
    const query = useSWR<TData, GetAdminUsers72d5778fB67b4e97B4e2F98f695162a7["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getAdminUsers72d5778fB67b4e97B4e2F98f695162a7QueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}