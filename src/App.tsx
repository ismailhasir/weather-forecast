import './App.css'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query' 
import { AutoCompleteSearch } from './Components/autocompleteSearch';

const queryClient = new QueryClient();

const App = () =>  {

  return (
    <QueryClientProvider client={queryClient}>
       <AutoCompleteSearch/>
    </QueryClientProvider>
  )
}

export default App
