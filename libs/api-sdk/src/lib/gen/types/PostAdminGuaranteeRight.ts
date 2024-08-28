export type PostAdminGuaranteeRightHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminGuaranteeRight200 = any;
export type PostAdminGuaranteeRightMutationRequest = {
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
export type PostAdminGuaranteeRightMutationResponse = any;
export type PostAdminGuaranteeRightMutation = {
    Response: PostAdminGuaranteeRightMutationResponse;
    Request: PostAdminGuaranteeRightMutationRequest;
    HeaderParams: PostAdminGuaranteeRightHeaderParams;
};