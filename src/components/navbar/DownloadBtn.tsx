import { isEmpty } from 'lodash'

import { useDataToConvert } from 'hooks'
import { csvDownload } from 'utils'

export const DownloadSheet = () => {
  const { dataToConvert } = useDataToConvert()

  return (
    <>
      {!isEmpty(dataToConvert?.data) ? (
        <button
          type="button"
          className="bg-indigo-500 hover:bg-indigo-700 transition duration-500 ease-in-out text-white rounded-lg py-2 px-4 text-base font-medium text-center"
          onClick={() => csvDownload(dataToConvert)}
        >
          Download
        </button>
      ) : null}
    </>
  )
}
