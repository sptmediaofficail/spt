import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type PreAuthState = {
  recipient: string;
  code: string;
};

type PreAuthStore = {
  state: PreAuthState;
  setState: (state: Partial<PreAuthState>) => void;
};

export const usePreAuthStore = create<PreAuthStore>()(
  devtools(
    persist(
      (set) => ({
        state: {
          recipient: '',
          code: '',
        },
        setState: (newState) =>
          set((prev) => ({
            state: { ...prev.state, ...newState },
          })),
      }),
      {
        name: 'pre-auth',
        partialize: (state) => ({
          state: { recipient: state.state.recipient },
        }),
      }
    ),
    {
      store: 'pre-auth',
    }
  )
);
