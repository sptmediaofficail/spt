// generated with @7nohe/openapi-react-query-codegen@1.6.1 

import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AdminAdminOrdersService, AdminAuthService, AdminCitiesService, AdminCityServiceService, AdminCommissionsService, AdminCustomNotificationService, AdminLandingAboutSectionsService, AdminLandingAboutService, AdminLandingDownloadSectionService, AdminLandingGuaranteeRightService, AdminLandingHowHelpService, AdminLandingPartnersService, AdminLandingSiteOfferService, AdminLandingSlidersService, AdminMessagesService, AdminMessageTemplatesService, AdminPagesService, AdminPermissionGroupsService, AdminPermissionsService, AdminPlatformReviewsService, AdminProviderProfilesService, AdminProviderSubscriptionPlansService, AdminServicesService, AdminSettingService, AdminTicketsService, AdminUsersService, AuthenticationService, BrandModelsService, BrandService, CallService, ChatService, CitiesService, ClientClientOfferService, ClientClientOrdersService, ClientServicesService, LandingService, MessagesService, NotificationService, OrderSparePartService, PagesService, PlatformReviewsService, ProviderProviderOfferService, ProviderProviderOrdersService, ProviderProviderProfileService, ProviderProviderSubscriptionService, SettingsService, SiteOffersService, TicketService, VinService } from "../requests/services.gen";
import * as Common from "./common";
/**
* me
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useAuthenticationServiceGetSharedAuthMe = <TData = Common.AuthenticationServiceGetSharedAuthMeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAuthenticationServiceGetSharedAuthMeKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => AuthenticationService.getSharedAuthMe({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useBrandServiceGetBrands = <TData = Common.BrandServiceGetBrandsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBrandServiceGetBrandsKeyFn({ contentLanguage, paginate, xRequestedWith }, queryKey), queryFn: () => BrandService.getBrands({ contentLanguage, paginate, xRequestedWith }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useSiteOffersServiceGetSiteOffers = <TData = Common.SiteOffersServiceGetSiteOffersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSiteOffersServiceGetSiteOffersKeyFn({ contentLanguage, paginate, xRequestedWith }, queryKey), queryFn: () => SiteOffersService.getSiteOffers({ contentLanguage, paginate, xRequestedWith }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useCitiesServiceGetCities = <TData = Common.CitiesServiceGetCitiesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCitiesServiceGetCitiesKeyFn({ contentLanguage, paginate, xRequestedWith }, queryKey), queryFn: () => CitiesService.getCities({ contentLanguage, paginate, xRequestedWith }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useBrandModelsServiceGetBrandsAlfaRomeoModels = <TData = Common.BrandModelsServiceGetBrandsAlfaRomeoModelsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseBrandModelsServiceGetBrandsAlfaRomeoModelsKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => BrandModelsService.getBrandsAlfaRomeoModels({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* Get Data
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useVinServiceGetVinJn8At3Mm3Pw009894 = <TData = Common.VinServiceGetVinJn8At3Mm3Pw009894DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseVinServiceGetVinJn8At3Mm3Pw009894KeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => VinService.getVinJn8At3Mm3Pw009894({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useTicketServiceGetTickets = <TData = Common.TicketServiceGetTicketsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, page, paginate, xRequestedWith }: {
  contentLanguage?: string;
  page?: number;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTicketServiceGetTicketsKeyFn({ contentLanguage, page, paginate, xRequestedWith }, queryKey), queryFn: () => TicketService.getTickets({ contentLanguage, page, paginate, xRequestedWith }) as TData, ...options });
/**
* details
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useTicketServiceGetTicketB33C269eB489415e842f65472771A0F3 = <TData = Common.TicketServiceGetTicketB33C269eB489415e842f65472771A0F3DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTicketServiceGetTicketB33C269eB489415e842f65472771A0F3KeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => TicketService.getTicketB33C269eB489415e842f65472771A0F3({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useNotificationServiceGetNotificationIndex = <TData = Common.NotificationServiceGetNotificationIndexDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseNotificationServiceGetNotificationIndexKeyFn({ contentLanguage, paginate, xRequestedWith }, queryKey), queryFn: () => NotificationService.getNotificationIndex({ contentLanguage, paginate, xRequestedWith }) as TData, ...options });
/**
* unReadCount
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useNotificationServiceGetNotificationUnreadCount = <TData = Common.NotificationServiceGetNotificationUnreadCountDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseNotificationServiceGetNotificationUnreadCountKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => NotificationService.getNotificationUnreadCount({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @param data.search
* @param data.status 'receiving_offer','accepted','completed'
* @param data.type 'spare_parts','towing','junkyard_sale'
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminAdminOrdersServiceGetAdminOrders = <TData = Common.AdminAdminOrdersServiceGetAdminOrdersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, search, status, type, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  search?: string;
  status?: string;
  type?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminAdminOrdersServiceGetAdminOrdersKeyFn({ contentLanguage, paginate, search, status, type, xRequestedWith }, queryKey), queryFn: () => AdminAdminOrdersService.getAdminOrders({ contentLanguage, paginate, search, status, type, xRequestedWith }) as TData, ...options });
/**
* details
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186 = <TData = Common.AdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186KeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => AdminAdminOrdersService.getAdminOrders1D9De514C4E149878Eb90909556C7186({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* offers
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186Offers = <TData = Common.AdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186OffersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186OffersKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => AdminAdminOrdersService.getAdminOrders1D9De514C4E149878Eb90909556C7186Offers({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* chat
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChat = <TData = Common.AdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChatDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChatKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => AdminAdminOrdersService.getAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChat({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* calls
* @returns unknown Successful response
* @throws ApiError
*/
export const useSettingsServiceGetSettingCalls = <TData = Common.SettingsServiceGetSettingCallsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSettingsServiceGetSettingCallsKeyFn(queryKey), queryFn: () => SettingsService.getSettingCalls() as TData, ...options });
/**
* get by section
* @param data The data for the request.
* @param data.section contact,social_media,notification
* @returns unknown Successful response
* @throws ApiError
*/
export const useSettingsServiceGetSetting = <TData = Common.SettingsServiceGetSettingDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ section }: {
  section?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSettingsServiceGetSettingKeyFn({ section }, queryKey), queryFn: () => SettingsService.getSetting({ section }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @param data.search
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCitiesServiceGetAdminCities = <TData = Common.AdminCitiesServiceGetAdminCitiesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate, search }: {
  page?: number;
  paginate?: number;
  search?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminCitiesServiceGetAdminCitiesKeyFn({ page, paginate, search }, queryKey), queryFn: () => AdminCitiesService.getAdminCities({ page, paginate, search }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderProfilesServiceGetAdminProviderProfiles = <TData = Common.AdminProviderProfilesServiceGetAdminProviderProfilesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminProviderProfilesServiceGetAdminProviderProfilesKeyFn({ page, paginate }, queryKey), queryFn: () => AdminProviderProfilesService.getAdminProviderProfiles({ page, paginate }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.accept
* @param data.paginate
* @param data.page
* @param data.role ADMIN BUSINESS CLIENT
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminUsersServiceGetAdminUsers = <TData = Common.AdminUsersServiceGetAdminUsersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept, page, paginate, role }: {
  accept?: string;
  page?: number;
  paginate?: number;
  role?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminUsersServiceGetAdminUsersKeyFn({ accept, page, paginate, role }, queryKey), queryFn: () => AdminUsersService.getAdminUsers({ accept, page, paginate, role }) as TData, ...options });
/**
* single
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7 = <TData = Common.AdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept }: {
  accept?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7KeyFn({ accept }, queryKey), queryFn: () => AdminUsersService.getAdminUsers72D5778fB67b4E97B4E2F98F695162A7({ accept }) as TData, ...options });
/**
* GET All Message Templates
* @param data The data for the request.
* @param data.accept
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminMessageTemplatesServiceGetAdminMessageTemplates = <TData = Common.AdminMessageTemplatesServiceGetAdminMessageTemplatesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept, page, paginate }: {
  accept?: string;
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminMessageTemplatesServiceGetAdminMessageTemplatesKeyFn({ accept, page, paginate }, queryKey), queryFn: () => AdminMessageTemplatesService.getAdminMessageTemplates({ accept, page, paginate }) as TData, ...options });
/**
* GET Specific Message Template
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminMessageTemplatesServiceGetAdminMessageTemplates2 = <TData = Common.AdminMessageTemplatesServiceGetAdminMessageTemplates2DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept }: {
  accept?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminMessageTemplatesServiceGetAdminMessageTemplates2KeyFn({ accept }, queryKey), queryFn: () => AdminMessageTemplatesService.getAdminMessageTemplates2({ accept }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminServicesServiceGetAdminServices = <TData = Common.AdminServicesServiceGetAdminServicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminServicesServiceGetAdminServicesKeyFn({ page, paginate }, queryKey), queryFn: () => AdminServicesService.getAdminServices({ page, paginate }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCommissionsServiceGetAdminCommissions = <TData = Common.AdminCommissionsServiceGetAdminCommissionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminCommissionsServiceGetAdminCommissionsKeyFn({ page, paginate }, queryKey), queryFn: () => AdminCommissionsService.getAdminCommissions({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPlatformReviewsServiceGetAdminPlatformReviews = <TData = Common.AdminPlatformReviewsServiceGetAdminPlatformReviewsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminPlatformReviewsServiceGetAdminPlatformReviewsKeyFn({ page, paginate }, queryKey), queryFn: () => AdminPlatformReviewsService.getAdminPlatformReviews({ page, paginate }) as TData, ...options });
/**
* get page by type
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPagesServiceGetAdminPagesRights = <TData = Common.AdminPagesServiceGetAdminPagesRightsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminPagesServiceGetAdminPagesRightsKeyFn(queryKey), queryFn: () => AdminPagesService.getAdminPagesRights() as TData, ...options });
/**
* get page by type paginated
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPagesServiceGetAdminPagesRightsPaginated = <TData = Common.AdminPagesServiceGetAdminPagesRightsPaginatedDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminPagesServiceGetAdminPagesRightsPaginatedKeyFn({ page, paginate }, queryKey), queryFn: () => AdminPagesService.getAdminPagesRightsPaginated({ page, paginate }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlans = <TData = Common.AdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansKeyFn({ page, paginate }, queryKey), queryFn: () => AdminProviderSubscriptionPlansService.getAdminProviderSubscriptionPlans({ page, paginate }) as TData, ...options });
/**
* city-services
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @param data.search
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCityServiceServiceGetAdminCityServices = <TData = Common.AdminCityServiceServiceGetAdminCityServicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate, search }: {
  page?: number;
  paginate?: number;
  search?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminCityServiceServiceGetAdminCityServicesKeyFn({ page, paginate, search }, queryKey), queryFn: () => AdminCityServiceService.getAdminCityServices({ page, paginate, search }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPermissionGroupsServiceGetAdminPermissionGroups = <TData = Common.AdminPermissionGroupsServiceGetAdminPermissionGroupsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminPermissionGroupsServiceGetAdminPermissionGroupsKeyFn({ page, paginate }, queryKey), queryFn: () => AdminPermissionGroupsService.getAdminPermissionGroups({ page, paginate }) as TData, ...options });
/**
* single
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47Dcfaf = <TData = Common.AdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47DcfafDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47DcfafKeyFn(queryKey), queryFn: () => AdminPermissionGroupsService.getAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47Dcfaf() as TData, ...options });
/**
* index
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPermissionsServiceGetAdminPermissions = <TData = Common.AdminPermissionsServiceGetAdminPermissionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminPermissionsServiceGetAdminPermissionsKeyFn(queryKey), queryFn: () => AdminPermissionsService.getAdminPermissions() as TData, ...options });
/**
* Get All Unreplied Messages
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminMessagesServiceGetAdminMessages = <TData = Common.AdminMessagesServiceGetAdminMessagesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept }: {
  accept?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminMessagesServiceGetAdminMessagesKeyFn({ accept }, queryKey), queryFn: () => AdminMessagesService.getAdminMessages({ accept }) as TData, ...options });
/**
* Get a specific Unreplied Messages
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226 = <TData = Common.AdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept }: {
  accept?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226KeyFn({ accept }, queryKey), queryFn: () => AdminMessagesService.getAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226({ accept }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSlidersServiceGetAdminSliders = <TData = Common.AdminLandingSlidersServiceGetAdminSlidersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminLandingSlidersServiceGetAdminSlidersKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingSlidersService.getAdminSliders({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingHowHelpServiceGetAdminHowHelp = <TData = Common.AdminLandingHowHelpServiceGetAdminHowHelpDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminLandingHowHelpServiceGetAdminHowHelpKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingHowHelpService.getAdminHowHelp({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutSectionsServiceGetAdminAboutSections = <TData = Common.AdminLandingAboutSectionsServiceGetAdminAboutSectionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminLandingAboutSectionsServiceGetAdminAboutSectionsKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingAboutSectionsService.getAdminAboutSections({ page, paginate }) as TData, ...options });
/**
* list
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingDownloadSectionServiceGetAdminDownloadSection = <TData = Common.AdminLandingDownloadSectionServiceGetAdminDownloadSectionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminLandingDownloadSectionServiceGetAdminDownloadSectionKeyFn(queryKey), queryFn: () => AdminLandingDownloadSectionService.getAdminDownloadSection() as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutServiceGetAdminAbout = <TData = Common.AdminLandingAboutServiceGetAdminAboutDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminLandingAboutServiceGetAdminAboutKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingAboutService.getAdminAbout({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSiteOfferServiceGetAdminSiteOffers = <TData = Common.AdminLandingSiteOfferServiceGetAdminSiteOffersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminLandingSiteOfferServiceGetAdminSiteOffersKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingSiteOfferService.getAdminSiteOffers({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingGuaranteeRightServiceGetAdminGuaranteeRight = <TData = Common.AdminLandingGuaranteeRightServiceGetAdminGuaranteeRightDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminLandingGuaranteeRightServiceGetAdminGuaranteeRightKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingGuaranteeRightService.getAdminGuaranteeRight({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingPartnersServiceGetAdminPartners = <TData = Common.AdminLandingPartnersServiceGetAdminPartnersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminLandingPartnersServiceGetAdminPartnersKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingPartnersService.getAdminPartners({ page, paginate }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminTicketsServiceGetAdminTickets = <TData = Common.AdminTicketsServiceGetAdminTicketsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminTicketsServiceGetAdminTicketsKeyFn({ page, paginate }, queryKey), queryFn: () => AdminTicketsService.getAdminTickets({ page, paginate }) as TData, ...options });
/**
* messages
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessages = <TData = Common.AdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesKeyFn({ page, paginate }, queryKey), queryFn: () => AdminTicketsService.getAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessages({ page, paginate }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.statusArray receiving_offer - accepted - completed
* @returns unknown Successful response
* @throws ApiError
*/
export const useClientClientOrdersServiceGetClientOrders = <TData = Common.ClientClientOrdersServiceGetClientOrdersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, statusArray, xRequestedWith }: {
  contentLanguage?: string;
  statusArray?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseClientClientOrdersServiceGetClientOrdersKeyFn({ contentLanguage, statusArray, xRequestedWith }, queryKey), queryFn: () => ClientClientOrdersService.getClientOrders({ contentLanguage, statusArray, xRequestedWith }) as TData, ...options });
