import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User } from './types';
import { OpenAPI } from '@spt/api-sdk';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { FetchClientConfig } from '../../fetch-client';

export const cacheToken = (token: string) => {
  console.log('cacheToken', token);
  setCookie('token', token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  });
  // OpenAPI.TOKEN = token;
  OpenAPI.HEADERS = {
    ...OpenAPI.HEADERS,
    Authorization: `Bearer ${token}`,
  };
  FetchClientConfig.headers = {
    ...FetchClientConfig.headers,
    Authorization: `Bearer ${token}`,
  };
};
const removeToken = () => {
  setCookie('token', '', { expires: new Date(0) });
  OpenAPI.TOKEN = '';
  FetchClientConfig.headers = {
    ...FetchClientConfig.headers,
    Authorization: '',
  };
};
type UserStore = {
  user: User | null;
  token: string | null;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  reset: () => void;
};
export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (newUser) =>
          set(() => ({
            user: newUser,
          })),
        token: null,
        setToken: (newToken) => {
          set(() => ({
            token: newToken,
          }));
          cacheToken(newToken);
        },
        reset: () => {
          set(() => ({
            user: null,
            token: null,
          }));
          removeToken();
        },
      }),
      {
        name: 'user',
        onRehydrateStorage: () => (state) => {
          const router = useRouter();
          if (state?.token) {
            console.log('rehydrated token', state.token);
            cacheToken(state.token);
          } else {
            router.push('/login');
          }
        },
      }
    ),
    {
      store: 'user',
    }
  )
);
const token = useUserStore.getState().token;
if (token) cacheToken(token);
// // when token changes, update OpenAPI.TOKEN
// useUserStore.subscribe(({ token }) => token && cacheToken(token));
// // OpenAPI.interceptors.response.use(
// // OpenAPI.interceptors.request.use((request) => {
// //   console.log('request', request);
// //   return {
// //     ...request,
// //     headers: {
// //       ...request.headers,
// //       Authorization: `Bearer ${useUserStore.getState().token}`,
// //     },
// //   };
// // });
