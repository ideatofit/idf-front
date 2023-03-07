import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'

function Posts() {
    const router = useRouter()
    const { pid } = router.query
  return (
    <div>{pid}</div>
  )
}

export default Posts

