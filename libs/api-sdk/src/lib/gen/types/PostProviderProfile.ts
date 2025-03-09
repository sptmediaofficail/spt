export type PostProviderProfileHeaderParams = {
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
export type PostProviderProfile200 = any;
export type PostProviderProfileMutationRequest = {
    /**
     * @type string | undefined
    */
    name?: string;
    /**
     * @type string | undefined
    */
    owner_name?: string;
    /**
     * @type number | undefined
    */
    mobile?: number;
    /**
     * @type number | undefined
    */
    phone?: number;
    /**
     * @type number | undefined
    */
    latitude?: number;
    /**
     * @type number | undefined
    */
    longitude?: number;
    /**
     * @type string | undefined
    */
    address?: string;
    /**
     * @type string | undefined
    */
    branches?: string;
    /**
     * @description spare_parts or junkyard_sale
     * @type string | undefined
    */
    services?: string;
    /**
     * @type string | undefined
    */
    "spare_part_brands[]"?: string;
    /**
     * @type integer | undefined
    */
    is_delivery_available?: number;
    /**
     * @type integer | undefined
    */
    is_video_call_available?: number;
    /**
     * @type integer | undefined
    */
    is_voice_call_available?: number;
    /**
     * @type integer | undefined
    */
    terms_and_conditions_accepted?: number;
    /**
     * @description new,used,both
     * @type string | undefined
    */
    part_condition?: string;
    /**
     * @type string | undefined
    */
    bank_username?: string;
    /**
     * @type string | undefined
    */
    bank_name?: string;
    /**
     * @type integer | undefined
    */
    bank_account?: number;
    /**
     * @type integer | undefined
    */
    iban?: number;
    /**
     * @description boolean
     * @type integer | undefined
    */
    only_my_city?: number;
};
export type PostProviderProfileMutationResponse = any;
export type PostProviderProfileMutation = {
    Response: PostProviderProfileMutationResponse;
    Request: PostProviderProfileMutationRequest;
    HeaderParams: PostProviderProfileHeaderParams;
};