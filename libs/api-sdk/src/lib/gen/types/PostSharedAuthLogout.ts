export type PostSharedAuthLogoutHeaderParams = {
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
export type PostSharedAuthLogout200 = object;
export type PostSharedAuthLogoutMutationRequest = object;
/**
 * @description OK
*/
export type PostSharedAuthLogoutMutationResponse = object;
export type PostSharedAuthLogoutMutation = {
    Response: PostSharedAuthLogoutMutationResponse;
    Request: PostSharedAuthLogoutMutationRequest;
    HeaderParams: PostSharedAuthLogoutHeaderParams;
};