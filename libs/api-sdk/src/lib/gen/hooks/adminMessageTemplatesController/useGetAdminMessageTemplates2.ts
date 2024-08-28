import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminMessageTemplates2QueryResponse, GetAdminMessageTemplates2HeaderParams } from "../../types/GetAdminMessageTemplates2";

 type GetAdminMessageTemplates2Client = typeof client<GetAdminMessageTemplates2QueryResponse, never, never>;
type GetAdminMessageTemplates2 = {
    data: GetAdminMessageTemplates2QueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetAdminMessageTemplates2HeaderParams;
    response: GetAdminMessageTemplates2QueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminMessageTemplates2Client>[0]>;
        return: Awaited<ReturnType<GetAdminMessageTemplates2Client>>;
    };
};
export function getAdminMessageTemplates2QueryOptions<TData = GetAdminMessageTemplates2["response"]>(headers?: GetAdminMessageTemplates2["headerParams"], options: GetAdminMessageTemplates2["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminMessageTemplates2["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminMessageTemplates2["error"]>({
                method: "get",
                url: `/admin/message-templates/2`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary GET Specific Message Template
 * @link /admin/message-templates/2
 */
export function useGetAdminMessageTemplates2<TData = GetAdminMessageTemplates2["response"]>(headers?: GetAdminMessageTemplates2["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminMessageTemplates2["error"]>;
    client?: GetAdminMessageTemplates2["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminMessageTemplates2["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/message-templates/2`;
    const query = useSWR<TData, GetAdminMessageTemplates2["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getAdminMessageTemplates2QueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}