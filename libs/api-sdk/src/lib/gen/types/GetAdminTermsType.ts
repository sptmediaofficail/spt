export type GetAdminTermsTypePathParams = {
    /**
     * @description terms or commission
     * @type string
    */
    type: string;
};
export type GetAdminTermsTypeQueryParams = {
    /**
     * @type string | undefined
    */
    category?: string;
};
/**
 * @description Successful response
*/
export type GetAdminTermsType200 = any;
export type GetAdminTermsTypeQueryResponse = any;
export type GetAdminTermsTypeQuery = {
    Response: GetAdminTermsTypeQueryResponse;
    PathParams: GetAdminTermsTypePathParams;
    QueryParams: GetAdminTermsTypeQueryParams;
};