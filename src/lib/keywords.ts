import qs from "qs";

type keywordsData = {
  data: {
    attributes: {
      keywords: string;
    };
  }[];
};

type keywordsProps = string[];

export async function getkeywords(): Promise<keywordsProps> {
  const url = `https://server.ideatofit.com/api/keywords`;
  const fetchedData = await fetch(url);
  const response: keywordsData = await fetchedData.json();
  const filteredData: keywordsProps = response.data.map((data) => {
    return data["attributes"]["keywords"];
  });
  return filteredData;
}