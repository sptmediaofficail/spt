import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = 'ar'; // You can dynamically determine the locale if needed

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
//
// // Type of the JSON content for the 'ar' locale
// export type arT = typeof import('./locales/ar.json');
//
// // Recursive type to get deeply nested keys
// type NestedKeyOf<T> = T extends object
//   ? { [K in keyof T]: `${K}` | `${K}.${NestedKeyOf<T[K]>}` }[keyof T]
//   : never;
//
// // `translate` function with type safety for nested keys
// export const translate = (key: NestedKeyOf<arT>) => t(key);
