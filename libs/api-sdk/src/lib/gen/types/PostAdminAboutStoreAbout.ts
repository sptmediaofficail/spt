export type PostAdminAboutStoreAboutHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminAboutStoreAbout200 = any;
export type PostAdminAboutStoreAboutMutationRequest = {
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
    /**
     * @type string | undefined
    */
    description_ar?: string;
    /**
     * @type string | undefined
    */
    description_en?: string;
};
export type PostAdminAboutStoreAboutMutationResponse = any;
export type PostAdminAboutStoreAboutMutation = {
    Response: PostAdminAboutStoreAboutMutationResponse;
    Request: PostAdminAboutStoreAboutMutationRequest;
    HeaderParams: PostAdminAboutStoreAboutHeaderParams;
};