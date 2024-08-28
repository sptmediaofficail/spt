export type PostAdminSliders726a81ecD9b543ad946bB77470b071f4HeaderParams = {
    /**
     * @type string | undefined
    */
    Accept?: string;
};
/**
 * @description Successful response
*/
export type PostAdminSliders726a81ecD9b543ad946bB77470b071f4200 = any;
export type PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationRequest = {
    /**
     * @type string | undefined
    */
    title_ar?: string;
    /**
     * @type string | undefined
    */
    title_en?: string;
    /**
     * @type string | undefined, binary
    */
    image?: Blob;
    /**
     * @type string | undefined
    */
    description_ar?: string;
    /**
     * @type string | undefined
    */
    description_en?: string;
};
export type PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationResponse = any;
export type PostAdminSliders726a81ecD9b543ad946bB77470b071f4Mutation = {
    Response: PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationResponse;
    Request: PostAdminSliders726a81ecD9b543ad946bB77470b071f4MutationRequest;
    HeaderParams: PostAdminSliders726a81ecD9b543ad946bB77470b071f4HeaderParams;
};