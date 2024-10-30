import React from "react";

interface ProductDetailsProps {
  params: {
    productId: string;
  }
}

const ProductDetails:React.FC<ProductDetailsProps> = ({params}) => {
  return <h1>Details about product {params.productId}</h1>
}

export default ProductDetails;
