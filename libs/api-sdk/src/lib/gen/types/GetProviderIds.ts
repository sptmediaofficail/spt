export type GetProviderIdsHeaderParams = {
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
export type GetProviderIds200 = any;
export type GetProviderIdsQueryResponse = any;
export type GetProviderIdsQuery = {
    Response: GetProviderIdsQueryResponse;
    HeaderParams: GetProviderIdsHeaderParams;
};