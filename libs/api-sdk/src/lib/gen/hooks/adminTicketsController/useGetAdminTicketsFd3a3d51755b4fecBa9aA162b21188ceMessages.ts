import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryResponse, GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryParams } from "../../types/GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages";

 type GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesClient = typeof client<GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryResponse, never, never>;
type GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages = {
    data: GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryParams;
    headerParams: never;
    response: GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesClient>[0]>;
        return: Awaited<ReturnType<GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesClient>>;
    };
};
export function getAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryOptions<TData = GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages["response"]>(params?: GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages["queryParams"], options: GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages["error"]>({
                method: "get",
                url: `/admin/tickets/fd3a3d51-755b-4fec-ba9a-a162b21188ce/messages`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary messages
 * @link /admin/tickets/fd3a3d51-755b-4fec-ba9a-a162b21188ce/messages
 */
export function useGetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages<TData = GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages["response"]>(params?: GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages["error"]>;
    client?: GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/tickets/fd3a3d51-755b-4fec-ba9a-a162b21188ce/messages`;
    const query = useSWR<TData, GetAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessages["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminTicketsFd3a3d51755b4fecBa9aA162b21188ceMessagesQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}