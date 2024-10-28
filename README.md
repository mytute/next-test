# 6 Nested Routs         

### create new page call "blog" with nested routes in following way 

1. localhost:3000/blog
2. localhost:3000/blog/first
3. localhost:3000/blog/second


1. create a page.tsx file inside blog folder "src/app/blog/page.tsx".     

```ts
export default function Blog(){
  return <h1>Blog page</h1>
}
```

2. now inside "blog" folder create file page inside "first" folder (src/app/blog/first/page.ts).   
```ts
export default function First(){
  return <h1>Frist page</h1>
}
```

3. do the same thing for "second" page.   
```ts
export default function Second(){
  return <h1>Second page</h1>
}
```

Now enter the above 3 urls on the browser while app is runnig.    
