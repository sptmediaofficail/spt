import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingPlansQueryResponse } from "../../../types/GetLandingPlans";

 /**
 * @summary plans
 * @link /landing/plans
 */
export async function getLandingPlans(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingPlansQueryResponse>["data"]> {
    const res = await client<GetLandingPlansQueryResponse>({ method: "get", url: `/landing/plans`, baseURL: "http://{{local}}", ...options });
    return res.data;
}