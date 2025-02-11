export type GetClientOrdersIdPathParams = {
    /**
     * @type string
    */
    id: string;
};
export type GetClientOrdersIdHeaderParams = {
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
export type GetClientOrdersId200 = any;
export type GetClientOrdersIdQueryResponse = any;
export type GetClientOrdersIdQuery = {
    Response: GetClientOrdersIdQueryResponse;
    PathParams: GetClientOrdersIdPathParams;
    HeaderParams: GetClientOrdersIdHeaderParams;
};