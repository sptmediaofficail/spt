import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationRequest, PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse } from "../../../types/PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore";

 /**
 * @summary restore
 * @link /admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd/restore
 */
export async function postAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestore(data?: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse>["data"]> {
    const res = await client<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse, PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdRestoreMutationRequest>({ method: "post", url: `/admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}