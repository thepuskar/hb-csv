import { RightArrow } from 'assets'

interface IBreadCrumbProps {
  items: string[]
}

export const Breadcrumb = ({ items }: IBreadCrumbProps) => {
  return (
    <nav className="flex">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items?.map((breadcrumb, index) => (
          <li className="cursor-default" key={index}>
            <div className="flex items-center">
              {index > 0 && <RightArrow className="w-4 h-4 text-gray-400" />}
              <span
                className={`${
                  index > 0 ? 'ml-1  md:ml-2' : ''
                } text-xs font-medium text-gray-700 hover:text-gray-900`}
              >
                {breadcrumb}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
