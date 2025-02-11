import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminPagesTypeQueryResponse, GetAdminPagesTypePathParams } from "../../types/GetAdminPagesType";

 type GetAdminPagesTypeClient = typeof client<GetAdminPagesTypeQueryResponse, never, never>;
type GetAdminPagesType = {
    data: GetAdminPagesTypeQueryResponse;
    error: never;
    request: never;
    pathParams: GetAdminPagesTypePathParams;
    queryParams: never;
    headerParams: never;
    response: GetAdminPagesTypeQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminPagesTypeClient>[0]>;
        return: Awaited<ReturnType<GetAdminPagesTypeClient>>;
    };
};
export function getAdminPagesTypeQueryOptions<TData = GetAdminPagesType["response"]>(type: GetAdminPagesTypePathParams["type"], options: GetAdminPagesType["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminPagesType["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminPagesType["error"]>({
                method: "get",
                url: `/admin/pages/${type}`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary get page by type
 * @link /admin/pages/:type
 */
export function useGetAdminPagesType<TData = GetAdminPagesType["response"]>(type: GetAdminPagesTypePathParams["type"], options?: {
    query?: SWRConfiguration<TData, GetAdminPagesType["error"]>;
    client?: GetAdminPagesType["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminPagesType["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/pages/${type}`;
    const query = useSWR<TData, GetAdminPagesType["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getAdminPagesTypeQueryOptions<TData>(type, clientOptions),
        ...queryOptions
    });
    return query;
}