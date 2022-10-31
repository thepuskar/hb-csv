import { CsvDownloadProps } from 'interface'

const CSV_FILE_TYPE = 'text/csv;charset=utf-8;'

export const csvDownload = ({
  data,
  filename = 'export.csv',
  delimiter = ';',
  headers,
}: CsvDownloadProps): void => {
  const formattedFilename = getFilename(filename)

  if (data.length === 0) {
    triggerCsvDownload(headers ? headers.join(delimiter) : '', formattedFilename)
    return
  }

  const headerKeys = Object.keys(data[0])

  const columnNames = headers ?? headerKeys
  const csv = data.map((row) =>
    headerKeys
      .map((fieldName) => JSON.stringify(row[fieldName] === 0 ? 0 : row[fieldName] ?? ''))
      .join(delimiter)
  )
  csv.unshift(columnNames.join(delimiter))
  const csvAsString = csv.join('\r\n')
  triggerCsvDownload(csvAsString, formattedFilename)
}

const triggerCsvDownload = (csvAsString: string, fileName: string) => {
  // BOM support for special characters in Excel
  const byteOrderMark = '\ufeff'

  const blob = new Blob([byteOrderMark, csvAsString], {
    type: CSV_FILE_TYPE,
  })

  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = fileName
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const getFilename = (providedFilename: string): string => {
  return /csv$/i.test(providedFilename) ? providedFilename : `${providedFilename}.csv`
}
