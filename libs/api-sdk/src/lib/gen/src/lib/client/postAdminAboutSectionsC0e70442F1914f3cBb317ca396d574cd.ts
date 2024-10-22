import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationRequest, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationResponse, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdHeaderParams } from "../../../types/PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd";

 /**
 * @summary update
 * @link /admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd
 */
export async function postAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cd(data?: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationRequest, headers?: PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationResponse, PostAdminAboutSectionsC0e70442F1914f3cBb317ca396d574cdMutationRequest>({ method: "post", url: `/admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}