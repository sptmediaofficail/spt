// generated with @7nohe/openapi-react-query-codegen@1.6.1 

import { type QueryClient } from "@tanstack/react-query";
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
export const prefetchUseAuthenticationServiceGetSharedAuthMe = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAuthenticationServiceGetSharedAuthMeKeyFn({ contentLanguage, xRequestedWith }), queryFn: () => AuthenticationService.getSharedAuthMe({ contentLanguage, xRequestedWith }) });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseBrandServiceGetBrands = (queryClient: QueryClient, { contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseBrandServiceGetBrandsKeyFn({ contentLanguage, paginate, xRequestedWith }), queryFn: () => BrandService.getBrands({ contentLanguage, paginate, xRequestedWith }) });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseSiteOffersServiceGetSiteOffers = (queryClient: QueryClient, { contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseSiteOffersServiceGetSiteOffersKeyFn({ contentLanguage, paginate, xRequestedWith }), queryFn: () => SiteOffersService.getSiteOffers({ contentLanguage, paginate, xRequestedWith }) });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseCitiesServiceGetCities = (queryClient: QueryClient, { contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseCitiesServiceGetCitiesKeyFn({ contentLanguage, paginate, xRequestedWith }), queryFn: () => CitiesService.getCities({ contentLanguage, paginate, xRequestedWith }) });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseBrandModelsServiceGetBrandsAlfaRomeoModels = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseBrandModelsServiceGetBrandsAlfaRomeoModelsKeyFn({ contentLanguage, xRequestedWith }), queryFn: () => BrandModelsService.getBrandsAlfaRomeoModels({ contentLanguage, xRequestedWith }) });
/**
* Get Data
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseVinServiceGetVinJn8At3Mm3Pw009894 = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseVinServiceGetVinJn8At3Mm3Pw009894KeyFn({ contentLanguage, xRequestedWith }), queryFn: () => VinService.getVinJn8At3Mm3Pw009894({ contentLanguage, xRequestedWith }) });
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
export const prefetchUseTicketServiceGetTickets = (queryClient: QueryClient, { contentLanguage, page, paginate, xRequestedWith }: {
  contentLanguage?: string;
  page?: number;
  paginate?: number;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseTicketServiceGetTicketsKeyFn({ contentLanguage, page, paginate, xRequestedWith }), queryFn: () => TicketService.getTickets({ contentLanguage, page, paginate, xRequestedWith }) });
/**
* details
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseTicketServiceGetTicketB33C269eB489415e842f65472771A0F3 = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseTicketServiceGetTicketB33C269eB489415e842f65472771A0F3KeyFn({ contentLanguage, xRequestedWith }), queryFn: () => TicketService.getTicketB33C269eB489415e842f65472771A0F3({ contentLanguage, xRequestedWith }) });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseNotificationServiceGetNotificationIndex = (queryClient: QueryClient, { contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseNotificationServiceGetNotificationIndexKeyFn({ contentLanguage, paginate, xRequestedWith }), queryFn: () => NotificationService.getNotificationIndex({ contentLanguage, paginate, xRequestedWith }) });
/**
* unReadCount
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseNotificationServiceGetNotificationUnreadCount = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseNotificationServiceGetNotificationUnreadCountKeyFn({ contentLanguage, xRequestedWith }), queryFn: () => NotificationService.getNotificationUnreadCount({ contentLanguage, xRequestedWith }) });
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
export const prefetchUseAdminAdminOrdersServiceGetAdminOrders = (queryClient: QueryClient, { contentLanguage, paginate, search, status, type, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  search?: string;
  status?: string;
  type?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminAdminOrdersServiceGetAdminOrdersKeyFn({ contentLanguage, paginate, search, status, type, xRequestedWith }), queryFn: () => AdminAdminOrdersService.getAdminOrders({ contentLanguage, paginate, search, status, type, xRequestedWith }) });
/**
* details
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186 = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186KeyFn({ contentLanguage, xRequestedWith }), queryFn: () => AdminAdminOrdersService.getAdminOrders1D9De514C4E149878Eb90909556C7186({ contentLanguage, xRequestedWith }) });
/**
* offers
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186Offers = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186OffersKeyFn({ contentLanguage, xRequestedWith }), queryFn: () => AdminAdminOrdersService.getAdminOrders1D9De514C4E149878Eb90909556C7186Offers({ contentLanguage, xRequestedWith }) });
/**
* chat
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChat = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChatKeyFn({ contentLanguage, xRequestedWith }), queryFn: () => AdminAdminOrdersService.getAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChat({ contentLanguage, xRequestedWith }) });
/**
* calls
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseSettingsServiceGetSettingCalls = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseSettingsServiceGetSettingCallsKeyFn(), queryFn: () => SettingsService.getSettingCalls() });
/**
* get by section
* @param data The data for the request.
* @param data.section contact,social_media,notification
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseSettingsServiceGetSetting = (queryClient: QueryClient, { section }: {
  section?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseSettingsServiceGetSettingKeyFn({ section }), queryFn: () => SettingsService.getSetting({ section }) });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @param data.search
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminCitiesServiceGetAdminCities = (queryClient: QueryClient, { page, paginate, search }: {
  page?: number;
  paginate?: number;
  search?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminCitiesServiceGetAdminCitiesKeyFn({ page, paginate, search }), queryFn: () => AdminCitiesService.getAdminCities({ page, paginate, search }) });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminProviderProfilesServiceGetAdminProviderProfiles = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminProviderProfilesServiceGetAdminProviderProfilesKeyFn({ page, paginate }), queryFn: () => AdminProviderProfilesService.getAdminProviderProfiles({ page, paginate }) });
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
export const prefetchUseAdminUsersServiceGetAdminUsers = (queryClient: QueryClient, { accept, page, paginate, role }: {
  accept?: string;
  page?: number;
  paginate?: number;
  role?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminUsersServiceGetAdminUsersKeyFn({ accept, page, paginate, role }), queryFn: () => AdminUsersService.getAdminUsers({ accept, page, paginate, role }) });
/**
* single
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7 = (queryClient: QueryClient, { accept }: {
  accept?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7KeyFn({ accept }), queryFn: () => AdminUsersService.getAdminUsers72D5778fB67b4E97B4E2F98F695162A7({ accept }) });
/**
* GET All Message Templates
* @param data The data for the request.
* @param data.accept
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminMessageTemplatesServiceGetAdminMessageTemplates = (queryClient: QueryClient, { accept, page, paginate }: {
  accept?: string;
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminMessageTemplatesServiceGetAdminMessageTemplatesKeyFn({ accept, page, paginate }), queryFn: () => AdminMessageTemplatesService.getAdminMessageTemplates({ accept, page, paginate }) });
/**
* GET Specific Message Template
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminMessageTemplatesServiceGetAdminMessageTemplates2 = (queryClient: QueryClient, { accept }: {
  accept?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminMessageTemplatesServiceGetAdminMessageTemplates2KeyFn({ accept }), queryFn: () => AdminMessageTemplatesService.getAdminMessageTemplates2({ accept }) });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminServicesServiceGetAdminServices = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminServicesServiceGetAdminServicesKeyFn({ page, paginate }), queryFn: () => AdminServicesService.getAdminServices({ page, paginate }) });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminCommissionsServiceGetAdminCommissions = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminCommissionsServiceGetAdminCommissionsKeyFn({ page, paginate }), queryFn: () => AdminCommissionsService.getAdminCommissions({ page, paginate }) });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminPlatformReviewsServiceGetAdminPlatformReviews = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminPlatformReviewsServiceGetAdminPlatformReviewsKeyFn({ page, paginate }), queryFn: () => AdminPlatformReviewsService.getAdminPlatformReviews({ page, paginate }) });
/**
* get page by type
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminPagesServiceGetAdminPagesRights = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseAdminPagesServiceGetAdminPagesRightsKeyFn(), queryFn: () => AdminPagesService.getAdminPagesRights() });
/**
* get page by type paginated
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminPagesServiceGetAdminPagesRightsPaginated = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminPagesServiceGetAdminPagesRightsPaginatedKeyFn({ page, paginate }), queryFn: () => AdminPagesService.getAdminPagesRightsPaginated({ page, paginate }) });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlans = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansKeyFn({ page, paginate }), queryFn: () => AdminProviderSubscriptionPlansService.getAdminProviderSubscriptionPlans({ page, paginate }) });
/**
* city-services
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @param data.search
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminCityServiceServiceGetAdminCityServices = (queryClient: QueryClient, { page, paginate, search }: {
  page?: number;
  paginate?: number;
  search?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminCityServiceServiceGetAdminCityServicesKeyFn({ page, paginate, search }), queryFn: () => AdminCityServiceService.getAdminCityServices({ page, paginate, search }) });
/**
* index
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminPermissionGroupsServiceGetAdminPermissionGroups = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminPermissionGroupsServiceGetAdminPermissionGroupsKeyFn({ page, paginate }), queryFn: () => AdminPermissionGroupsService.getAdminPermissionGroups({ page, paginate }) });
/**
* single
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47Dcfaf = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseAdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47DcfafKeyFn(), queryFn: () => AdminPermissionGroupsService.getAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47Dcfaf() });
/**
* index
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminPermissionsServiceGetAdminPermissions = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseAdminPermissionsServiceGetAdminPermissionsKeyFn(), queryFn: () => AdminPermissionsService.getAdminPermissions() });
/**
* Get All Unreplied Messages
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminMessagesServiceGetAdminMessages = (queryClient: QueryClient, { accept }: {
  accept?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminMessagesServiceGetAdminMessagesKeyFn({ accept }), queryFn: () => AdminMessagesService.getAdminMessages({ accept }) });
/**
* Get a specific Unreplied Messages
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226 = (queryClient: QueryClient, { accept }: {
  accept?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226KeyFn({ accept }), queryFn: () => AdminMessagesService.getAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226({ accept }) });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminLandingSlidersServiceGetAdminSliders = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminLandingSlidersServiceGetAdminSlidersKeyFn({ page, paginate }), queryFn: () => AdminLandingSlidersService.getAdminSliders({ page, paginate }) });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminLandingHowHelpServiceGetAdminHowHelp = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminLandingHowHelpServiceGetAdminHowHelpKeyFn({ page, paginate }), queryFn: () => AdminLandingHowHelpService.getAdminHowHelp({ page, paginate }) });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminLandingAboutSectionsServiceGetAdminAboutSections = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminLandingAboutSectionsServiceGetAdminAboutSectionsKeyFn({ page, paginate }), queryFn: () => AdminLandingAboutSectionsService.getAdminAboutSections({ page, paginate }) });
/**
* list
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminLandingDownloadSectionServiceGetAdminDownloadSection = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseAdminLandingDownloadSectionServiceGetAdminDownloadSectionKeyFn(), queryFn: () => AdminLandingDownloadSectionService.getAdminDownloadSection() });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminLandingAboutServiceGetAdminAbout = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminLandingAboutServiceGetAdminAboutKeyFn({ page, paginate }), queryFn: () => AdminLandingAboutService.getAdminAbout({ page, paginate }) });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminLandingSiteOfferServiceGetAdminSiteOffers = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminLandingSiteOfferServiceGetAdminSiteOffersKeyFn({ page, paginate }), queryFn: () => AdminLandingSiteOfferService.getAdminSiteOffers({ page, paginate }) });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminLandingGuaranteeRightServiceGetAdminGuaranteeRight = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminLandingGuaranteeRightServiceGetAdminGuaranteeRightKeyFn({ page, paginate }), queryFn: () => AdminLandingGuaranteeRightService.getAdminGuaranteeRight({ page, paginate }) });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminLandingPartnersServiceGetAdminPartners = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminLandingPartnersServiceGetAdminPartnersKeyFn({ page, paginate }), queryFn: () => AdminLandingPartnersService.getAdminPartners({ page, paginate }) });
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminTicketsServiceGetAdminTickets = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminTicketsServiceGetAdminTicketsKeyFn({ page, paginate }), queryFn: () => AdminTicketsService.getAdminTickets({ page, paginate }) });
/**
* messages
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseAdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessages = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesKeyFn({ page, paginate }), queryFn: () => AdminTicketsService.getAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessages({ page, paginate }) });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.statusArray receiving_offer - accepted - completed
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseClientClientOrdersServiceGetClientOrders = (queryClient: QueryClient, { contentLanguage, statusArray, xRequestedWith }: {
  contentLanguage?: string;
  statusArray?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseClientClientOrdersServiceGetClientOrdersKeyFn({ contentLanguage, statusArray, xRequestedWith }), queryFn: () => ClientClientOrdersService.getClientOrders({ contentLanguage, statusArray, xRequestedWith }) });
/**
* details
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224 = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224KeyFn({ contentLanguage, xRequestedWith }), queryFn: () => ClientClientOrdersService.getClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224({ contentLanguage, xRequestedWith }) });
/**
* list
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseClientServicesServiceGetClientServices = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseClientServicesServiceGetClientServicesKeyFn({ contentLanguage, xRequestedWith }), queryFn: () => ClientServicesService.getClientServices({ contentLanguage, xRequestedWith }) });
/**
* plans
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseProviderProviderSubscriptionServiceGetProviderSubscriptionPlans = (queryClient: QueryClient, { contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderProviderSubscriptionServiceGetProviderSubscriptionPlansKeyFn({ contentLanguage, paginate, xRequestedWith }), queryFn: () => ProviderProviderSubscriptionService.getProviderSubscriptionPlans({ contentLanguage, paginate, xRequestedWith }) });
/**
* check
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseProviderProviderSubscriptionServiceGetProviderSubscriptionCheck = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderProviderSubscriptionServiceGetProviderSubscriptionCheckKeyFn({ contentLanguage, xRequestedWith }), queryFn: () => ProviderProviderSubscriptionService.getProviderSubscriptionCheck({ contentLanguage, xRequestedWith }) });
/**
* show
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseProviderProviderProfileServiceGetProviderProfile = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderProviderProfileServiceGetProviderProfileKeyFn({ contentLanguage, xRequestedWith }), queryFn: () => ProviderProviderProfileService.getProviderProfile({ contentLanguage, xRequestedWith }) });
/**
* me
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseProviderProviderProfileServiceGetProviderMe = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderProviderProfileServiceGetProviderMeKeyFn({ contentLanguage, xRequestedWith }), queryFn: () => ProviderProviderProfileService.getProviderMe({ contentLanguage, xRequestedWith }) });
/**
* single provider
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseProviderProviderProfileServiceGetProviderF84Fd31930E54Ea49C2881B822045Ebc = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderProviderProfileServiceGetProviderF84Fd31930E54Ea49C2881B822045EbcKeyFn({ contentLanguage, xRequestedWith }), queryFn: () => ProviderProviderProfileService.getProviderF84Fd31930E54Ea49C2881B822045Ebc({ contentLanguage, xRequestedWith }) });
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
export const prefetchUseProviderProviderProfileServiceGetProviderSearch = (queryClient: QueryClient, { contentLanguage, lat, lng, paginate, sort, type, xRequestedWith }: {
  contentLanguage?: string;
  lat?: number;
  lng?: number;
  paginate?: number;
  sort?: string;
  type?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderProviderProfileServiceGetProviderSearchKeyFn({ contentLanguage, lat, lng, paginate, sort, type, xRequestedWith }), queryFn: () => ProviderProviderProfileService.getProviderSearch({ contentLanguage, lat, lng, paginate, sort, type, xRequestedWith }) });
/**
* index
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @param data.status can_submit - already_submit - accepted - finished
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseProviderProviderOrdersServiceGetProviderOrders = (queryClient: QueryClient, { contentLanguage, status, xRequestedWith }: {
  contentLanguage?: string;
  status?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderProviderOrdersServiceGetProviderOrdersKeyFn({ contentLanguage, status, xRequestedWith }), queryFn: () => ProviderProviderOrdersService.getProviderOrders({ contentLanguage, status, xRequestedWith }) });
/**
* details
* @param data The data for the request.
* @param data.xRequestedWith API
* @param data.contentLanguage accepts: ar, en
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186 = (queryClient: QueryClient, { contentLanguage, xRequestedWith }: {
  contentLanguage?: string;
  xRequestedWith?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186KeyFn({ contentLanguage, xRequestedWith }), queryFn: () => ProviderProviderOrdersService.getProviderOrders1D9De514C4E149878Eb90909556C7186({ contentLanguage, xRequestedWith }) });
/**
* get page by type
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUsePagesServiceGetPagesHowWeHelp = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UsePagesServiceGetPagesHowWeHelpKeyFn(), queryFn: () => PagesService.getPagesHowWeHelp() });
/**
* get page by type paginated
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUsePagesServiceGetPagesRightsPaginated = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePagesServiceGetPagesRightsPaginatedKeyFn({ page, paginate }), queryFn: () => PagesService.getPagesRightsPaginated({ page, paginate }) });
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUsePlatformReviewsServiceGetPlatformReviews = (queryClient: QueryClient, { page, paginate }: {
  page?: number;
  paginate?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePlatformReviewsServiceGetPlatformReviewsKeyFn({ page, paginate }), queryFn: () => PlatformReviewsService.getPlatformReviews({ page, paginate }) });
/**
* Get All Messages of the Logged In User
* @param data The data for the request.
* @param data.accept
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseMessagesServiceGetMessages = (queryClient: QueryClient, { accept }: {
  accept?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseMessagesServiceGetMessagesKeyFn({ accept }), queryFn: () => MessagesService.getMessages({ accept }) });
/**
* sliders
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingSliders = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingSlidersKeyFn(), queryFn: () => LandingService.getLandingSliders() });
/**
* services
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingServices = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingServicesKeyFn(), queryFn: () => LandingService.getLandingServices() });
/**
* site_offers
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingSiteOffers = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingSiteOffersKeyFn(), queryFn: () => LandingService.getLandingSiteOffers() });
/**
* plans
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingPlans = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingPlansKeyFn(), queryFn: () => LandingService.getLandingPlans() });
/**
* how_help
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingHowHelp = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingHowHelpKeyFn(), queryFn: () => LandingService.getLandingHowHelp() });
/**
* about sections
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingAboutSections = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingAboutSectionsKeyFn(), queryFn: () => LandingService.getLandingAboutSections() });
/**
* download section
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingDownloadSection = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingDownloadSectionKeyFn(), queryFn: () => LandingService.getLandingDownloadSection() });
/**
* guarantee_rights
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingGuaranteeRights = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingGuaranteeRightsKeyFn(), queryFn: () => LandingService.getLandingGuaranteeRights() });
/**
* platform_reviews
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingPlatformReviews = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingPlatformReviewsKeyFn(), queryFn: () => LandingService.getLandingPlatformReviews() });
/**
* partners
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingPartners = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingPartnersKeyFn(), queryFn: () => LandingService.getLandingPartners() });
/**
* most_rated_providers
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingMostRatedProviders = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingMostRatedProvidersKeyFn(), queryFn: () => LandingService.getLandingMostRatedProviders() });
/**
* orders_numbers
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingOrdersNumbers = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingOrdersNumbersKeyFn(), queryFn: () => LandingService.getLandingOrdersNumbers() });
/**
* contact
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingContact = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingContactKeyFn(), queryFn: () => LandingService.getLandingContact() });
/**
* about
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingAbout = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingAboutKeyFn(), queryFn: () => LandingService.getLandingAbout() });
/**
* how_order
* @returns unknown Successful response
* @throws ApiError
*/
export const prefetchUseLandingServiceGetLandingHowOrder = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseLandingServiceGetLandingHowOrderKeyFn(), queryFn: () => LandingService.getLandingHowOrder() });
