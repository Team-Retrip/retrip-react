import { type RouteObject } from 'react-router-dom'
import { type ReactNode } from 'react'

import { objectToQueryString } from '../utils/locaion'
import DefaultLayout from '../layouts/DefaultLayout'

import App from '@/pages/App'

export type RouteKey = 'home'

export type RouteManager = {
  id: RouteKey
  label: string
  path: string
  element: ReactNode
  /** FIXME */
  key?: string
}

export const routeManager = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    element: <App />
  }
] satisfies RouteManager[]

export const getRouteInfo = (key: RouteKey): RouteManager => {
  return routeManager.find((route) => route.id === key) as RouteManager
}

export const getRoutePath = (key: RouteKey, queryObject?: Record<string, string | number>) => {
  const queryString = queryObject ? `?${objectToQueryString(queryObject)}` : ''
  const route = getRouteInfo(key)
  const rootPath = ''

  return `${rootPath}${route.path}${queryString}`
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: routeManager.map((route) => ({
      id: route.id,
      path: route.path,
      element: route.element
    }))
  }
  // {
  //   path: 'somethings',
  //   element: <SomethingLayout />,
  //   children: somethingRoutes.map((route) => ({
  //     id: route.id,
  //     path: `/somethingRoutes${route.path}`,
  //     element: route.element
  //   }))
  // }
]
