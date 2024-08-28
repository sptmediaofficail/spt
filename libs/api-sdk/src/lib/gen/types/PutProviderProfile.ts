export type PutProviderProfileHeaderParams = {
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
export type PutProviderProfile200 = any;
export type PutProviderProfileMutationRequest = {
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
     * @type string | undefined
    */
    part_condition?: string;
};
export type PutProviderProfileMutationResponse = any;
export type PutProviderProfileMutation = {
    Response: PutProviderProfileMutationResponse;
    Request: PutProviderProfileMutationRequest;
    HeaderParams: PutProviderProfileHeaderParams;
};