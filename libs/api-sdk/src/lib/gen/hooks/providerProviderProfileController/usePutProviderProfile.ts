import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PutProviderProfileMutationRequest, PutProviderProfileMutationResponse, PutProviderProfileHeaderParams } from "../../types/PutProviderProfile";

 type PutProviderProfileClient = typeof client<PutProviderProfileMutationResponse, never, PutProviderProfileMutationRequest>;
type PutProviderProfile = {
    data: PutProviderProfileMutationResponse;
    error: never;
    request: PutProviderProfileMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PutProviderProfileHeaderParams;
    response: PutProviderProfileMutationResponse;
    client: {
        parameters: Partial<Parameters<PutProviderProfileClient>[0]>;
        return: Awaited<ReturnType<PutProviderProfileClient>>;
    };
};
/**
 * @summary update
 * @link /provider/profile
 */
export function usePutProviderProfile(headers?: PutProviderProfile["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PutProviderProfile["response"], PutProviderProfile["error"]>;
    client?: PutProviderProfile["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PutProviderProfile["response"], PutProviderProfile["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/provider/profile` as const;
    return useSWRMutation<PutProviderProfile["response"], PutProviderProfile["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PutProviderProfile["data"], PutProviderProfile["error"], PutProviderProfile["request"]>({
            method: "put",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}