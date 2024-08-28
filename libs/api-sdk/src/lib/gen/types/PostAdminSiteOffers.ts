export type PostAdminSiteOffersHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminSiteOffers200 = any;
export type PostAdminSiteOffersMutationRequest = {
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
export type PostAdminSiteOffersMutationResponse = any;
export type PostAdminSiteOffersMutation = {
    Response: PostAdminSiteOffersMutationResponse;
    Request: PostAdminSiteOffersMutationRequest;
    HeaderParams: PostAdminSiteOffersHeaderParams;
};