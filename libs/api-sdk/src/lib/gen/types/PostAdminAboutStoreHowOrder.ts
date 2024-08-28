export type PostAdminAboutStoreHowOrderHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminAboutStoreHowOrder200 = any;
export type PostAdminAboutStoreHowOrderMutationRequest = {
    /**
     * @type string | undefined
    */
    title_ar?: string;
    /**
     * @type string | undefined
    */
    title_en?: string;
    /**
     * @type string | undefined
    */
    description_ar?: string;
    /**
     * @type string | undefined
    */
    description_en?: string;
    /**
     * @type string | undefined
    */
    link?: string;
};
export type PostAdminAboutStoreHowOrderMutationResponse = any;
export type PostAdminAboutStoreHowOrderMutation = {
    Response: PostAdminAboutStoreHowOrderMutationResponse;
    Request: PostAdminAboutStoreHowOrderMutationRequest;
    HeaderParams: PostAdminAboutStoreHowOrderHeaderParams;
};