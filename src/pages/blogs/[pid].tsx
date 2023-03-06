import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'

function posts() {
    const router = useRouter()
    const { pid } = router.query
    useEffect(()=>{
        console.log(pid)
    }, [])
  return (
    <div>{pid}</div>
  )
}

export default posts

