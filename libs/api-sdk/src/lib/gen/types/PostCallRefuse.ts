export type PostCallRefuseHeaderParams = {
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
export type PostCallRefuse200 = any;
export type PostCallRefuseMutationRequest = {
    /**
     * @type string | undefined
    */
    id?: string;
};
export type PostCallRefuseMutationResponse = any;
export type PostCallRefuseMutation = {
    Response: PostCallRefuseMutationResponse;
    Request: PostCallRefuseMutationRequest;
    HeaderParams: PostCallRefuseHeaderParams;
};