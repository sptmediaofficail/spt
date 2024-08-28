import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetSettingCallsQueryResponse } from "../../types/GetSettingCalls";

 type GetSettingCallsClient = typeof client<GetSettingCallsQueryResponse, never, never>;
type GetSettingCalls = {
    data: GetSettingCallsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetSettingCallsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetSettingCallsClient>[0]>;
        return: Awaited<ReturnType<GetSettingCallsClient>>;
    };
};
export function getSettingCallsQueryOptions<TData = GetSettingCalls["response"]>(options: GetSettingCalls["client"]["parameters"] = {}): SWRConfiguration<TData, GetSettingCalls["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetSettingCalls["error"]>({
                method: "get",
                url: `/setting/calls`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary calls
 * @link /setting/calls
 */
export function useGetSettingCalls<TData = GetSettingCalls["response"]>(options?: {
    query?: SWRConfiguration<TData, GetSettingCalls["error"]>;
    client?: GetSettingCalls["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetSettingCalls["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/setting/calls`;
    const query = useSWR<TData, GetSettingCalls["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getSettingCallsQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}