"use client";
import React from "react";
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
  return (
    <>
    {navLinks.map(link=> {
      const isActive = route.startsWith(link.href);
      return <Link href={link.href} key={link.name} className={isActive ? 'active' : ''}>{link.name}</Link>
    })}
    {children}
    </>
  )
}

export default AuthLayout;
