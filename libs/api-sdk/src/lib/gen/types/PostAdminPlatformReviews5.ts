export type PostAdminPlatformReviews5HeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminPlatformReviews5200 = any;
export type PostAdminPlatformReviews5MutationRequest = {
    /**
     * @type string | undefined, binary
    */
    phone_image?: Blob;
    /**
     * @type string | undefined, binary
    */
    web_image?: Blob;
    /**
     * @type string | undefined
    */
    name?: string;
    /**
     * @type string | undefined
    */
    comment?: string;
};
export type PostAdminPlatformReviews5MutationResponse = any;
export type PostAdminPlatformReviews5Mutation = {
    Response: PostAdminPlatformReviews5MutationResponse;
    Request: PostAdminPlatformReviews5MutationRequest;
    HeaderParams: PostAdminPlatformReviews5HeaderParams;
};