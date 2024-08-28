import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetProviderF84fd31930e54ea49c2881b822045ebcQueryResponse, GetProviderF84fd31930e54ea49c2881b822045ebcHeaderParams } from "../../types/GetProviderF84fd31930e54ea49c2881b822045ebc";

 type GetProviderF84fd31930e54ea49c2881b822045ebcClient = typeof client<GetProviderF84fd31930e54ea49c2881b822045ebcQueryResponse, never, never>;
type GetProviderF84fd31930e54ea49c2881b822045ebc = {
    data: GetProviderF84fd31930e54ea49c2881b822045ebcQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetProviderF84fd31930e54ea49c2881b822045ebcHeaderParams;
    response: GetProviderF84fd31930e54ea49c2881b822045ebcQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProviderF84fd31930e54ea49c2881b822045ebcClient>[0]>;
        return: Awaited<ReturnType<GetProviderF84fd31930e54ea49c2881b822045ebcClient>>;
    };
};
export function getProviderF84fd31930e54ea49c2881b822045ebcQueryOptions<TData = GetProviderF84fd31930e54ea49c2881b822045ebc["response"]>(headers?: GetProviderF84fd31930e54ea49c2881b822045ebc["headerParams"], options: GetProviderF84fd31930e54ea49c2881b822045ebc["client"]["parameters"] = {}): SWRConfiguration<TData, GetProviderF84fd31930e54ea49c2881b822045ebc["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetProviderF84fd31930e54ea49c2881b822045ebc["error"]>({
                method: "get",
                url: `/provider/f84fd319-30e5-4ea4-9c28-81b822045ebc`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary single provider
 * @link /provider/f84fd319-30e5-4ea4-9c28-81b822045ebc
 */
export function useGetProviderF84fd31930e54ea49c2881b822045ebc<TData = GetProviderF84fd31930e54ea49c2881b822045ebc["response"]>(headers?: GetProviderF84fd31930e54ea49c2881b822045ebc["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetProviderF84fd31930e54ea49c2881b822045ebc["error"]>;
    client?: GetProviderF84fd31930e54ea49c2881b822045ebc["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetProviderF84fd31930e54ea49c2881b822045ebc["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/f84fd319-30e5-4ea4-9c28-81b822045ebc`;
    const query = useSWR<TData, GetProviderF84fd31930e54ea49c2881b822045ebc["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getProviderF84fd31930e54ea49c2881b822045ebcQueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}