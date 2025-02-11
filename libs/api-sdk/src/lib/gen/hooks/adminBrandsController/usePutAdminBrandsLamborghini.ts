import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PutAdminBrandsLamborghiniMutationRequest, PutAdminBrandsLamborghiniMutationResponse, PutAdminBrandsLamborghiniHeaderParams } from "../../types/PutAdminBrandsLamborghini";

 type PutAdminBrandsLamborghiniClient = typeof client<PutAdminBrandsLamborghiniMutationResponse, never, PutAdminBrandsLamborghiniMutationRequest>;
type PutAdminBrandsLamborghini = {
    data: PutAdminBrandsLamborghiniMutationResponse;
    error: never;
    request: PutAdminBrandsLamborghiniMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PutAdminBrandsLamborghiniHeaderParams;
    response: PutAdminBrandsLamborghiniMutationResponse;
    client: {
        parameters: Partial<Parameters<PutAdminBrandsLamborghiniClient>[0]>;
        return: Awaited<ReturnType<PutAdminBrandsLamborghiniClient>>;
    };
};
/**
 * @summary update
 * @link /admin/brands/Lamborghini
 */
export function usePutAdminBrandsLamborghini(headers?: PutAdminBrandsLamborghini["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PutAdminBrandsLamborghini["response"], PutAdminBrandsLamborghini["error"]>;
    client?: PutAdminBrandsLamborghini["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PutAdminBrandsLamborghini["response"], PutAdminBrandsLamborghini["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/brands/Lamborghini` as const;
    return useSWRMutation<PutAdminBrandsLamborghini["response"], PutAdminBrandsLamborghini["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PutAdminBrandsLamborghini["data"], PutAdminBrandsLamborghini["error"], PutAdminBrandsLamborghini["request"]>({
            method: "put",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}