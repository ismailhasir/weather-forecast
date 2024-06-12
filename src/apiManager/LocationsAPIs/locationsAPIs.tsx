const apiKey = "GE8xY3r4poA9t2423WBQYzLMJ75gnuTO"
const baseURL = "http://dataservice.accuweather.com/"

//Admin Area List
const fetchAdminAreaList = (countryCode:number) => {
  console.log(countryCode)
}
//Country List
const fetchCountryList = (regionCode:string) => {
console.log(regionCode)
}

//Region List
const fetchRegionList = async (): Promise<[]> => {
  const response = await fetch(`${baseURL}locations/v1/regions?apikey=${apiKey}&language=en-us`);
  console.log(response)
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

//Top Cities List
const fetchTopCitiesList = (group:number) => {
  console.log(group)
}
export {
  fetchAdminAreaList,
  fetchCountryList,
  fetchRegionList,
  fetchTopCitiesList};
