import qs from "qs";

type PostsData = {
  data: {
    attributes: {
      title: string;
      description: string;
      slug: string;
      publishedAt: string;
      img: {
        data: {
          attributes: {
            url: string;
            name: string;
          };
        };
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

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formattedDate = `${
    monthNames[date.getMonth()]
  } ${date.getDate()} , ${date.getFullYear()}`;
  return formattedDate;
}

export async function getPostsData() {
  const query = await qs.stringify({
    populate: "img",
  });
  const url = await `${process.env.PUBLIC_URL}/api/posts?${query}`;
  const data = await fetch(url);
  const parsedData: PostsData = await data.json();
  const filteredData = {
    posts: parsedData["data"].map((data) => {
      return {
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

export async function getPostsBySlug(slug: string){
    const query = await qs.stringify({
      filters: {
        slug:{
          $eq: slug
        }
      }
    });
    const url = await `${process.env.PUBLIC_URL}/api/posts?${query}`;
    const fetchData = await fetch(url);
    const parsedData = await fetchData.json();
    return parsedData
  }