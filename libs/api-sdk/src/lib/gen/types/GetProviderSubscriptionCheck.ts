export type GetProviderSubscriptionCheckHeaderParams = {
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
export type GetProviderSubscriptionCheck200 = any;
export type GetProviderSubscriptionCheckQueryResponse = any;
export type GetProviderSubscriptionCheckQuery = {
    Response: GetProviderSubscriptionCheckQueryResponse;
    HeaderParams: GetProviderSubscriptionCheckHeaderParams;
};