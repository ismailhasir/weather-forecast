const apiKey = "GE8xY3r4poA9t2423WBQYzLMJ75gnuTO"
const baseURL = "http://dataservice.accuweather.com/"


//Auto-complete
const fetchAutoComplete = async ({queryKey} ) => {
  const searchText = queryKey[1]
  const response = await fetch(`${baseURL}locations/v1/cities/autocomplete?apikey=${apiKey}&q=${searchText}&language=en-us`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};



//Region List
const fetchRegionList = async (): Promise<[]> => {
  const response = await fetch(`${baseURL}locations/v1/regions?apikey=${apiKey}&language=en-us`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};


export {
  fetchAutoComplete,
  fetchRegionList,
};
