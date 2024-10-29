# 10 Not Found Page.       

when we enter url route on the browser we see the default 404 page.   

1. To create custom not-found page simply create a file named "not-found.tsx" in the app foleder.    

>src/app/not-found.tsx   
```ts 
import React from "react";
 
const NotFound:React.FC = () => {
  return (
    <>
      <h2>Page not found</h2>
      <p>Cound not find requested resource</p>
    </>
  )
}

export default NotFound;
```

2. not goto following routes and check.   
```bash 
http://localhost:3000/products/1 # working route
http://localhost:3000/products   # show custom 404 page
http://localhost:3000/pro        # show custom 404 page
```

we can add "not-found.tsx" page for some conditions in the route.    

3. for the "product" dynamic route add condition if productId more then 1000 then show the "NotFound" page.   
```ts 
import React from 'react';
import { notFound } from 'next/navigation'; // + add

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  if(parseInt(params.productId)>1000){ // + add
    notFound();
  }
  return <h1>Product page product ID is {params.productId}</h1>;
};

export default ProductPage;
```

3.1 now add "not-found.tsx" page in to "[productId]" location.    
>src/app/products/[productId]/not-found.tsx
```ts  
import React from 'react';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  if(parseInt(params.productId)>1000){
    notFound();
  }
  return <h1>Product page product ID is {params.productId}</h1>;
};

export default ProductPage;
```
3.2 now check following url on the web browser.   
```bash 
http://localhost:3000/products/10
http://localhost:3000/products/10000
```
