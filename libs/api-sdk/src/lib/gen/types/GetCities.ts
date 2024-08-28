export type GetCitiesQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
};
export type GetCitiesHeaderParams = {
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
export type GetCities200 = any;
export type GetCitiesQueryResponse = any;
export type GetCitiesQuery = {
    Response: GetCitiesQueryResponse;
    QueryParams: GetCitiesQueryParams;
    HeaderParams: GetCitiesHeaderParams;
};