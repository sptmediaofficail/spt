
// API
export const HOST_API = process.env.NEXT_PUBLIC_API_URL;
export const ASSETS_API = process.env.NEXT_PUBLIC_ASSETS_API;

// ROOT PATH AFTER LOGIN SUCCESSFUL

export const COOKIES_KEYS = {
  lang: 'NEXT_LOCALE',
  session: 'token',
  user: 'user',
};

export const MAX_FILE_SIZE = 500 * 1024; // 50KB
export const MAX_FILE_SIZE_HELPER = true;
