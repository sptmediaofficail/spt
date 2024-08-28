export type PostAdminPlatformReviewsHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminPlatformReviews200 = any;
export type PostAdminPlatformReviewsMutationRequest = {
    /**
     * @type string | undefined, binary
    */
    phone_image?: Blob;
    /**
     * @type string | undefined, binary
    */
    web_image?: Blob;
};
export type PostAdminPlatformReviewsMutationResponse = any;
export type PostAdminPlatformReviewsMutation = {
    Response: PostAdminPlatformReviewsMutationResponse;
    Request: PostAdminPlatformReviewsMutationRequest;
    HeaderParams: PostAdminPlatformReviewsHeaderParams;
};