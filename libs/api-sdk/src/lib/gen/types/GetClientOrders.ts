export type GetClientOrdersQueryParams = {
    /**
     * @description receiving_offer - accepted - completed
     * @type string | undefined
    */
    "status[]"?: string;
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @type integer | undefined
    */
    page?: number;
};
export type GetClientOrdersHeaderParams = {
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
export type GetClientOrders200 = any;
export type GetClientOrdersQueryResponse = any;
export type GetClientOrdersQuery = {
    Response: GetClientOrdersQueryResponse;
    QueryParams: GetClientOrdersQueryParams;
    HeaderParams: GetClientOrdersHeaderParams;
};