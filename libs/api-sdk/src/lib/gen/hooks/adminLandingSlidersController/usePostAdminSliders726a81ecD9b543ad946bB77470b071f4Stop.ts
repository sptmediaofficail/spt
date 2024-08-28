import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationRequest, PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationResponse } from "../../types/PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop";

 type PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopClient = typeof client<PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationResponse, never, PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationRequest>;
type PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop = {
    data: PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationResponse;
    error: never;
    request: PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopClient>[0]>;
        return: Awaited<ReturnType<PostAdminSliders726a81ecD9b543ad946bB77470b071f4StopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4/stop
 */
export function usePostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop["response"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop["error"]>;
    client?: PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop["response"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4/stop` as const;
    return useSWRMutation<PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop["response"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop["data"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop["error"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4Stop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}