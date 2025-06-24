import { useQuery } from '@tanstack/react-query'

import { getExample } from '@/api/example'
import { exampleKeys } from '@/queries/example.query'

export const useExample = (exampleId: number) => {
  const { data } = useQuery({
    queryKey: exampleKeys.detail(exampleId),
    queryFn: getExample
  })

  return data
}
