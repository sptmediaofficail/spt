import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetSettingQueryResponse, GetSettingQueryParams } from "../../types/GetSetting";

 type GetSettingClient = typeof client<GetSettingQueryResponse, never, never>;
type GetSetting = {
    data: GetSettingQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetSettingQueryParams;
    headerParams: never;
    response: GetSettingQueryResponse;
    client: {
        parameters: Partial<Parameters<GetSettingClient>[0]>;
        return: Awaited<ReturnType<GetSettingClient>>;
    };
};
export function getSettingQueryOptions<TData = GetSetting["response"]>(params?: GetSetting["queryParams"], options: GetSetting["client"]["parameters"] = {}): SWRConfiguration<TData, GetSetting["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetSetting["error"]>({
                method: "get",
                url: `/setting`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary get by section
 * @link /setting
 */
export function useGetSetting<TData = GetSetting["response"]>(params?: GetSetting["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetSetting["error"]>;
    client?: GetSetting["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetSetting["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/setting`;
    const query = useSWR<TData, GetSetting["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getSettingQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}