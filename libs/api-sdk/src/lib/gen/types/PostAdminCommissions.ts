export type PostAdminCommissionsQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @type integer | undefined
    */
    page?: number;
};
export type PostAdminCommissionsHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminCommissions200 = any;
export type PostAdminCommissionsMutationRequest = object;
export type PostAdminCommissionsMutationResponse = any;
export type PostAdminCommissionsMutation = {
    Response: PostAdminCommissionsMutationResponse;
    Request: PostAdminCommissionsMutationRequest;
    QueryParams: PostAdminCommissionsQueryParams;
    HeaderParams: PostAdminCommissionsHeaderParams;
};