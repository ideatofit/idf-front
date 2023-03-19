import qs from "qs";

export type SlideProps = {
  slide: {
    img: string;
    title: string;
    description: string;
    button: boolean;
    link: string;
    textonbutton: string;
    rank: number;
  }[];
};

type Data = {
  attributes: {
    title: string;
    description: string;
    button: boolean | null;
    link: string | null;
    textonbutton: string | null;
    rank: number;
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
    populate: "img"
  });
  const url = await `https://server.ideatofit.com/api/slides?${query}`;
  const slideData = await fetch(url);
  const parsedSlideData = await slideData.json();
  const filteredSlideData: SlideProps = {
    slide: parsedSlideData["data"].map((data: Data) => {
      return {
        img: data["attributes"]["img"]["data"][0]["attributes"]["url"],
        title: data["attributes"]["title"],
        description: data["attributes"]["description"],
        button: data['attributes']['button'] ?? false,
        link: data['attributes']['link'] ?? "",
        textonbutton: data['attributes']['textonbutton'] ?? "",
        rank: data['attributes']['rank'] ?? 0
      };
    }),
  };
  filteredSlideData.slide.sort((a, b) => a.rank - b.rank);
  return filteredSlideData;
}