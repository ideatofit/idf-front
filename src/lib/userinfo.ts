import qs from "qs";

type GoalData = {
    data:{
        attributes:{
            Goals: string
        }
    }[]
}

export type GoalProps = {
    goals: string[]
}

export async function getGoals(){
    const url = `${process.env.PUBLIC_URL}/api/goals`
    const fetchData = await fetch(url)
    const parsedData: GoalData = await fetchData.json()
    const filteredData = {
        goals: parsedData['data'].map((data)=>{
            return data['attributes']['Goals']
        })
    }
    return filteredData
}

// function formHandler(goals: string, height: number, weight: number, age: number, gender: 'Male' | 'Female'){
    
// }