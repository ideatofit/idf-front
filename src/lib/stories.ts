export async function getStoriesData(){
    const url = `https://server.ideatofit.com/api/stories`
    const storiesData = await fetch(url)
    const parsedStoriesData = await storiesData.json()
    const filteredStoriesData = await {
        stories: parsedStoriesData['data'].map((data: any)=>{
            return {
                text: data['attributes']['text'],
                name: data['attributes']['name']
            }
        })
    }
    return filteredStoriesData
}