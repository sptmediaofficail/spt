export type GetAdminOrdersQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @type string | undefined
    */
    search?: string;
    /**
     * @description \'receiving_offer\',\'accepted\',\'completed\'
     * @type string | undefined
    */
    status?: string;
    /**
     * @description \'spare_parts\',\'towing\',\'junkyard_sale\'
     * @type string | undefined
    */
    type?: string;
};
export type GetAdminOrdersHeaderParams = {
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
export type GetAdminOrders200 = any;
export type GetAdminOrdersQueryResponse = any;
export type GetAdminOrdersQuery = {
    Response: GetAdminOrdersQueryResponse;
    QueryParams: GetAdminOrdersQueryParams;
    HeaderParams: GetAdminOrdersHeaderParams;
};