import qs from "qs";

export async function getPlans(){
    const query = qs.stringify({
        populate: {
            plans:{
                populate: "*"
            }
        }
    })
    let url = `https://server.ideatofit.com/api/diet?${query}`
    let fetchData = await fetch(url)
    let parsedData = await fetchData.json()
    return parsedData
}