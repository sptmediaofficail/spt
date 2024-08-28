import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationRequest, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse } from "../../types/PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore";

 type PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreClient = typeof client<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse, never, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationRequest>;
type PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore = {
    data: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse;
    error: never;
    request: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreClient>[0]>;
        return: Awaited<ReturnType<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreClient>>;
    };
};
/**
 * @summary restore
 * @link /admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd/restore
 */
export function usePostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore(options?: {
    mutation?: SWRMutationConfiguration<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore["response"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore["error"]>;
    client?: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore["response"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd/restore` as const;
    return useSWRMutation<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore["response"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore["data"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore["error"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}