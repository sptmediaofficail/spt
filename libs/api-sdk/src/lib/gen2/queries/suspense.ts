// generated with @7nohe/openapi-react-query-codegen@1.6.1 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { AdminAdminOrdersService, AdminCitiesService, AdminCityServiceService, AdminCommissionsService, AdminLandingAboutSectionsService, AdminLandingAboutService, AdminLandingDownloadSectionService, AdminLandingGuaranteeRightService, AdminLandingHowHelpService, AdminLandingPartnersService, AdminLandingSiteOfferService, AdminLandingSlidersService, AdminMessagesService, AdminMessageTemplatesService, AdminPagesService, AdminPermissionGroupsService, AdminPermissionsService, AdminPlatformReviewsService, AdminProviderProfilesService, AdminProviderSubscriptionPlansService, AdminServicesService, AdminTicketsService, AdminUsersService, AuthenticationService, BrandModelsService, BrandService, CitiesService, ClientClientOrdersService, ClientServicesService, LandingService, MessagesService, NotificationService, PagesService, PlatformReviewsService, ProviderProviderOrdersService, ProviderProviderProfileService, ProviderProviderSubscriptionService, SettingsService, SiteOffersService, TicketService, VinService } from "../requests/services.gen";
import * as Common from "./common";
/**
* me
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useAuthenticationServiceGetSharedAuthMeSuspense = <TData = Common.AuthenticationServiceGetSharedAuthMeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAuthenticationServiceGetSharedAuthMeKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => AuthenticationService.getSharedAuthMe({ contentLanguage, xRequestedWith }) as TData, ...options });
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
export const useBrandServiceGetBrandsSuspense = <TData = Common.BrandServiceGetBrandsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, page, paginate, xRequestedWith }: {
  contentLanguage?: string;
  page?: number;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseBrandServiceGetBrandsKeyFn({ contentLanguage, page, paginate, xRequestedWith }, queryKey), queryFn: () => BrandService.getBrands({ contentLanguage, page, paginate, xRequestedWith }) as TData, ...options });
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
export const useSiteOffersServiceGetSiteOffersSuspense = <TData = Common.SiteOffersServiceGetSiteOffersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, page, paginate, xRequestedWith }: {
  contentLanguage?: string;
  page?: number;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSiteOffersServiceGetSiteOffersKeyFn({ contentLanguage, page, paginate, xRequestedWith }, queryKey), queryFn: () => SiteOffersService.getSiteOffers({ contentLanguage, page, paginate, xRequestedWith }) as TData, ...options });
/**
* single
* @param data The data for the request.
* @param data.id
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useSiteOffersServiceGetSiteOffersByIdSuspense = <TData = Common.SiteOffersServiceGetSiteOffersByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, id, xRequestedWith }: {
  contentLanguage?: string;
  id: string;
  xRequestedWith?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSiteOffersServiceGetSiteOffersByIdKeyFn({ contentLanguage, id, xRequestedWith }, queryKey), queryFn: () => SiteOffersService.getSiteOffersById({ contentLanguage, id, xRequestedWith }) as TData, ...options });
/**
* ids
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useSiteOffersServiceGetSiteOffersIdsSuspense = <TData = Common.SiteOffersServiceGetSiteOffersIdsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSiteOffersServiceGetSiteOffersIdsKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => SiteOffersService.getSiteOffersIds({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useCitiesServiceGetCitiesSuspense = <TData = Common.CitiesServiceGetCitiesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseCitiesServiceGetCitiesKeyFn({ contentLanguage, paginate, xRequestedWith }, queryKey), queryFn: () => CitiesService.getCities({ contentLanguage, paginate, xRequestedWith }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.brandId
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useBrandModelsServiceGetBrandsByBrandIdModelsSuspense = <TData = Common.BrandModelsServiceGetBrandsByBrandIdModelsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ brandId, contentLanguage, page, paginate, xRequestedWith }: {
  brandId: string;
  contentLanguage?: string;
  page?: number;
  paginate?: number;
  xRequestedWith?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseBrandModelsServiceGetBrandsByBrandIdModelsKeyFn({ brandId, contentLanguage, page, paginate, xRequestedWith }, queryKey), queryFn: () => BrandModelsService.getBrandsByBrandIdModels({ brandId, contentLanguage, page, paginate, xRequestedWith }) as TData, ...options });
/**
* Get Data
* @param data The data for the request.
* @param data.vin
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useVinServiceGetVinByVinSuspense = <TData = Common.VinServiceGetVinByVinDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, vin, xRequestedWith }: {
  contentLanguage?: string;
  vin: string;
  xRequestedWith?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseVinServiceGetVinByVinKeyFn({ contentLanguage, vin, xRequestedWith }, queryKey), queryFn: () => VinService.getVinByVin({ contentLanguage, vin, xRequestedWith }) as TData, ...options });
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
export const useTicketServiceGetTicketsSuspense = <TData = Common.TicketServiceGetTicketsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, page, paginate, xRequestedWith }: {
  contentLanguage?: string;
  page?: number;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTicketServiceGetTicketsKeyFn({ contentLanguage, page, paginate, xRequestedWith }, queryKey), queryFn: () => TicketService.getTickets({ contentLanguage, page, paginate, xRequestedWith }) as TData, ...options });
/**
* details
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useTicketServiceGetTicketB33C269eB489415e842f65472771A0F3Suspense = <TData = Common.TicketServiceGetTicketB33C269eB489415e842f65472771A0F3DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTicketServiceGetTicketB33C269eB489415e842f65472771A0F3KeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => TicketService.getTicketB33C269eB489415e842f65472771A0F3({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useNotificationServiceGetNotificationIndexSuspense = <TData = Common.NotificationServiceGetNotificationIndexDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseNotificationServiceGetNotificationIndexKeyFn({ contentLanguage, paginate, xRequestedWith }, queryKey), queryFn: () => NotificationService.getNotificationIndex({ contentLanguage, paginate, xRequestedWith }) as TData, ...options });
/**
* unReadCount
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useNotificationServiceGetNotificationUnreadCountSuspense = <TData = Common.NotificationServiceGetNotificationUnreadCountDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseNotificationServiceGetNotificationUnreadCountKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => NotificationService.getNotificationUnreadCount({ contentLanguage, xRequestedWith }) as TData, ...options });
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
export const useAdminAdminOrdersServiceGetAdminOrdersSuspense = <TData = Common.AdminAdminOrdersServiceGetAdminOrdersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, search, status, type, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  search?: string;
  status?: string;
  type?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminAdminOrdersServiceGetAdminOrdersKeyFn({ contentLanguage, paginate, search, status, type, xRequestedWith }, queryKey), queryFn: () => AdminAdminOrdersService.getAdminOrders({ contentLanguage, paginate, search, status, type, xRequestedWith }) as TData, ...options });
/**
* details
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186Suspense = <TData = Common.AdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186KeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => AdminAdminOrdersService.getAdminOrders1D9De514C4E149878Eb90909556C7186({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* offers
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186OffersSuspense = <TData = Common.AdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186OffersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186OffersKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => AdminAdminOrdersService.getAdminOrders1D9De514C4E149878Eb90909556C7186Offers({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* chat
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChatSuspense = <TData = Common.AdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChatDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChatKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => AdminAdminOrdersService.getAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChat({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* calls
* @returns unknown Successful response
* @throws ApiError
*/
export const useSettingsServiceGetSettingCallsSuspense = <TData = Common.SettingsServiceGetSettingCallsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSettingsServiceGetSettingCallsKeyFn(queryKey), queryFn: () => SettingsService.getSettingCalls() as TData, ...options });
/**
* get by section
* @param data The data for the request.
* @param data.section contact,social_media,notification
* @returns unknown Successful response
* @throws ApiError
*/
export const useSettingsServiceGetSettingSuspense = <TData = Common.SettingsServiceGetSettingDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ section }: {
  section?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSettingsServiceGetSettingKeyFn({ section }, queryKey), queryFn: () => SettingsService.getSetting({ section }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @param data.search
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCitiesServiceGetAdminCitiesSuspense = <TData = Common.AdminCitiesServiceGetAdminCitiesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate, search }: {
  page?: number;
  paginate?: number;
  search?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminCitiesServiceGetAdminCitiesKeyFn({ page, paginate, search }, queryKey), queryFn: () => AdminCitiesService.getAdminCities({ page, paginate, search }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderProfilesServiceGetAdminProviderProfilesSuspense = <TData = Common.AdminProviderProfilesServiceGetAdminProviderProfilesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminProviderProfilesServiceGetAdminProviderProfilesKeyFn({ page, paginate }, queryKey), queryFn: () => AdminProviderProfilesService.getAdminProviderProfiles({ page, paginate }) as TData, ...options });
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
export const useAdminUsersServiceGetAdminUsersSuspense = <TData = Common.AdminUsersServiceGetAdminUsersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept, page, paginate, role }: {
  accept?: string;
  page?: number;
  paginate?: number;
  role?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminUsersServiceGetAdminUsersKeyFn({ accept, page, paginate, role }, queryKey), queryFn: () => AdminUsersService.getAdminUsers({ accept, page, paginate, role }) as TData, ...options });
