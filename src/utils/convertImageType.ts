export const convertImageType = (
  url: string,
  height: number = 500,
  width: number = 500,
  format: string = 'webp'
) => {
  return `${url}?x-image-process=image/resize,m_lfit,h_${height},w_${width}/format,${format}`
}
