import { useRouter } from 'next/router'
import React from 'react'
const router = useRouter()
const {slug} = router.query
const Slug = () => {
  return (
    <div>
        this is slug : {slug}
    </div>
  )
}

export default Slug