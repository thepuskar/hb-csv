import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'config'
import { ProductList, Layout, ProductDetail } from 'components'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App px-3  py-3">
        <Layout>
          <ProductList />
        </Layout>
      </div>
    </QueryClientProvider>
  )
}

export default App
