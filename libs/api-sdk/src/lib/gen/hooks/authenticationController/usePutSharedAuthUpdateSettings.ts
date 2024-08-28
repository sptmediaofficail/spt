import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PutSharedAuthUpdateSettingsMutationRequest, PutSharedAuthUpdateSettingsMutationResponse, PutSharedAuthUpdateSettingsHeaderParams } from "../../types/PutSharedAuthUpdateSettings";

 type PutSharedAuthUpdateSettingsClient = typeof client<PutSharedAuthUpdateSettingsMutationResponse, never, PutSharedAuthUpdateSettingsMutationRequest>;
type PutSharedAuthUpdateSettings = {
    data: PutSharedAuthUpdateSettingsMutationResponse;
    error: never;
    request: PutSharedAuthUpdateSettingsMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PutSharedAuthUpdateSettingsHeaderParams;
    response: PutSharedAuthUpdateSettingsMutationResponse;
    client: {
        parameters: Partial<Parameters<PutSharedAuthUpdateSettingsClient>[0]>;
        return: Awaited<ReturnType<PutSharedAuthUpdateSettingsClient>>;
    };
};
/**
 * @summary Update Settings
 * @link /shared/auth/update-settings
 */
export function usePutSharedAuthUpdateSettings(headers?: PutSharedAuthUpdateSettings["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PutSharedAuthUpdateSettings["response"], PutSharedAuthUpdateSettings["error"]>;
    client?: PutSharedAuthUpdateSettings["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PutSharedAuthUpdateSettings["response"], PutSharedAuthUpdateSettings["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/shared/auth/update-settings` as const;
    return useSWRMutation<PutSharedAuthUpdateSettings["response"], PutSharedAuthUpdateSettings["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PutSharedAuthUpdateSettings["data"], PutSharedAuthUpdateSettings["error"], PutSharedAuthUpdateSettings["request"]>({
            method: "put",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}