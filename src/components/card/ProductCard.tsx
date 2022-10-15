import { Breadcrumb } from 'components'
import { convertImageType } from 'utils'

export const ProductCard = () => {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a
          href=""
          className="c-card block bg-gray-200 shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div className="relative pb-48 overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={convertImageType(PRODUCT?.imageUrl)}
              alt=""
            />
          </div>
          <div className="p-4">
            <span className="inline-block">
              <Breadcrumb items={[PRODUCT?.categoryName, PRODUCT?.brandName]?.filter(Boolean)} />
            </span>
            <h2 className="mt-2 mb-2  font-bold">Purus Ullamcorper Inceptos Nibh</h2>
            <p className="text-sm">{PRODUCT?.description}</p>
            <div className="mt-3 flex items-center">
              <span className="text-sm font-semibold">रु </span>&nbsp;
              <span className="font-bold text-xl">{PRODUCT?.price?.toLocaleString()}/-</span>&nbsp;
            </div>
          </div>
          <div className="p-4 border-t border-b text-xs text-gray-700">
            <span className="flex items-center mb-1">
              <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
            </span>
            <span className="flex items-center">
              <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i> Ermäßigung mit Karte
            </span>
          </div>
          <div className="p-4 flex items-center text-sm text-gray-600">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current text-yellow-500"
            >
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
            </svg>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current text-yellow-500"
            >
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
            </svg>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current text-yellow-500"
            >
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
            </svg>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current text-yellow-500"
            >
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
            </svg>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current text-gray-400"
            >
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
            </svg>
            <span className="ml-2">34 Bewertungen</span>
          </div>
        </a>
      </div>
    </>
  )
}

//https://cdn02.hamrobazaar.com/User/Posts/2022/10/15/caa3b005-3324-4666-9dec-8864c82a8b2a.webp?x-image-process=image/resize,m_lfit,h_300,w_300

const PRODUCT = {
  id: 'ac663b52-f60a-44f7-9f16-8716efbee3f4',
  name: 'Audio Technica AT2035 Condenser microphone',
  description: 'Best microphone for recording vocals and instruments.',
  price: 12000,
  categoryId: '9e0bed73-ec90-40b6-af90-3a3867c30caf',
  brandCategoryId: '00000000-0000-0000-0000-000000000000',
  brandName: '',
  categoryName: 'Microphones',
  location: {
    locationLatitude: 27.741287,
    locationLongitude: 85.335785,
    locationDescription: 'Samanantar Marg, Narayan Gopal Chowk, Basundhara',
  },
  condition: 2,
  imageUrl:
    'https://cdn02.hamrobazaar.com/User/Posts/2022/10/15/aff93ae9-155d-4b56-9fc9-a11f340749c6.jpg',
  oldImageUrl: false,
  negotiable: false,
  delivery: true,
  locationRadius: false,
  createdById: '59e2cc34-5f4f-41f4-aaf0-c8f33ebe9d1f',
  expiryDate: '2022-11-14T00:00:00',
  createdOn: '2022-10-14T18:37:40.3824926',
  createdTime: '25 seconds ago',
  modifiedOn: '0001-01-01T00:00:00',
  displayOrder: 0,
  isSaved: false,
  totalViews: 0,
  deletedDeal: false,
  status: 1,
  deal: null,
  creatorInfo: {
    createdByName: 'Grace Music Store',
    hidePhoneNumber: false,
    createdByUsername: '9813573743',
    createdBy: '9813573743',
    creatorImg: 'https://cdn02.hamrobazaar.com/d7bf83a2-952d-4eea-b0c7-fc5fbcd9fc56.tmp',
    createdById: '59e2cc34-5f4f-41f4-aaf0-c8f33ebe9d1f',
    creatorAdCount: 91,
    averageRate: 0,
    totalRating: 0,
  },
  productMedia: [
    {
      id: '708814ba-da08-4a61-8204-4416f30631aa',
      productId: 'ac663b52-f60a-44f7-9f16-8716efbee3f4',
      mediaType: 1,
      locationKey:
        'https://cdn02.hamrobazaar.com/User/Posts/2022/10/15/d58be3f9-dbf5-48cf-95db-e45479bf8d7c.jpg',
      mediaExt: '.jpg',
      mediaSize: 138175,
      createdOn: '2022-10-14T18:37:40.3824926',
      modifiedOn: '2022-10-14T18:37:40.3824941',
      modifiedTimes: 1,
      status: 0,
      createdById: '59e2cc34-5f4f-41f4-aaf0-c8f33ebe9d1f',
      deleted: false,
      oldLocationKey: false,
    },
    {
      id: 'ed1eac64-45e9-4d80-b92a-77a167a62370',
      productId: 'ac663b52-f60a-44f7-9f16-8716efbee3f4',
      mediaType: 1,
      locationKey:
        'https://cdn02.hamrobazaar.com/User/Posts/2022/10/15/4049513c-ffca-41ee-a4ad-d024f0c6d5fe.jpg',
      mediaExt: '.jpg',
      mediaSize: 188693,
      createdOn: '2022-10-14T18:37:40.3824926',
      modifiedOn: '2022-10-14T18:37:40.3824941',
      modifiedTimes: 1,
      status: 0,
      createdById: '59e2cc34-5f4f-41f4-aaf0-c8f33ebe9d1f',
      deleted: false,
      oldLocationKey: false,
    },
    {
      id: '509e1a57-f191-4d7a-bcb8-b429e616c533',
      productId: 'ac663b52-f60a-44f7-9f16-8716efbee3f4',
      mediaType: 1,
      locationKey:
        'https://cdn02.hamrobazaar.com/User/Posts/2022/10/15/aff93ae9-155d-4b56-9fc9-a11f340749c6.jpg',
      mediaExt: '.jpg',
      mediaSize: 177815,
      createdOn: '2022-10-14T18:37:40.3824926',
      modifiedOn: '2022-10-14T18:37:40.3824941',
      modifiedTimes: 1,
      status: 0,
      createdById: '59e2cc34-5f4f-41f4-aaf0-c8f33ebe9d1f',
      deleted: false,
      oldLocationKey: false,
    },
  ],
  totalCount: 136983,
  isAdultContent: false,
  isHBSelect: false,
  newPrice: 0,
}
