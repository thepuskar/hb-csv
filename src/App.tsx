import { QueryClientProvider } from '@tanstack/react-query'
// import { CSVLink, CSVDownload } from 'react-csv'
import { queryClient } from 'config'
import { ProductList, Layout, ProductDetail } from 'components'

function App() {
  // const headers = [
  //   { label: 'First Name', key: 'firstname' },
  //   { label: 'Last Name', key: 'lastname' },
  //   { label: 'Email', key: 'email' },
  // ]

  // const data = [
  //   { firstname: 'Ahmed', lastname: 'Tomi', email: 'ah@smthing.co.com' },
  //   { firstname: 'Raed', lastname: 'Labes', email: 'rl@smthing.co.com' },
  //   { firstname: 'Yezzi', lastname: 'Min l3b', email: 'ymin@cocococo.com' },
  // ]

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App px-3 md:px-16  py-3">
        <Layout>
          <ProductDetail />
        </Layout>
        {/* <CSVLink data={data} headers={headers}>
          Download me
        </CSVLink> */}
      </div>
    </QueryClientProvider>
  )
}

export default App
