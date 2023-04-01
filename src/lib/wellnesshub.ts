import qs from "qs";

export type wellnesshubProps = {
  tab1: {
    title: string;
    description: string;
    textonbutton: string;
    link: string;
    img1:{
      url: string
      height: number
      width: number
    }
    img2:{
      url: string
      height: number
      width: number
    }
    img3:{
      url: string
      height: number
      width: number
    }
    img4:{
      url: string
      height: number
      width: number
    }
    img5:{
      url: string
      height: number
      width: number
    }
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
            height: number
            width: number
          };
        };
      };
      img2: {
        data: {
          attributes: {
            url: string;
            height: number
            width: number
          };
        };
      };
      img3: {
        data: {
          attributes: {
            url: string;
            height: number
            width: number
          };
        };
      };
      img4: {
        data: {
          attributes: {
            url: string;
            height: number
            width: number
          };
        };
      };
      img5: {
        data: {
          attributes: {
            url: string;
            height: number
            width: number
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
  const url = await `https://server.ideatofit.com/api/wellnesshub?${query}`;
  const fetchedData = await fetch(url);
  const parsedData:{data: wellnesshubData} = await fetchedData.json();
//   return parsedData
  const filteredData: wellnesshubProps = {
      tab1: {
          title: parsedData['data']['attributes']['tab1']['title'],
          description: parsedData['data']['attributes']['tab1']['description'],
          textonbutton: parsedData['data']['attributes']['tab1']['textonbutton'],
          link: parsedData['data']['attributes']['tab1']['link'],
          img1: {
            url: parsedData['data']['attributes']['tab1']['img1']['data']['attributes']['url'],
            height: parsedData['data']['attributes']['tab1']['img1']['data']['attributes']['height'],
            width: parsedData['data']['attributes']['tab1']['img1']['data']['attributes']['width'],
          },
          img2: {
            url: parsedData['data']['attributes']['tab1']['img2']['data']['attributes']['url'],
            height: parsedData['data']['attributes']['tab1']['img2']['data']['attributes']['height'],
            width: parsedData['data']['attributes']['tab1']['img2']['data']['attributes']['width'],
          },
          img3: {
            url: parsedData['data']['attributes']['tab1']['img3']['data']['attributes']['url'],
            height: parsedData['data']['attributes']['tab1']['img3']['data']['attributes']['height'],
            width: parsedData['data']['attributes']['tab1']['img3']['data']['attributes']['width'],
          },
          img4: {
            url: parsedData['data']['attributes']['tab1']['img4']['data']['attributes']['url'],
            height: parsedData['data']['attributes']['tab1']['img4']['data']['attributes']['height'],
            width: parsedData['data']['attributes']['tab1']['img4']['data']['attributes']['width'],
          },
          img5: {
            url: parsedData['data']['attributes']['tab1']['img5']['data']['attributes']['url'],
            height: parsedData['data']['attributes']['tab1']['img5']['data']['attributes']['height'],
            width: parsedData['data']['attributes']['tab1']['img5']['data']['attributes']['width'],
          }
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
