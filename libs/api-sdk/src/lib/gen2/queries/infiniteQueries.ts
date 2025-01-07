// generated with @7nohe/openapi-react-query-codegen@1.6.1 

import { InfiniteData, useInfiniteQuery, UseInfiniteQueryOptions } from "@tanstack/react-query";
import { AdminCitiesService, AdminCityServiceService, AdminCommissionsService, AdminLandingAboutSectionsService, AdminLandingAboutService, AdminLandingGuaranteeRightService, AdminLandingHowHelpService, AdminLandingPartnersService, AdminLandingSiteOfferService, AdminLandingSlidersService, AdminMessageTemplatesService, AdminPagesService, AdminPermissionGroupsService, AdminPlatformReviewsService, AdminProviderProfilesService, AdminProviderSubscriptionPlansService, AdminServicesService, AdminTicketsService, AdminUsersService, BrandModelsService, BrandService, ClientClientOrdersService, LandingService, PagesService, PlatformReviewsService, SiteOffersService, TicketService } from "../requests/services.gen";
import * as Common from "./common";
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
export const useBrandServiceGetBrandsInfinite = <TData = InfiniteData<Common.BrandServiceGetBrandsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseBrandServiceGetBrandsKeyFn({ contentLanguage, paginate, xRequestedWith }, queryKey), queryFn: ({ pageParam }) => BrandService.getBrands({ contentLanguage, page: pageParam as number, paginate, xRequestedWith }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
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
export const useSiteOffersServiceGetSiteOffersInfinite = <TData = InfiniteData<Common.SiteOffersServiceGetSiteOffersDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseSiteOffersServiceGetSiteOffersKeyFn({ contentLanguage, paginate, xRequestedWith }, queryKey), queryFn: ({ pageParam }) => SiteOffersService.getSiteOffers({ contentLanguage, page: pageParam as number, paginate, xRequestedWith }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
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
export const useBrandModelsServiceGetBrandsByBrandIdModelsInfinite = <TData = InfiniteData<Common.BrandModelsServiceGetBrandsByBrandIdModelsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ brandId, contentLanguage, paginate, xRequestedWith }: {
  brandId: string;
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseBrandModelsServiceGetBrandsByBrandIdModelsKeyFn({ brandId, contentLanguage, paginate, xRequestedWith }, queryKey), queryFn: ({ pageParam }) => BrandModelsService.getBrandsByBrandIdModels({ brandId, contentLanguage, page: pageParam as number, paginate, xRequestedWith }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
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
export const useTicketServiceGetTicketsInfinite = <TData = InfiniteData<Common.TicketServiceGetTicketsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseTicketServiceGetTicketsKeyFn({ contentLanguage, paginate, xRequestedWith }, queryKey), queryFn: ({ pageParam }) => TicketService.getTickets({ contentLanguage, page: pageParam as number, paginate, xRequestedWith }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @param data.search
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCitiesServiceGetAdminCitiesInfinite = <TData = InfiniteData<Common.AdminCitiesServiceGetAdminCitiesDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate, search }: {
  paginate?: number;
  search?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminCitiesServiceGetAdminCitiesKeyFn({ paginate, search }, queryKey), queryFn: ({ pageParam }) => AdminCitiesService.getAdminCities({ page: pageParam as number, paginate, search }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderProfilesServiceGetAdminProviderProfilesInfinite = <TData = InfiniteData<Common.AdminProviderProfilesServiceGetAdminProviderProfilesDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminProviderProfilesServiceGetAdminProviderProfilesKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminProviderProfilesService.getAdminProviderProfiles({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
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
export const useAdminUsersServiceGetAdminUsersInfinite = <TData = InfiniteData<Common.AdminUsersServiceGetAdminUsersDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept, paginate, role }: {
  accept?: string;
  paginate?: number;
  role?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminUsersServiceGetAdminUsersKeyFn({ accept, paginate, role }, queryKey), queryFn: ({ pageParam }) => AdminUsersService.getAdminUsers({ accept, page: pageParam as number, paginate, role }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* GET All Message Templates
* @param data The data for the request.
* @param data.accept
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminMessageTemplatesServiceGetAdminMessageTemplatesInfinite = <TData = InfiniteData<Common.AdminMessageTemplatesServiceGetAdminMessageTemplatesDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accept, paginate }: {
  accept?: string;
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminMessageTemplatesServiceGetAdminMessageTemplatesKeyFn({ accept, paginate }, queryKey), queryFn: ({ pageParam }) => AdminMessageTemplatesService.getAdminMessageTemplates({ accept, page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminServicesServiceGetAdminServicesInfinite = <TData = InfiniteData<Common.AdminServicesServiceGetAdminServicesDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminServicesServiceGetAdminServicesKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminServicesService.getAdminServices({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCommissionsServiceGetAdminCommissionsInfinite = <TData = InfiniteData<Common.AdminCommissionsServiceGetAdminCommissionsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminCommissionsServiceGetAdminCommissionsKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminCommissionsService.getAdminCommissions({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPlatformReviewsServiceGetAdminPlatformReviewsInfinite = <TData = InfiniteData<Common.AdminPlatformReviewsServiceGetAdminPlatformReviewsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminPlatformReviewsServiceGetAdminPlatformReviewsKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminPlatformReviewsService.getAdminPlatformReviews({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* get page by type paginated
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPagesServiceGetAdminPagesRightsPaginatedInfinite = <TData = InfiniteData<Common.AdminPagesServiceGetAdminPagesRightsPaginatedDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminPagesServiceGetAdminPagesRightsPaginatedKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminPagesService.getAdminPagesRightsPaginated({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansInfinite = <TData = InfiniteData<Common.AdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminProviderSubscriptionPlansService.getAdminProviderSubscriptionPlans({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* city-services
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @param data.search
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminCityServiceServiceGetAdminCityServicesInfinite = <TData = InfiniteData<Common.AdminCityServiceServiceGetAdminCityServicesDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate, search }: {
  paginate?: number;
  search?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminCityServiceServiceGetAdminCityServicesKeyFn({ paginate, search }, queryKey), queryFn: ({ pageParam }) => AdminCityServiceService.getAdminCityServices({ page: pageParam as number, paginate, search }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* index
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminPermissionGroupsServiceGetAdminPermissionGroupsInfinite = <TData = InfiniteData<Common.AdminPermissionGroupsServiceGetAdminPermissionGroupsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminPermissionGroupsServiceGetAdminPermissionGroupsKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminPermissionGroupsService.getAdminPermissionGroups({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSlidersServiceGetAdminSlidersInfinite = <TData = InfiniteData<Common.AdminLandingSlidersServiceGetAdminSlidersDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminLandingSlidersServiceGetAdminSlidersKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminLandingSlidersService.getAdminSliders({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingHowHelpServiceGetAdminHowHelpInfinite = <TData = InfiniteData<Common.AdminLandingHowHelpServiceGetAdminHowHelpDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminLandingHowHelpServiceGetAdminHowHelpKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminLandingHowHelpService.getAdminHowHelp({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutSectionsServiceGetAdminAboutSectionsInfinite = <TData = InfiniteData<Common.AdminLandingAboutSectionsServiceGetAdminAboutSectionsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminLandingAboutSectionsServiceGetAdminAboutSectionsKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminLandingAboutSectionsService.getAdminAboutSections({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingAboutServiceGetAdminAboutInfinite = <TData = InfiniteData<Common.AdminLandingAboutServiceGetAdminAboutDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminLandingAboutServiceGetAdminAboutKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminLandingAboutService.getAdminAbout({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingSiteOfferServiceGetAdminSiteOffersInfinite = <TData = InfiniteData<Common.AdminLandingSiteOfferServiceGetAdminSiteOffersDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminLandingSiteOfferServiceGetAdminSiteOffersKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminLandingSiteOfferService.getAdminSiteOffers({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingGuaranteeRightServiceGetAdminGuaranteeRightInfinite = <TData = InfiniteData<Common.AdminLandingGuaranteeRightServiceGetAdminGuaranteeRightDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminLandingGuaranteeRightServiceGetAdminGuaranteeRightKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminLandingGuaranteeRightService.getAdminGuaranteeRight({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminLandingPartnersServiceGetAdminPartnersInfinite = <TData = InfiniteData<Common.AdminLandingPartnersServiceGetAdminPartnersDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminLandingPartnersServiceGetAdminPartnersKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminLandingPartnersService.getAdminPartners({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* index
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminTicketsServiceGetAdminTicketsInfinite = <TData = InfiniteData<Common.AdminTicketsServiceGetAdminTicketsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminTicketsServiceGetAdminTicketsKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminTicketsService.getAdminTickets({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* messages
* @param data The data for the request.
* @param data.paginate
* @param data.page
* @returns unknown Successful response
* @throws ApiError
*/
export const useAdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesInfinite = <TData = InfiniteData<Common.AdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseAdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => AdminTicketsService.getAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessages({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
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
export const useClientClientOrdersServiceGetClientOrdersInfinite = <TData = InfiniteData<Common.ClientClientOrdersServiceGetClientOrdersDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentLanguage, paginate, statusArray, xRequestedWith }: {
  contentLanguage?: string;
  paginate?: number;
  statusArray?: string;
  xRequestedWith?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseClientClientOrdersServiceGetClientOrdersKeyFn({ contentLanguage, paginate, statusArray, xRequestedWith }, queryKey), queryFn: ({ pageParam }) => ClientClientOrdersService.getClientOrders({ contentLanguage, page: pageParam as number, paginate, statusArray, xRequestedWith }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* get page by type paginated
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const usePagesServiceGetPagesRightsPaginatedInfinite = <TData = InfiniteData<Common.PagesServiceGetPagesRightsPaginatedDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UsePagesServiceGetPagesRightsPaginatedKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => PagesService.getPagesRightsPaginated({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* list
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @returns unknown Successful response
* @throws ApiError
*/
export const usePlatformReviewsServiceGetPlatformReviewsInfinite = <TData = InfiniteData<Common.PlatformReviewsServiceGetPlatformReviewsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate }: {
  paginate?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UsePlatformReviewsServiceGetPlatformReviewsKeyFn({ paginate }, queryKey), queryFn: ({ pageParam }) => PlatformReviewsService.getPlatformReviews({ page: pageParam as number, paginate }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
/**
* most_rated_providers_by_type Copy
* @param data The data for the request.
* @param data.page
* @param data.paginate
* @param data.type spare_parts or junkyard_sale
* @returns unknown Successful response
* @throws ApiError
*/
export const useLandingServiceGetLandingMostRatedProvidersByTypeInfinite = <TData = InfiniteData<Common.LandingServiceGetLandingMostRatedProvidersByTypeDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ paginate, type }: {
  paginate?: number;
  type?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({
  queryKey: Common.UseLandingServiceGetLandingMostRatedProvidersByTypeKeyFn({ paginate, type }, queryKey), queryFn: ({ pageParam }) => LandingService.getLandingMostRatedProvidersByType({ page: pageParam as number, paginate, type }) as TData, initialPageParam: "1", getNextPageParam: response => (response as {
    nextPage: number;
  }).nextPage, ...options
});
