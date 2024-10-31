import React from 'react'

interface ProductDetailsProps {
  params:{
    productId: string;
  }
}

const ProductDetails:React.FC<ProductDetailsProps> = ({params}) => {
  return (
    <div>ProductDetails {params.productId}</div>
  )
}

export default ProductDetails

