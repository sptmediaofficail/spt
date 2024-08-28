import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingPlansQueryResponse } from "../../types/GetLandingPlans";

 type GetLandingPlansClient = typeof client<GetLandingPlansQueryResponse, never, never>;
type GetLandingPlans = {
    data: GetLandingPlansQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingPlansQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingPlansClient>[0]>;
        return: Awaited<ReturnType<GetLandingPlansClient>>;
    };
};
export function getLandingPlansQueryOptions<TData = GetLandingPlans["response"]>(options: GetLandingPlans["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingPlans["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingPlans["error"]>({
                method: "get",
                url: `/landing/plans`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary plans
 * @link /landing/plans
 */
export function useGetLandingPlans<TData = GetLandingPlans["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingPlans["error"]>;
    client?: GetLandingPlans["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingPlans["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/plans`;
    const query = useSWR<TData, GetLandingPlans["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingPlansQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}