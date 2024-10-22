import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3MutationResponse } from "../../../types/DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3";

 /**
 * @summary delete
 * @link /admin/sliders/6193d4cd-ce8e-4b79-ba46-7e3c086206f3
 */
export async function deleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3MutationResponse>["data"]> {
    const res = await client<DeleteAdminSliders6193d4cdCe8e4b79Ba467e3c086206f3MutationResponse>({ method: "delete", url: `/admin/sliders/6193d4cd-ce8e-4b79-ba46-7e3c086206f3`, baseURL: "http://{{local}}", ...options });
    return res.data;
}