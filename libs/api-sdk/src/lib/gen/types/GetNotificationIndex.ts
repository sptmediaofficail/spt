export type GetNotificationIndexQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
};
export type GetNotificationIndexHeaderParams = {
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
export type GetNotificationIndex200 = any;
export type GetNotificationIndexQueryResponse = any;
export type GetNotificationIndexQuery = {
    Response: GetNotificationIndexQueryResponse;
    QueryParams: GetNotificationIndexQueryParams;
    HeaderParams: GetNotificationIndexHeaderParams;
};