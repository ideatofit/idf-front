import qs from "qs";

export type wellnesshubProps = {
  tab1: {
    title: string;
    description: string;
    textonbutton: string;
    link: string;
    img1: {
      url: string;
      height: number;
      width: number;
    };
    img2: {
      url: string;
      height: number;
      width: number;
    };
    img3: {
      url: string;
      height: number;
      width: number;
    };
    img4: {
      url: string;
      height: number;
      width: number;
    };
    img5: {
      url: string;
      height: number;
      width: number;
    };
    link1: string
    link2: string
    link3: string
    link4: string
    link5: string
  };
  tab2: {
    redirectTo: string;
    img1: {
      url: string;
      height: number;
      width: number;
    };
    img2: {
      url: string;
      height: string;
      width: string;
    };
    img3: {
      url: string;
      height: string;
      width: string;
    };
    img4: {
      url: string;
      height: string;
      width: string;
    };
    link1: string
    link2: string
    link3: string
    link4: string
  };
  tab3: {
    redirectTo: string;
    img1: {
      url: string;
      height: string;
      width: string;
    };
    img2: {
      url: string;
      height: string;
      width: string;
    };
    img3: {
      url: string;
      height: string;
      width: string;
    };
    img4: {
      url: string;
      height: string;
      width: string;
    };
    link1: string
    link2: string
    link3: string
    link4: string
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
            height: number;
            width: number;
          };
        };
      };
      img2: {
        data: {
          attributes: {
            url: string;
            height: number;
            width: number;
          };
        };
      };
      img3: {
        data: {
          attributes: {
            url: string;
            height: number;
            width: number;
          };
        };
      };
      img4: {
        data: {
          attributes: {
            url: string;
            height: number;
            width: number;
          };
        };
      };
      img5: {
        data: {
          attributes: {
            url: string;
            height: number;
            width: number;
          };
        };
      };
      link1: string
      link2: string
      link3: string
      link4: string
      link5: string
    };
    tab2: {
      redirectTo: string;
      img1: {
        data: {
          attributes: {
            url: string;
            height: number;
            width: number;
          };
        };
      };
      img2: {
        data: {
          attributes: {
            url: string;
            height: string;
            width: string;
          };
        };
      };
      img3: {
        data: {
          attributes: {
            url: string;
            height: string;
            width: string;
          };
        };
      };
      img4: {
        data: {
          attributes: {
            url: string;
            height: string;
            width: string;
          };
        };
      };
      link1: string
      link2: string
      link3: string
      link4: string
    };
    tab3: {
      redirectTo: string;
      img1: {
        data: {
          attributes: {
            url: string;
            height: string;
            width: string;
          };
        };
      };
      img2: {
        data: {
          attributes: {
            url: string;
            height: string;
            width: string;
          };
        };
      };
      img3: {
        data: {
          attributes: {
            url: string;
            height: string;
            width: string;
          };
        };
      };
      img4: {
        data: {
          attributes: {
            url: string;
            height: string;
            width: string;
          };
        };
      };
      link1: string
      link2: string
      link3: string
      link4: string
    };
  };
};

