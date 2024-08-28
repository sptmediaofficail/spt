import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationRequest, PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationResponse } from "../../types/PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore";

 type PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreClient = typeof client<PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationResponse, never, PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationRequest>;
type PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore = {
    data: PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationResponse;
    error: never;
    request: PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminSliders726a81ecD9b543ad946bB77470b071f4RestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4/restore
 */
export function usePostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore["response"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore["error"]>;
    client?: PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore["response"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4/restore` as const;
    return useSWRMutation<PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore["response"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore["data"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore["error"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4Restore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}