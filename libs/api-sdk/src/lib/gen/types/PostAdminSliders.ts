export type PostAdminSlidersHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminSliders200 = any;
export type PostAdminSlidersMutationRequest = {
    /**
     * @type string | undefined
    */
    title_ar?: string;
    /**
     * @type string | undefined
    */
    title_en?: string;
    /**
     * @type string | undefined, binary
    */
    image?: Blob;
};
export type PostAdminSlidersMutationResponse = any;
export type PostAdminSlidersMutation = {
    Response: PostAdminSlidersMutationResponse;
    Request: PostAdminSlidersMutationRequest;
    HeaderParams: PostAdminSlidersHeaderParams;
};