import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User } from './types';
import { OpenAPI } from '../../../../../libs/api-sdk/src/lib/gen2/requests';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { FetchClientConfig } from '../../fetch-client';

export const cacheToken = (token: string) => {
  setCookie('token', token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  });
  OpenAPI.TOKEN = token;
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
            // cacheToken(state.token);
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
