import React from 'react'
import { useRouter } from 'next/router'
const Project = () => {
  const router = useRouter()
  const data = router.query.id
  return (
    <div>{data}</div>
  )
}

export default Project