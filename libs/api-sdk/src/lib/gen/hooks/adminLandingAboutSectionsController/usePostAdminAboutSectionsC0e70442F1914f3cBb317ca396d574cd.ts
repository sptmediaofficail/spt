import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationRequest, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationResponse, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdHeaderParams } from "../../types/PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd";

 type PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdClient = typeof client<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationResponse, never, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationRequest>;
type PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd = {
    data: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationResponse;
    error: never;
    request: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdHeaderParams;
    response: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdClient>[0]>;
        return: Awaited<ReturnType<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdClient>>;
    };
};
/**
 * @summary update
 * @link /admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd
 */
export function usePostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd(headers?: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["headerParams"], options?: {
    mutation?: SWRMutationConfiguration<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["response"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["error"]>;
    client?: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["response"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd` as const;
    return useSWRMutation<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["response"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["data"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["error"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["request"]>({
            method: "post",
            url,
            data,
            headers: { ...headers, ...clientOptions.headers },
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}