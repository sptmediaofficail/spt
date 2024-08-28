export type GetAdminCityServicesQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @type integer | undefined
    */
    page?: number;
    /**
     * @type string | undefined
    */
    search?: string;
};
/**
 * @description Successful response
*/
export type GetAdminCityServices200 = any;
export type GetAdminCityServicesQueryResponse = any;
export type GetAdminCityServicesQuery = {
    Response: GetAdminCityServicesQueryResponse;
    QueryParams: GetAdminCityServicesQueryParams;
};