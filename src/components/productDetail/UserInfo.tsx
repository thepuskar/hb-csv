import { convertImageType } from 'utils'
import { Star } from 'assets'
import { NO_IMAGE } from 'constants'
import { ICreatorInfo } from 'interface'

interface IProps {
  userInfo: ICreatorInfo
}

export const UserInfo = (props: IProps) => {
  return (
    <div className="flex items-center py-3 mt-3 border-t-2">
      <img
        className="w-10 h-10 object-cover rounded-full"
        alt="User avatar"
        src={convertImageType(props?.userInfo?.creatorImg || NO_IMAGE, 100, 100)}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = convertImageType(NO_IMAGE)
        }}
      />

      <div className="pl-3">
        <div className="font-medium">
          {props?.userInfo?.createdByName || props?.userInfo?.createdBy || ''}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <Star className="w-5 h-5 text-yellow-400" />
          <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
            {Number(props?.userInfo?.averageRate).toFixed(2)}
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <a
            href="#"
            className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
          >
            {props?.userInfo?.totalRating} reviews
          </a>
        </div>
        <div className="font-medium">{props?.userInfo?.createdBy || ''}</div>
      </div>
    </div>
  )
}
