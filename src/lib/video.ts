import qs from "qs";

type VideoData = {
    data:{
        attributes:{
            iframe: string | null
        }
    }
}

export async function getVideo() {
  const url = `https://server.ideatofit.com/api/video`;
  const fetchedData = await fetch(url);
  const response: VideoData = await fetchedData.json();
  const filteredData: string = response?.data?.attributes?.iframe ?? ''
  return filteredData
}
