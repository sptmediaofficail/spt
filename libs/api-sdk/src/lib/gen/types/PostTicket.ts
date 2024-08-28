export type PostTicketHeaderParams = {
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
export type PostTicket200 = any;
export type PostTicketMutationRequest = {
    /**
     * @type string | undefined
    */
    title?: string;
    /**
     * @type string | undefined
    */
    content?: string;
    /**
     * @description optional
     * @type string | undefined, binary
    */
    image?: Blob;
};
export type PostTicketMutationResponse = any;
export type PostTicketMutation = {
    Response: PostTicketMutationResponse;
    Request: PostTicketMutationRequest;
    HeaderParams: PostTicketHeaderParams;
};