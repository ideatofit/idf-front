import qs from 'qs'

export async function getSlideData(){
    let query = await qs.stringify({
        populate: 'img'
    })
    const url = `https://server.ideatofit.com/api/slides?${query}`
    const slideData = await fetch(url)
    const parsedSlideData = await slideData.json()
    const filteredSlideData = await {
        slide: parsedSlideData['data'].map((data: any)=>{
            return {
                img: data['attributes']['img']['data'][0]['attributes']['url'],
                title: data['attributes']['title'],
                description: data['attributes']['description']
            }
        })
    }
    return filteredSlideData
}