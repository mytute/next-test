# 9 Catch all Segments    


using dynamic nested routes we can implement following routes that we practice in previous tute.    
but if we have same "review" page for product, catalog, selling ect so because of we have file base route we have to create many same "review" pages.    
```bash
localhost:3000/products/1
localhost:3000/products/1/review/1  
```

To reuse same file in diffent route we can use "Catch all Segments". This approach significanly improves the folder scructure.       
```bash
localhost:3000/docs/feature1/concept1
localhost:3000/docs/feature1/concept2
localhost:3000/docs/feature2/concept1
localhost:3000/docs/feature2/concept2
```

1. in the "app" folder create new folder call "docs".   
2. in the "docs" folder create another special folder name "[...slug]".(slug is just a name but naming convention.).  
3. inside "[...slug]" folder create "page.tsx" file.   

> src/app/docs/[...slug]/page.tsx   
```ts
import React from 'react';

const DocsPage: React.FC<> = () => {
  return <h1>Docs home page</h1>;
}

export default DocsPage;
```

show going with follwing links and show now "localhost:3000/docs/*" works with any url that have "docs" keyword.   
```bash
localhost:3000/docs
localhost:3000/docs/test/concept2
localhost:3000/docs/feature2/2/example/test
```

4. show how to get parameters from dynamic route using "Catch all Segments" feature.    
   hare add diffenrent 
> src/app/docs/[...slug]/page.tsx   
```ts
import React from 'react';

interface DocsPageProps {
  params:{
      slug: string[];
  }
}

const DocsPage: React.FC<DocsPageProps> = ({params}) => {
  
  if(params.slug.length === 2){
      return <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>;
  }else if (params.slug.length === 1) {
      return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }else {
      return <h1>Viewing docs home page</h1>;
  }
}

export default DocsPage;
```

5. In above exmaple for "localhost:3000/docs" show 404 screen. for avoid that we can use another square brackets for [...slug] folder.   
src/app/dosc/[[...slug]]/page.tsx  
