import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingHowHelpQueryResponse } from "../../types/GetLandingHowHelp";

 type GetLandingHowHelpClient = typeof client<GetLandingHowHelpQueryResponse, never, never>;
type GetLandingHowHelp = {
    data: GetLandingHowHelpQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingHowHelpQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingHowHelpClient>[0]>;
        return: Awaited<ReturnType<GetLandingHowHelpClient>>;
    };
};
export function getLandingHowHelpQueryOptions<TData = GetLandingHowHelp["response"]>(options: GetLandingHowHelp["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingHowHelp["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingHowHelp["error"]>({
                method: "get",
                url: `/landing/how_help`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary how_help
 * @link /landing/how_help
 */
export function useGetLandingHowHelp<TData = GetLandingHowHelp["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingHowHelp["error"]>;
    client?: GetLandingHowHelp["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingHowHelp["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/how_help`;
    const query = useSWR<TData, GetLandingHowHelp["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingHowHelpQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}