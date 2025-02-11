export type PutAdminBrandsLamborghiniHeaderParams = {
    /**
     * @type string | undefined
    */
    "Content-Type"?: string;
};
/**
 * @description Successful response
*/
export type PutAdminBrandsLamborghini200 = any;
export type PutAdminBrandsLamborghiniMutationRequest = {
    /**
     * @type string | undefined
    */
    name_en?: string;
    /**
     * @type string | undefined
    */
    name_ar?: string;
    /**
     * @type integer | undefined
    */
    order?: number;
};
export type PutAdminBrandsLamborghiniMutationResponse = any;
export type PutAdminBrandsLamborghiniMutation = {
    Response: PutAdminBrandsLamborghiniMutationResponse;
    Request: PutAdminBrandsLamborghiniMutationRequest;
    HeaderParams: PutAdminBrandsLamborghiniHeaderParams;
};