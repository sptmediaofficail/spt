export type PostChatHeaderParams = {
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
export type PostChat200 = any;
export type PostChatMutationRequest = {
    /**
     * @type string | undefined
    */
    order_id?: string;
    /**
     * @type string | undefined
    */
    receiver_id?: string;
};
export type PostChatMutationResponse = any;
export type PostChatMutation = {
    Response: PostChatMutationResponse;
    Request: PostChatMutationRequest;
    HeaderParams: PostChatHeaderParams;
};