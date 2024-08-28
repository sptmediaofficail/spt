import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminMessagesQueryResponse, GetAdminMessagesHeaderParams } from "../../types/GetAdminMessages";

 type GetAdminMessagesClient = typeof client<GetAdminMessagesQueryResponse, never, never>;
type GetAdminMessages = {
    data: GetAdminMessagesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetAdminMessagesHeaderParams;
    response: GetAdminMessagesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminMessagesClient>[0]>;
        return: Awaited<ReturnType<GetAdminMessagesClient>>;
    };
};
export function getAdminMessagesQueryOptions<TData = GetAdminMessages["response"]>(headers?: GetAdminMessages["headerParams"], options: GetAdminMessages["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminMessages["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminMessages["error"]>({
                method: "get",
                url: `/admin/messages`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary Get All Unreplied Messages
 * @link /admin/messages
 */
export function useGetAdminMessages<TData = GetAdminMessages["response"]>(headers?: GetAdminMessages["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminMessages["error"]>;
    client?: GetAdminMessages["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminMessages["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/messages`;
    const query = useSWR<TData, GetAdminMessages["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getAdminMessagesQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}