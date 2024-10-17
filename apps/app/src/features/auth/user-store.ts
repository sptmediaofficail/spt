import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User } from './types';
import { OpenAPI } from '../../../../../libs/api-sdk/src/lib/gen2/requests';
import { router } from 'next/client';

const setupToken = (token: string | null) => {
  if (token) {
    OpenAPI.TOKEN = token;
  }
};

type UserStore = {
  user: User | null;
  token: string | null;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
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
        setToken: (newToken) =>
          set(() => ({
            token: newToken,
          })),
      }),
      {
        name: 'user',
        onRehydrateStorage: () => (state) => {
          if (!state) {
            router.push('/login');
            return;
          }
          setupToken(state.token);
        },
      }
    ),
    {
      store: 'user',
    }
  )
);

useUserStore.subscribe(({ token }) => setupToken(token));
