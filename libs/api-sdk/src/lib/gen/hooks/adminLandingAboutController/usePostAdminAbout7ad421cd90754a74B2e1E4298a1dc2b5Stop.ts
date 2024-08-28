import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationRequest, PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationResponse } from "../../types/PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop";

 type PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopClient = typeof client<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationResponse, never, PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationRequest>;
type PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop = {
    data: PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationResponse;
    error: never;
    request: PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5/stop
 */
export function usePostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop["response"], PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop["error"]>;
    client?: PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop["response"], PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5/stop` as const;
    return useSWRMutation<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop["response"], PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop["data"], PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop["error"], PostAdminAbout7ad421cd90754a74B2e1E4298a1dc2b5Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}