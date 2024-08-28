export type PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210HeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210200 = any;
export type PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationRequest = {
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
    /**
     * @type integer | undefined
    */
    price_before_discount?: number;
    /**
     * @type integer | undefined
    */
    price_after_discount?: number;
};
export type PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse = any;
export type PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210Mutation = {
    Response: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationResponse;
    Request: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210MutationRequest;
    HeaderParams: PostAdminSiteOffersE3ed5781465b4c16879f981812fb6210HeaderParams;
};