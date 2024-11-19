export type GetProviderIdPathParams = {
    /**
     * @type string
    */
    id: string;
};
export type GetProviderIdHeaderParams = {
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
export type GetProviderId200 = any;
export type GetProviderIdQueryResponse = any;
export type GetProviderIdQuery = {
    Response: GetProviderIdQueryResponse;
    PathParams: GetProviderIdPathParams;
    HeaderParams: GetProviderIdHeaderParams;
};