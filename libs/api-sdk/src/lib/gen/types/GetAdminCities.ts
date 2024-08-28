export type GetAdminCitiesQueryParams = {
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
export type GetAdminCities200 = any;
export type GetAdminCitiesQueryResponse = any;
export type GetAdminCitiesQuery = {
    Response: GetAdminCitiesQueryResponse;
    QueryParams: GetAdminCitiesQueryParams;
};