export type PostProviderOfferHeaderParams = {
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
export type PostProviderOffer200 = any;
export type PostProviderOfferMutationRequest = {
    /**
     * @type string | undefined
    */
    order_id?: string;
    /**
     * @type number | undefined
    */
    price?: number;
    /**
     * @type integer | undefined
    */
    delivery_fee?: number;
};
export type PostProviderOfferMutationResponse = any;
export type PostProviderOfferMutation = {
    Response: PostProviderOfferMutationResponse;
    Request: PostProviderOfferMutationRequest;
    HeaderParams: PostProviderOfferHeaderParams;
};