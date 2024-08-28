export type PostAdminPermissionGroupsHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
    /**
     * @type string | undefined
    */
    "Content-Type"?: string;
};
/**
 * @description Successful response
*/
export type PostAdminPermissionGroups200 = any;
export type PostAdminPermissionGroupsMutationRequest = {
    /**
     * @type string | undefined
    */
    name_en?: string;
    /**
     * @type string | undefined
    */
    name_ar?: string;
    /**
     * @type string | undefined
    */
    "permissions[]"?: string;
};
export type PostAdminPermissionGroupsMutationResponse = any;
export type PostAdminPermissionGroupsMutation = {
    Response: PostAdminPermissionGroupsMutationResponse;
    Request: PostAdminPermissionGroupsMutationRequest;
    HeaderParams: PostAdminPermissionGroupsHeaderParams;
};