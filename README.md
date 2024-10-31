#  19 Link Component Navigation.   

So far we manually entered the URLs in the browser's address bar to navigate to the different routes.  
Users rely on UI elements like links to navigate.   
 * Click on the  
 * Through programmatic navigation after completing an action.   

1. show how to navigating from the homepage to the blogpage on click of UI.   

The "Link" component is a React component that extends the HTML "<a>" element, and it's the primary way to navigation between routes in Next.js   

>src/app/page.tsx
```tsx 
import Link from "next/link" // add

export default function Home () {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/blog">Blog</Link> // add
    </>
  )
}
```

2. show how to navigate dynamic routes.    
>src/app/page.tsx  
```tsx 
import Link from "next/link"

export default function Home () {
  const productId = 100; // by using variable and string interpolation.   
  return (
    <>
      <h1>Home page</h1>
     <Link href="/blog">Blog</Link>
     <h1><Link href="/products/1">Product detail 1</Link></h1>
     <h1><Link href="/products/2">Product detail 2</Link></h1>
     <h1><Link href=`/products/${productId}`>Product detail `${productId}`</Link></h1>
    </>
  )
}
```

3. show how to "replace" prop replaces the current history state instead of adding a new URL to this stag.  

when we put "replace" props on "Link" then by clicking browser back button it will navigate to latest previous route that not have current route.   

```tsx 
import Link from "next/link"

export default function Home () {
  const productId = 100; // by using variable and string interpolation.   
  return (
    <>
      <h1>Home page</h1>
     <Link href="/blog">Blog</Link>
     <h1><Link href="/products/1">Product detail 1</Link></h1>
     <h1><Link href="/products/2">Product detail 2</Link></h1>
     <h1><Link href="/products/3" replace>Product detail 3</Link></h1> // add here 
    </>
  )
}
```
