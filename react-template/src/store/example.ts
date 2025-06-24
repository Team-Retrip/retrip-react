import { create } from 'zustand'

import { withMiddlewares } from '.'

interface RootData {
  count: number
}

interface RootActions {
  setCount: (count: number) => void
  initCount: () => void
}

type RootStore = RootData & RootActions

const initialStore = {
  count: 0
} satisfies RootData

export const useRootStore = create<RootStore>()(
  withMiddlewares(
    (set) => ({
      ...initialStore,
      setCount: (count) =>
        set((state) => {
          state.count = count
        }),
      initCount: () =>
        set((state) => {
          state.count = 0
        })
    }),
    'rootStore'
  )
)
