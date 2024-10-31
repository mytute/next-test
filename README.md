#  20 Active Links  


1. from the previous tute make "login", "register" and "forgot-password" routes using loop.    
>src/app/(auth)/layout.tsx   
```tsx 
import Link from "next/link";

const navLinks = [
  {name: "Register", href:"/register"},
  {name: "Login", href:"/login"},
  {name: "Forgot Password", href:"/forgot-password"},
];

interface AuthLayoutProps {
  children: {
    children: React.ReactNode;
  }
}
const AuthLayout:React.FC<AuthLayoutProps> = ({children}) => {
   return (
     <>
       {navLinks.map(({name, href})=>{
         return <Link href={href} key={name}>{name}</Link>
       })}
       {children}
     </>
   ) 
}

export default AuthLayout;
```

2. show how to add "active routes" with styles using "usePathname" react hook.    
note: react hooks only can use nextjs client component only. so we need to convert following component to "client" component by add "use client" on the top of the file.   
>src/app/(auth)/layout.tsx   
```tsx 
"use client"; // add because hooks allow to use in client component only   
import Link from "next/link";
import { usePathname } from "next/navigation"; // to get current route url path 
import "./styles.css" // import styles for that active route 

const navLinks = [
  {name: "Register", href:"/register"},
  {name: "Login", href:"/login"},
  {name: "Forgot Password", href:"/forgot-password"},
];

interface AuthLayoutProps {
  children: {
    children: React.ReactNode;
  }
}
const AuthLayout:React.FC<AuthLayoutProps> = ({children}) => {
  const pathName = usePathname(); // add
   return (
     <>
       {navLinks.map(({name, href})=>{
         const isActive = pathName === href; // add
         return <Link href={href} key={name} className={isActive ? 'active': ''} >{name}</Link> // add
       })}
       {children}
     </>
   ) 
}

export default AuthLayout;
```
>src/app/(auth)/styles.css   
```css 
.active {
  font-weight: bold;
  color: blue;
  text-decoration: underline;
}
```
