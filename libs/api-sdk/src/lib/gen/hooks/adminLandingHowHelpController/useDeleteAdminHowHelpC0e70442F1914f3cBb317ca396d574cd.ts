import useSWRMutation from "swr/mutation";
import client from "@kubb/swagger-client/client";
import type { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";
import type { DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse } from "../../types/DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd";

 type DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cdClient = typeof client<DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse, never, never>;
type DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd = {
    data: DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cdClient>[0]>;
        return: Awaited<ReturnType<DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cdClient>>;
    };
};
/**
 * @summary delete
 * @link /admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd
 */
export function useDeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd(options?: {
    mutation?: SWRMutationConfiguration<DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["response"], DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["error"]>;
    client?: DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["client"]["parameters"];
    shouldFetch?: boolean;
}): SWRMutationResponse<DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["response"], DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["error"]> {
    const { mutation: mutationOptions, client: clientOptions = {}, shouldFetch = true } = options ?? {};
    const url = `/admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd` as const;
    return useSWRMutation<DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["response"], DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["error"], typeof url | null>(shouldFetch ? url : null, async (_url) => {
        const res = await client<DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["data"], DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd["error"]>({
            method: "delete",
            url,
            ...clientOptions
        });
        return res.data;
    }, mutationOptions);
}