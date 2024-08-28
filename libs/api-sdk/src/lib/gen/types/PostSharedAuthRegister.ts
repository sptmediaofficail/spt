export type PostSharedAuthRegisterHeaderParams = {
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
 * @description OK
*/
export type PostSharedAuthRegister200 = object;
export type PostSharedAuthRegisterMutationRequest = {
    /**
     * @type string | undefined
    */
    name?: string;
    /**
     * @type number | undefined
    */
    phone?: number;
    /**
     * @type string | undefined, binary
    */
    avatar?: Blob;
    /**
     * @type string | undefined
    */
    city_id?: string;
};
/**
 * @description OK
*/
export type PostSharedAuthRegisterMutationResponse = object;
export type PostSharedAuthRegisterMutation = {
    Response: PostSharedAuthRegisterMutationResponse;
    Request: PostSharedAuthRegisterMutationRequest;
    HeaderParams: PostSharedAuthRegisterHeaderParams;
};