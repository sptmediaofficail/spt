export type PostAdminAboutSectionsHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminAboutSections200 = any;
export type PostAdminAboutSectionsMutationRequest = {
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
export type PostAdminAboutSectionsMutationResponse = any;
export type PostAdminAboutSectionsMutation = {
    Response: PostAdminAboutSectionsMutationResponse;
    Request: PostAdminAboutSectionsMutationRequest;
    HeaderParams: PostAdminAboutSectionsHeaderParams;
};