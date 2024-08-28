export type PostAdminProviderSubscriptionPlansHeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
    /**
     * @type string | undefined
    */
    "Content-Type"?: string;
};
/**
 * @description Successful response
*/
export type PostAdminProviderSubscriptionPlans200 = any;
export type PostAdminProviderSubscriptionPlansMutationRequest = {
    /**
     * @type string | undefined
    */
    name_en?: string;
    /**
     * @type string | undefined
    */
    name_ar?: string;
    /**
     * @type string | undefined
    */
    description_en?: string;
    /**
     * @type string | undefined
    */
    description_ar?: string;
    /**
     * @type string | undefined
    */
    summary_en?: string;
    /**
     * @type string | undefined
    */
    summary_ar?: string;
    /**
     * @type string | undefined, binary
    */
    image?: Blob;
    /**
     * @type integer | undefined
    */
    price?: number;
    /**
     * @description months
     * @type integer | undefined
    */
    duration?: number;
    /**
     * @description months
     * @type integer | undefined
    */
    free_duration?: number;
    /**
     * @type string | undefined
    */
    currency_en?: string;
    /**
     * @type string | undefined
    */
    currency_ar?: string;
    /**
     * @type string | undefined
    */
    start_date?: string;
    /**
     * @type string | undefined
    */
    end_date?: string;
};
export type PostAdminProviderSubscriptionPlansMutationResponse = any;
export type PostAdminProviderSubscriptionPlansMutation = {
    Response: PostAdminProviderSubscriptionPlansMutationResponse;
    Request: PostAdminProviderSubscriptionPlansMutationRequest;
    HeaderParams: PostAdminProviderSubscriptionPlansHeaderParams;
};