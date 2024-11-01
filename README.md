# 23 Loading UI  

This file allows us to create loading states that are dislayed to users while a specific route segment's content is loading.  

The laoding state appears immediatly upon navigation, givin users the assurance that the application is responsive and actively loading content.  

To create loading simply we need to add a loading.tsx file to the designated folder.   

1. create laoding page for blog route and show loading component appears before "blog/page.tsx" loading.   
>src/app/blog/loading.tsx.  
```tsx 
import React from "react";

const Loading:React.FC = () => {
  return <h1>Loading..</h1>
}

export default Loading;
```

### lading.tsx Benifits   
1. you can display the loading state as soon as a user navigates to a new route.  
The immediate feedback reassures users that their action has been acknowledged, reduces perceived loading times. and makes the appliation more responsive.  
2. Next.js allows the creation of shared layouts that remain interactive while new route segments are loading.   
Users can continue interaction with certain parts of the application, such as a navigation menu or sidebar, even if the main content is still being fetched.  
