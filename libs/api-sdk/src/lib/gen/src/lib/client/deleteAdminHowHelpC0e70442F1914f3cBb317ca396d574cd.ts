import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse } from "../../../types/DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd";

 /**
 * @summary delete
 * @link /admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd
 */
export async function deleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cd(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse>["data"]> {
    const res = await client<DeleteAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse>({ method: "delete", url: `/admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd`, baseURL: "http://{{local}}", ...options });
    return res.data;
}