/**
* details
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224 = <TData = Common.ClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224KeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ClientClientOrdersService.getClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useClientServicesServiceGetClientServices = <TData = Common.ClientServicesServiceGetClientServicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseClientServicesServiceGetClientServicesKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ClientServicesService.getClientServices({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* plans
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderSubscriptionServiceGetProviderSubscriptionPlans = <TData = Common.ProviderProviderSubscriptionServiceGetProviderSubscriptionPlansDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderProviderSubscriptionServiceGetProviderSubscriptionPlansKeyFn({ contentLanguage, paginate, xRequestedWith }, queryKey), queryFn: () => ProviderProviderSubscriptionService.getProviderSubscriptionPlans({ contentLanguage, paginate, xRequestedWith }) as TData, ...options });
/**
* check
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderSubscriptionServiceGetProviderSubscriptionCheck = <TData = Common.ProviderProviderSubscriptionServiceGetProviderSubscriptionCheckDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderProviderSubscriptionServiceGetProviderSubscriptionCheckKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ProviderProviderSubscriptionService.getProviderSubscriptionCheck({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* show
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderProfileServiceGetProviderProfile = <TData = Common.ProviderProviderProfileServiceGetProviderProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderProviderProfileServiceGetProviderProfileKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ProviderProviderProfileService.getProviderProfile({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* me
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderProfileServiceGetProviderMe = <TData = Common.ProviderProviderProfileServiceGetProviderMeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderProviderProfileServiceGetProviderMeKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ProviderProviderProfileService.getProviderMe({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* single provider
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderProfileServiceGetProviderF84Fd31930E54Ea49C2881B822045Ebc = <TData = Common.ProviderProviderProfileServiceGetProviderF84Fd31930E54Ea49C2881B822045EbcDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderProviderProfileServiceGetProviderF84Fd31930E54Ea49C2881B822045EbcKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ProviderProviderProfileService.getProviderF84Fd31930E54Ea49C2881B822045Ebc({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* search
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.type spare_parts,towing,maintenance
* @param data.paginate
* @param data.lat
* @param data.lng
* @param data.sort
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderProfileServiceGetProviderSearch = <TData = Common.ProviderProviderProfileServiceGetProviderSearchDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, lat, lng, paginate, sort, type, xRequestedWith }: {
  contentLanguage?: string;
  lat?: number;
  lng?: number;
  paginate?: number;
  sort?: string;
  type?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderProviderProfileServiceGetProviderSearchKeyFn({ contentLanguage, lat, lng, paginate, sort, type, xRequestedWith }, queryKey), queryFn: () => ProviderProviderProfileService.getProviderSearch({ contentLanguage, lat, lng, paginate, sort, type, xRequestedWith }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.status can_submit - already_submit - accepted - finished
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderOrdersServiceGetProviderOrders = <TData = Common.ProviderProviderOrdersServiceGetProviderOrdersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, status, xRequestedWith }: {
  contentLanguage?: string;
  status?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderProviderOrdersServiceGetProviderOrdersKeyFn({ contentLanguage, status, xRequestedWith }, queryKey), queryFn: () => ProviderProviderOrdersService.getProviderOrders({ contentLanguage, status, xRequestedWith }) as TData, ...options });
/**
* details
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186 = <TData = Common.ProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186KeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ProviderProviderOrdersService.getProviderOrders1D9De514C4E149878Eb90909556C7186({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* get page by type
* @returns unknown Successful response
* @throws ApiError
*/
export const usePagesServiceGetPagesHowWeHelp = <TData = Common.PagesServiceGetPagesHowWeHelpDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePagesServiceGetPagesHowWeHelpKeyFn(queryKey), queryFn: () => PagesService.getPagesHowWeHelp() as TData, ...options });
/**
* get page by type paginated
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const usePagesServiceGetPagesRightsPaginated = <TData = Common.PagesServiceGetPagesRightsPaginatedDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePagesServiceGetPagesRightsPaginatedKeyFn({ page, paginate }, queryKey), queryFn: () => PagesService.getPagesRightsPaginated({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const usePlatformReviewsServiceGetPlatformReviews = <TData = Common.PlatformReviewsServiceGetPlatformReviewsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePlatformReviewsServiceGetPlatformReviewsKeyFn({ page, paginate }, queryKey), queryFn: () => PlatformReviewsService.getPlatformReviews({ page, paginate }) as TData, ...options });
/**
* Get All Messages of the Logged In User
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const useMessagesServiceGetMessages = <TData = Common.MessagesServiceGetMessagesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept }: {
  accept?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMessagesServiceGetMessagesKeyFn({ accept }, queryKey), queryFn: () => MessagesService.getMessages({ accept }) as TData, ...options });
/**
* sliders
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingSliders = <TData = Common.LandingServiceGetLandingSlidersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingSlidersKeyFn(queryKey), queryFn: () => LandingService.getLandingSliders() as TData, ...options });
/**
* services
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingServices = <TData = Common.LandingServiceGetLandingServicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingServicesKeyFn(queryKey), queryFn: () => LandingService.getLandingServices() as TData, ...options });
/**
* site_offers
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingSiteOffers = <TData = Common.LandingServiceGetLandingSiteOffersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingSiteOffersKeyFn(queryKey), queryFn: () => LandingService.getLandingSiteOffers() as TData, ...options });
/**
* plans
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingPlans = <TData = Common.LandingServiceGetLandingPlansDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingPlansKeyFn(queryKey), queryFn: () => LandingService.getLandingPlans() as TData, ...options });
/**
* how_help
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingHowHelp = <TData = Common.LandingServiceGetLandingHowHelpDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingHowHelpKeyFn(queryKey), queryFn: () => LandingService.getLandingHowHelp() as TData, ...options });
/**
* about sections
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingAboutSections = <TData = Common.LandingServiceGetLandingAboutSectionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingAboutSectionsKeyFn(queryKey), queryFn: () => LandingService.getLandingAboutSections() as TData, ...options });
/**
* download section
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingDownloadSection = <TData = Common.LandingServiceGetLandingDownloadSectionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingDownloadSectionKeyFn(queryKey), queryFn: () => LandingService.getLandingDownloadSection() as TData, ...options });
/**
* guarantee_rights
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingGuaranteeRights = <TData = Common.LandingServiceGetLandingGuaranteeRightsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingGuaranteeRightsKeyFn(queryKey), queryFn: () => LandingService.getLandingGuaranteeRights() as TData, ...options });
/**
* platform_reviews
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingPlatformReviews = <TData = Common.LandingServiceGetLandingPlatformReviewsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingPlatformReviewsKeyFn(queryKey), queryFn: () => LandingService.getLandingPlatformReviews() as TData, ...options });
/**
* partners
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingPartners = <TData = Common.LandingServiceGetLandingPartnersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingPartnersKeyFn(queryKey), queryFn: () => LandingService.getLandingPartners() as TData, ...options });
/**
* most_rated_providers
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingMostRatedProviders = <TData = Common.LandingServiceGetLandingMostRatedProvidersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingMostRatedProvidersKeyFn(queryKey), queryFn: () => LandingService.getLandingMostRatedProviders() as TData, ...options });
/**
* orders_numbers
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingOrdersNumbers = <TData = Common.LandingServiceGetLandingOrdersNumbersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingOrdersNumbersKeyFn(queryKey), queryFn: () => LandingService.getLandingOrdersNumbers() as TData, ...options });
/**
* contact
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingContact = <TData = Common.LandingServiceGetLandingContactDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingContactKeyFn(queryKey), queryFn: () => LandingService.getLandingContact() as TData, ...options });
/**
* about
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingAbout = <TData = Common.LandingServiceGetLandingAboutDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingAboutKeyFn(queryKey), queryFn: () => LandingService.getLandingAbout() as TData, ...options });
/**
* how_order
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingHowOrder = <TData = Common.LandingServiceGetLandingHowOrderDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingHowOrderKeyFn(queryKey), queryFn: () => LandingService.getLandingHowOrder() as TData, ...options });
/**
* Register
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown OK
* @throws ApiError
*/
export const useAuthenticationServicePostSharedAuthRegister = <TData = Common.AuthenticationServicePostSharedAuthRegisterMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { name?: string; phone?: number; avatar?: (Blob | File); city_id?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { name?: string; phone?: number; avatar?: (Blob | File); city_id?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => AuthenticationService.postSharedAuthRegister({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* Send OTP
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.requestBody
* @returns unknown OK
* @throws ApiError
*/
export const useAuthenticationServicePostSharedAuthSendOtp = <TData = Common.AuthenticationServicePostSharedAuthSendOtpMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, requestBody, xRequestedWith }) => AuthenticationService.postSharedAuthSendOtp({ contentLanguage, requestBody, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* Verify OTP
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.requestBody
* @returns unknown OK
* @throws ApiError
*/
export const useAuthenticationServicePostSharedAuthVerifyOtp = <TData = Common.AuthenticationServicePostSharedAuthVerifyOtpMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, requestBody, xRequestedWith }) => AuthenticationService.postSharedAuthVerifyOtp({ contentLanguage, requestBody, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* logout
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.requestBody
* @returns unknown OK
* @throws ApiError
*/
export const useAuthenticationServicePostSharedAuthLogout = <TData = Common.AuthenticationServicePostSharedAuthLogoutMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, requestBody, xRequestedWith }) => AuthenticationService.postSharedAuthLogout({ contentLanguage, requestBody, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* Edit profile
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAuthenticationServicePostSharedAuthEditProfile = <TData = Common.AuthenticationServicePostSharedAuthEditProfileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { name?: string; city_id?: number; avatar?: (Blob | File); };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { name?: string; city_id?: number; avatar?: (Blob | File); };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => AuthenticationService.postSharedAuthEditProfile({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* Change phone
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAuthenticationServicePostSharedAuthChangePhone = <TData = Common.AuthenticationServicePostSharedAuthChangePhoneMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, requestBody, xRequestedWith }) => AuthenticationService.postSharedAuthChangePhone({ contentLanguage, requestBody, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* Verify Change phone
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAuthenticationServicePostSharedAuthVerifyChangePhone = <TData = Common.AuthenticationServicePostSharedAuthVerifyChangePhoneMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, requestBody, xRequestedWith }) => AuthenticationService.postSharedAuthVerifyChangePhone({ contentLanguage, requestBody, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* store
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useOrderSparePartServicePostClientOrderSparePart = <TData = Common.OrderSparePartServicePostClientOrderSparePartMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { year?: number; brand?: string; model?: string; address?: string; latitude?: number; longitude?: number; is_delivery?: number; delivery_date?: string; 'parts[0][name]'?: string; 'parts[0][quantity]'?: number; 'parts[0][condition_new]'?: number; 'parts[0][condition_used]'?: number; 'parts[0][condition_both]'?: number; 'parts[0][notes]'?: string; 'parts[1][name]'?: string; 'parts[1][quantity]'?: number; 'parts[1][condition_new]'?: number; 'parts[1][condition_used]'?: number; 'parts[1][condition_both]'?: number; 'parts[1][notes]'?: string; agent_code?: number; vin_serial?: string; provider_id?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { year?: number; brand?: string; model?: string; address?: string; latitude?: number; longitude?: number; is_delivery?: number; delivery_date?: string; 'parts[0][name]'?: string; 'parts[0][quantity]'?: number; 'parts[0][condition_new]'?: number; 'parts[0][condition_used]'?: number; 'parts[0][condition_both]'?: number; 'parts[0][notes]'?: string; 'parts[1][name]'?: string; 'parts[1][quantity]'?: number; 'parts[1][condition_new]'?: number; 'parts[1][condition_used]'?: number; 'parts[1][condition_both]'?: number; 'parts[1][notes]'?: string; agent_code?: number; vin_serial?: string; provider_id?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => OrderSparePartService.postClientOrderSparePart({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* Chat
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useChatServicePostChat = <TData = Common.ChatServicePostChatMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { order_id?: string; receiver_id?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { order_id?: string; receiver_id?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => ChatService.postChat({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* message
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useChatServicePostChatMessage = <TData = Common.ChatServicePostChatMessageMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { chat_id?: string; content?: string; type?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { chat_id?: string; content?: string; type?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => ChatService.postChatMessage({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* ticket
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useTicketServicePostTicket = <TData = Common.TicketServicePostTicketMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { title?: string; content?: string; image?: (Blob | File); };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { title?: string; content?: string; image?: (Blob | File); };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => TicketService.postTicket({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* message
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useTicketServicePostTicketMessage = <TData = Common.TicketServicePostTicketMessageMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { ticket_id?: string; content?: string; type?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { ticket_id?: string; content?: string; type?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => TicketService.postTicketMessage({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* make a call
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useCallServicePostCallMake = <TData = Common.CallServicePostCallMakeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { order_id?: string; receiver_id?: string; call_type?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { order_id?: string; receiver_id?: string; call_type?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => CallService.postCallMake({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* accept
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useCallServicePostCallAccept = <TData = Common.CallServicePostCallAcceptMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { id?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { id?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => CallService.postCallAccept({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* refuse
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useCallServicePostCallRefuse = <TData = Common.CallServicePostCallRefuseMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { id?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { id?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => CallService.postCallRefuse({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* end
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useCallServicePostCallEnd = <TData = Common.CallServicePostCallEndMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { id?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { id?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => CallService.postCallEnd({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* mark as read
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useNotificationServicePostNotificationMarkAsRead = <TData = Common.NotificationServicePostNotificationMarkAsReadMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { 'notification_ids[0]'?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { 'notification_ids[0]'?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => NotificationService.postNotificationMarkAsRead({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminSettingServicePostAdminSetting = <TData = Common.AdminSettingServicePostAdminSettingMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, requestBody, xRequestedWith }) => AdminSettingService.postAdminSetting({ contentLanguage, requestBody, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCitiesServicePostAdminCities = <TData = Common.AdminCitiesServicePostAdminCitiesMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ accept, requestBody }) => AdminCitiesService.postAdminCities({ accept, requestBody }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCitiesServicePostAdminCities0E3685698D074EfbA367182Dd5E2Db42Stop = <TData = Common.AdminCitiesServicePostAdminCities0E3685698D074EfbA367182Dd5E2Db42StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminCitiesService.postAdminCities0E3685698D074EfbA367182Dd5E2Db42Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCitiesServicePostAdminCities0E3685698D074EfbA367182Dd5E2Db42Restore = <TData = Common.AdminCitiesServicePostAdminCities0E3685698D074EfbA367182Dd5E2Db42RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminCitiesService.postAdminCities0E3685698D074EfbA367182Dd5E2Db42Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* verify
* @param data The data for the request.
* @param data.accept
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderProfilesServicePostAdminProviderProfilesVerify09D88C1dFd8a424d9E7cA5D2391Cdbd3 = <TData = Common.AdminProviderProfilesServicePostAdminProviderProfilesVerify09D88C1dFd8a424d9E7cA5D2391Cdbd3MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ accept, requestBody }) => AdminProviderProfilesService.postAdminProviderProfilesVerify09D88C1dFd8a424d9E7cA5D2391Cdbd3({ accept, requestBody }) as unknown as Promise<TData>, ...options });
/**
* decline
* @param data The data for the request.
* @param data.accept
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderProfilesServicePostAdminProviderProfilesDecline02B915A75A5647118B4aEb110408A090 = <TData = Common.AdminProviderProfilesServicePostAdminProviderProfilesDecline02B915A75A5647118B4aEb110408A090MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ accept, requestBody }) => AdminProviderProfilesService.postAdminProviderProfilesDecline02B915A75A5647118B4aEb110408A090({ accept, requestBody }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderProfilesServicePostAdminProviderProfilesStop02B915A75A5647118B4aEb110408A090 = <TData = Common.AdminProviderProfilesServicePostAdminProviderProfilesStop02B915A75A5647118B4aEb110408A090MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminProviderProfilesService.postAdminProviderProfilesStop02B915A75A5647118B4aEb110408A090({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderProfilesServicePostAdminProviderProfilesRestore02B915A75A5647118B4aEb110408A090 = <TData = Common.AdminProviderProfilesServicePostAdminProviderProfilesRestore02B915A75A5647118B4aEb110408A090MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminProviderProfilesService.postAdminProviderProfilesRestore02B915A75A5647118B4aEb110408A090({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminUsersServicePostAdminUsers = <TData = Common.AdminUsersServicePostAdminUsersMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ accept, requestBody }) => AdminUsersService.postAdminUsers({ accept, requestBody }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminUsersServicePostAdminUsers0E3685698D074EfbA367182Dd5E2Db42Stop = <TData = Common.AdminUsersServicePostAdminUsers0E3685698D074EfbA367182Dd5E2Db42StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminUsersService.postAdminUsers0E3685698D074EfbA367182Dd5E2Db42Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminUsersServicePostAdminUsers0E3685698D074EfbA367182Dd5E2Db42Restore = <TData = Common.AdminUsersServicePostAdminUsers0E3685698D074EfbA367182Dd5E2Db42RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminUsersService.postAdminUsers0E3685698D074EfbA367182Dd5E2Db42Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Update Exist Message Template
* @param data The data for the request.
* @param data.accept
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminMessageTemplatesServicePostAdminMessageTemplates5 = <TData = Common.AdminMessageTemplatesServicePostAdminMessageTemplates5MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ accept, requestBody }) => AdminMessageTemplatesService.postAdminMessageTemplates5({ accept, requestBody }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminServicesServicePostAdminServices = <TData = Common.AdminServicesServicePostAdminServicesMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminServicesService.postAdminServices({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.contentType
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminServicesServicePostAdminServicesB11D171dEec14474A3D26Ef6881023Ae = <TData = Common.AdminServicesServicePostAdminServicesB11D171dEec14474A3D26Ef6881023AeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  contentType?: string;
  formData?: { name_en?: string; name_ar?: string; description_ar?: string; description_en?: string; image?: (Blob | File); _method?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  contentType?: string;
  formData?: { name_en?: string; name_ar?: string; description_ar?: string; description_en?: string; image?: (Blob | File); _method?: string; };
}, TContext>({ mutationFn: ({ accept, contentType, formData }) => AdminServicesService.postAdminServicesB11D171dEec14474A3D26Ef6881023Ae({ accept, contentType, formData }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminServicesServicePostAdminServicesD48C07F9B8B846D98B3c3Ba8Fcdbe611Stop = <TData = Common.AdminServicesServicePostAdminServicesD48C07F9B8B846D98B3c3Ba8Fcdbe611StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminServicesService.postAdminServicesD48C07F9B8B846D98B3c3Ba8Fcdbe611Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminServicesServicePostAdminServicesD48C07F9B8B846D98B3c3Ba8Fcdbe611Restore = <TData = Common.AdminServicesServicePostAdminServicesD48C07F9B8B846D98B3c3Ba8Fcdbe611RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminServicesService.postAdminServicesD48C07F9B8B846D98B3c3Ba8Fcdbe611Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.paginate
* @param data.page
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCommissionsServicePostAdminCommissions = <TData = Common.AdminCommissionsServicePostAdminCommissionsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  page?: number;
  paginate?: number;
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  page?: number;
  paginate?: number;
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ accept, page, paginate, requestBody }) => AdminCommissionsService.postAdminCommissions({ accept, page, paginate, requestBody }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCommissionsServicePostAdminCommissionsD48C07F9B8B846D98B3c3Ba8Fcdbe611Stop = <TData = Common.AdminCommissionsServicePostAdminCommissionsD48C07F9B8B846D98B3c3Ba8Fcdbe611StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminCommissionsService.postAdminCommissionsD48C07F9B8B846D98B3c3Ba8Fcdbe611Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCommissionsServicePostAdminCommissionsD48C07F9B8B846D98B3c3Ba8Fcdbe611Restore = <TData = Common.AdminCommissionsServicePostAdminCommissionsD48C07F9B8B846D98B3c3Ba8Fcdbe611RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminCommissionsService.postAdminCommissionsD48C07F9B8B846D98B3c3Ba8Fcdbe611Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPlatformReviewsServicePostAdminPlatformReviews = <TData = Common.AdminPlatformReviewsServicePostAdminPlatformReviewsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { phone_image?: (Blob | File); web_image?: (Blob | File); };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { phone_image?: (Blob | File); web_image?: (Blob | File); };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminPlatformReviewsService.postAdminPlatformReviews({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPlatformReviewsServicePostAdminPlatformReviews5 = <TData = Common.AdminPlatformReviewsServicePostAdminPlatformReviews5MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { phone_image?: (Blob | File); web_image?: (Blob | File); };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { phone_image?: (Blob | File); web_image?: (Blob | File); };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminPlatformReviewsService.postAdminPlatformReviews5({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPlatformReviewsServicePostAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330Stop = <TData = Common.AdminPlatformReviewsServicePostAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminPlatformReviewsService.postAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPlatformReviewsServicePostAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330Restore = <TData = Common.AdminPlatformReviewsServicePostAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminPlatformReviewsService.postAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPagesServicePostAdminPages = <TData = Common.AdminPagesServicePostAdminPagesMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ accept, requestBody }) => AdminPagesService.postAdminPages({ accept, requestBody }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.contentType
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPagesServicePostAdminPages5 = <TData = Common.AdminPagesServicePostAdminPages5MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  contentType?: string;
  formData?: { content_ar?: string; content_en?: string; video?: (Blob | File); image?: (Blob | File); };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  contentType?: string;
  formData?: { content_ar?: string; content_en?: string; video?: (Blob | File); image?: (Blob | File); };
}, TContext>({ mutationFn: ({ accept, contentType, formData }) => AdminPagesService.postAdminPages5({ accept, contentType, formData }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.contentType
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderSubscriptionPlansServicePostAdminProviderSubscriptionPlans = <TData = Common.AdminProviderSubscriptionPlansServicePostAdminProviderSubscriptionPlansMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  contentType?: string;
  formData?: { name_en?: string; name_ar?: string; description_en?: string; description_ar?: string; summary_en?: string; summary_ar?: string; image?: (Blob | File); price?: number; duration?: number; free_duration?: number; currency_en?: string; currency_ar?: string; start_date?: string; end_date?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  contentType?: string;
  formData?: { name_en?: string; name_ar?: string; description_en?: string; description_ar?: string; summary_en?: string; summary_ar?: string; image?: (Blob | File); price?: number; duration?: number; free_duration?: number; currency_en?: string; currency_ar?: string; start_date?: string; end_date?: string; };
}, TContext>({ mutationFn: ({ accept, contentType, formData }) => AdminProviderSubscriptionPlansService.postAdminProviderSubscriptionPlans({ accept, contentType, formData }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.contentType
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderSubscriptionPlansServicePostAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704 = <TData = Common.AdminProviderSubscriptionPlansServicePostAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  contentType?: string;
  formData?: { name_en?: string; name_ar?: string; description_en?: string; description_ar?: string; summary_en?: string; summary_ar?: string; price?: number; days_count?: number; currency_en?: string; currency_ar?: string; start_date?: string; end_date?: string; image?: (Blob | File); duration?: number; free_duration?: number; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  contentType?: string;
  formData?: { name_en?: string; name_ar?: string; description_en?: string; description_ar?: string; summary_en?: string; summary_ar?: string; price?: number; days_count?: number; currency_en?: string; currency_ar?: string; start_date?: string; end_date?: string; image?: (Blob | File); duration?: number; free_duration?: number; };
}, TContext>({ mutationFn: ({ accept, contentType, formData }) => AdminProviderSubscriptionPlansService.postAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704({ accept, contentType, formData }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderSubscriptionPlansServicePostAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704Stop = <TData = Common.AdminProviderSubscriptionPlansServicePostAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminProviderSubscriptionPlansService.postAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderSubscriptionPlansServicePostAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704Restore = <TData = Common.AdminProviderSubscriptionPlansServicePostAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminProviderSubscriptionPlansService.postAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* attach-service
* @param data The data for the request.
* @param data.contentType
* @param data.accept
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCityServiceServicePostAdminCityServicesAttach = <TData = Common.AdminCityServiceServicePostAdminCityServicesAttachMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  contentType?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  contentType?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ accept, contentType, requestBody }) => AdminCityServiceService.postAdminCityServicesAttach({ accept, contentType, requestBody }) as unknown as Promise<TData>, ...options });
/**
* detach-service
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCityServiceServicePostAdminCityServicesDetach = <TData = Common.AdminCityServiceServicePostAdminCityServicesDetachMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminCityServiceService.postAdminCityServicesDetach({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCityServiceServicePostAdminCityServices0E3685698D074EfbA367182Dd5E2Db42Stop = <TData = Common.AdminCityServiceServicePostAdminCityServices0E3685698D074EfbA367182Dd5E2Db42StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminCityServiceService.postAdminCityServices0E3685698D074EfbA367182Dd5E2Db42Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCityServiceServicePostAdminCityServices0E3685698D074EfbA367182Dd5E2Db42Restore = <TData = Common.AdminCityServiceServicePostAdminCityServices0E3685698D074EfbA367182Dd5E2Db42RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminCityServiceService.postAdminCityServices0E3685698D074EfbA367182Dd5E2Db42Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Login
* @param data The data for the request.
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminAuthServicePostAdminAuthLogin = <TData = Common.AdminAuthServicePostAdminAuthLoginMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  formData?: { phone?: number; password?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  formData?: { phone?: number; password?: string; };
}, TContext>({ mutationFn: ({ formData }) => AdminAuthService.postAdminAuthLogin({ formData }) as unknown as Promise<TData>, ...options });
/**
* Logout
* @param data The data for the request.
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminAuthServicePostAdminAuthLogout = <TData = Common.AdminAuthServicePostAdminAuthLogoutMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  formData?: { email?: string; password?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  formData?: { email?: string; password?: string; };
}, TContext>({ mutationFn: ({ formData }) => AdminAuthService.postAdminAuthLogout({ formData }) as unknown as Promise<TData>, ...options });
/**
* Send
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCustomNotificationServicePostAdminCustomNotification = <TData = Common.AdminCustomNotificationServicePostAdminCustomNotificationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminCustomNotificationService.postAdminCustomNotification({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.contentType
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPermissionGroupsServicePostAdminPermissionGroups = <TData = Common.AdminPermissionGroupsServicePostAdminPermissionGroupsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  contentType?: string;
  formData?: { name_en?: string; name_ar?: string; 'permissions[]'?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  contentType?: string;
  formData?: { name_en?: string; name_ar?: string; 'permissions[]'?: string; };
}, TContext>({ mutationFn: ({ accept, contentType, formData }) => AdminPermissionGroupsService.postAdminPermissionGroups({ accept, contentType, formData }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.accept
* @param data.contentType
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPermissionGroupsServicePostAdminPermissionGroupsD814419d755547108E26Efeb66Fc8Fc2 = <TData = Common.AdminPermissionGroupsServicePostAdminPermissionGroupsD814419d755547108E26Efeb66Fc8Fc2MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  contentType?: string;
  formData?: { name_en?: string; name_ar?: string; 'permissions[]'?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  contentType?: string;
  formData?: { name_en?: string; name_ar?: string; 'permissions[]'?: string; };
}, TContext>({ mutationFn: ({ accept, contentType, formData }) => AdminPermissionGroupsService.postAdminPermissionGroupsD814419d755547108E26Efeb66Fc8Fc2({ accept, contentType, formData }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPermissionGroupsServicePostAdminPermissionGroups0E3685698D074EfbA367182Dd5E2Db42Stop = <TData = Common.AdminPermissionGroupsServicePostAdminPermissionGroups0E3685698D074EfbA367182Dd5E2Db42StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminPermissionGroupsService.postAdminPermissionGroups0E3685698D074EfbA367182Dd5E2Db42Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPermissionGroupsServicePostAdminPermissionGroups0E3685698D074EfbA367182Dd5E2Db42Restore = <TData = Common.AdminPermissionGroupsServicePostAdminPermissionGroups0E3685698D074EfbA367182Dd5E2Db42RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminPermissionGroupsService.postAdminPermissionGroups0E3685698D074EfbA367182Dd5E2Db42Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Reply to a specific message
* @param data The data for the request.
* @param data.accept
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminMessagesServicePostAdminMessagesReply8899Eddd256740B6Bcaa85Ed7D53D226 = <TData = Common.AdminMessagesServicePostAdminMessagesReply8899Eddd256740B6Bcaa85Ed7D53D226MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ accept, requestBody }) => AdminMessagesService.postAdminMessagesReply8899Eddd256740B6Bcaa85Ed7D53D226({ accept, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Delete a specific message
* @param data The data for the request.
* @param data.accept
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminMessagesServicePostAdminMessagesDelete6Aa8Ddfc861c4C42B7C406Dbb20627Ad = <TData = Common.AdminMessagesServicePostAdminMessagesDelete6Aa8Ddfc861c4C42B7C406Dbb20627AdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ accept, requestBody }) => AdminMessagesService.postAdminMessagesDelete6Aa8Ddfc861c4C42B7C406Dbb20627Ad({ accept, requestBody }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSlidersServicePostAdminSliders = <TData = Common.AdminLandingSlidersServicePostAdminSlidersMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingSlidersService.postAdminSliders({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSlidersServicePostAdminSliders726A81EcD9B543Ad946bB77470B071F4 = <TData = Common.AdminLandingSlidersServicePostAdminSliders726A81EcD9B543Ad946bB77470B071F4MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingSlidersService.postAdminSliders726A81EcD9B543Ad946bB77470B071F4({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSlidersServicePostAdminSliders726A81EcD9B543Ad946bB77470B071F4Stop = <TData = Common.AdminLandingSlidersServicePostAdminSliders726A81EcD9B543Ad946bB77470B071F4StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingSlidersService.postAdminSliders726A81EcD9B543Ad946bB77470B071F4Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSlidersServicePostAdminSliders726A81EcD9B543Ad946bB77470B071F4Restore = <TData = Common.AdminLandingSlidersServicePostAdminSliders726A81EcD9B543Ad946bB77470B071F4RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingSlidersService.postAdminSliders726A81EcD9B543Ad946bB77470B071F4Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingHowHelpServicePostAdminHowHelp = <TData = Common.AdminLandingHowHelpServicePostAdminHowHelpMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingHowHelpService.postAdminHowHelp({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingHowHelpServicePostAdminHowHelpC0E70442F1914F3cBb317Ca396D574Cd = <TData = Common.AdminLandingHowHelpServicePostAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingHowHelpService.postAdminHowHelpC0E70442F1914F3cBb317Ca396D574Cd({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingHowHelpServicePostAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdStop = <TData = Common.AdminLandingHowHelpServicePostAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdStopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingHowHelpService.postAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdStop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingHowHelpServicePostAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdRestore = <TData = Common.AdminLandingHowHelpServicePostAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdRestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingHowHelpService.postAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdRestore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutSectionsServicePostAdminAboutSections = <TData = Common.AdminLandingAboutSectionsServicePostAdminAboutSectionsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingAboutSectionsService.postAdminAboutSections({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutSectionsServicePostAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574Cd = <TData = Common.AdminLandingAboutSectionsServicePostAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingAboutSectionsService.postAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574Cd({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutSectionsServicePostAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdStop = <TData = Common.AdminLandingAboutSectionsServicePostAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdStopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingAboutSectionsService.postAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdStop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutSectionsServicePostAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdRestore = <TData = Common.AdminLandingAboutSectionsServicePostAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdRestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingAboutSectionsService.postAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdRestore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingDownloadSectionServicePostAdminDownloadSection = <TData = Common.AdminLandingDownloadSectionServicePostAdminDownloadSectionMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; google_play_link?: string; apple_store_link?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; google_play_link?: string; apple_store_link?: string; };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingDownloadSectionService.postAdminDownloadSection({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* create or update about
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutServicePostAdminAboutStoreAbout = <TData = Common.AdminLandingAboutServicePostAdminAboutStoreAboutMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingAboutService.postAdminAboutStoreAbout({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* create or update how order
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutServicePostAdminAboutStoreHowOrder = <TData = Common.AdminLandingAboutServicePostAdminAboutStoreHowOrderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; description_ar?: string; description_en?: string; link?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; description_ar?: string; description_en?: string; link?: string; };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingAboutService.postAdminAboutStoreHowOrder({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutServicePostAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5Stop = <TData = Common.AdminLandingAboutServicePostAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingAboutService.postAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutServicePostAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5Restore = <TData = Common.AdminLandingAboutServicePostAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingAboutService.postAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSiteOfferServicePostAdminSiteOffers = <TData = Common.AdminLandingSiteOfferServicePostAdminSiteOffersMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; price_before_discount?: number; price_after_discount?: number; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; price_before_discount?: number; price_after_discount?: number; };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingSiteOfferService.postAdminSiteOffers({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSiteOfferServicePostAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210 = <TData = Common.AdminLandingSiteOfferServicePostAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; price_before_discount?: number; price_after_discount?: number; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; price_before_discount?: number; price_after_discount?: number; };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingSiteOfferService.postAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSiteOfferServicePostAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210Stop = <TData = Common.AdminLandingSiteOfferServicePostAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingSiteOfferService.postAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSiteOfferServicePostAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210Restore = <TData = Common.AdminLandingSiteOfferServicePostAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingSiteOfferService.postAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingGuaranteeRightServicePostAdminGuaranteeRight = <TData = Common.AdminLandingGuaranteeRightServicePostAdminGuaranteeRightMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingGuaranteeRightService.postAdminGuaranteeRight({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingGuaranteeRightServicePostAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33 = <TData = Common.AdminLandingGuaranteeRightServicePostAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { title_ar?: string; title_en?: string; image?: (Blob | File); description_ar?: string; description_en?: string; };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingGuaranteeRightService.postAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingGuaranteeRightServicePostAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33Stop = <TData = Common.AdminLandingGuaranteeRightServicePostAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingGuaranteeRightService.postAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingGuaranteeRightServicePostAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33Restore = <TData = Common.AdminLandingGuaranteeRightServicePostAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingGuaranteeRightService.postAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* create
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingPartnersServicePostAdminPartners = <TData = Common.AdminLandingPartnersServicePostAdminPartnersMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { image?: (Blob | File); };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { image?: (Blob | File); };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingPartnersService.postAdminPartners({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.accept
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingPartnersServicePostAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7 = <TData = Common.AdminLandingPartnersServicePostAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  formData?: { image?: (Blob | File); };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  formData?: { image?: (Blob | File); };
}, TContext>({ mutationFn: ({ accept, formData }) => AdminLandingPartnersService.postAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7({ accept, formData }) as unknown as Promise<TData>, ...options });
/**
* stop
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingPartnersServicePostAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7Stop = <TData = Common.AdminLandingPartnersServicePostAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7StopMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingPartnersService.postAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7Stop({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* restore
* @param data The data for the request.
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingPartnersServicePostAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7Restore = <TData = Common.AdminLandingPartnersServicePostAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7RestoreMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ requestBody }) => AdminLandingPartnersService.postAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7Restore({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* send messages
* @param data The data for the request.
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminTicketsServicePostAdminTicketsSendMessage = <TData = Common.AdminTicketsServicePostAdminTicketsSendMessageMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  formData?: { ticket_id?: string; content?: string; type?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  formData?: { ticket_id?: string; content?: string; type?: string; };
}, TContext>({ mutationFn: ({ formData }) => AdminTicketsService.postAdminTicketsSendMessage({ formData }) as unknown as Promise<TData>, ...options });
/**
* confirm delivery
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useClientClientOrdersServicePostClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224ConfirmDelivery = <TData = Common.ClientClientOrdersServicePostClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224ConfirmDeliveryMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { code?: number; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { code?: number; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => ClientClientOrdersService.postClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224ConfirmDelivery({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* rate
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useClientClientOrdersServicePostClientOrderRate = <TData = Common.ClientClientOrdersServicePostClientOrderRateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { order_id?: string; rate?: number; comment?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { order_id?: string; rate?: number; comment?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => ClientClientOrdersService.postClientOrderRate({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* Accept
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useClientClientOfferServicePostClientOffer96Be9E84956a429889Bd9Bd3C58E251eAccept = <TData = Common.ClientClientOfferServicePostClientOffer96Be9E84956a429889Bd9Bd3C58E251eAcceptMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => ClientClientOfferService.postClientOffer96Be9E84956a429889Bd9Bd3C58E251eAccept({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* subscribe
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderSubscriptionServicePostProviderSubscriptionSubscribe = <TData = Common.ProviderProviderSubscriptionServicePostProviderSubscriptionSubscribeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { plan_id?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { plan_id?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => ProviderProviderSubscriptionService.postProviderSubscriptionSubscribe({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* store
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderProfileServicePostProviderProfile = <TData = Common.ProviderProviderProfileServicePostProviderProfileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { name?: string; owner_name?: string; mobile?: number; phone?: number; latitude?: number; longitude?: number; address?: string; branches?: string; services?: string; 'spare_part_brands[]'?: string; is_delivery_available?: number; is_video_call_available?: number; is_voice_call_available?: number; terms_and_conditions_accepted?: number; part_condition?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { name?: string; owner_name?: string; mobile?: number; phone?: number; latitude?: number; longitude?: number; address?: string; branches?: string; services?: string; 'spare_part_brands[]'?: string; is_delivery_available?: number; is_video_call_available?: number; is_voice_call_available?: number; terms_and_conditions_accepted?: number; part_condition?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => ProviderProviderProfileService.postProviderProfile({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* rate
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderOrdersServicePostProviderOrderRate = <TData = Common.ProviderProviderOrdersServicePostProviderOrderRateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { order_id?: string; rate?: number; comment?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { order_id?: string; rate?: number; comment?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => ProviderProviderOrdersService.postProviderOrderRate({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* confirm delivery
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderOrdersServicePostProviderOrdersC5Ad5169F88d4Acc8D4f6C985706B224ConfirmDelivery = <TData = Common.ProviderProviderOrdersServicePostProviderOrdersC5Ad5169F88d4Acc8D4f6C985706B224ConfirmDeliveryMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => ProviderProviderOrdersService.postProviderOrdersC5Ad5169F88d4Acc8D4f6C985706B224ConfirmDelivery({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* store
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderOfferServicePostProviderOffer = <TData = Common.ProviderProviderOfferServicePostProviderOfferMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { order_id?: string; price?: number; delivery_fee?: number; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { order_id?: string; price?: number; delivery_fee?: number; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => ProviderProviderOfferService.postProviderOffer({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* Send Message
* @param data The data for the request.
* @param data.accept
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useMessagesServicePostMessagesSend = <TData = Common.MessagesServicePostMessagesSendMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ accept, requestBody }) => MessagesService.postMessagesSend({ accept, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Update Settings
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAuthenticationServicePutSharedAuthUpdateSettings = <TData = Common.AuthenticationServicePutSharedAuthUpdateSettingsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  requestBody?: { [key: string]: unknown; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, requestBody, xRequestedWith }) => AuthenticationService.putSharedAuthUpdateSettings({ contentLanguage, requestBody, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.contentType
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCitiesServicePutAdminCities81A53C0640694120B9Ae6A4314Cd4Ada = <TData = Common.AdminCitiesServicePutAdminCities81A53C0640694120B9Ae6A4314Cd4AdaMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentType?: string;
  formData?: { name_en?: string; name_ar?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentType?: string;
  formData?: { name_en?: string; name_ar?: string; };
}, TContext>({ mutationFn: ({ contentType, formData }) => AdminCitiesService.putAdminCities81A53C0640694120B9Ae6A4314Cd4Ada({ contentType, formData }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.contentType
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminUsersServicePutAdminUsersB2Ef1C4f918a4F349D2f97Ce28C2772F = <TData = Common.AdminUsersServicePutAdminUsersB2Ef1C4f918a4F349D2f97Ce28C2772FMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentType?: string;
  requestBody?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentType?: string;
  requestBody?: string;
}, TContext>({ mutationFn: ({ contentType, requestBody }) => AdminUsersService.putAdminUsersB2Ef1C4f918a4F349D2f97Ce28C2772F({ contentType, requestBody }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.contentType
* @param data.accept
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCommissionsServicePutAdminCommissions51A7447f3Bfd4E89A7F31969C8Fb9330 = <TData = Common.AdminCommissionsServicePutAdminCommissions51A7447f3Bfd4E89A7F31969C8Fb9330MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  contentType?: string;
  requestBody?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  contentType?: string;
  requestBody?: string;
}, TContext>({ mutationFn: ({ accept, contentType, requestBody }) => AdminCommissionsService.putAdminCommissions51A7447f3Bfd4E89A7F31969C8Fb9330({ accept, contentType, requestBody }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.accept
* @param data.contentType
* @param data.requestBody
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCityServiceServicePutAdminCityServices13 = <TData = Common.AdminCityServiceServicePutAdminCityServices13MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accept?: string;
  contentType?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accept?: string;
  contentType?: string;
  requestBody?: { [key: string]: unknown; };
}, TContext>({ mutationFn: ({ accept, contentType, requestBody }) => AdminCityServiceService.putAdminCityServices13({ accept, contentType, requestBody }) as unknown as Promise<TData>, ...options });
/**
* update
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.formData
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderProfileServicePutProviderProfile = <TData = Common.ProviderProviderProfileServicePutProviderProfileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  contentLanguage?: string;
  formData?: { name?: string; owner_name?: string; mobile?: number; phone?: number; latitude?: number; longitude?: number; address?: string; branches?: string; services?: string; 'spare_part_brands[]'?: string; is_delivery_available?: number; is_video_call_available?: number; is_voice_call_available?: number; terms_and_conditions_accepted?: number; part_condition?: string; };
  xRequestedWith?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  contentLanguage?: string;
  formData?: { name?: string; owner_name?: string; mobile?: number; phone?: number; latitude?: number; longitude?: number; address?: string; branches?: string; services?: string; 'spare_part_brands[]'?: string; is_delivery_available?: number; is_video_call_available?: number; is_voice_call_available?: number; terms_and_conditions_accepted?: number; part_condition?: string; };
  xRequestedWith?: string;
}, TContext>({ mutationFn: ({ contentLanguage, formData, xRequestedWith }) => ProviderProviderProfileService.putProviderProfile({ contentLanguage, formData, xRequestedWith }) as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCitiesServiceDeleteAdminCitiesB4A072761Baf43B08068C03Fdabf2626 = <TData = Common.AdminCitiesServiceDeleteAdminCitiesB4A072761Baf43B08068C03Fdabf2626MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminCitiesService.deleteAdminCitiesB4A072761Baf43B08068C03Fdabf2626() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminUsersServiceDeleteAdminUsersB4A072761Baf43B08068C03Fdabf2626 = <TData = Common.AdminUsersServiceDeleteAdminUsersB4A072761Baf43B08068C03Fdabf2626MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminUsersService.deleteAdminUsersB4A072761Baf43B08068C03Fdabf2626() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminServicesServiceDeleteAdminServicesB4A072761Baf43B08068C03Fdabf2626 = <TData = Common.AdminServicesServiceDeleteAdminServicesB4A072761Baf43B08068C03Fdabf2626MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminServicesService.deleteAdminServicesB4A072761Baf43B08068C03Fdabf2626() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCommissionsServiceDeleteAdminCommissions51A7447f3Bfd4E89A7F31969C8Fb9330 = <TData = Common.AdminCommissionsServiceDeleteAdminCommissions51A7447f3Bfd4E89A7F31969C8Fb9330MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminCommissionsService.deleteAdminCommissions51A7447f3Bfd4E89A7F31969C8Fb9330() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPlatformReviewsServiceDeleteAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330 = <TData = Common.AdminPlatformReviewsServiceDeleteAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminPlatformReviewsService.deleteAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPagesServiceDeleteAdminPages51A7447f3Bfd4E89A7F31969C8Fb9330 = <TData = Common.AdminPagesServiceDeleteAdminPages51A7447f3Bfd4E89A7F31969C8Fb9330MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminPagesService.deleteAdminPages51A7447f3Bfd4E89A7F31969C8Fb9330() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderSubscriptionPlansServiceDeleteAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704 = <TData = Common.AdminProviderSubscriptionPlansServiceDeleteAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminProviderSubscriptionPlansService.deleteAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPermissionGroupsServiceDeleteAdminPermissionGroups51A7447f3Bfd4E89A7F31969C8Fb9330 = <TData = Common.AdminPermissionGroupsServiceDeleteAdminPermissionGroups51A7447f3Bfd4E89A7F31969C8Fb9330MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminPermissionGroupsService.deleteAdminPermissionGroups51A7447f3Bfd4E89A7F31969C8Fb9330() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSlidersServiceDeleteAdminSliders6193D4CdCe8e4B79Ba467E3C086206F3 = <TData = Common.AdminLandingSlidersServiceDeleteAdminSliders6193D4CdCe8e4B79Ba467E3C086206F3MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminLandingSlidersService.deleteAdminSliders6193D4CdCe8e4B79Ba467E3C086206F3() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingHowHelpServiceDeleteAdminHowHelpC0E70442F1914F3cBb317Ca396D574Cd = <TData = Common.AdminLandingHowHelpServiceDeleteAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminLandingHowHelpService.deleteAdminHowHelpC0E70442F1914F3cBb317Ca396D574Cd() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutSectionsServiceDeleteAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574Cd = <TData = Common.AdminLandingAboutSectionsServiceDeleteAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminLandingAboutSectionsService.deleteAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574Cd() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutServiceDeleteAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5 = <TData = Common.AdminLandingAboutServiceDeleteAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminLandingAboutService.deleteAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSiteOfferServiceDeleteAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210 = <TData = Common.AdminLandingSiteOfferServiceDeleteAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminLandingSiteOfferService.deleteAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingGuaranteeRightServiceDeleteAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33 = <TData = Common.AdminLandingGuaranteeRightServiceDeleteAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminLandingGuaranteeRightService.deleteAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33() as unknown as Promise<TData>, ...options });
/**
* delete
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingPartnersServiceDeleteAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7 = <TData = Common.AdminLandingPartnersServiceDeleteAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7MutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AdminLandingPartnersService.deleteAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7() as unknown as Promise<TData>, ...options });
