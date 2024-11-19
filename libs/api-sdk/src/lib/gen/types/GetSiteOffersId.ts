export type GetSiteOffersIdPathParams = {
    /**
     * @type string
    */
    id: string;
};
export type GetSiteOffersIdHeaderParams = {
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
export type GetSiteOffersId200 = any;
export type GetSiteOffersIdQueryResponse = any;
export type GetSiteOffersIdQuery = {
    Response: GetSiteOffersIdQueryResponse;
    PathParams: GetSiteOffersIdPathParams;
    HeaderParams: GetSiteOffersIdHeaderParams;
};