# 22 Templates   

Templates are similar to layout in that they wrap each child or page.    

But, with templates, when a user navigates between routes that share a template, a new instance of the component is mounted, DOM emelemts are recreated, state not preserved, and effects are re-synchronized.  

A template can be defined by exporting a default React component from a "template.js" or "template.tsx" file.   

Simlar to layout, template alson should accept a children prop which will render the nested segments in the route.    

1. to auth layout add "input" element and show input value not chaning while user change the route "login" to "register" and "register" to "login".   
>src/app/(auth)/layout.tsx
```tsx 
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

interface AuthLayoutProps {
  children : React.ReactNode
}

const navLinks = [
  {name:"Login", href:"/login"},
  {name:"Register", href:"/register"},
];

const AuthLayout:React.FC<AuthLayoutProps> = ({children}) => {
  const route = usePathname();
  const [name, setName] = useState(""); // add
  return (
    <>
    <div>
      <label>Name:</label> // add 
      <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/> // add
    </div>
    {navLinks.map(link=> {
      const isActive = route.startsWith(link.href);
      return <Link href={link.href} key={link.name} className={isActive ? 'active' : ''}>{link.name}</Link>
    })}
    {children}
    </>
  )
}

export default AuthLayout;
```

2. just change the above file name "src/app/(auth)/layout.tsx" to "src/app/(auth)/template.tsx" and check above behaviour and check input value changing or not.   

In nextjs can have both "layout.tsx" and "template.tsx" file together. And then It render as following order.   
"layout.tsx" > "template.tsx" > "page.tsx"  
