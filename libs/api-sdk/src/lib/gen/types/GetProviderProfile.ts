export type GetProviderProfileHeaderParams = {
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
export type GetProviderProfile200 = any;
export type GetProviderProfileQueryResponse = any;
export type GetProviderProfileQuery = {
    Response: GetProviderProfileQueryResponse;
    HeaderParams: GetProviderProfileHeaderParams;
};