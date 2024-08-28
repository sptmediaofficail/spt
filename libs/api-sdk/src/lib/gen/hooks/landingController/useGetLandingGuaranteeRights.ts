import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingGuaranteeRightsQueryResponse } from "../../types/GetLandingGuaranteeRights";

 type GetLandingGuaranteeRightsClient = typeof client<GetLandingGuaranteeRightsQueryResponse, never, never>;
type GetLandingGuaranteeRights = {
    data: GetLandingGuaranteeRightsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingGuaranteeRightsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingGuaranteeRightsClient>[0]>;
        return: Awaited<ReturnType<GetLandingGuaranteeRightsClient>>;
    };
};
export function getLandingGuaranteeRightsQueryOptions<TData = GetLandingGuaranteeRights["response"]>(options: GetLandingGuaranteeRights["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingGuaranteeRights["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingGuaranteeRights["error"]>({
                method: "get",
                url: `/landing/guarantee_rights`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary guarantee_rights
 * @link /landing/guarantee_rights
 */
export function useGetLandingGuaranteeRights<TData = GetLandingGuaranteeRights["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingGuaranteeRights["error"]>;
    client?: GetLandingGuaranteeRights["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingGuaranteeRights["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/guarantee_rights`;
    const query = useSWR<TData, GetLandingGuaranteeRights["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingGuaranteeRightsQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}