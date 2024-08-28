export type PostProviderSubscriptionSubscribeHeaderParams = {
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
export type PostProviderSubscriptionSubscribe200 = any;
export type PostProviderSubscriptionSubscribeMutationRequest = {
    /**
     * @type string | undefined
    */
    plan_id?: string;
};
export type PostProviderSubscriptionSubscribeMutationResponse = any;
export type PostProviderSubscriptionSubscribeMutation = {
    Response: PostProviderSubscriptionSubscribeMutationResponse;
    Request: PostProviderSubscriptionSubscribeMutationRequest;
    HeaderParams: PostProviderSubscriptionSubscribeHeaderParams;
};