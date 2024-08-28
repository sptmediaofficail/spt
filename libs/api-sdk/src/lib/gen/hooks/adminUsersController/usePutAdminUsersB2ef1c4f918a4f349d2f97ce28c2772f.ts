import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationRequest, PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationResponse, PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fHeaderParams } from "../../types/PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f";

 type PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fClient = typeof client<PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationResponse, never, PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationRequest>;
type PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f = {
    data: PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationResponse;
    error: never;
    request: PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fHeaderParams;
    response: PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationResponse;
    client: {
        parameters: Partial<Parameters<PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fClient>[0]>;
        return: Awaited<ReturnType<PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fClient>>;
    };
};
/**
 * @summary update
 * @link /admin/users/b2ef1c4f-918a-4f34-9d2f-97ce28c2772f
 */
export function usePutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f(headers?: PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f["response"], PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f["error"]>;
    client?: PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f["response"], PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/users/b2ef1c4f-918a-4f34-9d2f-97ce28c2772f` as const;
    return useSWRMutation<PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f["response"], PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f["data"], PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f["error"], PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f["request"]>({
            method: "put",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}