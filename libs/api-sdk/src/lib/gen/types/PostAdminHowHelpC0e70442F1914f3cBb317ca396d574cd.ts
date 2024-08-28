export type PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cd200 = any;
export type PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationRequest = {
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
export type PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse = any;
export type PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutation = {
    Response: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationResponse;
    Request: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdMutationRequest;
    HeaderParams: PostAdminHowHelpC0e70442F1914f3cBb317ca396d574cdHeaderParams;
};