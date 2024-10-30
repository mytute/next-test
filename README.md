# 16 Route Group Layout    

Route Group uses: To organize your project in a manner that doesn't affect the URL.   
Route Group Layout: To selectively apply a layout to certain segments while leaving others unchanged.   

1. create group route call "auth".   
```bash 
src/app/(auth)/login/page.tsx
src/app/(auth)/register/page.tsx
src/app/(auth)/forgot-password/page.tsx
```

let's assume we want to add unique layout for only "login" and "register" page.   

2. create "(with-auth-layout)" folder with brackets and put "login/page.tsx" and "register/page.tsx" inside it.    

```bash 
src/app/(with-auth-layout)/(auth)/login/page.tsx
src/app/(with-auth-layout)/(auth)/register/page.tsx
src/app/(auth)/forgot-password/page.tsx
```

3. add "layout.tsx" file in to "(with-auth-layout)" folder.   
>src/app/auth/(with-auth-layout)/layout.tsx   
```tsx 
import React from 'react';

interface AuthLayoutProps {
  children:React.ReactNode
}

const AuthLayout:React.FC<AuthLayoutProps> = ({children}) => {
    return (
      <>
        {children}
        <h2>Feature Auth</h2>
      </>
    )
}

export default AuthLayout;
```

4. now check only "login" and "register" route have additional layout.   
```bash 
src/app/(with-auth-layout)/(auth)/login/page.tsx
src/app/(with-auth-layout)/(auth)/register/page.tsx
src/app/(auth)/forgot-password/page.tsx
```

