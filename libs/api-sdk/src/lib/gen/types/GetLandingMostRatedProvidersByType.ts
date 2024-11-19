export type GetLandingMostRatedProvidersByTypeQueryParams = {
    /**
     * @type integer | undefined
    */
    page?: number;
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @description spare_parts or junkyard_sale
     * @type string | undefined
    */
    type?: string;
};
/**
 * @description Successful response
*/
export type GetLandingMostRatedProvidersByType200 = any;
export type GetLandingMostRatedProvidersByTypeQueryResponse = any;
export type GetLandingMostRatedProvidersByTypeQuery = {
    Response: GetLandingMostRatedProvidersByTypeQueryResponse;
    QueryParams: GetLandingMostRatedProvidersByTypeQueryParams;
};