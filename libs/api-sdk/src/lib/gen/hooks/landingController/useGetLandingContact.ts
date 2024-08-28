import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetLandingContactQueryResponse } from "../../types/GetLandingContact";

 type GetLandingContactClient = typeof client<GetLandingContactQueryResponse, never, never>;
type GetLandingContact = {
    data: GetLandingContactQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetLandingContactQueryResponse;
    client: {
        parameters: Partial<Parameters<GetLandingContactClient>[0]>;
        return: Awaited<ReturnType<GetLandingContactClient>>;
    };
};
export function getLandingContactQueryOptions<TData = GetLandingContact["response"]>(options: GetLandingContact["client"]["parameters"] = {}): SWRConfiguration<TData, GetLandingContact["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetLandingContact["error"]>({
                method: "get",
                url: `/landing/contact`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary contact
 * @link /landing/contact
 */
export function useGetLandingContact<TData = GetLandingContact["response"]>(options?: {
    query?: SWRConfiguration<TData, GetLandingContact["error"]>;
    client?: GetLandingContact["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetLandingContact["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/landing/contact`;
    const query = useSWR<TData, GetLandingContact["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getLandingContactQueryOptions<TData>(clientOptions),
        ...queryOptions
    });
    return query;
}