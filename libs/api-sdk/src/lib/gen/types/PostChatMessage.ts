export type PostChatMessageHeaderParams = {
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
export type PostChatMessage200 = any;
export type PostChatMessageMutationRequest = {
    /**
     * @type string | undefined
    */
    chat_id?: string;
    /**
     * @type string | undefined
    */
    content?: string;
    /**
     * @type string | undefined
    */
    type?: string;
};
export type PostChatMessageMutationResponse = any;
export type PostChatMessageMutation = {
    Response: PostChatMessageMutationResponse;
    Request: PostChatMessageMutationRequest;
    HeaderParams: PostChatMessageHeaderParams;
};