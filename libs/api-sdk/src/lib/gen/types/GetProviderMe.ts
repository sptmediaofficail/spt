export type GetProviderMeHeaderParams = {
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
export type GetProviderMe200 = any;
export type GetProviderMeQueryResponse = any;
export type GetProviderMeQuery = {
    Response: GetProviderMeQueryResponse;
    HeaderParams: GetProviderMeHeaderParams;
};