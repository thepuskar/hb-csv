import { generateRandNumArray } from 'utils';
import { ISkeletonProps } from 'interface'

export const ListSkeleton = ({ count = 4 }: ISkeletonProps) => {
  return (
    <div className="py-2 px-4">
      {generateRandNumArray(count)?.map((count) => (
        <p
          key={count}
          className="mb-3 leading-relaxed rounded-md py-2 px-4 w-full h-3 animate-pulse bg-gray-400"
        ></p>
      ))}
    </div>
  )
}
