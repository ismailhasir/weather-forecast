import { useQuery } from "@tanstack/react-query";
import { fetchRegionList } from "../apiManager/LocationsAPIs/locationsAPIs";

interface RegionData{
  ID: string;
  LocalizedName:string;
  EnglishName: string;
}

export const Regions = () => {
  const { data ,error, isLoading } = useQuery<RegionData[],Error>({queryKey:['regions'], queryFn:fetchRegionList});
                  
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
        {data && data.map((region:RegionData) => (
          <li key={region.ID}>{region.LocalizedName} - {region.ID}</li>
        ))}
      </ul>
    </div>
  );
};