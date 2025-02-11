export type GetBrandsBrandidModelsPathParams = {
    /**
     * @type string
    */
    brandId: string;
};
export type GetBrandsBrandidModelsQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @type integer | undefined
    */
    page?: number;
};
export type GetBrandsBrandidModelsHeaderParams = {
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
export type GetBrandsBrandidModels200 = any;
export type GetBrandsBrandidModelsQueryResponse = any;
export type GetBrandsBrandidModelsQuery = {
    Response: GetBrandsBrandidModelsQueryResponse;
    PathParams: GetBrandsBrandidModelsPathParams;
    QueryParams: GetBrandsBrandidModelsQueryParams;
    HeaderParams: GetBrandsBrandidModelsHeaderParams;
};