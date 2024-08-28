import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3MutationResponse } from "../../types/DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3";

 type DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3Client = typeof client<DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3MutationResponse, never, never>;
type DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3 = {
    data: DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3MutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3MutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3Client>[0]>;
        return: Awaited<ReturnType<DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3Client>>;
    };
};
/**
 * @summary delete
 * @link /admin/sliders/6193d4cd-ce8e-4b79-ba46-7e3c086206f3
 */
export function useDeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3["response"], DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3["error"]>;
    client?: DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3["response"], DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/sliders/6193d4cd-ce8e-4b79-ba46-7e3c086206f3` as const;
    return useSWRMutation<DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3["response"], DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3["data"], DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}