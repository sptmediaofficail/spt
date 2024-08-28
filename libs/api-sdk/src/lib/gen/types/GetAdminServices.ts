export type GetAdminServicesQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @type integer | undefined
    */
    page?: number;
};
/**
 * @description Successful response
*/
export type GetAdminServices200 = any;
export type GetAdminServicesQueryResponse = any;
export type GetAdminServicesQuery = {
    Response: GetAdminServicesQueryResponse;
    QueryParams: GetAdminServicesQueryParams;
};