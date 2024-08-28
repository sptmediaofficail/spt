import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationRequest, PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationResponse, PostAdminServicesB11d171dEec14474A3d26ef6881023aeHeaderParams } from "../../types/PostAdminServicesB11d171dEec14474A3d26ef6881023ae";

 type PostAdminServicesB11d171dEec14474A3d26ef6881023aeClient = typeof client<PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationResponse, never, PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationRequest>;
type PostAdminServicesB11d171dEec14474A3d26ef6881023ae = {
    data: PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationResponse;
    error: never;
    request: PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminServicesB11d171dEec14474A3d26ef6881023aeHeaderParams;
    response: PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminServicesB11d171dEec14474A3d26ef6881023aeClient>[0]>;
        return: Awaited<ReturnType<PostAdminServicesB11d171dEec14474A3d26ef6881023aeClient>>;
    };
};
/**
 * @summary update
 * @link /admin/services/b11d171d-eec1-4474-a3d2-6ef6881023ae
 */
export function usePostAdminServicesB11d171dEec14474A3d26ef6881023ae(headers?: PostAdminServicesB11d171dEec14474A3d26ef6881023ae["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminServicesB11d171dEec14474A3d26ef6881023ae["response"], PostAdminServicesB11d171dEec14474A3d26ef6881023ae["error"]>;
    client?: PostAdminServicesB11d171dEec14474A3d26ef6881023ae["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminServicesB11d171dEec14474A3d26ef6881023ae["response"], PostAdminServicesB11d171dEec14474A3d26ef6881023ae["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/services/b11d171d-eec1-4474-a3d2-6ef6881023ae` as const;
    return useSWRMutation<PostAdminServicesB11d171dEec14474A3d26ef6881023ae["response"], PostAdminServicesB11d171dEec14474A3d26ef6881023ae["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminServicesB11d171dEec14474A3d26ef6881023ae["data"], PostAdminServicesB11d171dEec14474A3d26ef6881023ae["error"], PostAdminServicesB11d171dEec14474A3d26ef6881023ae["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}