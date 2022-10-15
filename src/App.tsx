import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from 'config'
import { SearchBar, ProductCard, ProductList } from 'components'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App px-3 md:px-16  py-3">
        <SearchBar />
        <ProductList />
      </div>
    </QueryClientProvider>
  )
}

export default App
