import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminMessageTemplatesQueryResponse, GetAdminMessageTemplatesQueryParams, GetAdminMessageTemplatesHeaderParams } from "../../types/GetAdminMessageTemplates";

 type GetAdminMessageTemplatesClient = typeof client<GetAdminMessageTemplatesQueryResponse, never, never>;
type GetAdminMessageTemplates = {
    data: GetAdminMessageTemplatesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminMessageTemplatesQueryParams;
    headerParams: GetAdminMessageTemplatesHeaderParams;
    response: GetAdminMessageTemplatesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminMessageTemplatesClient>[0]>;
        return: Awaited<ReturnType<GetAdminMessageTemplatesClient>>;
    };
};
export function getAdminMessageTemplatesQueryOptions<TData = GetAdminMessageTemplates["response"]>(params?: GetAdminMessageTemplates["queryParams"], headers?: GetAdminMessageTemplates["headerParams"], options: GetAdminMessageTemplates["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminMessageTemplates["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminMessageTemplates["error"]>({
                method: "get",
                url: `/admin/message-templates`,
                params,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary GET All Message Templates
 * @link /admin/message-templates
 */
export function useGetAdminMessageTemplates<TData = GetAdminMessageTemplates["response"]>(params?: GetAdminMessageTemplates["queryParams"], headers?: GetAdminMessageTemplates["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminMessageTemplates["error"]>;
    client?: GetAdminMessageTemplates["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminMessageTemplates["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/message-templates`;
    const query = useSWR<TData, GetAdminMessageTemplates["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminMessageTemplatesQueryOptions<TData>(params, headers, clientOptions),
        ...queryOptions
    });
    return query;
}