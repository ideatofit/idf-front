export const postInquiry = async (payload:{
    data: {
        name: string
        email: string
        phone: string
        countryCode: number
        message: string
    }
}) => {
    const url = `https://server.ideatofit.com/api/inquiries`
    const data = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    console.log(data)
    console.log(payload)
    const parsedData = await data.json()
    console.log(parsedData)
    if(data.ok){
        alert('done')
    } else alert('error')
}