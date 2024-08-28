export type GetAdminMessageTemplatesQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @type integer | undefined
    */
    page?: number;
};
export type GetAdminMessageTemplatesHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type GetAdminMessageTemplates200 = any;
export type GetAdminMessageTemplatesQueryResponse = any;
export type GetAdminMessageTemplatesQuery = {
    Response: GetAdminMessageTemplatesQueryResponse;
    QueryParams: GetAdminMessageTemplatesQueryParams;
    HeaderParams: GetAdminMessageTemplatesHeaderParams;
};