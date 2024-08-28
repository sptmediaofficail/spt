export type GetAdminTicketsQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @type integer | undefined
    */
    page?: number;
};
/**
 * @description Successful response
*/
export type GetAdminTickets200 = any;
export type GetAdminTicketsQueryResponse = any;
export type GetAdminTicketsQuery = {
    Response: GetAdminTicketsQueryResponse;
    QueryParams: GetAdminTicketsQueryParams;
};