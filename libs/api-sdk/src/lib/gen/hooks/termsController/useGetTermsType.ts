import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetTermsTypeQueryResponse, GetTermsTypePathParams } from "../../types/GetTermsType";

 type GetTermsTypeClient = typeof client<GetTermsTypeQueryResponse, never, never>;
type GetTermsType = {
    data: GetTermsTypeQueryResponse;
    error: never;
    request: never;
    pathParams: GetTermsTypePathParams;
    queryParams: never;
    headerParams: never;
    response: GetTermsTypeQueryResponse;
    client: {
        parameters: Partial<Parameters<GetTermsTypeClient>[0]>;
        return: Awaited<ReturnType<GetTermsTypeClient>>;
    };
};
export function getTermsTypeQueryOptions<TData = GetTermsType["response"]>(type: GetTermsTypePathParams["type"], options: GetTermsType["client"]["parameters"] = {}): SWRConfiguration<TData, GetTermsType["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetTermsType["error"]>({
                method: "get",
                url: `/terms/${type}`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary get term by type
 * @link /terms/:type
 */
export function useGetTermsType<TData = GetTermsType["response"]>(type: GetTermsTypePathParams["type"], options?: {
    query?: SWRConfiguration<TData, GetTermsType["error"]>;
    client?: GetTermsType["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetTermsType["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/terms/${type}`;
    const query = useSWR<TData, GetTermsType["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getTermsTypeQueryOptions<TData>(type, clientOptions),
        ...queryOptions
    });
    return query;
}