import qs from "qs";

// response json type !not representing everything from real response json only included necessary things
type Plans = {
    data:{
        attributes:{
            title: string
            redirectTo: string
            plans:{
                title: string
                offerDetails:{
                    text: string
                }[]
            }[]
        }
    }
}

// return this after filtering out
export type PlanProps = {
    title: string;
    plans: {
        title: string;
        offerDetails: {
            text: string;
        }[];
    }[];
}

export default async function getPlans(){
    const query = qs.stringify({
        populate: {
            plans:{
                populate: "*"
            }
        }
    })
    let url = `https://server.ideatofit.com/api/diet?${query}`
    let fetchData = await fetch(url)
    let response: Plans = await fetchData.json()
    const filteredData: PlanProps = {
        title: response['data']['attributes']['title'],
        plans: response['data']['attributes']['plans'].map((data)=>{
            return{
                title: data['title'],
                offerDetails: data['offerDetails'].map((data)=>{
                    return data
                })
            }
        })
    }
    return filteredData
}