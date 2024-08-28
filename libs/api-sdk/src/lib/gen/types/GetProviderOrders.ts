export type GetProviderOrdersQueryParams = {
    /**
     * @description can_submit - already_submit - accepted - finished
     * @type string | undefined
    */
    status?: string;
};
export type GetProviderOrdersHeaderParams = {
    /**
     * @description API
     * @type string | undefined
    */
    "X-Requested-With"?: string;
    /**
     * @description accepts: ar, en
     * @type string | undefined
    */
    "Content-Language"?: string;
};
/**
 * @description Successful response
*/
export type GetProviderOrders200 = any;
export type GetProviderOrdersQueryResponse = any;
export type GetProviderOrdersQuery = {
    Response: GetProviderOrdersQueryResponse;
    QueryParams: GetProviderOrdersQueryParams;
    HeaderParams: GetProviderOrdersHeaderParams;
};