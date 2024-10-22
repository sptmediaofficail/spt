import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationRequest, PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationResponse } from "../../../types/PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop";

 /**
 * @summary stop
 * @link /admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd/stop
 */
export async function postAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStop(data?: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationResponse>["data"]> {
    const res = await client<PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationResponse, PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdStopMutationRequest>({ method: "post", url: `/admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}