/**
 * @description Successful response
*/
export type PostAdminTicketsSendMessage200 = any;
export type PostAdminTicketsSendMessageMutationRequest = {
    /**
     * @type string | undefined
    */
    ticket_id?: string;
    /**
     * @type string | undefined
    */
    content?: string;
    /**
     * @type string | undefined
    */
    type?: string;
};
export type PostAdminTicketsSendMessageMutationResponse = any;
export type PostAdminTicketsSendMessageMutation = {
    Response: PostAdminTicketsSendMessageMutationResponse;
    Request: PostAdminTicketsSendMessageMutationRequest;
};