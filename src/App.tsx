import { SearchBar } from 'components';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'config';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App px-3 md:px-16  py-3">
        <SearchBar />
      </div>
    </QueryClientProvider>
  );
}

export default App;
