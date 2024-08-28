export type GetClientServicesHeaderParams = {
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
export type GetClientServices200 = any;
export type GetClientServicesQueryResponse = any;
export type GetClientServicesQuery = {
    Response: GetClientServicesQueryResponse;
    HeaderParams: GetClientServicesHeaderParams;
};