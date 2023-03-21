import qs from "qs";
import formatDate from "./dateformatter";

type PostsData = {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      slug: string;
      publishedAt: string;
      content: string;
      img: {
        data: {
          attributes: {
            url: string;
            name: string;
          };
        };
      };
      categories: {
        data: {
          id: number;
          attributes: {
            title: string;
            posts: {
              data: {
                id: number;
                attributes: {
                  title: string;
                  description: string;
                  slug: string;
                  publishedAt: string;
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
  }[];
};

export type PostsProps = {
  posts: {
    title: string;
    description: string;
    slug: string;
    img: string;
    alt: string;
    publisdedat: string;
  }[];
};

export async function getPostsData() {
  const query = await qs.stringify({
    populate: "img",
  });
  const url = await `https://server.ideatofit.com/api/posts?${query}`;
  const data = await fetch(url);
  const parsedData: PostsData = await data.json();
  const filteredData = {
    posts: parsedData["data"].map((data) => {
      return {
        id: data['id'],
        title: data["attributes"]["title"],
        description: data["attributes"]["description"],
        slug: data["attributes"]["slug"],
        img: data["attributes"]["img"]["data"]["attributes"]["url"],
        alt: data["attributes"]["img"]["data"]["attributes"]["name"],
        publisdedat: formatDate(data["attributes"]["publishedAt"]),
      };
    }),
  };
  return filteredData;
}

export type PostBySlug = {
  id: number;
  title: string;
  description: string;
  publishedat: string;
  content: string;
  img: string;
  alt: string;
  relations: {
    id: number;
    title: string;
    description: string;
    img: string;
    slug: string;
    publishedat: string;
  }[];
};

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

export async function getPostsBySlug(slug: string) {
  const query = await qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      img: true,
      categories: {
        populate: {
          posts: {
            populate: "img",
          },
        },
      },
    },
  });
  const url = await `https://server.ideatofit.com/api/posts?${query}`;
  const fetchData = await fetch(url);
  const parsedData: PostsData = await fetchData.json();
  const filteredData: PostBySlug = {
    id: parsedData["data"][0]["id"],
    title: parsedData["data"][0]["attributes"]["title"],
    description: parsedData["data"][0]["attributes"]["description"],
    publishedat: formatDate(parsedData["data"][0]["attributes"]["publishedAt"]),
    content: parsedData["data"][0]["attributes"]["content"],
    img: parsedData["data"][0]["attributes"]["img"]["data"]["attributes"][
      "url"
    ],
    alt: parsedData["data"][0]["attributes"]["img"]["data"]["attributes"][
      "name"
    ],
    relations: parsedData["data"][0]["attributes"]["categories"]["data"]
      .map((data) => {
        const relationsArray = [];
        for (
          let index = 0;
          index < data["attributes"]["posts"]["data"].length;
          index++
        ) {
          const post = data["attributes"]["posts"]["data"][index];
          if (post["attributes"]) {
            relationsArray.push({
              title: post["attributes"]["title"],
              description: post["attributes"]["description"],
              publishedat: formatDate(post["attributes"]["publishedAt"]),
              img: post["attributes"]["img"]["data"]["attributes"]["url"],
              slug: post["attributes"]["slug"],
              id: post["id"],
            });
          }
        }
        return relationsArray;
      }).flat(),
    }
  return filteredData;
}

export async function sendPostsComments(
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
  console.log(session)
  const url = `https://server.ideatofit.com/api/comments/api::post.post:${PostsId}`;
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
    console.log(parsedData);
    console.log(JSON.stringify(commentBody));
    return { request: "fullfilled", response: parsedData };
  } catch (err) {
    return { request: "unfulfilled" };
  }
}

export async function editPostsComments(
  PostsId: number,
  content: string,
  CommentId: number
) {
  const commentBody = {
    content: content,
  };
  const url = `${process.env.PUBLIC_ULR}/api/comments/api::post.post/${PostsId}/comment/${CommentId}`;
  try {
    const res = await fetch(url, {
      method: "Post",
      body: JSON.stringify(commentBody),
    });
    const parsedData = await res.json();
    return { request: "fullfilled", response: parsedData };
  } catch (err) {
    return { request: "unfulfilled" };
  }
}

export async function getPostComments(id: number) {
  const url = `https://server.ideatofit.com/api/comments/api::post.post:${id}/flat`;
  const fetchData = await fetch(url);
  const parsedData: comments = await fetchData.json();
  const filteredData = parsedData['data'].map((data)=>{
    return{
      id: data['author']['id'],
      name: data['author']['name'],
      avatar: data['author']['avatar'] ?? '',
      content: data['content'],
      commentId: data['id']         
    }
  })
  return filteredData
}

export async function deltePostComment(
  PostsId: number,
  session: any,
  commentId: number
) {
  const url = `https://server.ideatofit.com/api/comments/api::post.post:${PostsId}/comment/${commentId}?authorId=${session?.user?.id}`;
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

export async function updateComment(
  PostsId: number,
  session: any,
  commentId: number,
  content: string
) {
  const url = `https://server.ideatofit.com/api/comments/api::post.post:${PostsId}/comment/${commentId}`;
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