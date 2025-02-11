export type PostAdminTermsIdPathParams = {
    /**
     * @type integer
    */
    id: number;
};
export type PostAdminTermsIdHeaderParams = {
    /**
     * @type string | undefined
    */
    "Content-Type"?: string;
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminTermsId200 = any;
export type PostAdminTermsIdMutationRequest = string;
export type PostAdminTermsIdMutationResponse = any;
export type PostAdminTermsIdMutation = {
    Response: PostAdminTermsIdMutationResponse;
    Request: PostAdminTermsIdMutationRequest;
    PathParams: PostAdminTermsIdPathParams;
    HeaderParams: PostAdminTermsIdHeaderParams;
};