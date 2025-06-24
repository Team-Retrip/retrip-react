import { type StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type Middleware<T> = [['zustand/devtools', never], ['zustand/persist', T], ['zustand/immer', never]]

export function withMiddlewares<S>(
  config: StateCreator<S, [['zustand/immer', never]], [], S>,
  name: string
): StateCreator<S, [], Middleware<S>, S> {
  return devtools(persist(immer(config), { name }), {
    enabled: process.env.NODE_ENV === 'development'
  })
}
