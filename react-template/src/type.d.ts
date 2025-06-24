declare global {
  interface Window {
    isNative: boolean
  }

  type ErrorResponse<T = object> = {
    code: number
    message: string
  } & T
}

export {}
