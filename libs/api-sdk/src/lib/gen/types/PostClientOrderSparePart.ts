export type PostClientOrderSparePartHeaderParams = {
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
export type PostClientOrderSparePart200 = any;
export type PostClientOrderSparePartMutationRequest = {
    /**
     * @description valid year
     * @type integer | undefined
    */
    year?: number;
    /**
     * @description required | exists in brands
     * @type string | undefined
    */
    brand?: string;
    /**
     * @description required | exists in brand_models
     * @type string | undefined
    */
    model?: string;
    /**
     * @description required if no lat , lng
     * @type string | undefined
    */
    address?: string;
    /**
     * @description required if no address
     * @type number | undefined
    */
    latitude?: number;
    /**
     * @description required if no address
     * @type number | undefined
    */
    longitude?: number;
    /**
     * @description 1 or 0
     * @type integer | undefined
    */
    is_delivery?: number;
    /**
     * @description valid date
     * @type string | undefined
    */
    delivery_date?: string;
    /**
     * @description required
     * @type string | undefined
    */
    "parts[0][name]"?: string;
    /**
     * @description required
     * @type integer | undefined
    */
    "parts[0][quantity]"?: number;
    /**
     * @description new or used
     * @type integer | undefined
    */
    "parts[0][condition_new]"?: number;
    /**
     * @type integer | undefined
    */
    "parts[0][condition_used]"?: number;
    /**
     * @type integer | undefined
    */
    "parts[0][condition_both]"?: number;
    /**
     * @description optional
     * @type string | undefined
    */
    "parts[0][notes]"?: string;
    /**
     * @description optional
     * @type string | undefined
    */
    "parts[1][name]"?: string;
    /**
     * @type integer | undefined
    */
    "parts[1][quantity]"?: number;
    /**
     * @type integer | undefined
    */
    "parts[1][condition_new]"?: number;
    /**
     * @type integer | undefined
    */
    "parts[1][condition_used]"?: number;
    /**
     * @type integer | undefined
    */
    "parts[1][condition_both]"?: number;
    /**
     * @type string | undefined
    */
    "parts[1][notes]"?: string;
    /**
     * @type integer | undefined
    */
    agent_code?: number;
    /**
     * @type string | undefined
    */
    vin_serial?: string;
    /**
     * @description optional
     * @type string | undefined
    */
    provider_id?: string;
};
export type PostClientOrderSparePartMutationResponse = any;
export type PostClientOrderSparePartMutation = {
    Response: PostClientOrderSparePartMutationResponse;
    Request: PostClientOrderSparePartMutationRequest;
    HeaderParams: PostClientOrderSparePartHeaderParams;
};