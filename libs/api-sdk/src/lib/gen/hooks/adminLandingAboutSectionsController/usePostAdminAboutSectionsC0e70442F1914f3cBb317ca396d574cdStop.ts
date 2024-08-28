import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationRequest, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationResponse } from "../../types/PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop";

 type PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopClient = typeof client<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationResponse, never, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationRequest>;
type PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop = {
    data: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationResponse;
    error: never;
    request: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationResponse;
    client: {
        parameters: Partial<Parameters<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopClient>[0]>;
        return: Awaited<ReturnType<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopClient>>;
    };
};
/**
 * @summary stop
 * @link /admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd/stop
 */
export function usePostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop(options?: {
    mutation?: SWRMutationConfiguration<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop["response"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop["error"]>;
    client?: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop["response"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd/stop` as const;
    return useSWRMutation<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop["response"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop["error"], typeof url | null>(shouldFetch ? url : null, async (_url, { arg: data }) => {
        const res = await client<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop["data"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop["error"], PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop["request"]>({
            method: "post",
            url,
            data,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}