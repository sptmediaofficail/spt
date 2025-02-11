export type GetVinVinPathParams = {
    /**
     * @type string
    */
    vin: string;
};
export type GetVinVinHeaderParams = {
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
export type GetVinVin200 = any;
export type GetVinVinQueryResponse = any;
export type GetVinVinQuery = {
    Response: GetVinVinQueryResponse;
    PathParams: GetVinVinPathParams;
    HeaderParams: GetVinVinHeaderParams;
};