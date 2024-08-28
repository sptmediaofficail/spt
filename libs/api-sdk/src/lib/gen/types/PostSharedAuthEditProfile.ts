export type PostSharedAuthEditProfileHeaderParams = {
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
export type PostSharedAuthEditProfile200 = any;
export type PostSharedAuthEditProfileMutationRequest = {
    /**
     * @type string | undefined
    */
    name?: string;
    /**
     * @type integer | undefined
    */
    city_id?: number;
    /**
     * @type string | undefined, binary
    */
    avatar?: Blob;
};
export type PostSharedAuthEditProfileMutationResponse = any;
export type PostSharedAuthEditProfileMutation = {
    Response: PostSharedAuthEditProfileMutationResponse;
    Request: PostSharedAuthEditProfileMutationRequest;
    HeaderParams: PostSharedAuthEditProfileHeaderParams;
};