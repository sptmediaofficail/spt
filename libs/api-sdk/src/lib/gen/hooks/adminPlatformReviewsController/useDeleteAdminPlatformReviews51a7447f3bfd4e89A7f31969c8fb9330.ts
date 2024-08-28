import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330MutationResponse } from "../../types/DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330";

 type DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Client = typeof client<DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330MutationResponse, never, never>;
type DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330 = {
    data: DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330
 */
export function useDeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330["response"], DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330["error"]>;
    client?: DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330["response"], DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330` as const;
    return useSWRMutation<DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330["response"], DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330["data"], DeleteAdminPlatformReviews51a7447f3bfd4e89A7f31969c8fb9330["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}