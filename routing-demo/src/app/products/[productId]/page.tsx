import React from "react";

interface ProductionDetailsProps {
  params:{
    productId: string
  }
}
const ProductDetails:React.FC<ProductionDetailsProps> = ({params}) =>{
  return <h1>Product Details Page {params.productId}</h1>
}

export default ProductDetails;