/**
* single
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7Suspense = <TData = Common.AdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept }: {
  accept?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7KeyFn({ accept }, queryKey), queryFn: () => AdminUsersService.getAdminUsers72D5778fB67b4E97B4E2F98F695162A7({ accept }) as TData, ...options });
/**
* GET All Message Templates
* @param data The data for the request.
* @param data.accept
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminMessageTemplatesServiceGetAdminMessageTemplatesSuspense = <TData = Common.AdminMessageTemplatesServiceGetAdminMessageTemplatesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept, page, paginate }: {
  accept?: string;
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminMessageTemplatesServiceGetAdminMessageTemplatesKeyFn({ accept, page, paginate }, queryKey), queryFn: () => AdminMessageTemplatesService.getAdminMessageTemplates({ accept, page, paginate }) as TData, ...options });
/**
* GET Specific Message Template
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminMessageTemplatesServiceGetAdminMessageTemplates2Suspense = <TData = Common.AdminMessageTemplatesServiceGetAdminMessageTemplates2DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept }: {
  accept?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminMessageTemplatesServiceGetAdminMessageTemplates2KeyFn({ accept }, queryKey), queryFn: () => AdminMessageTemplatesService.getAdminMessageTemplates2({ accept }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminServicesServiceGetAdminServicesSuspense = <TData = Common.AdminServicesServiceGetAdminServicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminServicesServiceGetAdminServicesKeyFn({ page, paginate }, queryKey), queryFn: () => AdminServicesService.getAdminServices({ page, paginate }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCommissionsServiceGetAdminCommissionsSuspense = <TData = Common.AdminCommissionsServiceGetAdminCommissionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminCommissionsServiceGetAdminCommissionsKeyFn({ page, paginate }, queryKey), queryFn: () => AdminCommissionsService.getAdminCommissions({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPlatformReviewsServiceGetAdminPlatformReviewsSuspense = <TData = Common.AdminPlatformReviewsServiceGetAdminPlatformReviewsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminPlatformReviewsServiceGetAdminPlatformReviewsKeyFn({ page, paginate }, queryKey), queryFn: () => AdminPlatformReviewsService.getAdminPlatformReviews({ page, paginate }) as TData, ...options });
/**
* get page by type
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPagesServiceGetAdminPagesRightsSuspense = <TData = Common.AdminPagesServiceGetAdminPagesRightsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminPagesServiceGetAdminPagesRightsKeyFn(queryKey), queryFn: () => AdminPagesService.getAdminPagesRights() as TData, ...options });
/**
* get page by type paginated
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPagesServiceGetAdminPagesRightsPaginatedSuspense = <TData = Common.AdminPagesServiceGetAdminPagesRightsPaginatedDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminPagesServiceGetAdminPagesRightsPaginatedKeyFn({ page, paginate }, queryKey), queryFn: () => AdminPagesService.getAdminPagesRightsPaginated({ page, paginate }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansSuspense = <TData = Common.AdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansKeyFn({ page, paginate }, queryKey), queryFn: () => AdminProviderSubscriptionPlansService.getAdminProviderSubscriptionPlans({ page, paginate }) as TData, ...options });
/**
* city-services
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @param data.search
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCityServiceServiceGetAdminCityServicesSuspense = <TData = Common.AdminCityServiceServiceGetAdminCityServicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate, search }: {
  page?: number;
  paginate?: number;
  search?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminCityServiceServiceGetAdminCityServicesKeyFn({ page, paginate, search }, queryKey), queryFn: () => AdminCityServiceService.getAdminCityServices({ page, paginate, search }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPermissionGroupsServiceGetAdminPermissionGroupsSuspense = <TData = Common.AdminPermissionGroupsServiceGetAdminPermissionGroupsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminPermissionGroupsServiceGetAdminPermissionGroupsKeyFn({ page, paginate }, queryKey), queryFn: () => AdminPermissionGroupsService.getAdminPermissionGroups({ page, paginate }) as TData, ...options });
/**
* single
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47DcfafSuspense = <TData = Common.AdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47DcfafDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47DcfafKeyFn(queryKey), queryFn: () => AdminPermissionGroupsService.getAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47Dcfaf() as TData, ...options });
/**
* index
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPermissionsServiceGetAdminPermissionsSuspense = <TData = Common.AdminPermissionsServiceGetAdminPermissionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminPermissionsServiceGetAdminPermissionsKeyFn(queryKey), queryFn: () => AdminPermissionsService.getAdminPermissions() as TData, ...options });
/**
* Get All Unreplied Messages
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminMessagesServiceGetAdminMessagesSuspense = <TData = Common.AdminMessagesServiceGetAdminMessagesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept }: {
  accept?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminMessagesServiceGetAdminMessagesKeyFn({ accept }, queryKey), queryFn: () => AdminMessagesService.getAdminMessages({ accept }) as TData, ...options });
/**
* Get a specific Unreplied Messages
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226Suspense = <TData = Common.AdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept }: {
  accept?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226KeyFn({ accept }, queryKey), queryFn: () => AdminMessagesService.getAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226({ accept }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSlidersServiceGetAdminSlidersSuspense = <TData = Common.AdminLandingSlidersServiceGetAdminSlidersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminLandingSlidersServiceGetAdminSlidersKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingSlidersService.getAdminSliders({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingHowHelpServiceGetAdminHowHelpSuspense = <TData = Common.AdminLandingHowHelpServiceGetAdminHowHelpDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminLandingHowHelpServiceGetAdminHowHelpKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingHowHelpService.getAdminHowHelp({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutSectionsServiceGetAdminAboutSectionsSuspense = <TData = Common.AdminLandingAboutSectionsServiceGetAdminAboutSectionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminLandingAboutSectionsServiceGetAdminAboutSectionsKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingAboutSectionsService.getAdminAboutSections({ page, paginate }) as TData, ...options });
/**
* list
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingDownloadSectionServiceGetAdminDownloadSectionSuspense = <TData = Common.AdminLandingDownloadSectionServiceGetAdminDownloadSectionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminLandingDownloadSectionServiceGetAdminDownloadSectionKeyFn(queryKey), queryFn: () => AdminLandingDownloadSectionService.getAdminDownloadSection() as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutServiceGetAdminAboutSuspense = <TData = Common.AdminLandingAboutServiceGetAdminAboutDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminLandingAboutServiceGetAdminAboutKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingAboutService.getAdminAbout({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSiteOfferServiceGetAdminSiteOffersSuspense = <TData = Common.AdminLandingSiteOfferServiceGetAdminSiteOffersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminLandingSiteOfferServiceGetAdminSiteOffersKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingSiteOfferService.getAdminSiteOffers({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingGuaranteeRightServiceGetAdminGuaranteeRightSuspense = <TData = Common.AdminLandingGuaranteeRightServiceGetAdminGuaranteeRightDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminLandingGuaranteeRightServiceGetAdminGuaranteeRightKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingGuaranteeRightService.getAdminGuaranteeRight({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingPartnersServiceGetAdminPartnersSuspense = <TData = Common.AdminLandingPartnersServiceGetAdminPartnersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminLandingPartnersServiceGetAdminPartnersKeyFn({ page, paginate }, queryKey), queryFn: () => AdminLandingPartnersService.getAdminPartners({ page, paginate }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminTicketsServiceGetAdminTicketsSuspense = <TData = Common.AdminTicketsServiceGetAdminTicketsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminTicketsServiceGetAdminTicketsKeyFn({ page, paginate }, queryKey), queryFn: () => AdminTicketsService.getAdminTickets({ page, paginate }) as TData, ...options });
/**
* messages
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesSuspense = <TData = Common.AdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesKeyFn({ page, paginate }, queryKey), queryFn: () => AdminTicketsService.getAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessages({ page, paginate }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.statusArray receiving_offer - accepted - completed
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useClientClientOrdersServiceGetClientOrdersSuspense = <TData = Common.ClientClientOrdersServiceGetClientOrdersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, page, paginate, statusArray, xRequestedWith }: {
  contentLanguage?: string;
  page?: number;
  paginate?: number;
  statusArray?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseClientClientOrdersServiceGetClientOrdersKeyFn({ contentLanguage, page, paginate, statusArray, xRequestedWith }, queryKey), queryFn: () => ClientClientOrdersService.getClientOrders({ contentLanguage, page, paginate, statusArray, xRequestedWith }) as TData, ...options });
/**
* details
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224Suspense = <TData = Common.ClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224KeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ClientClientOrdersService.getClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useClientServicesServiceGetClientServicesSuspense = <TData = Common.ClientServicesServiceGetClientServicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseClientServicesServiceGetClientServicesKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ClientServicesService.getClientServices({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* plans
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderSubscriptionServiceGetProviderSubscriptionPlansSuspense = <TData = Common.ProviderProviderSubscriptionServiceGetProviderSubscriptionPlansDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderProviderSubscriptionServiceGetProviderSubscriptionPlansKeyFn({ contentLanguage, paginate, xRequestedWith }, queryKey), queryFn: () => ProviderProviderSubscriptionService.getProviderSubscriptionPlans({ contentLanguage, paginate, xRequestedWith }) as TData, ...options });
/**
* check
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderSubscriptionServiceGetProviderSubscriptionCheckSuspense = <TData = Common.ProviderProviderSubscriptionServiceGetProviderSubscriptionCheckDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderProviderSubscriptionServiceGetProviderSubscriptionCheckKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ProviderProviderSubscriptionService.getProviderSubscriptionCheck({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* show
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderProfileServiceGetProviderProfileSuspense = <TData = Common.ProviderProviderProfileServiceGetProviderProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderProviderProfileServiceGetProviderProfileKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ProviderProviderProfileService.getProviderProfile({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* me
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderProfileServiceGetProviderMeSuspense = <TData = Common.ProviderProviderProfileServiceGetProviderMeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderProviderProfileServiceGetProviderMeKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ProviderProviderProfileService.getProviderMe({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* single provider
* @param data The data for the request.
* @param data.id
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderProfileServiceGetProviderByIdSuspense = <TData = Common.ProviderProviderProfileServiceGetProviderByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, id, xRequestedWith }: {
  contentLanguage?: string;
  id: string;
  xRequestedWith?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderProviderProfileServiceGetProviderByIdKeyFn({ contentLanguage, id, xRequestedWith }, queryKey), queryFn: () => ProviderProviderProfileService.getProviderById({ contentLanguage, id, xRequestedWith }) as TData, ...options });
/**
* ids
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderProfileServiceGetProviderIdsSuspense = <TData = Common.ProviderProviderProfileServiceGetProviderIdsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderProviderProfileServiceGetProviderIdsKeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ProviderProviderProfileService.getProviderIds({ contentLanguage, xRequestedWith }) as TData, ...options });
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
export const useProviderProviderProfileServiceGetProviderSearchSuspense = <TData = Common.ProviderProviderProfileServiceGetProviderSearchDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, lat, lng, paginate, sort, type, xRequestedWith }: {
  contentLanguage?: string;
  lat?: number;
  lng?: number;
  paginate?: number;
  sort?: string;
  type?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderProviderProfileServiceGetProviderSearchKeyFn({ contentLanguage, lat, lng, paginate, sort, type, xRequestedWith }, queryKey), queryFn: () => ProviderProviderProfileService.getProviderSearch({ contentLanguage, lat, lng, paginate, sort, type, xRequestedWith }) as TData, ...options });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.status can_submit - already_submit - accepted - finished
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderOrdersServiceGetProviderOrdersSuspense = <TData = Common.ProviderProviderOrdersServiceGetProviderOrdersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, status, xRequestedWith }: {
  contentLanguage?: string;
  status?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderProviderOrdersServiceGetProviderOrdersKeyFn({ contentLanguage, status, xRequestedWith }, queryKey), queryFn: () => ProviderProviderOrdersService.getProviderOrders({ contentLanguage, status, xRequestedWith }) as TData, ...options });
/**
* details
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const useProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186Suspense = <TData = Common.ProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186DefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186KeyFn({ contentLanguage, xRequestedWith }, queryKey), queryFn: () => ProviderProviderOrdersService.getProviderOrders1D9De514C4E149878Eb90909556C7186({ contentLanguage, xRequestedWith }) as TData, ...options });
/**
* get page by type
* @returns unknown Successful response
* @throws ApiError
*/
export const usePagesServiceGetPagesHowWeHelpSuspense = <TData = Common.PagesServiceGetPagesHowWeHelpDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePagesServiceGetPagesHowWeHelpKeyFn(queryKey), queryFn: () => PagesService.getPagesHowWeHelp() as TData, ...options });
/**
* get page by type paginated
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const usePagesServiceGetPagesRightsPaginatedSuspense = <TData = Common.PagesServiceGetPagesRightsPaginatedDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePagesServiceGetPagesRightsPaginatedKeyFn({ page, paginate }, queryKey), queryFn: () => PagesService.getPagesRightsPaginated({ page, paginate }) as TData, ...options });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const usePlatformReviewsServiceGetPlatformReviewsSuspense = <TData = Common.PlatformReviewsServiceGetPlatformReviewsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate }: {
  page?: number;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePlatformReviewsServiceGetPlatformReviewsKeyFn({ page, paginate }, queryKey), queryFn: () => PlatformReviewsService.getPlatformReviews({ page, paginate }) as TData, ...options });
/**
* Get All Messages of the Logged In User
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const useMessagesServiceGetMessagesSuspense = <TData = Common.MessagesServiceGetMessagesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept }: {
  accept?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMessagesServiceGetMessagesKeyFn({ accept }, queryKey), queryFn: () => MessagesService.getMessages({ accept }) as TData, ...options });
/**
* sliders
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingSlidersSuspense = <TData = Common.LandingServiceGetLandingSlidersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingSlidersKeyFn(queryKey), queryFn: () => LandingService.getLandingSliders() as TData, ...options });
/**
* services
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingServicesSuspense = <TData = Common.LandingServiceGetLandingServicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingServicesKeyFn(queryKey), queryFn: () => LandingService.getLandingServices() as TData, ...options });
/**
* site_offers
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingSiteOffersSuspense = <TData = Common.LandingServiceGetLandingSiteOffersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingSiteOffersKeyFn(queryKey), queryFn: () => LandingService.getLandingSiteOffers() as TData, ...options });
/**
* plans
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingPlansSuspense = <TData = Common.LandingServiceGetLandingPlansDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingPlansKeyFn(queryKey), queryFn: () => LandingService.getLandingPlans() as TData, ...options });
/**
* how_help
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingHowHelpSuspense = <TData = Common.LandingServiceGetLandingHowHelpDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingHowHelpKeyFn(queryKey), queryFn: () => LandingService.getLandingHowHelp() as TData, ...options });
/**
* about sections
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingAboutSectionsSuspense = <TData = Common.LandingServiceGetLandingAboutSectionsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingAboutSectionsKeyFn(queryKey), queryFn: () => LandingService.getLandingAboutSections() as TData, ...options });
/**
* download section
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingDownloadSectionSuspense = <TData = Common.LandingServiceGetLandingDownloadSectionDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingDownloadSectionKeyFn(queryKey), queryFn: () => LandingService.getLandingDownloadSection() as TData, ...options });
/**
* guarantee_rights
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingGuaranteeRightsSuspense = <TData = Common.LandingServiceGetLandingGuaranteeRightsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingGuaranteeRightsKeyFn(queryKey), queryFn: () => LandingService.getLandingGuaranteeRights() as TData, ...options });
/**
* platform_reviews
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingPlatformReviewsSuspense = <TData = Common.LandingServiceGetLandingPlatformReviewsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingPlatformReviewsKeyFn(queryKey), queryFn: () => LandingService.getLandingPlatformReviews() as TData, ...options });
/**
* partners
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingPartnersSuspense = <TData = Common.LandingServiceGetLandingPartnersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingPartnersKeyFn(queryKey), queryFn: () => LandingService.getLandingPartners() as TData, ...options });
/**
* most_rated_providers
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingMostRatedProvidersSuspense = <TData = Common.LandingServiceGetLandingMostRatedProvidersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingMostRatedProvidersKeyFn(queryKey), queryFn: () => LandingService.getLandingMostRatedProviders() as TData, ...options });
/**
* orders_numbers
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingOrdersNumbersSuspense = <TData = Common.LandingServiceGetLandingOrdersNumbersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingOrdersNumbersKeyFn(queryKey), queryFn: () => LandingService.getLandingOrdersNumbers() as TData, ...options });
/**
* contact
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingContactSuspense = <TData = Common.LandingServiceGetLandingContactDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingContactKeyFn(queryKey), queryFn: () => LandingService.getLandingContact() as TData, ...options });
/**
* about
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingAboutSuspense = <TData = Common.LandingServiceGetLandingAboutDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingAboutKeyFn(queryKey), queryFn: () => LandingService.getLandingAbout() as TData, ...options });
/**
* how_order
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingHowOrderSuspense = <TData = Common.LandingServiceGetLandingHowOrderDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingHowOrderKeyFn(queryKey), queryFn: () => LandingService.getLandingHowOrder() as TData, ...options });
/**
* most_rated_providers_by_type Copy
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @param data.type spare_parts or junkyard_sale
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingMostRatedProvidersByTypeSuspense = <TData = Common.LandingServiceGetLandingMostRatedProvidersByTypeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, paginate, type }: {
  page?: number;
  paginate?: number;
  type?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLandingServiceGetLandingMostRatedProvidersByTypeKeyFn({ page, paginate, type }, queryKey), queryFn: () => LandingService.getLandingMostRatedProvidersByType({ page, paginate, type }) as TData, ...options });
