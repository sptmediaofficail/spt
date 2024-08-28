import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationResponse } from "../../types/DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd";

 type DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdClient = typeof client<DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationResponse, never, never>;
type DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd = {
    data: DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdClient>[0]>;
        return: Awaited<ReturnType<DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdClient>>;
    };
};
/**
 * @summary delete
 * @link /admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd
 */
export function useDeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["response"], DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["error"]>;
    client?: DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["response"], DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd` as const;
    return useSWRMutation<DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["response"], DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["data"], DeleteAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}