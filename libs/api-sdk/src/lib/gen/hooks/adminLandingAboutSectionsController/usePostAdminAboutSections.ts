import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminAboutSectionsMutationRequest, PostAdminAboutSectionsMutationResponse, PostAdminAboutSectionsHeaderParams } from "../../types/PostAdminAboutSections";

 type PostAdminAboutSectionsClient = typeof client<PostAdminAboutSectionsMutationResponse, never, PostAdminAboutSectionsMutationRequest>;
type PostAdminAboutSections = {
    data: PostAdminAboutSectionsMutationResponse;
    error: never;
    request: PostAdminAboutSectionsMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminAboutSectionsHeaderParams;
    response: PostAdminAboutSectionsMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminAboutSectionsClient>[0]>;
        return: Awaited<ReturnType<PostAdminAboutSectionsClient>>;
    };
};
/**
 * @summary create
 * @link /admin/about_sections
 */
export function usePostAdminAboutSections(headers?: PostAdminAboutSections["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminAboutSections["response"], PostAdminAboutSections["error"]>;
    client?: PostAdminAboutSections["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminAboutSections["response"], PostAdminAboutSections["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/about_sections` as const;
    return useSWRMutation<PostAdminAboutSections["response"], PostAdminAboutSections["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminAboutSections["data"], PostAdminAboutSections["error"], PostAdminAboutSections["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}