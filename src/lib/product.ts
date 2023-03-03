import qs from "qs";

type Data = {
  attributes: {
    category: string;
    img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    products: {
      data: [
        {
          attributes: {
            title: string;
            price: number;
            stars: number;
            affiliates: {};
            slug: string;
            img: {
              data: {
                attributes: {
                  url: string;
                };
              };
            };
          };
        }
      ];
    };
  };
};

export type ProductsProps = {
  categories: [
    {
      title: string;
      products: [
        {
          title: string;
          slug: string;
          stars: number;
          price: number;
          img: string;
          affiliates: {};
        }
      ];
    }
  ];
};

export default async function getProducts() {
  const query: string = qs.stringify({
    populate: {
      products: {
        populate: "img",
      },
      img: true,
    },
  });
  let url = await `https://server.ideatofit.com/api/categories?${query}`;
  let fetchedProducts = await fetch(url);
  let parsedProductsData: { data: [] } = await fetchedProducts.json();
  const filteredProductsData = await {
    categories: parsedProductsData["data"].map((data: Data) => {
      return {
        title: data["attributes"]["category"],
        products: data["attributes"]["products"]["data"].map((products) => {
          return {
            title: products["attributes"]["title"],
            slug: products["attributes"]["slug"],
            stars: products["attributes"]["stars"],
            price: products["attributes"]["price"],
            img: `https://server.ideatofit.com${products["attributes"]["img"]["data"]["attributes"]["url"]}`,
            affiliates: products["attributes"]["affiliates"],
          };
        }),
      };
    }),
  };
  return filteredProductsData;
}
