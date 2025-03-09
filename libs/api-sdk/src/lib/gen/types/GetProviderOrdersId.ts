export type GetProviderOrdersIdPathParams = {
    /**
     * @type string
    */
    id: string;
};
export type GetProviderOrdersIdHeaderParams = {
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
export type GetProviderOrdersId200 = any;
export type GetProviderOrdersIdQueryResponse = any;
export type GetProviderOrdersIdQuery = {
    Response: GetProviderOrdersIdQueryResponse;
    PathParams: GetProviderOrdersIdPathParams;
    HeaderParams: GetProviderOrdersIdHeaderParams;
};