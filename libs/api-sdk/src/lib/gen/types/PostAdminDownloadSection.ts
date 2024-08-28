export type PostAdminDownloadSectionHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminDownloadSection200 = any;
export type PostAdminDownloadSectionMutationRequest = {
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
     * @type string | undefined
    */
    google_play_link?: string;
    /**
     * @type string | undefined
    */
    apple_store_link?: string;
};
export type PostAdminDownloadSectionMutationResponse = any;
export type PostAdminDownloadSectionMutation = {
    Response: PostAdminDownloadSectionMutationResponse;
    Request: PostAdminDownloadSectionMutationRequest;
    HeaderParams: PostAdminDownloadSectionHeaderParams;
};