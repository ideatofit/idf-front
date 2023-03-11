import qs from "qs";

export type RecipesProps = {
  recipes: {
    title: string;
    description: string;
    img: string;
    vegeterian: boolean;
    slug: string
  }[]
};

type RecipesData = {
  attributes: {
    title: string;
    description: string;
    slug: string;
    vegeterian: boolean;
    img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}[];


// find many
export async function getDietData() {
  const query = await qs.stringify({
    populate: "*",
  });
  const url = await `${process.env.PUBLIC_URL}/api/recipes?${query}`;
  const fetchData = await fetch(url);
  const parsedData: { data: RecipesData } = await fetchData.json();
  const filteredData: RecipesProps  = {
    recipes: parsedData["data"].map((data) => {
      return {
        title: data["attributes"]["title"],
        description: data["attributes"]["description"],
        img: data["attributes"]["img"]["data"]["attributes"]["url"],
        vegeterian: data["attributes"]["vegeterian"],
        slug: data['attributes']['slug']
      };
    }),
  };
  return filteredData;
}

// find one
export async function getDietDataById(slug: string){
  const query = await qs.stringify({
    filters: {
      slug:{
        $eq: slug
      }
    }
  });
  const url = await `${process.env.PUBLIC_URL}/api/recipes?${query}`;
  const fetchData = await fetch(url);
  const parsedData = await fetchData.json();
  return parsedData
}

