import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAdminOrders1d9de514C4e149878eb90909556c7186OffersQueryResponse, GetAdminOrders1d9de514C4e149878eb90909556c7186OffersHeaderParams } from "../../../types/GetAdminOrders1d9de514C4e149878eb90909556c7186Offers";

 /**
 * @summary offers
 * @link /admin/orders/1d9de514-c4e1-4987-8eb9-0909556c7186/offers
 */
export async function getAdminOrders1d9de514C4e149878eb90909556c7186Offers(headers?: GetAdminOrders1d9de514C4e149878eb90909556c7186OffersHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetAdminOrders1d9de514C4e149878eb90909556c7186OffersQueryResponse>["data"]> {
    const res = await client<GetAdminOrders1d9de514C4e149878eb90909556c7186OffersQueryResponse>({ method: "get", url: `/admin/orders/1d9de514-c4e1-4987-8eb9-0909556c7186/offers`, baseURL: "http://{{local}}", headers: { ...headers, ...options.headers }, ...options });
    return res.data;
}