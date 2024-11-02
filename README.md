# 27 Handling Errors in Layouts  

An error.tsx file will handle errors for all its nested child segments.  

In Next.js, error.tsx files catch errors only in components rendered within their segment, so they won’t handle errors thrown directly in the layout.tsx file itself.

### order rendering.
layout>template>errorboundary>suspense>page

1. add throwing error in the "layout.tsx" file and bring "error.tsx" file in the same location and show it will not catch the error.   
>src/app/blog/layout.tsx   
```tsx 
import React from "react";

interface BlogLayoutProps {
  children:React.ReactNode;
}
const BlogLayout:React.FC<BlogLayoutProps> = ({children}) => {

  const random = 1;
  if(random ===1){
    throw new Error("Error loading reviews!"+random);
  }
  return (
    <>
      <div>Blog header</div>
      {children}
    </>
  ) 
}

export default BlogLayout;
```

2. to the catch the error of the "layout.tsx" file brign "error.tsx" file in to "layout.tsx" file parent folder. And show it catch the error of the "layout.tsx" file.   
