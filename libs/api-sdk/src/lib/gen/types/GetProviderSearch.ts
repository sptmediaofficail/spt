export type GetProviderSearchQueryParams = {
    /**
     * @description spare_parts,towing,maintenance
     * @type string | undefined
    */
    type?: string;
    /**
     * @type integer | undefined
    */
    paginate?: number;
    /**
     * @type number | undefined
    */
    lat?: number;
    /**
     * @type number | undefined
    */
    lng?: number;
    /**
     * @type string | undefined
    */
    sort?: string;
};
export type GetProviderSearchHeaderParams = {
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
export type GetProviderSearch200 = any;
export type GetProviderSearchQueryResponse = any;
export type GetProviderSearchQuery = {
    Response: GetProviderSearchQueryResponse;
    QueryParams: GetProviderSearchQueryParams;
    HeaderParams: GetProviderSearchHeaderParams;
};