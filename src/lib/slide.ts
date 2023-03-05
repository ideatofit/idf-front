import qs from "qs";

export type SlideProps = {
  slide: {
    img: string;
    title: string;
    description: string;
    button: boolean
    link: string
    textonbutton: string
  }[];
};

type Data = {
  attributes: {
    title: string;
    description: string;
    button: boolean | null
    link: string | null
    textonbutton: string | null
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
  const filteredSlideData: SlideProps = await {
    slide: parsedSlideData["data"].map((data: Data) => {
      return {
        img: data["attributes"]["img"]["data"][0]["attributes"]["url"],
        title: data["attributes"]["title"],
        description: data["attributes"]["description"],
        button: data['attributes']['button'] ?? false,
        link: data['attributes']['link'] ?? "",
        textonbutton: data['attributes']['textonbutton'] ?? ""
      };
    }),
  };
  return filteredSlideData;
}
