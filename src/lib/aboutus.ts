import qs from "qs";
import { AboutUs, AboutUsProps } from "@/types/aboutus";

export const getAboutUsData = async () => {
  const query = qs.stringify({
    populate: {
        aboutus: {
        populate: "image",
      },
    },
  });
  const url = `https://server.ideatofit.com/api/aboutus?${query}`;
  const fetchedData = await fetch(url);
  const parsedData: AboutUs = await fetchedData.json();
  const filteredData: AboutUsProps = parsedData["data"]["attributes"]["aboutus"].map(
    (data) => {
      return {
        text: data['text'],
        image: {
            url: data["image"]['data']['attributes']['url'],
            height: data["image"]['data']['attributes']['height'],
            width: data["image"]['data']['attributes']['width']
        }
      };
    }
  );
  return filteredData
};
