export type PutSharedAuthUpdateSettingsHeaderParams = {
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
export type PutSharedAuthUpdateSettings200 = any;
export type PutSharedAuthUpdateSettingsMutationRequest = object;
export type PutSharedAuthUpdateSettingsMutationResponse = any;
export type PutSharedAuthUpdateSettingsMutation = {
    Response: PutSharedAuthUpdateSettingsMutationResponse;
    Request: PutSharedAuthUpdateSettingsMutationRequest;
    HeaderParams: PutSharedAuthUpdateSettingsHeaderParams;
};