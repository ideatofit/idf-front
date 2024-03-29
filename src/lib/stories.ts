export type StoriesProps = {
  stories: {
    text: string,
    name: string
  }[]
}

type Data = {
  attributes:{
    text: string,
    name: string
  }
}

export async function getStoriesData() {
  try {
    const url = await `https://server.ideatofit.com/api/stories`;
    const storiesData = await fetch(url);
    const parsedStoriesData = await storiesData.json();
    const filteredStoriesData: StoriesProps = await {
      stories: parsedStoriesData["data"].map((data: Data) => {
        return {
          text: data["attributes"]["text"],
          name: data["attributes"]["name"],
        };
      }),
    };
    return filteredStoriesData;
  } catch(err) {
    console.error("\n\ncan't fetch stories\n\n" + err)
  }
}
