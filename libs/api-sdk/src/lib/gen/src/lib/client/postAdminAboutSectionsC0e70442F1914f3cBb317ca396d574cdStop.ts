import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationRequest, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationResponse } from "../../../types/PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop";

 /**
 * @summary stop
 * @link /admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd/stop
 */
export async function postAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStop(data?: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationResponse>["data"]> {
    const res = await client<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationResponse, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdStopMutationRequest>({ method: "post", url: `/admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd/stop`, baseURL: "http://{{local}}", data, ...options });
    return res.data;
}