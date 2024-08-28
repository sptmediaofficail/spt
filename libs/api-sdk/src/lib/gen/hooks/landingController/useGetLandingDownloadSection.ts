import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingDownloadSectionQueryResponse } from "../../types/GetLandingDownloadSection";

 type GetLandingDownloadSectionClient = typeof client<GetLandingDownloadSectionQueryResponse, never, never>;
type GetLandingDownloadSection = {
    data: GetLandingDownloadSectionQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingDownloadSectionQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingDownloadSectionClient>[0]>;
        return: Awaited<ReturnType<GetLandingDownloadSectionClient>>;
    };
};
export function getLandingDownloadSectionQueryOptions<TData = GetLandingDownloadSection["response"]>(options: GetLandingDownloadSection["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingDownloadSection["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingDownloadSection["error"]>({
                method: "get",
                url: `/landing/download_section`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary download section
 * @link /landing/download_section
 */
export function useGetLandingDownloadSection<TData = GetLandingDownloadSection["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingDownloadSection["error"]>;
    client?: GetLandingDownloadSection["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingDownloadSection["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/download_section`;
    const query = useSWR<TData, GetLandingDownloadSection["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingDownloadSectionQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}