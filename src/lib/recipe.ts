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
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      slug: string;
      vegeterian: boolean;
      content: string;
      publishedAt: string;
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
                id: number
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
      keywords:{
        data:{
          attributes:{
            keywords: string
          }
        }[]
      }
    };
  }[];
};

// this function returns the whole list of recipes
export async function getDietData() {
  const query = qs.stringify({
    populate: "img",
  });
  const url = `https://server.ideatofit.com/api/recipes?${query}`;
  const fetchData = await fetch(url);
  const parsedData: RecipesData = await fetchData.json();
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
  id: number;
  title: string;
  description: string;
  slug: string;
  img: string;
  content: string;
  date: string;
  relations: {
    id: number
    title: string;
    description: string;
    slug: string;
    img: string;
    publishedat: string
    vegeterian: boolean
  }[];
  keywords: string[]
};

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
      keywords: true,
      categories: {
        populate: {
          recipes: {
            populate: {
              img: true,
            },
          },
        },
      },
    },
  });

  const url = `https://server.ideatofit.com/api/recipes?${query}`;
  const fetchData = await fetch(url);
  const parsedData: RecipesData = await fetchData.json();
  const filteredData: DietDataBySlug = {
    id: parsedData["data"][0]["id"],
    title: parsedData["data"][0]["attributes"]["title"],
    description: parsedData["data"][0]["attributes"]["description"],
    img: parsedData["data"][0]["attributes"]["img"]["data"]["attributes"][
      "url"
    ],
    slug: parsedData["data"][0]["attributes"]["slug"],
    content: '',
    date: formatDate(parsedData["data"][0]["attributes"]["publishedAt"]),
    relations:  parsedData["data"][0]["attributes"]["categories"]["data"]
    .map((data) => {
      const relationsArray = [];
      for (
        let index = 0;
        index < data["attributes"]['recipes']["data"].length;
        index++
      ) {
        const recipe = data["attributes"]['recipes']["data"][index];
        if (recipe["attributes"]) {
          relationsArray.push({
            title: recipe["attributes"]["title"],
            description: recipe["attributes"]["description"],
            publishedat: formatDate(recipe["attributes"]["publishedAt"]),
            img: recipe["attributes"]["img"]["data"]["attributes"]["url"],
            slug: recipe["attributes"]["slug"],
            id: recipe['id'],
            vegeterian: recipe['attributes']['vegeterian']
          });
        }
      }
      return relationsArray;
    }).flat(),
    keywords: parsedData['data'][0]['attributes']['keywords']['data'].map((data)=>{
      return data['attributes']['keywords']
    })
  };
  return filteredData;
}


export async function sendDietComments(
  PostsId: number,
  content: string,
  session: any
) {
  const commentBody = {
    author: {
      id: (session?.user?.id),
      name: session?.user?.name,
      avatar: session?.user?.image,
    },
    content: content,
  };
  const url = `https://server.ideatofit.com/api/comments/api::recipe.recipe:${PostsId}`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(commentBody),
    });
    const parsedData = await res.json();
    return { request: "fullfilled", response: parsedData };
  } catch (err) {
    return { request: "unfulfilled" };
  }
}

type comments = {
  data: {
    id: number;
    author: {
      id: number;
      name: string;
      avatar: string;
    };
    content: string;
    createdat: string;
  }[];
};

export async function getDietComments(id: number) {
  const url = `https://server.ideatofit.com/api/comments/api::recipe.recipe:${id}/flat`;
  const fetchData = await fetch(url);
  const parsedData: comments = await fetchData.json();
  const filteredData = parsedData['data'].map((data)=>{
    return{
      id: data['author']['id'] || NaN,
      name: data['author']['name'] || '',
      avatar: data['author']['avatar'] || '',
      content: data['content'] || '',
      commentId: data['id'] || NaN
    }
  })
  return filteredData
}

export async function deleteDietComment(
  PostsId: number,
  session: any,
  commentId: number
) {
  const url = `https://server.ideatofit.com/api/comments/api::recipe.recipe:${PostsId}/comment/${commentId}?authorId=${session?.user?.id}`;
  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    });
    const parsedData = await res.json();
    return { request: "fullfilled", response: parsedData };
  } catch (err) {
    return { request: "unfulfilled" };
  }
}

export async function updateDietComment(
  PostsId: number,
  session: any,
  commentId: number,
  content: string
) {
  const url = `https://server.ideatofit.com/api/comments/api::recipe.recipe:${PostsId}/comment/${commentId}`;
  const payload = {
    author:{
      id: session?.user?.id
    },
    content: content
  }
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload)
    });
    const parsedData = await res.json();
    return { request: "fullfilled", response: parsedData };
  } catch (err) {
    return { request: "unfulfilled" };
  }
}