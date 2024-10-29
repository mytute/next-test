import React from 'react';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  return <h1>Product page product ID is {params.productId}</h1>;
};

export default ProductPage;
