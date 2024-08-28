export type PostProviderOrderRateHeaderParams = {
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
export type PostProviderOrderRate200 = any;
export type PostProviderOrderRateMutationRequest = {
    /**
     * @type string | undefined
    */
    order_id?: string;
    /**
     * @type integer | undefined
    */
    rate?: number;
    /**
     * @type string | undefined
    */
    comment?: string;
};
export type PostProviderOrderRateMutationResponse = any;
export type PostProviderOrderRateMutation = {
    Response: PostProviderOrderRateMutationResponse;
    Request: PostProviderOrderRateMutationRequest;
    HeaderParams: PostProviderOrderRateHeaderParams;
};