import qs from "qs";
import formatDate from "./dateformatter";
import { RecipesData } from "@/types/recipe";
import { RecipesProps } from "@/types/recipe";
import { RecipeData } from "@/types/recipe";
import { Comment } from "@/types/comment";

// this function returns the whole list of recipes
export async function getDietData() {
  const query = qs.stringify({
    populate: "image",
  });
  const url = `https://server.ideatofit.com/api/recipes?${query}`;
  const fetchData = await fetch(url);
  const parsedData: RecipesData = await fetchData.json();
  const filteredData: RecipesProps = {
    recipes: parsedData["data"].map((data) => {
      return {
        title: data["attributes"]["title"],
        description: data["attributes"]["description"],
        img: data["attributes"]["image"]["data"]["attributes"]["url"],
        vegeterian: true,
        slug: data["attributes"]["slug"],
      };
    }),
  };
  return filteredData;
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
      image: true,
      keywords: true,
      video: {
        populate: "*",
      },
      instructions: {
        populate: "*",
      },
      ingredients: true,
      categories: {
        populate: {
          recipes: {
            populate: "image",
          },
        },
      },
    },
  });

  const url = `https://server.ideatofit.com/api/recipes?${query}`;
  const fetchData = await fetch(url);
  const parsedData: RecipesData = await fetchData.json();
  const filteredData: RecipeData = {
    id: parsedData["data"][0]["id"],
    title: parsedData["data"][0]["attributes"]["title"],
    description: parsedData["data"][0]["attributes"]["description"],
    img: parsedData["data"][0]["attributes"]["image"]["data"]["attributes"][
      "url"
    ],
    slug: parsedData["data"][0]["attributes"]["slug"],
    content: parsedData["data"][0]["attributes"]["content"],
    date: formatDate(parsedData["data"][0]["attributes"]["publishedAt"]),
    author: parsedData["data"][0]["attributes"]["authorname"],
    preptime: `PT${parsedData["data"][0]["attributes"]["prepTime"]}M`,
    cooktime: `PT${parsedData["data"][0]["attributes"]["cookTime"]}M`,
    totaltime: `PT${parsedData["data"][0]["attributes"]["totalTime"]}M`,
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
        return {
          name: data["name"],
          text: data["text"],
          url: data["url"],
          img: data?.img?.data?.attributes?.url ?? '',
        };
      }
    ),
    ...(parsedData?.data[0]?.attributes?.video
      ? {
          video: {
            name: parsedData["data"][0]["attributes"]["video"]["name"],
            description:
              parsedData["data"][0]["attributes"]["video"]["description"],
            thumbnailUrl:
              parsedData["data"][0]["attributes"]["video"]["thumbnailurl"],
            duration: `PT${parsedData["data"][0]["attributes"]["video"]["duration"]}M`,
            contenturl:
              parsedData["data"][0]["attributes"]["video"]["contenturl"],
            embedurl: parsedData["data"][0]["attributes"]["video"]["embedurl"],
            uploaddate: parsedData["data"][0]["attributes"]["publishedAt"],
            haspart: parsedData["data"][0]["attributes"]["video"][
              "hasparts"
            ].map((data) => {
              return {
                "@type": data["type"],
                name: data["name"],
                startoffset: null,
                endoffset: null,
                url: data["url"],
              };
            }),
            watchcount: null,
            publication: {
              "@type": "BroadcastEvent",
              islivebroadcast:
                parsedData["data"][0]["attributes"]["video"]["publication"][
                  "islivebroadcast"
                ],
              startdate: null,
              enddate: null,
            },
          },
        }
      : {}),
    relations: parsedData["data"][0]["attributes"]["categories"]["data"]
      .map((data) => {
        const relationsArray = [];
        for (
          let index = 0;
          index < data["attributes"]["recipes"]["data"].length;
          index++
        ) {
          const recipe = data["attributes"]["recipes"]["data"][index];
          if (recipe["attributes"]) {
            relationsArray.push({
              title: recipe["attributes"]["title"],
              description: recipe["attributes"]["description"],
              publishedat: formatDate(recipe["attributes"]["publishedAt"]),
              img: recipe["attributes"]["image"]["data"]["attributes"]["url"],
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
    publishedAt: parsedData["data"][0]["attributes"]["publishedAt"],
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

export async function getDietComments(id: number) {
  const url = `https://server.ideatofit.com/api/comments/api::recipe.recipe:${id}/flat`;
  const fetchData = await fetch(url);
  const parsedData: Comment = await fetchData.json();
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
