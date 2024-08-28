export type PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704HeaderParams = {
    /**
     * @type string | undefined
    */
    "Content-Type"?: string;
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704200 = any;
export type PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationRequest = {
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
     * @type integer | undefined
    */
    price?: number;
    /**
     * @type integer | undefined
    */
    days_count?: number;
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
    /**
     * @type string | undefined, binary
    */
    image?: Blob;
    /**
     * @type integer | undefined
    */
    duration?: number;
    /**
     * @type integer | undefined
    */
    free_duration?: number;
};
export type PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse = any;
export type PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704Mutation = {
    Response: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationResponse;
    Request: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704MutationRequest;
    HeaderParams: PostAdminProviderSubscriptionPlans945b42fcA2794ac58c0077e635c87704HeaderParams;
};