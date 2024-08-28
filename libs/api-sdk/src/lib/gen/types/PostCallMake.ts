export type PostCallMakeHeaderParams = {
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
export type PostCallMake200 = any;
export type PostCallMakeMutationRequest = {
    /**
     * @type string | undefined
    */
    order_id?: string;
    /**
     * @type string | undefined
    */
    receiver_id?: string;
    /**
     * @type string | undefined
    */
    call_type?: string;
};
export type PostCallMakeMutationResponse = any;
export type PostCallMakeMutation = {
    Response: PostCallMakeMutationResponse;
    Request: PostCallMakeMutationRequest;
    HeaderParams: PostCallMakeHeaderParams;
};