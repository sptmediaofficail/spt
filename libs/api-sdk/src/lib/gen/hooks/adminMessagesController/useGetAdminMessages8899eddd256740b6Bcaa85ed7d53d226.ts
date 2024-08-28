import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226QueryResponse, GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226HeaderParams } from "../../types/GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226";

 type GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226Client = typeof client<GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226QueryResponse, never, never>;
type GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226 = {
    data: GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226QueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226HeaderParams;
    response: GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226QueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226Client>[0]>;
        return: Awaited<ReturnType<GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226Client>>;
    };
};
export function getAdminMessages8899eddd256740b6Bcaa85ed7d53d226QueryOptions<TData = GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226["response"]>(headers?: GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226["headerParams"], options: GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226["error"]>({
                method: "get",
                url: `/admin/messages/8899eddd-2567-40b6-bcaa-85ed7d53d226`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary Get a specific Unreplied Messages
 * @link /admin/messages/8899eddd-2567-40b6-bcaa-85ed7d53d226
 */
export function useGetAdminMessages8899eddd256740b6Bcaa85ed7d53d226<TData = GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226["response"]>(headers?: GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226["error"]>;
    client?: GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/messages/8899eddd-2567-40b6-bcaa-85ed7d53d226`;
    const query = useSWR<TData, GetAdminMessages8899eddd256740b6Bcaa85ed7d53d226["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getAdminMessages8899eddd256740b6Bcaa85ed7d53d226QueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}