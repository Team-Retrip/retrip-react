import { api, handleKyError } from '../ky'

export async function getExample() {
  try {
    const data = await api.get('/example').json()

    return data
  } catch (error) {
    handleKyError(error)
  }
}
