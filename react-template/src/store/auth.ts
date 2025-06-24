import { create } from 'zustand'

import keys from './key'

import { withMiddlewares } from '.'

interface AuthState {
  accessToken: string
  refreshToken: string
}

interface AuthActions {
  setAccessToken: (accessToken: string) => void
  setRefreshToken: (refreshToken: string) => void
  setTokens: (tokens: { accessToken: string; refreshToken: string }) => void
  clearTokens: () => void
  clearToken: (token: 'accessToken' | 'refreshToken') => void
}

type AuthStore = AuthState & AuthActions

const initialState = {
  accessToken: '',
  refreshToken: ''
} satisfies AuthState

export const useAuthStore = create<AuthStore>()(
  withMiddlewares(
    (set) => ({
      ...initialState,
      setAccessToken: (accessToken) => set({ accessToken }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      setTokens: ({ accessToken, refreshToken }) => set({ accessToken, refreshToken }),
      clearTokens: () => set({ accessToken: '', refreshToken: '' }),
      clearToken: (token) => set({ [token]: '' })
    }),
    keys.AUTH
  )
)
