import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminHowHelpQueryResponse, GetAdminHowHelpQueryParams } from "../../types/GetAdminHowHelp";

 type GetAdminHowHelpClient = typeof client<GetAdminHowHelpQueryResponse, never, never>;
type GetAdminHowHelp = {
    data: GetAdminHowHelpQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminHowHelpQueryParams;
    headerParams: never;
    response: GetAdminHowHelpQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminHowHelpClient>[0]>;
        return: Awaited<ReturnType<GetAdminHowHelpClient>>;
    };
};
export function getAdminHowHelpQueryOptions<TData = GetAdminHowHelp["response"]>(params?: GetAdminHowHelp["queryParams"], options: GetAdminHowHelp["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminHowHelp["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminHowHelp["error"]>({
                method: "get",
                url: `/admin/how_help`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary list
 * @link /admin/how_help
 */
export function useGetAdminHowHelp<TData = GetAdminHowHelp["response"]>(params?: GetAdminHowHelp["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminHowHelp["error"]>;
    client?: GetAdminHowHelp["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminHowHelp["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/how_help`;
    const query = useSWR<TData, GetAdminHowHelp["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminHowHelpQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}