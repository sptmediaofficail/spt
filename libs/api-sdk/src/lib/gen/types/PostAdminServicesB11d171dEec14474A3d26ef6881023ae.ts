export type PostAdminServicesB11d171dEec14474A3d26ef6881023aeHeaderParams = {
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
export type PostAdminServicesB11d171dEec14474A3d26ef6881023ae200 = any;
export type PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationRequest = {
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
    description_ar?: string;
    /**
     * @type string | undefined
    */
    description_en?: string;
    /**
     * @type string | undefined, binary
    */
    image?: Blob;
    /**
     * @type string | undefined
    */
    _method?: string;
};
export type PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationResponse = any;
export type PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutation = {
    Response: PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationResponse;
    Request: PostAdminServicesB11d171dEec14474A3d26ef6881023aeMutationRequest;
    HeaderParams: PostAdminServicesB11d171dEec14474A3d26ef6881023aeHeaderParams;
};