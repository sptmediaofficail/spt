import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetClientServicesQueryResponse, GetClientServicesHeaderParams } from "../../types/GetClientServices";

 type GetClientServicesClient = typeof client<GetClientServicesQueryResponse, never, never>;
type GetClientServices = {
    data: GetClientServicesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetClientServicesHeaderParams;
    response: GetClientServicesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetClientServicesClient>[0]>;
        return: Awaited<ReturnType<GetClientServicesClient>>;
    };
};
export function getClientServicesQueryOptions<TData = GetClientServices["response"]>(headers?: GetClientServices["headerParams"], options: GetClientServices["client"]["parameters"] = {}): SWRConfiguration<TData, GetClientServices["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetClientServices["error"]>({
                method: "get",
                url: `/client/services`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary list
 * @link /client/services
 */
export function useGetClientServices<TData = GetClientServices["response"]>(headers?: GetClientServices["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetClientServices["error"]>;
    client?: GetClientServices["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetClientServices["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/client/services`;
    const query = useSWR<TData, GetClientServices["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getClientServicesQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}