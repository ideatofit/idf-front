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
    const parsedData = await data.json()
    if(data.ok){
        alert('done')
    } else alert('error')
}