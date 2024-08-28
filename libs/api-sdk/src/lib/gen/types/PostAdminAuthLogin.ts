/**
 * @description Successful response
*/
export type PostAdminAuthLogin200 = any;
export type PostAdminAuthLoginMutationRequest = {
    /**
     * @type integer | undefined
    */
    phone?: number;
    /**
     * @type string | undefined
    */
    password?: string;
};
export type PostAdminAuthLoginMutationResponse = any;
export type PostAdminAuthLoginMutation = {
    Response: PostAdminAuthLoginMutationResponse;
    Request: PostAdminAuthLoginMutationRequest;
};