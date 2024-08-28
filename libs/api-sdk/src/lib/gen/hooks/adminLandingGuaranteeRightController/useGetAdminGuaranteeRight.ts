import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetAdminGuaranteeRightQueryResponse, GetAdminGuaranteeRightQueryParams } from "../../types/GetAdminGuaranteeRight";

 type GetAdminGuaranteeRightClient = typeof client<GetAdminGuaranteeRightQueryResponse, never, never>;
type GetAdminGuaranteeRight = {
    data: GetAdminGuaranteeRightQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: GetAdminGuaranteeRightQueryParams;
    headerParams: never;
    response: GetAdminGuaranteeRightQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAdminGuaranteeRightClient>[0]>;
        return: Awaited<ReturnType<GetAdminGuaranteeRightClient>>;
    };
};
export function getAdminGuaranteeRightQueryOptions<TData = GetAdminGuaranteeRight["response"]>(params?: GetAdminGuaranteeRight["queryParams"], options: GetAdminGuaranteeRight["client"]["parameters"] = {}): SWRConfiguration<TData, GetAdminGuaranteeRight["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetAdminGuaranteeRight["error"]>({
                method: "get",
                url: `/admin/guarantee_right`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary list
 * @link /admin/guarantee_right
 */
export function useGetAdminGuaranteeRight<TData = GetAdminGuaranteeRight["response"]>(params?: GetAdminGuaranteeRight["queryParams"], options?: {
    query?: SWRConfiguration<TData, GetAdminGuaranteeRight["error"]>;
    client?: GetAdminGuaranteeRight["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetAdminGuaranteeRight["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/guarantee_right`;
    const query = useSWR<TData, GetAdminGuaranteeRight["error"], [
        typeof url,
        typeof params
    ] | null>(shouldFetch ? [url, params] : null, {
        ...getAdminGuaranteeRightQueryOptions<TData>(params, clientOptions),
        ...queryOptions
    });
    return query;
}