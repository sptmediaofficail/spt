export type PostCallEndHeaderParams = {
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
export type PostCallEnd200 = any;
export type PostCallEndMutationRequest = {
    /**
     * @type string | undefined
    */
    id?: string;
};
export type PostCallEndMutationResponse = any;
export type PostCallEndMutation = {
    Response: PostCallEndMutationResponse;
    Request: PostCallEndMutationRequest;
    HeaderParams: PostCallEndHeaderParams;
};