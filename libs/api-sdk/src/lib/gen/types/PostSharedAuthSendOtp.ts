export type PostSharedAuthSendOtpHeaderParams = {
  /**
   * @description API
   * @type string | undefined
   */
  'X-Requested-With'?: string;
  /**
   * @description accepts: ar, en
   * @type string | undefined
   */
  'Content-Language'?: string;
};
/**
 * @description OK
 */
export type PostSharedAuthSendOtp200 = object;
export type PostSharedAuthSendOtpMutationRequest = object;
/**
 * @description OK
 */
export type PostSharedAuthSendOtpMutationResponse = object;
export type PostSharedAuthSendOtpMutation = {
  Response: PostSharedAuthSendOtpMutationResponse;
  Request: PostSharedAuthSendOtpMutationRequest;
  HeaderParams: PostSharedAuthSendOtpHeaderParams;
};
