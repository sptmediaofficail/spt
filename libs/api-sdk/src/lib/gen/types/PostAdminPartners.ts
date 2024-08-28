export type PostAdminPartnersHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminPartners200 = any;
export type PostAdminPartnersMutationRequest = {
    /**
     * @type string | undefined, binary
    */
    image?: Blob;
};
export type PostAdminPartnersMutationResponse = any;
export type PostAdminPartnersMutation = {
    Response: PostAdminPartnersMutationResponse;
    Request: PostAdminPartnersMutationRequest;
    HeaderParams: PostAdminPartnersHeaderParams;
};