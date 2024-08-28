export type GetNotificationUnreadCountHeaderParams = {
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
export type GetNotificationUnreadCount200 = any;
export type GetNotificationUnreadCountQueryResponse = any;
export type GetNotificationUnreadCountQuery = {
    Response: GetNotificationUnreadCountQueryResponse;
    HeaderParams: GetNotificationUnreadCountHeaderParams;
};