import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetVinVinQueryResponse, GetVinVinPathParams, GetVinVinHeaderParams } from "../../types/GetVinVin";

 type GetVinVinClient = typeof client<GetVinVinQueryResponse, never, never>;
type GetVinVin = {
    data: GetVinVinQueryResponse;
    error: never;
    request: never;
    pathParams: GetVinVinPathParams;
    queryParams: never;
    headerParams: GetVinVinHeaderParams;
    response: GetVinVinQueryResponse;
    client: {
        parameters: Partial<Parameters<GetVinVinClient>[0]>;
        return: Awaited<ReturnType<GetVinVinClient>>;
    };
};
export function getVinVinQueryOptions<TData = GetVinVin["response"]>(vin: GetVinVinPathParams["vin"], headers?: GetVinVin["headerParams"], options: GetVinVin["client"]["parameters"] = {}): SWRConfiguration<TData, GetVinVin["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetVinVin["error"]>({
                method: "get",
                url: `/vin/${vin}`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary Get Data
 * @link /vin/:vin
 */
export function useGetVinVin<TData = GetVinVin["response"]>(vin: GetVinVinPathParams["vin"], headers?: GetVinVin["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetVinVin["error"]>;
    client?: GetVinVin["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetVinVin["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/vin/${vin}`;
    const query = useSWR<TData, GetVinVin["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getVinVinQueryOptions<TData>(vin, headers, clientOptions),
        ...queryOptions
    });
    return query;
}