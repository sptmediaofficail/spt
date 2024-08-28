export type PostMessagesSendHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostMessagesSend200 = any;
export type PostMessagesSendMutationRequest = object;
export type PostMessagesSendMutationResponse = any;
export type PostMessagesSendMutation = {
    Response: PostMessagesSendMutationResponse;
    Request: PostMessagesSendMutationRequest;
    HeaderParams: PostMessagesSendHeaderParams;
};