import { ITableInfo } from 'interface'

interface IProps {
  data: ITableInfo[]
  title: string
}
export const Table = (props: IProps) => {
  return (
    <>
      <div className="relative">
        <p className="my-3 text-gray-900 font-medium">{props?.title}</p>
        <div className="bg-gray-200 rounded-lg py-2">
          {props?.data?.map((item) => (
            <div key={item?.id} className="flex px-6 justify-start items-start text-gray-500 py-2">
              <div className="w-1/3 text-sm font-medium text-gray-900 dark:text-white">
                {item?.label}
              </div>
              <div className="w-2/3 text-sm">{item?.value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
