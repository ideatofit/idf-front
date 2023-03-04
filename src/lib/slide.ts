import qs from "qs";

type FilteredSlideData = {
  slide: [img: string, title: string, description: string];
};

type Data = {
  attributes: {
    title: string;
    description: string;
    img: {
      data: [
        {
          attributes: {
            url: string;
          };
        }
      ];
    };
  };
};

export async function getSlideData() {
  let query: string = await qs.stringify({
    populate: "img",
  });
  const url = await `${process.env.PUBLIC_URL}/api/slides?${query}`;
  const slideData = await fetch(url);
  const parsedSlideData = await slideData.json();
  const filteredSlideData: FilteredSlideData = await {
    slide: parsedSlideData["data"].map((data: Data) => {
      return {
        img: data["attributes"]["img"]["data"][0]["attributes"]["url"],
        title: data["attributes"]["title"],
        description: data["attributes"]["description"],
      };
    }),
  };
  return filteredSlideData;
}
