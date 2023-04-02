import qs from "qs";
import { StoreTypes } from "@/types/store";
import { StoreProps } from "@/types/store";

export default async function getStoreData() {
  const query = qs.stringify({
    populate: {
      coverImage: true,
      sections: {
        populate: {
          img: true,
          Storeproducts: {
            populate: {
              products: {
                populate: {
                  img: true,
                  affiliates: {
                    populate: true,
                  },
                },
              },
            },
          },
        },
      },
      slides:{
        populate: "img"
      }
    },
  });
  console.log(query)
  let url = `https://server.ideatofit.com/api/store?${query}`;
  let fetchedProducts = await fetch(url);
  let parsedProductsData: StoreTypes = await fetchedProducts.json();

  const filteredData: StoreProps = {
    banner: {
      title: parsedProductsData["data"]["attributes"]["title"],
      button: parsedProductsData["data"]["attributes"]["button"],
      textonbutton: parsedProductsData["data"]["attributes"]["textonbutton"],
      target: parsedProductsData["data"]["attributes"]["redirectTo"],
      coverimage: parsedProductsData["data"]["attributes"]["coverImage"]["data"]["attributes"]["url"],
      alt: parsedProductsData["data"]["attributes"]["coverImage"]["data"]["attributes"]["alternativeText"] ?? "",
      height: parsedProductsData["data"]["attributes"]["coverImage"]["data"]["attributes"]["height"],
      width: parsedProductsData["data"]["attributes"]["coverImage"]["data"]["attributes"]["width"],
    },
    sections: parsedProductsData["data"]["attributes"]["sections"].map(
      (data) => {
        return {
          title: data["title"],
          img: {
            url: data['img']['data']['attributes']['url'],
            height: data['img']['data']['attributes']['height'],
            width: data['img']['data']['attributes']['width']
          },
          'min-price': Math.min(...(data['Storeproducts']['products']['data'].map((data)=> data['attributes']['price']))),
          products: data["Storeproducts"]["products"]["data"].map((data) => {
            return {
              name: data["attributes"]["title"],
              price: data["attributes"]["price"],
              affiliate: data["attributes"]["affiliates"].map((data) => {
                return {
                  name: data["name"],
                  link: data["link"],
                };
              }),
              img: data["attributes"]["img"]["data"]["attributes"]["url"],
              stars: data["attributes"]["stars"],
            };
          }),
        };
      }
    ),
    slides: parsedProductsData['data']['attributes']['slides'].map((data)=>{
      return {
        link: data['link'],
        img: data['img']['data']['attributes']
      }
    })
  };
  return filteredData;
}
