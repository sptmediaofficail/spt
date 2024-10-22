import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationRequest, PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationResponse, PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fHeaderParams } from "../../../types/PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f";

 /**
 * @summary update
 * @link /admin/users/b2ef1c4f-918a-4f34-9d2f-97ce28c2772f
 */
export async function putAdminUsersB2ef1c4f918a4f349d2f97ce28c2772f(data?: PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationRequest, headers?: PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationResponse>["data"]> {
    const res = await client<PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationResponse, PutAdminUsersB2ef1c4f918a4f349d2f97ce28c2772fMutationRequest>({ method: "put", url: `/admin/users/b2ef1c4f-918a-4f34-9d2f-97ce28c2772f`, baseURL: "http://{{local}}", data, headers: { "Content-Type": "*/*", ...headers, ...options.headers }, ...options });
    return res.data;
}