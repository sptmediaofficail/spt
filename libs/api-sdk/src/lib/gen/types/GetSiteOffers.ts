export type GetSiteOffersQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
};
export type GetSiteOffersHeaderParams = {
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
export type GetSiteOffers200 = any;
export type GetSiteOffersQueryResponse = any;
export type GetSiteOffersQuery = {
    Response: GetSiteOffersQueryResponse;
    QueryParams: GetSiteOffersQueryParams;
    HeaderParams: GetSiteOffersHeaderParams;
};