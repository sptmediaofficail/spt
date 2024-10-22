import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationRequest, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse } from "../../../types/PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore";

 /**
 * @summary restore
 * @link /admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd/restore
 */
export async function postAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestore(data?: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse>["data"]> {
    const res = await client<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationResponse, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdRestoreMutationRequest>({ method: "post", url: `/admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd/restore`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}