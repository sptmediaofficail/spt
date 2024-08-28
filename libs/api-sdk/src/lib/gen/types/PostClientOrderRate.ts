export type PostClientOrderRateHeaderParams = {
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
export type PostClientOrderRate200 = any;
export type PostClientOrderRateMutationRequest = {
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
export type PostClientOrderRateMutationResponse = any;
export type PostClientOrderRateMutation = {
    Response: PostClientOrderRateMutationResponse;
    Request: PostClientOrderRateMutationRequest;
    HeaderParams: PostClientOrderRateHeaderParams;
};