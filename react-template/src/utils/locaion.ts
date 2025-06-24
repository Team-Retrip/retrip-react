/**
 * Converts an object into a query string.
 * Only supports primitive values (string, number, boolean) and arrays of these types.
 * @param obj The object to be converted.
 * @returns A query string representing the object.
 */
export const objectToQueryString = (
  obj: Record<string, string | number | boolean | (string | number | boolean)[]>
): string => {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        // Handle arrays
        return value
          .map((item) => `${encodeURIComponent(key)}[]=${encodeURIComponent(String(item))}`)
          .join('&')
      }

      // Handle primitive values
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    })
    .join('&')
}
