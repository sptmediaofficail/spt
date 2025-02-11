import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminTermsTypeQueryResponse, GetAdminTermsTypePathParams, GetAdminTermsTypeQueryParams } from "../../types/GetAdminTermsType";

 type GetAdminTermsTypeClient = typeof client<GetAdminTermsTypeQueryResponse, never, never>;
type GetAdminTermsType = {
    data: GetAdminTermsTypeQueryResponse;
    error: never;
    request: never;
    pathParams: GetAdminTermsTypePathParams;
    queryParams: GetAdminTermsTypeQueryParams;
    headerParams: never;
    response: GetAdminTermsTypeQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminTermsTypeClient>[0]>;
        return: Awaited<ReturnType<GetAdminTermsTypeClient>>;
    };
};
export function getAdminTermsTypeQueryOptions<TData = GetAdminTermsType["response"]>(type: GetAdminTermsTypePathParams["type"], params?: GetAdminTermsType["queryParams"], options: GetAdminTermsType["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminTermsType["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminTermsType["error"]>({
                method: "get",
                url: `/admin/terms/${type}`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary get terms by type
 * @link /admin/terms/:type
 */
export function useGetAdminTermsType<TData = GetAdminTermsType["response"]>(type: GetAdminTermsTypePathParams["type"], params?: GetAdminTermsType["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminTermsType["error"]>;
    client?: GetAdminTermsType["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminTermsType["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/terms/${type}`;
    const query = useSWR<TData, GetAdminTermsType["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminTermsTypeQueryOptions<TData>(type, params, clientOptions),
        ...queryOptions
    });
    return query;
}