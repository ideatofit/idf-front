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
      description: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      recipeCategory: string;
      recipeCuisine: string;
      cookTime: string;
      prepTime: string;
      totalTime: string;
      title: string;
      slug: string;
      content: string;
      authorname: string;
      yeild: number;
      calories: number;
      vegeterian: true;
      image: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: null | string;
            caption: null | string;
            width: number;
            height: number;
            formats: {
              thumbnail: {
                name: string;
                path: null;
                size: number;
                width: number;
                height: number;
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                };
              };
            };
            size: number;
            url: string;
            previewUrl: null;
            createdAt: "2023-03-11T03:08:53.712Z";
            updatedAt: "2023-03-24T18:41:28.609Z";
          };
        };
      };
      keywords: {
        data: [
          {
            id: number;
            attributes: {
              keywords: string;
              createdAt: string;
              updatedAt: string;
              publishedAt: string;
            };
          }
        ];
      };
      video: {
        id: number;
        name: string;
        description: string;
        contenturl: string;
        embedurl: string;
        duration: number;
        thumbnailurl: string;
        hasparts: {
              type: string;
              name: string;
              startoffset: number;
              url: string;
          }[];
        watchcount: number;
        publication: {
          "@type": "BroadcastEvent";
          islivebroadcast: boolean;
          startdate: string;
          enddate: string;
        };
      };
      instructions: {
        id: number;
        name: string;
        text: string;
        url: string;
        image: {
          data:{
            attributes:{
              url: string
              height: number
              width: number
            }
          }
        }
      }[];
      ingredients: {
        id: number;
        text: string;
      }[];
      categories: {
        data: {
          id: number;
          attributes: {
            recipes: {
              data: {
                id: number;
                attributes: {
                  title: string;
                  description: string;
                  vegeterian: true;
                  image: {
                    data: {
                      attributes: {
                        url: string;
                      };
                    };
                  };
                  publishedAt: string;
                  slug: string;
                };
              }[];
            };
            category: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          };
        }[];
      };
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
        img: '',
        vegeterian: true,
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
  author: string;
  preptime: string;
  cooktime: string;
  totaltime: string;
  yields: string;
  recipeCategory: string;
  cuisine: string;
  calories: number;
  images: string[];
  ingredients: string[];
  instructions: {
    name: string;
    text: string;
    url: string;
  }[];
  // aggregateRating: {
  //   ratingValue: string
  //   ratingCount: string
  // }
  video: {
    name: string;
    description: string;
    contenturl: string;
    embedurl: string;
    uploaddate: string;
    duration: string;
    thumbnailurls: string[];
    haspart: {
      "@type": string;
      name: string;
      startoffset: number | null;
      url: string;
    }[];
    watchcount: number | null;
    publication: {
      "@type": "BroadcastEvent";
      islivebroadcast: boolean;
      startdate: string | null;
      enddate: string | null;
    };
  };
  publishedAt: string
  relations: {
    id: number;
    title: string;
    description: string;
    slug: string;
    img: string;
    publishedat: string;
    vegeterian: boolean;
  }[];
  keywords: string[];
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
      image: true,
      keywords: true,
      video: {
        populate: "*"
      },
      instructions: true,
      ingredients: true,
      categories: {
        populate: {
          recipes: {
            populate: "image"
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
    img: parsedData["data"][0]["attributes"]["image"]["data"]["attributes"]["url"],
    slug: parsedData["data"][0]["attributes"]["slug"],
    content: parsedData['data'][0]['attributes']['content'],
    date: formatDate(parsedData["data"][0]["attributes"]["publishedAt"]),
    author: parsedData["data"][0]["attributes"]["authorname"],
    preptime: parsedData["data"][0]["attributes"]["prepTime"],
    cooktime: parsedData["data"][0]["attributes"]["cookTime"],
    totaltime: parsedData["data"][0]["attributes"]["totalTime"],
    yields: parsedData["data"][0]["attributes"]["yeild"].toString(),
    recipeCategory: parsedData["data"][0]["attributes"]["recipeCategory"],
    cuisine: parsedData["data"][0]["attributes"]["recipeCuisine"],
    images: [
      parsedData["data"][0]["attributes"]["image"]["data"]["attributes"]["url"],
    ],
    calories: parsedData["data"][0]["attributes"]["calories"],
    ingredients: parsedData["data"][0]["attributes"]["ingredients"].map(
      (data) => data["text"]
    ),
    instructions: parsedData["data"][0]["attributes"]["instructions"].map(
      (data) => {
        return { name: data["name"], text: data["text"], url: data["url"] };
      }
    ),
    video: {
      name: parsedData["data"][0]["attributes"]["video"]["name"],
      description: parsedData["data"][0]["attributes"]["video"]["description"],
      duration: parsedData["data"][0]["attributes"]["video"]["duration"].toString(),
      contenturl: parsedData["data"][0]["attributes"]["video"]["contenturl"],
      embedurl: parsedData["data"][0]["attributes"]["video"]["embedurl"],
      uploaddate: parsedData["data"][0]["attributes"]["publishedAt"],
      thumbnailurls: [
        parsedData["data"][0]["attributes"]["video"]["thumbnailurl"],
      ],
      haspart: parsedData["data"][0]["attributes"]["video"]["hasparts"].map((data) => {
        return {
          "@type": data["type"],
          name: data["name"],
          startoffset: null,
          url: data["url"],
        };
      }),
      watchcount: null,
      publication: {
        "@type": "BroadcastEvent",
        islivebroadcast: parsedData['data'][0]['attributes']['video']['publication']['islivebroadcast'],
        startdate: null,
        enddate: null
      }
    },
    relations: parsedData["data"][0]["attributes"]["categories"]["data"]
      .map((data) => {
        const relationsArray = [];
        for (let index = 0; index < data["attributes"]["recipes"]["data"].length; index++) {
          const recipe = data["attributes"]["recipes"]["data"][index];
          if (recipe["attributes"]) {
            relationsArray.push({
              title: recipe["attributes"]["title"],
              description: recipe["attributes"]["description"],
              publishedat: formatDate(recipe["attributes"]["publishedAt"]),
              img: recipe['attributes']['image']['data']['attributes']['url'],
              slug: recipe["attributes"]["slug"],
              id: recipe["id"],
              vegeterian: true,
            });
          }
        }
        return relationsArray;
      })
      .flat(),
    keywords: parsedData["data"][0]["attributes"]["keywords"]["data"].map(
      (data) => {
        return data["attributes"]["keywords"];
      }
    ),
    publishedAt: parsedData['data'][0]['attributes']['publishedAt']
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
      id: session?.user?.id,
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
        Accept: "application/json",
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
  const filteredData = parsedData["data"].map((data) => {
    return {
      id: data["author"]["id"] || NaN,
      name: data["author"]["name"] || "",
      avatar: data["author"]["avatar"] || "",
      content: data["content"] || "",
      commentId: data["id"] || NaN,
    };
  });
  return filteredData;
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
        Accept: "application/json",
      },
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
    author: {
      id: session?.user?.id,
    },
    content: content,
  };
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    const parsedData = await res.json();
    return { request: "fullfilled", response: parsedData };
  } catch (err) {
    return { request: "unfulfilled" };
  }
}
