export type GetAdminUsersQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @type integer | undefined
    */
    page?: number;
    /**
     * @description ADMIN BUSINESS CLIENT
     * @type string | undefined
    */
    role?: string;
};
export type GetAdminUsersHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type GetAdminUsers200 = any;
export type GetAdminUsersQueryResponse = any;
export type GetAdminUsersQuery = {
    Response: GetAdminUsersQueryResponse;
    QueryParams: GetAdminUsersQueryParams;
    HeaderParams: GetAdminUsersHeaderParams;
};