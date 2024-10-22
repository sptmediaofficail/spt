import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminAboutSectionsQueryResponse, GetAdminAboutSectionsQueryParams } from "../../../types/GetAdminAboutSections";

 /**
 * @summary list
 * @link /admin/about_sections
 */
export async function getAdminAboutSections(params?: GetAdminAboutSectionsQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminAboutSectionsQueryResponse>["data"]> {
    const res = await client<GetAdminAboutSectionsQueryResponse>({ method: "get", url: `/admin/about_sections`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}