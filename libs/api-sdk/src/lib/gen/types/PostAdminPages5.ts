export type PostAdminPages5HeaderParams = {
    /**
     * @type string | undefined
    */
    "Content-Type"?: string;
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminPages5200 = any;
export type PostAdminPages5MutationRequest = {
    /**
     * @type string | undefined
    */
    content_ar?: string;
    /**
     * @type string | undefined
    */
    content_en?: string;
    /**
     * @description optional
     * @type string | undefined, binary
    */
    video?: Blob;
    /**
     * @description optional
     * @type string | undefined, binary
    */
    image?: Blob;
};
export type PostAdminPages5MutationResponse = any;
export type PostAdminPages5Mutation = {
    Response: PostAdminPages5MutationResponse;
    Request: PostAdminPages5MutationRequest;
    HeaderParams: PostAdminPages5HeaderParams;
};