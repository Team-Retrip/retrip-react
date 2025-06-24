import ky, { HTTPError, type KyRequest } from 'ky'

import { useAuthStore } from '@/store/auth'

// TODO Write base url
const BASE_URL = ''

const clearToken = (req: KyRequest) => {
  req.headers.delete('Authorization')
}

const setToken = (req: KyRequest, token: string) => {
  req.headers.set('Authorization', `Bearer ${token}`)
}

const handleAuthorizationError = async (req: KyRequest) => {
  // TODO Get refresh token
  const token = await ky.get(BASE_URL).text()

  if (!token) {
    clearToken(req)
    // TODO Redirect to login
  } else {
    setToken(req, token)
  }

  return ky(req)
}

export const handleKyError = (error: unknown) => {
  if (error instanceof HTTPError) {
    console.error('HTTP error occured:,', error.response)
    error.response.json<ErrorResponse>().then((data) => console.error(data))
  }
}

export const api = ky.create({
  prefixUrl: BASE_URL,
  hooks: {
    beforeRequest: [
      (request) => {
        const { accessToken } = useAuthStore.getState()

        if (accessToken) {
          setToken(request, accessToken)
        }
      }
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 403) {
          return handleAuthorizationError(request)
        }
      }
    ]
  }
})
