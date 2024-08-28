import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationRequest, PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse, PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330HeaderParams } from "../../types/PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330";

 type PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330Client = typeof client<PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse, never, PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationRequest>;
type PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330 = {
    data: PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse;
    error: never;
    request: PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330HeaderParams;
    response: PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330MutationResponse;
    client: {
        parameters: Partial<Parameters<PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330Client>[0]>;
        return: Awaited<ReturnType<PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330Client>>;
    };
};
/**
 * @summary update
 * @link /admin/commissions/51a7447f-3bfd-4e89-a7f3-1969c8fb9330
 */
export function usePutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330(headers?: PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["response"], PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["error"]>;
    client?: PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["response"], PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/commissions/51a7447f-3bfd-4e89-a7f3-1969c8fb9330` as const;
    return useSWRMutation<PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["response"], PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["data"], PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["error"], PutAdminCommissions51a7447f3bfd4e89A7f31969c8fb9330["request"]>({
            method: "put",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}