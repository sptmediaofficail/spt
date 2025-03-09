export type PostProviderOrdersIdConfirmDeliveryPathParams = {
    /**
     * @type string
    */
    id: string;
};
export type PostProviderOrdersIdConfirmDeliveryHeaderParams = {
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
export type PostProviderOrdersIdConfirmDelivery200 = any;
export type PostProviderOrdersIdConfirmDeliveryMutationRequest = object;
export type PostProviderOrdersIdConfirmDeliveryMutationResponse = any;
export type PostProviderOrdersIdConfirmDeliveryMutation = {
    Response: PostProviderOrdersIdConfirmDeliveryMutationResponse;
    Request: PostProviderOrdersIdConfirmDeliveryMutationRequest;
    PathParams: PostProviderOrdersIdConfirmDeliveryPathParams;
    HeaderParams: PostProviderOrdersIdConfirmDeliveryHeaderParams;
};