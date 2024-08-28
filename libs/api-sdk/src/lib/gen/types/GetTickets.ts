export type GetTicketsQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @type integer | undefined
    */
    page?: number;
};
export type GetTicketsHeaderParams = {
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
export type GetTickets200 = any;
export type GetTicketsQueryResponse = any;
export type GetTicketsQuery = {
    Response: GetTicketsQueryResponse;
    QueryParams: GetTicketsQueryParams;
    HeaderParams: GetTicketsHeaderParams;
};