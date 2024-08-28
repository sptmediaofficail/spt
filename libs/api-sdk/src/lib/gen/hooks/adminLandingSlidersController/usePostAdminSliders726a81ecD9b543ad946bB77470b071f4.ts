import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationRequest, PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationResponse, PostAdminSliders726a81ecD9b543ad946bB77470b071f4HeaderParams } from "../../types/PostAdminSliders726a81ecD9b543ad946bB77470b071f4";

 type PostAdminSliders726a81ecD9b543ad946bB77470b071f4Client = typeof client<PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationResponse, never, PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationRequest>;
type PostAdminSliders726a81ecD9b543ad946bB77470b071f4 = {
    data: PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationResponse;
    error: never;
    request: PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminSliders726a81ecD9b543ad946bB77470b071f4HeaderParams;
    response: PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminSliders726a81ecD9b543ad946bB77470b071f4Client>[0]>;
        return: Awaited<ReturnType<PostAdminSliders726a81ecD9b543ad946bB77470b071f4Client>>;
    };
};
/**
 * @summary update
 * @link /admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4
 */
export function usePostAdminSliders726a81ecD9b543ad946bB77470b071f4(headers?: PostAdminSliders726a81ecD9b543ad946bB77470b071f4["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminSliders726a81ecD9b543ad946bB77470b071f4["response"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4["error"]>;
    client?: PostAdminSliders726a81ecD9b543ad946bB77470b071f4["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminSliders726a81ecD9b543ad946bB77470b071f4["response"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4` as const;
    return useSWRMutation<PostAdminSliders726a81ecD9b543ad946bB77470b071f4["response"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminSliders726a81ecD9b543ad946bB77470b071f4["data"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4["error"], PostAdminSliders726a81ecD9b543ad946bB77470b071f4["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}