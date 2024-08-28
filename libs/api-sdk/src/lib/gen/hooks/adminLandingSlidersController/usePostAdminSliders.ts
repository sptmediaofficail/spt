import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminSlidersMutationRequest, PostAdminSlidersMutationResponse, PostAdminSlidersHeaderParams } from "../../types/PostAdminSliders";

 type PostAdminSlidersClient = typeof client<PostAdminSlidersMutationResponse, never, PostAdminSlidersMutationRequest>;
type PostAdminSliders = {
    data: PostAdminSlidersMutationResponse;
    error: never;
    request: PostAdminSlidersMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminSlidersHeaderParams;
    response: PostAdminSlidersMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminSlidersClient>[0]>;
        return: Awaited<ReturnType<PostAdminSlidersClient>>;
    };
};
/**
 * @summary create
 * @link /admin/sliders
 */
export function usePostAdminSliders(headers?: PostAdminSliders["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminSliders["response"], PostAdminSliders["error"]>;
    client?: PostAdminSliders["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminSliders["response"], PostAdminSliders["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/sliders` as const;
    return useSWRMutation<PostAdminSliders["response"], PostAdminSliders["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminSliders["data"], PostAdminSliders["error"], PostAdminSliders["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}