# 8 Nested Dynamic Routes.      

### show how to make following dynamic routes in nested routes.  
```bash
localhost:3000/products/1
localhost:3000/products/1/review/1  
```

1. add the "review" folder inside "[productId]" (src/app/products/[productId]) and inside "review" folder create folder call "[reviewId]" for dynamic route. And create "page.tsx" inside "[reviewId]" folder.    

> src/app/products/[productId]/review/[reviewId]/page.tsx    
```ts
import React from 'react';

interface ReviewPageProps {
  params:{
    productId: string;
    reviewId: string;
  }
}

const ReviewPage: React.FC<ReviewPageProps> = ({params}) => {
  return <h1>Product ID {params.productId} Review ID {params.reviewId}</h1>;
}

export default ReviewPage;
```


