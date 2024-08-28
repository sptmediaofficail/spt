export type PostTicketMessageHeaderParams = {
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
export type PostTicketMessage200 = any;
export type PostTicketMessageMutationRequest = {
    /**
     * @type string | undefined
    */
    ticket_id?: string;
    /**
     * @type string | undefined
    */
    content?: string;
    /**
     * @description text or image
     * @type string | undefined
    */
    type?: string;
};
export type PostTicketMessageMutationResponse = any;
export type PostTicketMessageMutation = {
    Response: PostTicketMessageMutationResponse;
    Request: PostTicketMessageMutationRequest;
    HeaderParams: PostTicketMessageHeaderParams;
};