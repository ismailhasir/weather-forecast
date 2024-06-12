import './App.css'
import {QueryClient,QueryClientProvider,useQuery} from '@tanstack/react-query' 
import {fetchRegionList} from "./apiManager/LocationsAPIs/locationsAPIs" 


const queryClient = new QueryClient();

const App = () =>  {

  return (
    <QueryClientProvider client={queryClient}>
    <Regions/>
    </QueryClientProvider>
  )
}

interface Data{
  ID: string;
  LocalizedName:string;
  EnglishName: string;
}


// const fetchRegionList = async (): Promise<[]> => {
//   const response = await fetch('http://dataservice.accuweather.com/locations/v1/regions?apikey=GE8xY3r4poA9t2423WBQYzLMJ75gnuTO&language=en-us');
//   console.log(response)
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

const Regions = () => {
  const { data ,error, isLoading } = useQuery<Data[],Error>({queryKey:['regions'], queryFn:fetchRegionList});
                  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Regions</h1>
      <ul>
        {data && data.map((region:Data) => (
          <li key={region.ID}>{region.LocalizedName} - {region.ID}</li>
        ))}
      </ul>
    </div>
  );
};


export default App
