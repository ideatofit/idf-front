import qs from "qs";
import { AboutUs } from "@/types/aboutus";

export const getAboutusData = async () =>  {
    const query = qs.stringify({
        populate: "coverImage"
    })
    const url = `https://server.ideatofit.com/api/aboutus?${query}`
    const fetchedData = await fetch(url)
    const parsedData: AboutUs = await fetchedData.json()
    const filteredData = {
        coverimage: parsedData['data']['attributes']['coverImage']['data']['attributes']['url'],
        aboutus: parsedData['data']['attributes']['aboutus'],
        otherContent: parsedData['data']['attributes']['otherContent'] ? parsedData['data']['attributes']['otherContent'] : ''
    }
    return filteredData
}