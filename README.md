# 3 Project Structure     


> package.json   
contains project dependencies and scripts.    

> next.config.ts    
for next.js configurations.    

> tsconfig.json
for typescript cofigurations.    

> .eslintrc.json   
for eslint configurations.    

> tailwind.config.ts and postcss.config.ts     
for tailwind configurations.    

> package-lock.json    
for cnsistent installation of our packages.     

> .gitignore     
for version control      

> README.md     
few instructions related to running building and deploying the application.    

> next-env.d.ts    
for typescript declaration for next.js    

> .next folder     
folder is generated when we run either the dev or build scripts. next.js application served from this folder. And this folder is added to gitignore.    

> node_modules    
this the folder that our project dependencies are installed.     

> public folder    
all the static assets to be served sucj as images and svgs

> src>app>globals.css    
global css file    

> src>app>layout.tsx      
the UI that can be shared across the diffrent pages in your application.     

> src>app>page.tsx     
unique UI we see on visition localhost:3000 in the browser.     

### flow of the application.      
when we run "npm run dev" it will open "layout.tsx" and root layout component is rendered. when we navigation "localhost:3000" children props always refer to the component defined in "page.tsx" in the "app" folder.     
