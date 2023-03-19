import qs from "qs";

export type TransformationProps = {
  upperImage:{
    img: string[],
    speed: number
  },
  lowerImage:{
    img: string[],
    speed: number
  }
}

export type TransformationData = {
  attributes: {
    speed: number;
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
}[];

export default async function getTransformationData() {
  const query = qs.stringify({
    populate: "*",  
  });
  try {
    let url = await `https://server.ideatofit.com/api/transformations?${query}`;
    let fetchedTransformationData = await fetch(url);
    let parsedTransformationData: {data: TransformationData} = await fetchedTransformationData.json();
    const filteredTransformationData: TransformationProps = {
      upperImage: {
        img: parsedTransformationData['data'][0]['attributes']['img']['data'].map((data)=>{
          return data['attributes']['url']
        }),
        speed: parsedTransformationData['data'][0]['attributes']['speed']
      },
      lowerImage: {
        img: parsedTransformationData['data'][1]['attributes']['img']['data'].map((data)=>{
          return data['attributes']['url']
        }),
        speed: parsedTransformationData['data'][1]['attributes']['speed']
      }
    }
    return filteredTransformationData;
  } catch (err) {
    console.error(err);
  }
}
