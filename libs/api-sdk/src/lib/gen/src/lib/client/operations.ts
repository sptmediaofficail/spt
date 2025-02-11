export const operations = {
    "get_shared-auth-me": {
        "path": "/shared/auth/me",
        "method": "get"
    },
    "post_shared-auth-register": {
        "path": "/shared/auth/register",
        "method": "post"
    },
    "post_shared-auth-send-otp": {
        "path": "/shared/auth/send-otp",
        "method": "post"
    },
    "post_shared-auth-verify-otp": {
        "path": "/shared/auth/verify-otp",
        "method": "post"
    },
    "post_shared-auth-logout": {
        "path": "/shared/auth/logout",
        "method": "post"
    },
    "post_shared-auth-edit-profile": {
        "path": "/shared/auth/edit-profile",
        "method": "post"
    },
    "post_shared-auth-change-phone": {
        "path": "/shared/auth/change-phone",
        "method": "post"
    },
    "post_shared-auth-verify-change-phone": {
        "path": "/shared/auth/verify-change-phone",
        "method": "post"
    },
    "put_shared-auth-update-settings": {
        "path": "/shared/auth/update-settings",
        "method": "put"
    },
    "get_brands": {
        "path": "/brands",
        "method": "get"
    },
    "get_site-offers": {
        "path": "/site_offers",
        "method": "get"
    },
    "get_site-offers-id": {
        "path": "/site_offers/:id",
        "method": "get"
    },
    "get_site-offers-ids": {
        "path": "/site_offers/ids",
        "method": "get"
    },
    "get_cities": {
        "path": "/cities",
        "method": "get"
    },
    "get_brands-brandid-models": {
        "path": "/brands/:brandId/models",
        "method": "get"
    },
    "post_client-order-spare-part": {
        "path": "/client/order_spare_part",
        "method": "post"
    },
    "get_vin-vin": {
        "path": "/vin/:vin",
        "method": "get"
    },
    "post_chat": {
        "path": "/chat",
        "method": "post"
    },
    "post_chat-message": {
        "path": "/chat/message",
        "method": "post"
    },
    "get_tickets": {
        "path": "/tickets",
        "method": "get"
    },
    "get_ticket-b33c269e-b489-415e-842f-65472771a0f3": {
        "path": "/ticket/b33c269e-b489-415e-842f-65472771a0f3",
        "method": "get"
    },
    "post_ticket": {
        "path": "/ticket",
        "method": "post"
    },
    "post_ticket-message": {
        "path": "/ticket/message",
        "method": "post"
    },
    "post_call-make": {
        "path": "/call/make",
        "method": "post"
    },
    "post_call-accept": {
        "path": "/call/accept",
        "method": "post"
    },
    "post_call-refuse": {
        "path": "/call/refuse",
        "method": "post"
    },
    "post_call-end": {
        "path": "/call/end",
        "method": "post"
    },
    "get_notification-index": {
        "path": "/notification/index",
        "method": "get"
    },
    "get_notification-unread-count": {
        "path": "/notification/unread_count",
        "method": "get"
    },
    "post_notification-mark-as-read": {
        "path": "/notification/mark_as_read",
        "method": "post"
    },
    "get_admin-orders": {
        "path": "/admin/orders",
        "method": "get"
    },
    "get_admin-orders-1d9de514-c4e1-4987-8eb9-0909556c7186": {
        "path": "/admin/orders/1d9de514-c4e1-4987-8eb9-0909556c7186",
        "method": "get"
    },
    "get_admin-orders-1d9de514-c4e1-4987-8eb9-0909556c7186-offers": {
        "path": "/admin/orders/1d9de514-c4e1-4987-8eb9-0909556c7186/offers",
        "method": "get"
    },
    "get_admin-orders-89572a05-e77b-48dc-8e1b-645fe0c82b6a-chat": {
        "path": "/admin/orders/89572a05-e77b-48dc-8e1b-645fe0c82b6a/chat",
        "method": "get"
    },
    "get_setting-calls": {
        "path": "/setting/calls",
        "method": "get"
    },
    "post_admin-setting": {
        "path": "/admin/setting",
        "method": "post"
    },
    "get_admin-cities": {
        "path": "/admin/cities",
        "method": "get"
    },
    "post_admin-cities": {
        "path": "/admin/cities",
        "method": "post"
    },
    "put_admin-cities-81a53c06-4069-4120-b9ae-6a4314cd4ada": {
        "path": "/admin/cities/81a53c06-4069-4120-b9ae-6a4314cd4ada",
        "method": "put"
    },
    "delete_admin-cities-b4a07276-1baf-43b0-8068-c03fdabf2626": {
        "path": "/admin/cities/b4a07276-1baf-43b0-8068-c03fdabf2626",
        "method": "delete"
    },
    "post_admin-cities-0e368569-8d07-4efb-a367-182dd5e2db42-stop": {
        "path": "/admin/cities/0e368569-8d07-4efb-a367-182dd5e2db42/stop",
        "method": "post"
    },
    "post_admin-cities-0e368569-8d07-4efb-a367-182dd5e2db42-restore": {
        "path": "/admin/cities/0e368569-8d07-4efb-a367-182dd5e2db42/restore",
        "method": "post"
    },
    "get_admin-brands": {
        "path": "/admin/brands",
        "method": "get"
    },
    "put_admin-brands-lamborghini": {
        "path": "/admin/brands/Lamborghini",
        "method": "put"
    },
    "get_admin-provider-profiles": {
        "path": "/admin/provider-profiles",
        "method": "get"
    },
    "post_admin-provider-profiles-verify-09d88c1d-fd8a-424d-9e7c-a5d2391cdbd3": {
        "path": "/admin/provider-profiles/verify/09d88c1d-fd8a-424d-9e7c-a5d2391cdbd3",
        "method": "post"
    },
    "post_admin-provider-profiles-decline-02b915a7-5a56-4711-8b4a-eb110408a090": {
        "path": "/admin/provider-profiles/decline/02b915a7-5a56-4711-8b4a-eb110408a090",
        "method": "post"
    },
    "post_admin-provider-profiles-stop-02b915a7-5a56-4711-8b4a-eb110408a090": {
        "path": "/admin/provider-profiles/stop/02b915a7-5a56-4711-8b4a-eb110408a090",
        "method": "post"
    },
    "post_admin-provider-profiles-restore-02b915a7-5a56-4711-8b4a-eb110408a090": {
        "path": "/admin/provider-profiles/restore/02b915a7-5a56-4711-8b4a-eb110408a090",
        "method": "post"
    },
    "get_admin-users": {
        "path": "/admin/users",
        "method": "get"
    },
    "post_admin-users": {
        "path": "/admin/users",
        "method": "post"
    },
    "get_admin-users-72d5778f-b67b-4e97-b4e2-f98f695162a7": {
        "path": "/admin/users/72d5778f-b67b-4e97-b4e2-f98f695162a7",
        "method": "get"
    },
    "put_admin-users-b2ef1c4f-918a-4f34-9d2f-97ce28c2772f": {
        "path": "/admin/users/b2ef1c4f-918a-4f34-9d2f-97ce28c2772f",
        "method": "put"
    },
    "delete_admin-users-b4a07276-1baf-43b0-8068-c03fdabf2626": {
        "path": "/admin/users/b4a07276-1baf-43b0-8068-c03fdabf2626",
        "method": "delete"
    },
    "post_admin-users-0e368569-8d07-4efb-a367-182dd5e2db42-stop": {
        "path": "/admin/users/0e368569-8d07-4efb-a367-182dd5e2db42/stop",
        "method": "post"
    },
    "post_admin-users-0e368569-8d07-4efb-a367-182dd5e2db42-restore": {
        "path": "/admin/users/0e368569-8d07-4efb-a367-182dd5e2db42/restore",
        "method": "post"
    },
    "get_admin-message-templates": {
        "path": "/admin/message-templates",
        "method": "get"
    },
    "get_admin-message-templates-2": {
        "path": "/admin/message-templates/2",
        "method": "get"
    },
    "post_admin-message-templates-5": {
        "path": "/admin/message-templates/5",
        "method": "post"
    },
    "get_admin-services": {
        "path": "/admin/services",
        "method": "get"
    },
    "post_admin-services": {
        "path": "/admin/services",
        "method": "post"
    },
    "post_admin-services-b11d171d-eec1-4474-a3d2-6ef6881023ae": {
        "path": "/admin/services/b11d171d-eec1-4474-a3d2-6ef6881023ae",
        "method": "post"
    },
    "delete_admin-services-b4a07276-1baf-43b0-8068-c03fdabf2626": {
        "path": "/admin/services/b4a07276-1baf-43b0-8068-c03fdabf2626",
        "method": "delete"
    },
    "post_admin-services-d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611-stop": {
        "path": "/admin/services/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/stop",
        "method": "post"
    },
    "post_admin-services-d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611-restore": {
        "path": "/admin/services/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/restore",
        "method": "post"
    },
    "get_admin-commissions": {
        "path": "/admin/commissions",
        "method": "get"
    },
    "post_admin-commissions": {
        "path": "/admin/commissions",
        "method": "post"
    },
    "put_admin-commissions-51a7447f-3bfd-4e89-a7f3-1969c8fb9330": {
        "path": "/admin/commissions/51a7447f-3bfd-4e89-a7f3-1969c8fb9330",
        "method": "put"
    },
    "delete_admin-commissions-51a7447f-3bfd-4e89-a7f3-1969c8fb9330": {
        "path": "/admin/commissions/51a7447f-3bfd-4e89-a7f3-1969c8fb9330",
        "method": "delete"
    },
    "post_admin-commissions-d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611-stop": {
        "path": "/admin/commissions/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/stop",
        "method": "post"
    },
    "post_admin-commissions-d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611-restore": {
        "path": "/admin/commissions/d48c07f9-b8b8-46d9-8b3c-3ba8fcdbe611/restore",
        "method": "post"
    },
    "get_admin-platform-reviews": {
        "path": "/admin/platform-reviews",
        "method": "get"
    },
    "post_admin-platform-reviews": {
        "path": "/admin/platform-reviews",
        "method": "post"
    },
    "post_admin-platform-reviews-5": {
        "path": "/admin/platform-reviews/5",
        "method": "post"
    },
    "delete_admin-platform-reviews-51a7447f-3bfd-4e89-a7f3-1969c8fb9330": {
        "path": "/admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330",
        "method": "delete"
    },
    "post_admin-platform-reviews-51a7447f-3bfd-4e89-a7f3-1969c8fb9330-stop": {
        "path": "/admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330/stop",
        "method": "post"
    },
    "post_admin-platform-reviews-51a7447f-3bfd-4e89-a7f3-1969c8fb9330-restore": {
        "path": "/admin/platform-reviews/51a7447f-3bfd-4e89-a7f3-1969c8fb9330/restore",
        "method": "post"
    },
    "get_admin-pages-type": {
        "path": "/admin/pages/:type",
        "method": "get"
    },
    "get_admin-pages-rights-paginated": {
        "path": "/admin/pages/rights/paginated",
        "method": "get"
    },
    "post_admin-pages": {
        "path": "/admin/pages",
        "method": "post"
    },
    "post_admin-pages-3": {
        "path": "/admin/pages/3",
        "method": "post"
    },
    "delete_admin-pages-51a7447f-3bfd-4e89-a7f3-1969c8fb9330": {
        "path": "/admin/pages/51a7447f-3bfd-4e89-a7f3-1969c8fb9330",
        "method": "delete"
    },
    "get_admin-terms-type": {
        "path": "/admin/terms/:type",
        "method": "get"
    },
    "get_admin-terms-terms-paginated": {
        "path": "/admin/terms/terms/paginated",
        "method": "get"
    },
    "post_admin-terms": {
        "path": "/admin/terms",
        "method": "post"
    },
    "post_admin-terms-id": {
        "path": "/admin/terms/:id",
        "method": "post"
    },
    "delete_admin-terms-5": {
        "path": "/admin/terms/5",
        "method": "delete"
    },
    "get_admin-provider-subscription-plans": {
        "path": "/admin/provider-subscription-plans",
        "method": "get"
    },
    "post_admin-provider-subscription-plans": {
        "path": "/admin/provider-subscription-plans",
        "method": "post"
    },
    "post_admin-provider-subscription-plans-945b42fc-a279-4ac5-8c00-77e635c87704": {
        "path": "/admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704",
        "method": "post"
    },
    "delete_admin-provider-subscription-plans-945b42fc-a279-4ac5-8c00-77e635c87704": {
        "path": "/admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704",
        "method": "delete"
    },
    "post_admin-provider-subscription-plans-945b42fc-a279-4ac5-8c00-77e635c87704-stop": {
        "path": "/admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704/stop",
        "method": "post"
    },
    "post_admin-provider-subscription-plans-945b42fc-a279-4ac5-8c00-77e635c87704-restore": {
        "path": "/admin/provider-subscription-plans/945b42fc-a279-4ac5-8c00-77e635c87704/restore",
        "method": "post"
    },
    "get_admin-city-services": {
        "path": "/admin/city-services",
        "method": "get"
    },
    "put_admin-city-services-13": {
        "path": "/admin/city-services/13",
        "method": "put"
    },
    "post_admin-city-services-attach": {
        "path": "/admin/city-services/attach",
        "method": "post"
    },
    "post_admin-city-services-detach": {
        "path": "/admin/city-services/detach",
        "method": "post"
    },
    "post_admin-city-services-0e368569-8d07-4efb-a367-182dd5e2db42-stop": {
        "path": "/admin/city-services/0e368569-8d07-4efb-a367-182dd5e2db42/stop",
        "method": "post"
    },
    "post_admin-city-services-0e368569-8d07-4efb-a367-182dd5e2db42-restore": {
        "path": "/admin/city-services/0e368569-8d07-4efb-a367-182dd5e2db42/restore",
        "method": "post"
    },
    "post_admin-auth-login": {
        "path": "/admin/auth/login",
        "method": "post"
    },
    "post_admin-auth-logout": {
        "path": "/admin/auth/logout",
        "method": "post"
    },
    "post_admin-custom-notification": {
        "path": "/admin/custom-notification",
        "method": "post"
    },
    "get_admin-permission-groups": {
        "path": "/admin/permission-groups",
        "method": "get"
    },
    "post_admin-permission-groups": {
        "path": "/admin/permission-groups",
        "method": "post"
    },
    "get_admin-permission-groups-8e0ea4e1-b136-45ad-aa91-f4d0b47dcfaf": {
        "path": "/admin/permission-groups/8e0ea4e1-b136-45ad-aa91-f4d0b47dcfaf",
        "method": "get"
    },
    "post_admin-permission-groups-d814419d-7555-4710-8e26-efeb66fc8fc2": {
        "path": "/admin/permission-groups/d814419d-7555-4710-8e26-efeb66fc8fc2",
        "method": "post"
    },
    "post_admin-permission-groups-0e368569-8d07-4efb-a367-182dd5e2db42-stop": {
        "path": "/admin/permission-groups/0e368569-8d07-4efb-a367-182dd5e2db42/stop",
        "method": "post"
    },
    "post_admin-permission-groups-0e368569-8d07-4efb-a367-182dd5e2db42-restore": {
        "path": "/admin/permission-groups/0e368569-8d07-4efb-a367-182dd5e2db42/restore",
        "method": "post"
    },
    "delete_admin-permission-groups-51a7447f-3bfd-4e89-a7f3-1969c8fb9330": {
        "path": "/admin/permission-groups/51a7447f-3bfd-4e89-a7f3-1969c8fb9330",
        "method": "delete"
    },
    "get_admin-permissions": {
        "path": "/admin/permissions",
        "method": "get"
    },
    "get_admin-messages": {
        "path": "/admin/messages",
        "method": "get"
    },
    "get_admin-messages-8899eddd-2567-40b6-bcaa-85ed7d53d226": {
        "path": "/admin/messages/8899eddd-2567-40b6-bcaa-85ed7d53d226",
        "method": "get"
    },
    "post_admin-messages-reply-8899eddd-2567-40b6-bcaa-85ed7d53d226": {
        "path": "/admin/messages/reply/8899eddd-2567-40b6-bcaa-85ed7d53d226",
        "method": "post"
    },
    "post_admin-messages-delete-6aa8ddfc-861c-4c42-b7c4-06dbb20627ad": {
        "path": "/admin/messages/delete/6aa8ddfc-861c-4c42-b7c4-06dbb20627ad",
        "method": "post"
    },
    "get_admin-sliders": {
        "path": "/admin/sliders",
        "method": "get"
    },
    "post_admin-sliders": {
        "path": "/admin/sliders",
        "method": "post"
    },
    "post_admin-sliders-726a81ec-d9b5-43ad-946b-b77470b071f4": {
        "path": "/admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4",
        "method": "post"
    },
    "delete_admin-sliders-6193d4cd-ce8e-4b79-ba46-7e3c086206f3": {
        "path": "/admin/sliders/6193d4cd-ce8e-4b79-ba46-7e3c086206f3",
        "method": "delete"
    },
    "post_admin-sliders-726a81ec-d9b5-43ad-946b-b77470b071f4-stop": {
        "path": "/admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4/stop",
        "method": "post"
    },
    "post_admin-sliders-726a81ec-d9b5-43ad-946b-b77470b071f4-restore": {
        "path": "/admin/sliders/726a81ec-d9b5-43ad-946b-b77470b071f4/restore",
        "method": "post"
    },
    "get_admin-how-help": {
        "path": "/admin/how_help",
        "method": "get"
    },
    "post_admin-how-help": {
        "path": "/admin/how_help",
        "method": "post"
    },
    "post_admin-how-help-c0e70442-f191-4f3c-bb31-7ca396d574cd": {
        "path": "/admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd",
        "method": "post"
    },
    "delete_admin-how-help-c0e70442-f191-4f3c-bb31-7ca396d574cd": {
        "path": "/admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd",
        "method": "delete"
    },
    "post_admin-how-help-c0e70442-f191-4f3c-bb31-7ca396d574cd-stop": {
        "path": "/admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd/stop",
        "method": "post"
    },
    "post_admin-how-help-c0e70442-f191-4f3c-bb31-7ca396d574cd-restore": {
        "path": "/admin/how_help/c0e70442-f191-4f3c-bb31-7ca396d574cd/restore",
        "method": "post"
    },
    "get_admin-about-sections": {
        "path": "/admin/about_sections",
        "method": "get"
    },
    "post_admin-about-sections": {
        "path": "/admin/about_sections",
        "method": "post"
    },
    "post_admin-about-sections-c0e70442-f191-4f3c-bb31-7ca396d574cd": {
        "path": "/admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd",
        "method": "post"
    },
    "delete_admin-about-sections-c0e70442-f191-4f3c-bb31-7ca396d574cd": {
        "path": "/admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd",
        "method": "delete"
    },
    "post_admin-about-sections-c0e70442-f191-4f3c-bb31-7ca396d574cd-stop": {
        "path": "/admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd/stop",
        "method": "post"
    },
    "post_admin-about-sections-c0e70442-f191-4f3c-bb31-7ca396d574cd-restore": {
        "path": "/admin/about_sections/c0e70442-f191-4f3c-bb31-7ca396d574cd/restore",
        "method": "post"
    },
    "get_admin-download-section": {
        "path": "/admin/download_section",
        "method": "get"
    },
    "post_admin-download-section": {
        "path": "/admin/download_section",
        "method": "post"
    },
    "get_admin-about": {
        "path": "/admin/about",
        "method": "get"
    },
    "post_admin-about-store-about": {
        "path": "/admin/about/store_about",
        "method": "post"
    },
    "post_admin-about-store-how-order": {
        "path": "/admin/about/store_how_order",
        "method": "post"
    },
    "delete_admin-about-7ad421cd-9075-4a74-b2e1-e4298a1dc2b5": {
        "path": "/admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5",
        "method": "delete"
    },
    "post_admin-about-7ad421cd-9075-4a74-b2e1-e4298a1dc2b5-stop": {
        "path": "/admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5/stop",
        "method": "post"
    },
    "post_admin-about-7ad421cd-9075-4a74-b2e1-e4298a1dc2b5-restore": {
        "path": "/admin/about/7ad421cd-9075-4a74-b2e1-e4298a1dc2b5/restore",
        "method": "post"
    },
    "get_admin-site-offers": {
        "path": "/admin/site_offers",
        "method": "get"
    },
    "post_admin-site-offers": {
        "path": "/admin/site_offers",
        "method": "post"
    },
    "post_admin-site-offers-e3ed5781-465b-4c16-879f-981812fb6210": {
        "path": "/admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210",
        "method": "post"
    },
    "delete_admin-site-offers-e3ed5781-465b-4c16-879f-981812fb6210": {
        "path": "/admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210",
        "method": "delete"
    },
    "post_admin-site-offers-e3ed5781-465b-4c16-879f-981812fb6210-stop": {
        "path": "/admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210/stop",
        "method": "post"
    },
    "post_admin-site-offers-e3ed5781-465b-4c16-879f-981812fb6210-restore": {
        "path": "/admin/site_offers/e3ed5781-465b-4c16-879f-981812fb6210/restore",
        "method": "post"
    },
    "get_admin-guarantee-right": {
        "path": "/admin/guarantee_right",
        "method": "get"
    },
    "post_admin-guarantee-right": {
        "path": "/admin/guarantee_right",
        "method": "post"
    },
    "post_admin-guarantee-right-716ae479-a414-4e1a-80a9-de253b560d33": {
        "path": "/admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33",
        "method": "post"
    },
    "delete_admin-guarantee-right-716ae479-a414-4e1a-80a9-de253b560d33": {
        "path": "/admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33",
        "method": "delete"
    },
    "post_admin-guarantee-right-716ae479-a414-4e1a-80a9-de253b560d33-stop": {
        "path": "/admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33/stop",
        "method": "post"
    },
    "post_admin-guarantee-right-716ae479-a414-4e1a-80a9-de253b560d33-restore": {
        "path": "/admin/guarantee_right/716ae479-a414-4e1a-80a9-de253b560d33/restore",
        "method": "post"
    },
    "get_admin-partners": {
        "path": "/admin/partners",
        "method": "get"
    },
    "post_admin-partners": {
        "path": "/admin/partners",
        "method": "post"
    },
    "post_admin-partners-862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7": {
        "path": "/admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7",
        "method": "post"
    },
    "delete_admin-partners-862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7": {
        "path": "/admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7",
        "method": "delete"
    },
    "post_admin-partners-862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7-stop": {
        "path": "/admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7/stop",
        "method": "post"
    },
    "post_admin-partners-862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7-restore": {
        "path": "/admin/partners/862cfc1a-4563-4ac3-8bb8-5f75eeddd6e7/restore",
        "method": "post"
    },
    "get_admin-tickets": {
        "path": "/admin/tickets",
        "method": "get"
    },
    "get_admin-tickets-fd3a3d51-755b-4fec-ba9a-a162b21188ce-messages": {
        "path": "/admin/tickets/fd3a3d51-755b-4fec-ba9a-a162b21188ce/messages",
        "method": "get"
    },
    "post_admin-tickets-send-message": {
        "path": "/admin/tickets/send_message",
        "method": "post"
    },
    "get_client-orders": {
        "path": "/client/orders",
        "method": "get"
    },
    "get_client-orders-id": {
        "path": "/client/orders/:id",
        "method": "get"
    },
    "post_client-orders-c5ad5169-f88d-4acc-8d4f-6c985706b224-confirm-delivery": {
        "path": "/client/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224/confirm-delivery",
        "method": "post"
    },
    "post_client-order-rate": {
        "path": "/client/order/rate",
        "method": "post"
    },
    "post_client-offer-96be9e84-956a-4298-89bd-9bd3c58e251e-accept": {
        "path": "/client/offer/96be9e84-956a-4298-89bd-9bd3c58e251e/accept",
        "method": "post"
    },
    "get_client-services": {
        "path": "/client/services",
        "method": "get"
    },
    "get_provider-subscription-plans": {
        "path": "/provider/subscription/plans",
        "method": "get"
    },
    "post_provider-subscription-subscribe": {
        "path": "/provider/subscription/subscribe",
        "method": "post"
    },
    "get_provider-subscription-check": {
        "path": "/provider/subscription/check",
        "method": "get"
    },
    "get_provider-profile": {
        "path": "/provider/profile",
        "method": "get"
    },
    "post_provider-profile": {
        "path": "/provider/profile",
        "method": "post"
    },
    "put_provider-profile": {
        "path": "/provider/profile",
        "method": "put"
    },
    "get_provider-me": {
        "path": "/provider/me",
        "method": "get"
    },
    "get_provider-id": {
        "path": "/provider/:id",
        "method": "get"
    },
    "get_provider-ids": {
        "path": "/provider/ids",
        "method": "get"
    },
    "get_provider-search": {
        "path": "/provider/search",
        "method": "get"
    },
    "get_provider-orders": {
        "path": "/provider/orders",
        "method": "get"
    },
    "get_provider-orders-1d9de514-c4e1-4987-8eb9-0909556c7186": {
        "path": "/provider/orders/1d9de514-c4e1-4987-8eb9-0909556c7186",
        "method": "get"
    },
    "post_provider-order-rate": {
        "path": "/provider/order/rate",
        "method": "post"
    },
    "post_provider-orders-c5ad5169-f88d-4acc-8d4f-6c985706b224-confirm-delivery": {
        "path": "/provider/orders/c5ad5169-f88d-4acc-8d4f-6c985706b224/confirm-delivery",
        "method": "post"
    },
    "post_provider-offer": {
        "path": "/provider/offer",
        "method": "post"
    },
    "get_pages-how-we-help": {
        "path": "/pages/how_we_help",
        "method": "get"
    },
    "get_pages-rights-paginated": {
        "path": "/pages/rights/paginated",
        "method": "get"
    },
    "get_terms-type": {
        "path": "/terms/:type",
        "method": "get"
    },
    "get_terms-commission-paginated": {
        "path": "/terms/commission/paginated",
        "method": "get"
    },
    "get_platform-reviews": {
        "path": "/platform-reviews",
        "method": "get"
    },
    "get_setting": {
        "path": "/setting",
        "method": "get"
    },
    "get_messages": {
        "path": "/messages/",
        "method": "get"
    },
    "post_messages-send": {
        "path": "/messages/send",
        "method": "post"
    },
    "get_landing-sliders": {
        "path": "/landing/sliders",
        "method": "get"
    },
    "get_landing-services": {
        "path": "/landing/services",
        "method": "get"
    },
    "get_landing-site-offers": {
        "path": "/landing/site_offers",
        "method": "get"
    },
    "get_landing-plans": {
        "path": "/landing/plans",
        "method": "get"
    },
    "get_landing-how-help": {
        "path": "/landing/how_help",
        "method": "get"
    },
    "get_landing-about-sections": {
        "path": "/landing/about_sections",
        "method": "get"
    },
    "get_landing-download-section": {
        "path": "/landing/download_section",
        "method": "get"
    },
    "get_landing-guarantee-rights": {
        "path": "/landing/guarantee_rights",
        "method": "get"
    },
    "get_landing-platform-reviews": {
        "path": "/landing/platform_reviews",
        "method": "get"
    },
    "get_landing-partners": {
        "path": "/landing/partners",
        "method": "get"
    },
    "get_landing-most-rated-providers": {
        "path": "/landing/most_rated_providers",
        "method": "get"
    },
    "get_landing-orders-numbers": {
        "path": "/landing/orders_numbers",
        "method": "get"
    },
    "get_landing-contact": {
        "path": "/landing/contact",
        "method": "get"
    },
    "get_landing-about": {
        "path": "/landing/about",
        "method": "get"
    },
    "get_landing-how-order": {
        "path": "/landing/how_order",
        "method": "get"
    },
    "get_landing-most-rated-providers-by-type": {
        "path": "/landing/most_rated_providers_by_type",
        "method": "get"
    }
} as const;