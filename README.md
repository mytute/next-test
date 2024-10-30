# 15 Nested Layouts   

Layouts are UI components shared between multiple pages in an application.   
Layout can be nested.  

1. inside "productId" folder create a new "layout.tsx" file. And copy-past simple react code.    
>src/app/produts/[productId]/layout.tsx  
```tsx 
import React from 'react';

interface ProductDetailsLayoutProps {
  children:React.ReactNode
}

const ProductDetailsLayout:React.FC<ProductDetailsLayoutProps> = ({children}) => {
    return (
      <>
        {children}
        <h2>Feature production</h2>
      </>
    )

}

export default ProductDetailsLayout;
```

2. next go to following route and check above layout only added to only "productId" page.      
```bash 
http://localhost:3000/products/2
http://localhost:3000
```
