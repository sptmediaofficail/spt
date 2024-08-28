export type PostSharedAuthVerifyOtpHeaderParams = {
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
 * @description OK
*/
export type PostSharedAuthVerifyOtp200 = object;
export type PostSharedAuthVerifyOtpMutationRequest = object;
/**
 * @description OK
*/
export type PostSharedAuthVerifyOtpMutationResponse = object;
export type PostSharedAuthVerifyOtpMutation = {
    Response: PostSharedAuthVerifyOtpMutationResponse;
    Request: PostSharedAuthVerifyOtpMutationRequest;
    HeaderParams: PostSharedAuthVerifyOtpHeaderParams;
};