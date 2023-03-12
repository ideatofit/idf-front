import qs from "qs";

export type FooterProps = {
  contact: {
    phone: number;
    gmail: string;
    socialmedia: {
      logo: string;
      url: string;
      name: string;
    }[];
  };
  footercontent: {
    title: string;
    content: {
      text: string;
      url: string;
    }[];
  }[];
};

type footerData = {
  attributes: {
    contact: {
      gmail: string;
      phone: number;
      socialmedia: {
        name: string;
        url: string;
        logo: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      }[];
    };
    otherfootercontent: {
      title: string;
      content: {
        text: string;
        url: string;
      }[];
    }[];
  };
};

export default async function getFooterData() {
  let query = await qs.stringify({
    populate: {
      contact: {
        populate: {
          socialmedia: {
            populate: "*",
          },
        },
      },
      otherfootercontent: {
        populate: "*",
      },
    },
  });
  const url = `${process.env.PUBLIC_URL}/api/footer?${query}`;
  const fetchedData = await fetch(url);
  const parsedData: { data: footerData } = await fetchedData.json();
  //   return parsedData;
  const filteredData: FooterProps = {
    contact: {
      phone: parsedData["data"]["attributes"]["contact"]["phone"],
      gmail: parsedData["data"]["attributes"]["contact"]["gmail"],
      socialmedia: parsedData["data"]["attributes"]["contact"][
        "socialmedia"
      ].map((data) => {
        return {
          name: data["name"],
          logo: data["logo"]["data"]["attributes"]["url"],
          url: data["url"],
        };
      }),
    },
    footercontent: parsedData["data"]["attributes"]["otherfootercontent"].map(
      (data) => {
        return {
          title: data["title"],
          content: data["content"].map((data) => {
            return {
              text: data["text"],
              url: data["url"] ?? '',
            };
          }),
        };
      }
    ),
  };
  return filteredData;
}
