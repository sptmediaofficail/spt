import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingAboutSectionsQueryResponse } from "../../../types/GetLandingAboutSections";

 /**
 * @summary about sections
 * @link /landing/about_sections
 */
export async function getLandingAboutSections(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingAboutSectionsQueryResponse>["data"]> {
    const res = await client<GetLandingAboutSectionsQueryResponse>({ method: "get", url: `/landing/about_sections`, baseURL: "http://{{local}}", ...options });
    return res.data;
}