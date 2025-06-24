export const exampleKeys = {
  all: ['example'] as const,
  detail: (id: number) => ['example', 'detail', id] as const
}
