export type GetSettingQueryParams = {
    /**
     * @description contact,social_media,notification
     * @type string | undefined
    */
    section?: string;
};
/**
 * @description Successful response
*/
export type GetSetting200 = any;
export type GetSettingQueryResponse = any;
export type GetSettingQuery = {
    Response: GetSettingQueryResponse;
    QueryParams: GetSettingQueryParams;
};