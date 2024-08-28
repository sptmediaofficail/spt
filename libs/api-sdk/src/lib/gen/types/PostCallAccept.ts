export type PostCallAcceptHeaderParams = {
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
export type PostCallAccept200 = any;
export type PostCallAcceptMutationRequest = {
    /**
     * @type string | undefined
    */
    id?: string;
};
export type PostCallAcceptMutationResponse = any;
export type PostCallAcceptMutation = {
    Response: PostCallAcceptMutationResponse;
    Request: PostCallAcceptMutationRequest;
    HeaderParams: PostCallAcceptHeaderParams;
};