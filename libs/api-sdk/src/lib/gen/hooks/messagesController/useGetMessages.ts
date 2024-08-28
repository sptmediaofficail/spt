import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetMessagesQueryResponse, GetMessagesHeaderParams } from "../../types/GetMessages";

 type GetMessagesClient = typeof client<GetMessagesQueryResponse, never, never>;
type GetMessages = {
    data: GetMessagesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetMessagesHeaderParams;
    response: GetMessagesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetMessagesClient>[0]>;
        return: Awaited<ReturnType<GetMessagesClient>>;
    };
};
export function getMessagesQueryOptions<TData = GetMessages["response"]>(headers?: GetMessages["headerParams"], options: GetMessages["client"]["parameters"] = {}): SWRConfiguration<TData, GetMessages["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetMessages["error"]>({
                method: "get",
                url: `/messages/`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary Get All Messages of the Logged In User
 * @link /messages/
 */
export function useGetMessages<TData = GetMessages["response"]>(headers?: GetMessages["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetMessages["error"]>;
    client?: GetMessages["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetMessages["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/messages/`;
    const query = useSWR<TData, GetMessages["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getMessagesQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}