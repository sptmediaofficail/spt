import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationRequest, PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationResponse, PutAdminCities81a53c0640694120B9ae6a4314cd4adaHeaderParams } from "../../types/PutAdminCities81a53c0640694120B9ae6a4314cd4ada";

 type PutAdminCities81a53c0640694120B9ae6a4314cd4adaClient = typeof client<PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationResponse, never, PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationRequest>;
type PutAdminCities81a53c0640694120B9ae6a4314cd4ada = {
    data: PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationResponse;
    error: never;
    request: PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PutAdminCities81a53c0640694120B9ae6a4314cd4adaHeaderParams;
    response: PutAdminCities81a53c0640694120B9ae6a4314cd4adaMutationResponse;
    client: {
        parameters: Partial<Parameters<PutAdminCities81a53c0640694120B9ae6a4314cd4adaClient>[0]>;
        return: Awaited<ReturnType<PutAdminCities81a53c0640694120B9ae6a4314cd4adaClient>>;
    };
};
/**
 * @summary update
 * @link /admin/cities/81a53c06-4069-4120-b9ae-6a4314cd4ada
 */
export function usePutAdminCities81a53c0640694120B9ae6a4314cd4ada(headers?: PutAdminCities81a53c0640694120B9ae6a4314cd4ada["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PutAdminCities81a53c0640694120B9ae6a4314cd4ada["response"], PutAdminCities81a53c0640694120B9ae6a4314cd4ada["error"]>;
    client?: PutAdminCities81a53c0640694120B9ae6a4314cd4ada["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PutAdminCities81a53c0640694120B9ae6a4314cd4ada["response"], PutAdminCities81a53c0640694120B9ae6a4314cd4ada["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/cities/81a53c06-4069-4120-b9ae-6a4314cd4ada` as const;
    return useSWRMutation<PutAdminCities81a53c0640694120B9ae6a4314cd4ada["response"], PutAdminCities81a53c0640694120B9ae6a4314cd4ada["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PutAdminCities81a53c0640694120B9ae6a4314cd4ada["data"], PutAdminCities81a53c0640694120B9ae6a4314cd4ada["error"], PutAdminCities81a53c0640694120B9ae6a4314cd4ada["request"]>({
            method: "put",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}