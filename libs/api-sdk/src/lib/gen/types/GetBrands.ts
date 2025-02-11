export type GetBrandsQueryParams = {
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @type integer | undefined
    */
    page?: number;
};
export type GetBrandsHeaderParams = {
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
export type GetBrands200 = any;
export type GetBrandsQueryResponse = any;
export type GetBrandsQuery = {
    Response: GetBrandsQueryResponse;
    QueryParams: GetBrandsQueryParams;
    HeaderParams: GetBrandsHeaderParams;
};