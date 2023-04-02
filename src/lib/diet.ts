import qs from "qs";

// response json type !not representing everything from real response json only included necessary things
type Plans = {
  data: {
    attributes: {
      title: string;
      redirectTo: string;
      plans: {
        title: string;
        redirectTo: string
        offerDetails: {
          text: string;
        }[];
      }[];
      moreForTheUsers: {
        id: number;
        title: string;
        link: string
        img: {
          data: {
            attributes: {
              url: string;
            };
          } |  null;
        };
      }[];
      testimonials: {
        id: number;
        name: string;
        text: string;
        img: {
          data: {
            attributes: {
              url: string ;
              height: number
              width: number
            };
          };
        }
      }[];
    };
  };
};

// return this after filtering out
export type PlanProps = {
  title: string;
  plans: {
    title: string;
    redirectTo: string
    offerDetails: {
      text: string;
    }[];
  }[];
  moreForTheUsers:{
    title: string
    img: string
    link: string
  }[]
  testimonials:{
    name: string
    text: string
    img: {
      url: string
      height: number
      width: number
    }
  }[]
};

export default async function getPlans() {
  const query = qs.stringify({
    populate: {
      plans: {
        populate: "*",
      },
      moreForTheUsers: {
        populate: "*",
      },
      testimonials: {
        populate: "*",
      },
    },
  });
  let url = `https://server.ideatofit.com/api/diet?${query}`;
  console.log(query)
  let fetchData = await fetch(url);
  let response: Plans = await fetchData.json();
  console.log(response)
  const filteredData: PlanProps = {
    title: response["data"]["attributes"]["title"],
    plans: response["data"]["attributes"]["plans"].map((data) => {
      return {
        title: data["title"],
        redirectTo: data['redirectTo'],
        offerDetails: data["offerDetails"].map((data) => {
          return data;
        }),
      };
    }),
    moreForTheUsers: response['data']['attributes']['moreForTheUsers'].map((data)=>{
        return {
            title: data['title'],
            img: data?.img?.data?.attributes?.url ?? '',
            link: data?.link ?? ''
        }
    }),
    testimonials: response['data']['attributes']['testimonials'].map((data)=>{
        return{
            name: data['name'],
            text: data['text'],
            img: {
              url: data?.img?.data?.attributes?.url ?? '',
              height: data?.img?.data?.attributes?.height ,
              width: data?.img?.data?.attributes?.width
            },
        }
    })
  };
  return filteredData;
}