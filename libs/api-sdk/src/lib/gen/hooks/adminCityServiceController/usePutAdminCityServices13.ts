import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PutAdminCityServices13MutationRequest, PutAdminCityServices13MutationResponse, PutAdminCityServices13HeaderParams } from "../../types/PutAdminCityServices13";

 type PutAdminCityServices13Client = typeof client<PutAdminCityServices13MutationResponse, never, PutAdminCityServices13MutationRequest>;
type PutAdminCityServices13 = {
    data: PutAdminCityServices13MutationResponse;
    error: never;
    request: PutAdminCityServices13MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PutAdminCityServices13HeaderParams;
    response: PutAdminCityServices13MutationResponse;
    client: {
        parameters: Partial<Parameters<PutAdminCityServices13Client>[0]>;
        return: Awaited<ReturnType<PutAdminCityServices13Client>>;
    };
};
/**
 * @summary update
 * @link /admin/city-services/13
 */
export function usePutAdminCityServices13(headers?: PutAdminCityServices13["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PutAdminCityServices13["response"], PutAdminCityServices13["error"]>;
    client?: PutAdminCityServices13["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PutAdminCityServices13["response"], PutAdminCityServices13["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/city-services/13` as const;
    return useSWRMutation<PutAdminCityServices13["response"], PutAdminCityServices13["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PutAdminCityServices13["data"], PutAdminCityServices13["error"], PutAdminCityServices13["request"]>({
            method: "put",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}