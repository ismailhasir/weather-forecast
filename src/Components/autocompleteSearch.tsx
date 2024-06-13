import { useQuery } from "@tanstack/react-query";
import { fetchAutoComplete } from "../apiManager/LocationsAPIs/locationsAPIs";
import { useState } from "react";

interface AutocompleteSearch{
  Version: number;
  Key:string;
  Type: string;
  Rank: number;
  LocalizedName: string;
}

export const AutoCompleteSearch = () => {
  const [searchInput,setSearchInput] = useState("")

  const { data ,error } = useQuery<AutocompleteSearch[]>({queryKey:['autoCompleteSearch',searchInput], queryFn:fetchAutoComplete});
                  
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Search</h1>
      <input type="text" placeholder="Please enter city name" onChange={(e) => {
        e.preventDefault();
        setSearchInput((e.target as HTMLInputElement).value)} 
      }
        />
      <ul>
        {data && data.map((searchItem:AutocompleteSearch) => (
          <li key={searchItem.Key}>{searchItem.LocalizedName}</li>
        ))}
      </ul>
    </div>
  );}