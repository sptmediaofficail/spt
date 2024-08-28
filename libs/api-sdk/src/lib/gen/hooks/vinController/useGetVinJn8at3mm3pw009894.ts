import useSWR from "swr";
import client from "@kubb/swagger-client/client";
import type { SWRConfiguration, SWRResponse } from "swr";
import type { GetVinJn8at3mm3pw009894QueryResponse, GetVinJn8at3mm3pw009894HeaderParams } from "../../types/GetVinJn8at3mm3pw009894";

 type GetVinJn8at3mm3pw009894Client = typeof client<GetVinJn8at3mm3pw009894QueryResponse, never, never>;
type GetVinJn8at3mm3pw009894 = {
    data: GetVinJn8at3mm3pw009894QueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: GetVinJn8at3mm3pw009894HeaderParams;
    response: GetVinJn8at3mm3pw009894QueryResponse;
    client: {
        parameters: Partial<Parameters<GetVinJn8at3mm3pw009894Client>[0]>;
        return: Awaited<ReturnType<GetVinJn8at3mm3pw009894Client>>;
    };
};
export function getVinJn8at3mm3pw009894QueryOptions<TData = GetVinJn8at3mm3pw009894["response"]>(headers?: GetVinJn8at3mm3pw009894["headerParams"], options: GetVinJn8at3mm3pw009894["client"]["parameters"] = {}): SWRConfiguration<TData, GetVinJn8at3mm3pw009894["error"]> {
    return {
        fetcher: async () => {
            const res = await client<TData, GetVinJn8at3mm3pw009894["error"]>({
                method: "get",
                url: `/vin/JN8AT3MM3PW009894`,
                headers: { ...headers, ...options.headers },
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary Get Data
 * @link /vin/JN8AT3MM3PW009894
 */
export function useGetVinJn8at3mm3pw009894<TData = GetVinJn8at3mm3pw009894["response"]>(headers?: GetVinJn8at3mm3pw009894["headerParams"], options?: {
    query?: SWRConfiguration<TData, GetVinJn8at3mm3pw009894["error"]>;
    client?: GetVinJn8at3mm3pw009894["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRResponse<TData, GetVinJn8at3mm3pw009894["error"]> {
    const { query: queryOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/vin/JN8AT3MM3PW009894`;
    const query = useSWR<TData, GetVinJn8at3mm3pw009894["error"], typeof url | null>(shouldFetch ? url : null, {
        ...getVinJn8at3mm3pw009894QueryOptions<TData>(headers, clientOptions),
        ...queryOptions
    });
    return query;
}