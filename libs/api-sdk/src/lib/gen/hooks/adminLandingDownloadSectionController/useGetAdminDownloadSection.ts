import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminDownloadSectionQueryResponse } from "../../types/GetAdminDownloadSection";

 type GetAdminDownloadSectionClient = typeof client<GetAdminDownloadSectionQueryResponse, never, never>;
type GetAdminDownloadSection = {
    data: GetAdminDownloadSectionQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetAdminDownloadSectionQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminDownloadSectionClient>[0]>;
        return: Awaited<ReturnType<GetAdminDownloadSectionClient>>;
    };
};
export function getAdminDownloadSectionQueryOptions<TData = GetAdminDownloadSection["response"]>(options: GetAdminDownloadSection["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminDownloadSection["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminDownloadSection["error"]>({
                method: "get",
                url: `/admin/download_section`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary list
 * @link /admin/download_section
 */
export function useGetAdminDownloadSection<TData = GetAdminDownloadSection["response"]>(options?: {
    query?: SWRConfiguration<TData, GetAdminDownloadSection["error"]>;
    client?: GetAdminDownloadSection["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminDownloadSection["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/download_section`;
    const query = useSWR<TData, GetAdminDownloadSection["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getAdminDownloadSectionQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}