export type GetSharedAuthMeHeaderParams = {
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
export type GetSharedAuthMe200 = any;
export type GetSharedAuthMeQueryResponse = any;
export type GetSharedAuthMeQuery = {
    Response: GetSharedAuthMeQueryResponse;
    HeaderParams: GetSharedAuthMeHeaderParams;
};