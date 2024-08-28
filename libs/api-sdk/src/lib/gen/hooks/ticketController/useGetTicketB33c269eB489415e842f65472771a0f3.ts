import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetTicketB33c269eB489415e842f65472771a0f3QueryResponse, GetTicketB33c269eB489415e842f65472771a0f3HeaderParams } from "../../types/GetTicketB33c269eB489415e842f65472771a0f3";

 type GetTicketB33c269eB489415e842f65472771a0f3Client = typeof client<GetTicketB33c269eB489415e842f65472771a0f3QueryResponse, never, never>;
type GetTicketB33c269eB489415e842f65472771a0f3 = {
    data: GetTicketB33c269eB489415e842f65472771a0f3QueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetTicketB33c269eB489415e842f65472771a0f3HeaderParams;
    response: GetTicketB33c269eB489415e842f65472771a0f3QueryResponse;
    client: {
        parameters: Partial<Parameters<GetTicketB33c269eB489415e842f65472771a0f3Client>[0]>;
        return: Awaited<ReturnType<GetTicketB33c269eB489415e842f65472771a0f3Client>>;
    };
};
export function getTicketB33c269eB489415e842f65472771a0f3QueryOptions<TData = GetTicketB33c269eB489415e842f65472771a0f3["response"]>(headers?: GetTicketB33c269eB489415e842f65472771a0f3["headerParams"], options: GetTicketB33c269eB489415e842f65472771a0f3["client"]["parameters"] = {}): SWRConfiguration<TData, GetTicketB33c269eB489415e842f65472771a0f3["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetTicketB33c269eB489415e842f65472771a0f3["error"]>({
                method: "get",
                url: `/ticket/b33c269e-b489-415e-842f-65472771a0f3`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary details
 * @link /ticket/b33c269e-b489-415e-842f-65472771a0f3
 */
export function useGetTicketB33c269eB489415e842f65472771a0f3<TData = GetTicketB33c269eB489415e842f65472771a0f3["response"]>(headers?: GetTicketB33c269eB489415e842f65472771a0f3["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetTicketB33c269eB489415e842f65472771a0f3["error"]>;
    client?: GetTicketB33c269eB489415e842f65472771a0f3["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetTicketB33c269eB489415e842f65472771a0f3["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/ticket/b33c269e-b489-415e-842f-65472771a0f3`;
    const query = useSWR<TData, GetTicketB33c269eB489415e842f65472771a0f3["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getTicketB33c269eB489415e842f65472771a0f3QueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}