export default async function getWellnesshubData() {
  const query = await qs.stringify({
    populate: {
      tab1: {
        populate: "*",
      },
      tab2: {
        populate: "*"
      },
      tab3: {
        populate: "*"
      },
    },
  });
  const url = await `https://server.ideatofit.com/api/wellnesshub?${query}`;
  const fetchedData = await fetch(url);
  const parsedData: { data: wellnesshubData } = await fetchedData.json();
  //   return parsedData
  const filteredData: wellnesshubProps = {
    tab1: {
      title: parsedData["data"]["attributes"]["tab1"]["title"],
      description: parsedData["data"]["attributes"]["tab1"]["description"],
      textonbutton: parsedData["data"]["attributes"]["tab1"]["textonbutton"],
      link: parsedData["data"]["attributes"]["tab1"]["link"],
      img1: {
        url: parsedData["data"]["attributes"]["tab1"]["img1"]["data"][
          "attributes"
        ]["url"],
        height:
          parsedData["data"]["attributes"]["tab1"]["img1"]["data"][
            "attributes"
          ]["height"],
        width:
          parsedData["data"]["attributes"]["tab1"]["img1"]["data"][
            "attributes"
          ]["width"],
      },
      img2: {
        url: parsedData["data"]["attributes"]["tab1"]["img2"]["data"][
          "attributes"
        ]["url"],
        height:
          parsedData["data"]["attributes"]["tab1"]["img2"]["data"][
            "attributes"
          ]["height"],
        width:
          parsedData["data"]["attributes"]["tab1"]["img2"]["data"][
            "attributes"
          ]["width"],
      },
      img3: {
        url: parsedData["data"]["attributes"]["tab1"]["img3"]["data"][
          "attributes"
        ]["url"],
        height:
          parsedData["data"]["attributes"]["tab1"]["img3"]["data"][
            "attributes"
          ]["height"],
        width:
          parsedData["data"]["attributes"]["tab1"]["img3"]["data"][
            "attributes"
          ]["width"],
      },
      img4: {
        url: parsedData["data"]["attributes"]["tab1"]["img4"]["data"][
          "attributes"
        ]["url"],
        height:
          parsedData["data"]["attributes"]["tab1"]["img4"]["data"][
            "attributes"
          ]["height"],
        width:
          parsedData["data"]["attributes"]["tab1"]["img4"]["data"][
            "attributes"
          ]["width"],
      },
      img5: {
        url: parsedData["data"]["attributes"]["tab1"]["img5"]["data"][
          "attributes"
        ]["url"],
        height:
          parsedData["data"]["attributes"]["tab1"]["img5"]["data"][
            "attributes"
          ]["height"],
        width:
          parsedData["data"]["attributes"]["tab1"]["img5"]["data"][
            "attributes"
          ]["width"],
      },
      link1:  parsedData['data']['attributes']['tab1']['link1'],
      link2:  parsedData['data']['attributes']['tab1']['link2'],
      link3:  parsedData['data']['attributes']['tab1']['link3'],
      link4:  parsedData['data']['attributes']['tab1']['link4'],
      link5:  parsedData['data']['attributes']['tab1']['link5'],
    },
    tab2: {
      redirectTo: parsedData['data']['attributes']['tab2']['redirectTo'],
      img1: {
            url: parsedData['data']['attributes']['tab2']['img1']['data']['attributes']['url'],
            height: parsedData['data']['attributes']['tab2']['img1']['data']['attributes']['height'],
            width: parsedData['data']['attributes']['tab2']['img1']['data']['attributes']['width']
      },
      img2: {
            url: parsedData['data']['attributes']['tab2']['img2']['data']['attributes']['url'],
            height: parsedData['data']['attributes']['tab2']['img2']['data']['attributes']['height'],
            width: parsedData['data']['attributes']['tab2']['img2']['data']['attributes']['width']
      },
      img3: {
            url: parsedData['data']['attributes']['tab2']['img3']['data']['attributes']['url'],
            height: parsedData['data']['attributes']['tab2']['img3']['data']['attributes']['height'],
            width: parsedData['data']['attributes']['tab2']['img3']['data']['attributes']['width']
      },
      img4: {
            url: parsedData['data']['attributes']['tab2']['img4']['data']['attributes']['url'],
            height: parsedData['data']['attributes']['tab2']['img4']['data']['attributes']['height'],
            width: parsedData['data']['attributes']['tab2']['img4']['data']['attributes']['width']
      },
      link1: parsedData['data']['attributes']['tab2']['link1'],
      link2: parsedData['data']['attributes']['tab2']['link2'],
      link3: parsedData['data']['attributes']['tab2']['link3'],
      link4: parsedData['data']['attributes']['tab2']['link4'],
    },
    tab3: {
      redirectTo: parsedData['data']['attributes']['tab3']['redirectTo'],
      img1:{
        url: parsedData['data']['attributes']['tab3']['img1']['data']['attributes']['url'],
        height: parsedData['data']['attributes']['tab3']['img1']['data']['attributes']['height'],
        width: parsedData['data']['attributes']['tab3']['img1']['data']['attributes']['width']
      },
      img2:{
        url: parsedData['data']['attributes']['tab3']['img2']['data']['attributes']['url'],
        height: parsedData['data']['attributes']['tab3']['img2']['data']['attributes']['height'],
        width: parsedData['data']['attributes']['tab3']['img2']['data']['attributes']['width']
      },
      img3:{
        url: parsedData['data']['attributes']['tab3']['img3']['data']['attributes']['url'],
        height: parsedData['data']['attributes']['tab3']['img3']['data']['attributes']['height'],
        width: parsedData['data']['attributes']['tab3']['img3']['data']['attributes']['width']
      },
      img4:{
        url: parsedData['data']['attributes']['tab3']['img4']['data']['attributes']['url'],
        height: parsedData['data']['attributes']['tab3']['img4']['data']['attributes']['height'],
        width: parsedData['data']['attributes']['tab3']['img4']['data']['attributes']['width']
      },
      link1: parsedData['data']['attributes']['tab3']['link1'],
      link2: parsedData['data']['attributes']['tab3']['link2'],
      link3: parsedData['data']['attributes']['tab3']['link3'],
      link4: parsedData['data']['attributes']['tab3']['link4']
    },
  };
  return filteredData;
}
