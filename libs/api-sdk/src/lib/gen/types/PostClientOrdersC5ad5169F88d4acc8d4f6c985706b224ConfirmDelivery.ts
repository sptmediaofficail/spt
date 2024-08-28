export type PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryHeaderParams = {
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
export type PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDelivery200 = any;
export type PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationRequest = {
    /**
     * @type integer | undefined
    */
    code?: number;
};
export type PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse = any;
export type PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutation = {
    Response: PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationResponse;
    Request: PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryMutationRequest;
    HeaderParams: PostClientOrdersC5ad5169F88d4acc8d4f6c985706b224ConfirmDeliveryHeaderParams;
};