export const flattenObj = (obj: any) => {
  let result: any = {}

  for (const i in obj) {
    if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
      const temp = flattenObj(obj[i])
      for (const j in temp) {
        // Store temp in result
        result[j] = temp[j]
      }
    } else {
      result[i] = obj[i]
    }
  }
  return result
}
