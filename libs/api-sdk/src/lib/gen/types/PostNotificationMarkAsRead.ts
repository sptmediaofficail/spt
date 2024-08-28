export type PostNotificationMarkAsReadHeaderParams = {
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
export type PostNotificationMarkAsRead200 = any;
export type PostNotificationMarkAsReadMutationRequest = {
    /**
     * @type string | undefined
    */
    "notification_ids[0]"?: string;
};
export type PostNotificationMarkAsReadMutationResponse = any;
export type PostNotificationMarkAsReadMutation = {
    Response: PostNotificationMarkAsReadMutationResponse;
    Request: PostNotificationMarkAsReadMutationRequest;
    HeaderParams: PostNotificationMarkAsReadHeaderParams;
};