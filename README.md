# 5 Routing     

Next.js has a file-system based routing machanism.      

URL paths that users can access in the browser are defined by files and folders in your codebase.   

1. delete the "app" folder to learn how to create routes in nextjs.    
```bash 
$ rm -rf src/app
```

2. what are the rules that follow to make route inside nextjs framwork. (automatically add as route)    
  * All routes must be placed inside the app folder.    
  * Every file that corresponds to a route must be named page.js or page.tsx.     
  * Every folder corresponds to a path segment in the browser URL.     

3. show when browser url set to "localhost:3000" and load the "HomdePage"     
  3.1 create new folder call "app" inside the "src" folder.     
  3.2 inside "app" folder create file "page.tsx"  
  > src/app/page.tsx      
  ```tsx 
  export default function Home(){
      return <h1>Welcome home!</h1>
  }
  ```
  3.3 show "layout.tsx" file magically created in the "app" folder.    
  
4. show how to make navigation for "about" and "profile" pages.     
  4.1 creat new folder call "about"(app/about) and inside it create file call "page.tsx".      
  > src/app/about/page.tsx    
  ```tsx 
  export default fuction About(){
      return <h1>About me</h1>
  }
  ```
  4.2 creat new folder call "profile"(app/profile) and inside it create file call "page.tsx".      
  > src/app/profile/page.tsx    
  ```tsx 
  export default fuction Profile(){
      return <h1>My Profile</h1>
  }
  ```
  4.3 go to following urls and show the newly created pages are working      
  ```bash 
  localhost:3000/about
  localhost:3000/profile
  ```

5. show what hapend when user entered router not match and navigate to 404 automatically in nextjs.    



