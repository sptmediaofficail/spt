import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetPagesTypeQueryResponse, GetPagesTypePathParams } from "../../types/GetPagesType";

 type GetPagesTypeClient = typeof client<GetPagesTypeQueryResponse, never, never>;
type GetPagesType = {
    data: GetPagesTypeQueryResponse;
    error: never;
    request: never;
    pathParams: GetPagesTypePathParams;
    queryParams: never;
    headerParams: never;
    response: GetPagesTypeQueryResponse;
    client: {
        parameters: Partial<Parameters<GetPagesTypeClient>[0]>;
        return: Awaited<ReturnType<GetPagesTypeClient>>;
    };
};
export function getPagesTypeQueryOptions<TData = GetPagesType["response"]>(type: GetPagesTypePathParams["type"], options: GetPagesType["client"]["parameters"] = {}): SWRConfiguration<TData, GetPagesType["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetPagesType["error"]>({
                method: "get",
                url: `/pages/${type}`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary get page by type
 * @link /pages/:type
 */
export function useGetPagesType<TData = GetPagesType["response"]>(type: GetPagesTypePathParams["type"], options?: {
    query?: SWRConfiguration<TData, GetPagesType["error"]>;
    client?: GetPagesType["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetPagesType["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/pages/${type}`;
    const query = useSWR<TData, GetPagesType["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getPagesTypeQueryOptions<TData>(type, clientOptions),
        ...queryOptions
    });
    return query;
}