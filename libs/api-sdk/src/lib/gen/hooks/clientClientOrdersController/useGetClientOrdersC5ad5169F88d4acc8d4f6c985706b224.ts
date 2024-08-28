import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224QueryResponse, GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224HeaderParams } from "../../types/GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224";

 type GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224Client = typeof client<GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224QueryResponse, never, never>;
type GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224 = {
    data: GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224QueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224HeaderParams;
    response: GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224QueryResponse;
    client: {
        parameters: Partial<Parameters<GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224Client>[0]>;
        return: Awaited<ReturnType<GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224Client>>;
    };
};
export function getClientOrdersC5ad5169F88d4acc8d4f6c985706b224QueryOptions<TData = GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224["response"]>(headers?: GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224["headerParams"], options: GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224["client"]["parameters"] = {}): SWRConfiguration<TData, GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224["error"]>({
                method: "get",
                url: `/client/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary details
 * @link /client/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224
 */
export function useGetClientOrdersC5ad5169F88d4acc8d4f6c985706b224<TData = GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224["response"]>(headers?: GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224["error"]>;
    client?: GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/client/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224`;
    const query = useSWR<TData, GetClientOrdersC5ad5169F88d4acc8d4f6c985706b224["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getClientOrdersC5ad5169F88d4acc8d4f6c985706b224QueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}