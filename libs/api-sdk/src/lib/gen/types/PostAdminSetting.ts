export type PostAdminSettingHeaderParams = {
    /**
     * @description API
     * @type string | undefined
    */
    "X-Requested-With"?: string;
    /**
     * @description accepts: ar, en
     * @type string | undefined
    */
    "Content-Language"?: string;
};
/**
 * @description Successful response
*/
export type PostAdminSetting200 = any;
export type PostAdminSettingMutationRequest = object;
export type PostAdminSettingMutationResponse = any;
export type PostAdminSettingMutation = {
    Response: PostAdminSettingMutationResponse;
    Request: PostAdminSettingMutationRequest;
    HeaderParams: PostAdminSettingHeaderParams;
};