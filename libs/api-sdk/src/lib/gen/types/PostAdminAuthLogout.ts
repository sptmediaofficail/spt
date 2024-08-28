/**
 * @description Successful response
*/
export type PostAdminAuthLogout200 = any;
export type PostAdminAuthLogoutMutationRequest = {
    /**
     * @type string | undefined
    */
    email?: string;
    /**
     * @type string | undefined
    */
    password?: string;
};
export type PostAdminAuthLogoutMutationResponse = any;
export type PostAdminAuthLogoutMutation = {
    Response: PostAdminAuthLogoutMutationResponse;
    Request: PostAdminAuthLogoutMutationRequest;
};