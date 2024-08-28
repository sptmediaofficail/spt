import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetPagesHowWeHelpQueryResponse } from "../../types/GetPagesHowWeHelp";

 type GetPagesHowWeHelpClient = typeof client<GetPagesHowWeHelpQueryResponse, never, never>;
type GetPagesHowWeHelp = {
    data: GetPagesHowWeHelpQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetPagesHowWeHelpQueryResponse;
    client: {
        parameters: Partial<Parameters<GetPagesHowWeHelpClient>[0]>;
        return: Awaited<ReturnType<GetPagesHowWeHelpClient>>;
    };
};
export function getPagesHowWeHelpQueryOptions<TData = GetPagesHowWeHelp["response"]>(options: GetPagesHowWeHelp["client"]["parameters"] = {}): SWRConfiguration<TData, GetPagesHowWeHelp["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetPagesHowWeHelp["error"]>({
                method: "get",
                url: `/pages/how_we_help`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary get page by type
 * @link /pages/how_we_help
 */
export function useGetPagesHowWeHelp<TData = GetPagesHowWeHelp["response"]>(options?: {
    query?: SWRConfiguration<TData, GetPagesHowWeHelp["error"]>;
    client?: GetPagesHowWeHelp["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetPagesHowWeHelp["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/pages/how_we_help`;
    const query = useSWR<TData, GetPagesHowWeHelp["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getPagesHowWeHelpQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}