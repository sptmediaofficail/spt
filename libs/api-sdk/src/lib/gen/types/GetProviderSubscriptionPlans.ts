export type GetProviderSubscriptionPlansQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
};
export type GetProviderSubscriptionPlansHeaderParams = {
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
export type GetProviderSubscriptionPlans200 = any;
export type GetProviderSubscriptionPlansQueryResponse = any;
export type GetProviderSubscriptionPlansQuery = {
    Response: GetProviderSubscriptionPlansQueryResponse;
    QueryParams: GetProviderSubscriptionPlansQueryParams;
    HeaderParams: GetProviderSubscriptionPlansHeaderParams;
};