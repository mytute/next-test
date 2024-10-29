# 13 Route Groups       
 
Allow us to logicallu group our routes and projet files without affecting the URL path structure.    

Let's implement authentication routes.   
 - Register
 - Login
 - Forgut password   

 for better experiancce one wayt to improve this experience is by organizing routes and projet files in to groups based on section or or intent.

we can create "auth" folder in the "app" folder to contain all authentication related routes.   

1. create "auth" folder and inside it create "register", "login", "forgot-password" folders and basic "page.tsx" fine inside each.   

2. now go to broswer and show for each url of auth we need to add "/auth" segment that we dont want.   
```bash 
localhost:3000/auth/register
localhost:3000/auth/login
localhost:3000/auth/forgot-password
```

we can mark a folder as a route group to exlude it from the routes urls path.        

3. to create route group simply wrap folrder's name in parenthesis.(rename)
```bash 
src/app/(auth)/register/page.tsx   
src/app/(auth)/login/page.tsx   
src/app/(auth)/forgot-password/page.tsx   
```
4. now check url in following way.    

```bash 
localhost:3000/register
localhost:3000/login
localhost:3000/forgot-password
```

