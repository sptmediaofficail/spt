export type PostAdminHowHelpHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminHowHelp200 = any;
export type PostAdminHowHelpMutationRequest = {
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
export type PostAdminHowHelpMutationResponse = any;
export type PostAdminHowHelpMutation = {
    Response: PostAdminHowHelpMutationResponse;
    Request: PostAdminHowHelpMutationRequest;
    HeaderParams: PostAdminHowHelpHeaderParams;
};