import qs from 'qs'   

export async function keywords(){
  const url = `https://server.ideatofit.com/api/keywords`
  const fetchedData = await fetch(url)
const response = await fetchedData.json()
  const filteredData = response.data.map((item) => {
    return item
  });
}