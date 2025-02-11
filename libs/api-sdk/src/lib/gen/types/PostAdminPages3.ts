export type PostAdminPages3HeaderParams = {
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
export type PostAdminPages3200 = any;
export type PostAdminPages3MutationRequest = {
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
export type PostAdminPages3MutationResponse = any;
export type PostAdminPages3Mutation = {
    Response: PostAdminPages3MutationResponse;
    Request: PostAdminPages3MutationRequest;
    HeaderParams: PostAdminPages3HeaderParams;
};