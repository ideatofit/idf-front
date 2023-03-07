import qs from "qs";

export type wellnesshubProps = {
  tab1: {
    title: string;
    description: string;
    textonbutton: string;
    link: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
  };
  tab2: {
    title: string
    link: string
    description: string
  };
  tab3: {
    title: string
    link: string
    description: string
  };
};

type wellnesshubData = {
  attributes: {
    tab1: {
      title: string;
      description: string;
      link: string;
      textonbutton: string;
      img1: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      img2: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      img3: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      img4: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      img5: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
    tab2: {},
    tab3: {}
  };
};

export default async function getWellnesshubData() {
  const query = await qs.stringify({
    populate: {
      tab1: {
        populate: "*",
      },
      tab2: true,
      tab3: true,
    },
  });
  const url = await `${process.env.PUBLIC_URL}/api/wellnesshub?${query}`;
  const fetchedData = await fetch(url);
  const parsedData:{data: wellnesshubData} = await fetchedData.json();
//   return parsedData
  const filteredData: wellnesshubProps = {
      tab1: {
          title: parsedData['data']['attributes']['tab1']['title'],
          description: parsedData['data']['attributes']['tab1']['description'],
          textonbutton: parsedData['data']['attributes']['tab1']['textonbutton'],
          link: parsedData['data']['attributes']['tab1']['link'],
          img1: parsedData['data']['attributes']['tab1']['img1']['data']['attributes']['url'],
          img2: parsedData['data']['attributes']['tab1']['img2']['data']['attributes']['url'],
          img3: parsedData['data']['attributes']['tab1']['img3']['data']['attributes']['url'],
          img4: parsedData['data']['attributes']['tab1']['img4']['data']['attributes']['url'],
          img5: parsedData['data']['attributes']['tab1']['img5']['data']['attributes']['url'],
      },
      tab2: {
        title: '',
        description: '',
        link: ''
      },
      tab3:  {
        title: '',
        description: '',
        link: ''
      },
  };
  return filteredData
}
