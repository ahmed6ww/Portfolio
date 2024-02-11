import React from 'react'

const page = ({params}:any) => {
  return (
    <div>Product {params.productId}</div>
  )
}

export default page