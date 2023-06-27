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
      slides: {
        populate: "img",
      },
    },
  });

  let url = `https://server.ideatofit.com/api/store?${query}`;
  let fetchedProducts = await fetch(url);
  let parsedProductsData: StoreTypes = await fetchedProducts.json();

  const filteredData: StoreProps = {
    banner: {
      title: parsedProductsData?.data?.attributes?.title ?? '',
      button: parsedProductsData?.data?.attributes?.button ?? '',
      textonbutton: parsedProductsData?.data?.attributes?.textonbutton ?? '',
      target: parsedProductsData?.data?.attributes?.redirectTo ?? '',
      coverimage:
        parsedProductsData?.data?.attributes?.coverImage?.data
          ?.attributes?.url ?? '',
      alt:
        parsedProductsData?.data?.attributes?.coverImage?.data
          ?.attributes?.alternativeText ?? "",
      height:
        parsedProductsData?.data?.attributes?.coverImage?.data
          ?.attributes?.height ?? 0,
      width:
        parsedProductsData?.data?.attributes?.coverImage?.data
          ?.attributes?.width ?? 0,
    },
    sections: parsedProductsData.data.attributes.sections.map(
      (data) => {
        const minPrice = Math.min(...data.Storeproducts.flatMap((storeProduct) => storeProduct.products.data.map((product) => product.attributes.price)));
        return {
          title: data.title,
          img: {
            url: data.img.data.attributes.url,
            height:data.img.data.attributes.height,
            width:data.img.data.attributes.width,
          },
          'min-price': minPrice,
          "sub-category": data.Storeproducts.map((data) => {
            return {
              category:data.category,
              products:data.products.data.map(({ attributes }) => {
                return {
                  name: attributes.title,
                  price: attributes.price,
                  affiliate: attributes.affiliates.map((data) => {
                    return {
                      name:data.name,
                      link:data.link,
                    };
                  }),
                  img: attributes.img.data.attributes.url,
                  stars: attributes.stars,
                };
              }),
            };
          }),
        };
      }
    ),
    slides: parsedProductsData.data.attributes.slides.map((data) => {
      return {
        link:data.link,
        img:data.img.data.attributes,
      };
    }),
  };
  return filteredData;
}
