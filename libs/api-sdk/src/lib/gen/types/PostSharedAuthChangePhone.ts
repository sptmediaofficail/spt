export type PostSharedAuthChangePhoneHeaderParams = {
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
export type PostSharedAuthChangePhone200 = any;
export type PostSharedAuthChangePhoneMutationRequest = object;
export type PostSharedAuthChangePhoneMutationResponse = any;
export type PostSharedAuthChangePhoneMutation = {
    Response: PostSharedAuthChangePhoneMutationResponse;
    Request: PostSharedAuthChangePhoneMutationRequest;
    HeaderParams: PostSharedAuthChangePhoneHeaderParams;
};