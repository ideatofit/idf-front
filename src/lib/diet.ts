import qs from "qs";
import formatDate from "./dateformatter";

export type RecipesProps = {
  recipes: {
    title: string;
    description: string;
    img: string;
    vegeterian: boolean;
    slug: string;
  }[];
};

type RecipesData = {
  data:{
  attributes: {
    title: string;
    description: string;
    slug: string;
    vegeterian: boolean;
    content: string
    publishedAt: string
    img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    categories: {
      data: {
        attributes: {
          recipes: {
            data: {
              attributes: {
                title: string;
                description: string;
                slug: string;
                publishedAt: string;
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
          };
        };
      }[];
    };
  };
}[]
};

// this function returns the whole list of recipes
export async function getDietData() {
  const query = qs.stringify({
    populate: "img",
  });
  const url = `${process.env.PUBLIC_URL}/api/recipes?${query}`;
  const fetchData = await fetch(url);
  const parsedData: RecipesData = await fetchData.json();
  console.log(parsedData)
  console.log(url)
  const filteredData: RecipesProps = {
    recipes: parsedData["data"].map((data) => {
      return {
        title: data["attributes"]["title"],
        description: data["attributes"]["description"],
        img: data["attributes"]["img"]["data"]["attributes"]["url"],
        vegeterian: data["attributes"]["vegeterian"],
        slug: data["attributes"]["slug"],
      };
    }),
  };
  return filteredData;
}


export type DietDataBySlug = {
  recipe:{
    title: string
    description: string
    slug: string
    img: string
    content: string
    date: string
    relations:{
      title: string
      description: string
      slug: string
      img: string
    }[]
  }
}

// this function only returns the data for a specific slug
export async function getDietDataBySlug(slug: string) {
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      img: true,
      categories: {
        populate: {
          recipes: {
            populate: "img",
          },
        },
      },
    },
  });

  const url = `${process.env.PUBLIC_URL}/api/recipes?${query}`;
  const fetchData = await fetch(url);
  const parsedData: RecipesData = await fetchData.json();
  const filteredData = {
    recipe:{
      title: parsedData['data'][0]['attributes']['title'],
      description: parsedData['data'][0]['attributes']['description'],
      img: parsedData['data'][0]['attributes']['img']['data']['attributes']['url'],
      slug: parsedData['data'][0]['attributes']['slug'],
      content: null,
      date: formatDate(parsedData['data'][0]['attributes']['publishedAt']),
      relations: parsedData['data'][0]['attributes']['categories']['data'].map((data)=>{
      /*
       * using for loop to return a object in the @relations array
       * [ ** caution: using map will led to arrays in individual property we dont want array like that we only want objects containing data of no matter of what category it is if in future wants relation of the specific category can be done using map ** ]
       */
        for (let i = 0; i < data['attributes']['recipes']['data'].length; i++){
          return{
            title: data['attributes']['recipes']['data'][i]['attributes']['title'],
            description: data['attributes']['recipes']['data'][i]['attributes']['description'],
            img: data['attributes']['recipes']['data'][i]['attributes']['img']['data']['attributes']['url'],
            slug: data['attributes']['recipes']['data'][i]['attributes']['slug'],
          }
        }
      })
    }
  }
  return filteredData
}
