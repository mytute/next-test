# 7 Dynamic Routes         

create new page call "products" with nested dynamic in following way. 
localhost:3000/products
localhost:3000/products/1
localhost:3000/products/2

1. create a page.tsx file inside "products" folder "products/page.tsx"   
> src/app/products/page.tsx    
```ts
export default function ProductList(){
  return (
    <h1>Product List</h1>
    <h1>Product 1</h1>
    <h1>Product 2</h1>
  )
}
```

2. As for the previous example create nested file for the "products" folder call "1" and add "page.tsx" file.    
> src/app/products/1/page.tsx  
```ts
export default function ProductDetails(){
  return <h1>Details about product</h1>
}
```

In the bigger picture if we had hundreds of products a separate folder for each product is not good solution.   

3. show how to create dynamic routes using folder name with square brackets.   
3.1 rename above folder name "1" to [productId] and inside it create "page.tsx"    
> src/app/products/[productId]/page.tsx  
```ts
export default function ProductDetails(){
  return <h1>Details about product</h1>
}
```
Nextjs teats square brackets in a folder name as a dynamic segment enabling us to create dynamic routes.   

4. show how to display dynamic parameter value on the browser.       
> src/app/products/[productId]/page.tsx  
```ts
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
```

