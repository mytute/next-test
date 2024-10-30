#  17 Routing Metadata.   

Ensuring proper search engine optimization(SEO) is crucial for increasing visibility and attracting users.   

Next.js introduced the Metadata API which allows you to define metadata for each page.   

Metadata ensures accurate and relevent information is displayed when your pages are shared or indexed.   


There are two methods to configure metadata in a "layout.tsx" or "page.tsx" files.  
1. Export a static metadata object.  
2. Export a dynamic generateMetadata function.   

### Metadata rules.   
* Both layout.tsx and page.tsx files can export metadata. If defined in a layout, it applies to all pages in that layout, but if defined in a page, it applies only to that page.   

* Metadata is read in order, from the root level down to the final page level.   

* Whe there's metadata in multiple places for the same rote, they get combined but page metadata will replace layout metadata if they have the same properties.   

### Export a static metadata object.    

1. create "about" folder inside "app" folder and create "page.tsx" file inside it.   
>src/app/about/page.tsx    
```tsx 
import React from 'react';

const About:React.FC = () => {
    return <h1>About me</h1>
}

export default About;
```

2. define the metadata object in above component and set the title.   
>src/app/about/page.tsx    
```tsx 
import React from 'react';

export metadata = {
  title: "About Nextjs" // this title overrite from root layout.tsx  
}

const About:React.FC = () => {
    return <h1>About me</h1>
}

export default About;
```

3. check following route urls and check browser console "title" tag and "meta" tags.    
```bash 
localhost:3000/ # this metadata getting from root layout.tsx   
localhost:3000/about # this metadata getting about/page.tsx and root layout.tsx
```

### Export a dynamic generateMetadata function.   

Dynamic metadata set dynamic information such as the current route parameters external data or metadata in parent segments. To define dynamic metadata we export a generate metadata function that returns a metadata object from a layout or page.tsx file. Like product ID     

4. create "product" dynamic route and add dynamic title metadata. 
>src/app/products/[productId]/page.tsx   
```tsx 
import React from "react";
import { Metadata } from "next";

interface ProductDetailsProps {
  params: {
    productId: string;
  }
}

const generateMetadata = ({params}:ProductDetailsProps):Metadata => {
  return {
    title: `Product ${params.productId}`
  }
}

export { generateMetadata};

const ProductDetails:React.FC<ProductDetailsProps> = ({params}) => {
  return <h1>Details about product {params.productId}</h1>
}

export default ProductDetails;
```

4. convert above "generatedMetadata" function to async.   
>src/app/products/[productId]/page.tsx   
```tsx 
import React from "react";
import { Metadata } from "next";

interface ProductDetailsProps {
  params: {
    productId: string;
  }
}

const generateMetadata = async ({params}:ProductDetailsProps):Promise<Metadata> => {
  const title:string = await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`iPhone ${params.productId}`);
    },3000)
  })
  return {
    title: title  }
}

export { generateMetadata};

const ProductDetails:React.FC<ProductDetailsProps> = ({params}) => {
  return <h1>Details about product {params.productId}</h1>
}

export default ProductDetails;
```


