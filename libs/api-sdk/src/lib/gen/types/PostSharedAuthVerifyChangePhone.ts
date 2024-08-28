export type PostSharedAuthVerifyChangePhoneHeaderParams = {
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
export type PostSharedAuthVerifyChangePhone200 = any;
export type PostSharedAuthVerifyChangePhoneMutationRequest = object;
export type PostSharedAuthVerifyChangePhoneMutationResponse = any;
export type PostSharedAuthVerifyChangePhoneMutation = {
    Response: PostSharedAuthVerifyChangePhoneMutationResponse;
    Request: PostSharedAuthVerifyChangePhoneMutationRequest;
    HeaderParams: PostSharedAuthVerifyChangePhoneHeaderParams;
};